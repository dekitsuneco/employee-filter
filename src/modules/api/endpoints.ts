interface EndpointData {
  uri: string;
  method: 'GET' | 'POST';
}

interface Endpoints {
  [endpoint: string]: EndpointData;
}

enum EndpointNames {
  JOBS = 'jobs',
  EMPLOYEES = 'employees',
}

const ENDPOINTS: Endpoints = {
  [EndpointNames.JOBS]: {
    uri: '/jobs',
    method: 'GET',
  },
  [EndpointNames.EMPLOYEES]: {
    uri: '/employees',
    method: 'GET',
  },
};

export { ENDPOINTS, EndpointNames };
export type { Endpoints };
