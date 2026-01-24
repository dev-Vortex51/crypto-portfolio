import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      retry: 3,
      placeholderData: (previousData: unknown) => previousData,
    },
  },
});
