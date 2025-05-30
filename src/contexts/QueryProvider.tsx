"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const configQueryClient = {
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
        },
    },
};

const queryClient = new QueryClient(configQueryClient);

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};

export default QueryProvider;
