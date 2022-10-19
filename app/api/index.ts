import {QueryClient, useQuery} from 'react-query';

export const queryClient = new QueryClient();

export const useReactQueryGlobalState = (
  key: 'LoggedIn',
  initialData: any,
  options?: object,
) => [
  useQuery([key], () => initialData, {
    enabled: false,
    cacheTime: Infinity,
    staleTime: Infinity,
    initialData,
    ...options,
  }).data,
  value => queryClient.setQueryData(key, value),
];
// export const useRQGlobalState = (key, initialData, options) => [
//   useQuery([key], () => initialData, {
//     enabled: false,
//     cacheTime: Infinity,
//     staleTime: Infinity,
//     initialData,
//     ...options,
//   }).data,
//   value => queryClient.setQueryData(key, value),
// ];
