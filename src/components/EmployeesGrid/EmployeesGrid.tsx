import React, { ReactElement, useState } from 'react';
import { useAppSelector } from '../../modules/hooks';
import { apiService } from '../../modules/services';
import {
  Card,
  CardContent,
  Grid,
  Avatar,
  Typography,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';

const EmployeesGrid = (): ReactElement => {
  const [shouldShowError, setShouldShowError] = useState(true);
  const { selectedJob } = useAppSelector((state) => state.filterReducer);

  const {
    isLoading,
    error,
    data: employees,
  } = apiService.useFetchAllEmployeesQuery('');

  const filteredEmployees =
    employees && selectedJob
      ? employees.filter((employee) => employee.job === selectedJob)
      : employees;

  if (error) {
    return (
      <>
        <i>List is empty..</i>
        <Snackbar
          open={shouldShowError}
          autoHideDuration={6000}
          onClose={() => setShouldShowError(false)}
        >
          <Alert severity='error' sx={{ width: '100%' }}>
            {"Couldn't load the employees data!"}
          </Alert>
        </Snackbar>
      </>
    );
  }

  return isLoading || !filteredEmployees ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem .5rem .5rem .5rem',
      }}
    >
      <CircularProgress color='secondary' />
    </div>
  ) : (
    <Grid
      container
      spacing={{ xs: 1, md: 3 }}
      columns={{ xs: 3, sm: 8, md: 12 }}
    >
      {[...filteredEmployees]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, avatar, name, job }) => (
          <Grid item xs={3} sm={5} md={6} key={id}>
            <Card
              sx={{
                display: 'flex',
                padding: '.25rem 1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar src={avatar} alt={name} />
              </div>
              <CardContent>
                <Typography variant='h5'>{name}</Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                  {job}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export { EmployeesGrid };
