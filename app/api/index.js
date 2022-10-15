import {QueryClient, useQuery} from 'react-query';

export const queryClient = new QueryClient();

export const useReactQueryGlobalState = (key, initialData, options = {}) => [
  useQuery([key], () => initialData, {
    enabled: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    initialData,
    ...options,
  }),
  value => queryClient.setQueryData(key, value),
];
