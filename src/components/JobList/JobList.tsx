import React, { ReactElement, useState } from 'react';
import EngineeringIcon from '@mui/icons-material/Engineering';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import { Alert, Snackbar } from '@mui/material';
import { useAppDispatch } from '../../modules/hooks';
import { apiService } from '../../modules/services';
import { filterSlice } from '../../store/reducers/FilterSlice';

const JobList = (): ReactElement => {
  const [shouldShowError, setShouldShowError] = useState(true);

  const dispatch = useAppDispatch();
  const { selectJob } = filterSlice.actions;

  const { isLoading, error, data: jobs } = apiService.useFetchAllJobsQuery('');

  const handleClick = (title: string) => {
    dispatch(selectJob(title));
  };

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
            {"Couldn't load the jobs data!"}
          </Alert>
        </Snackbar>
      </>
    );
  }

  return isLoading || !jobs ? (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem .5rem .5rem .5rem',
      }}
    >
      <CircularProgress />
    </div>
  ) : (
    <List>
      {jobs
        .filter((job) => (job?.id ?? false) && (job?.title ?? false))
        .sort((a, b) => a.title.localeCompare(b.title))
        .map(({ id, title }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton onClick={() => handleClick(title)}>
              <ListItemIcon>
                <EngineeringIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
  );
};

export { JobList };
