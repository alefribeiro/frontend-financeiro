import { getGeneric } from "@/utils/services/genericRequests/getGeneric";
import { useQuery } from "@tanstack/react-query";

export interface UseGetGenericResponse<T = any>
    extends Omit<ReturnType<typeof useQuery>, "data"> {
    data: T | undefined;
}

export interface UseGetGenericProps {
    id?: string;
    url: string;
    otherParams?: { [key: string]: string | number | boolean };
    refetchOnMount?: boolean;
    enabled?: boolean;
    otherQueryKey?: string[];
}

export function useGetGeneric<T = any>({
    id,
    url,
    otherParams,
    enabled = true,
    refetchOnMount = true,
    otherQueryKey = [],
}: UseGetGenericProps): UseGetGenericResponse<T> {
    return useQuery<T>({
        queryKey: [url, id, otherParams, ...otherQueryKey],
        refetchOnMount: refetchOnMount,
        queryFn: async () => {
            const response = await getGeneric<T>({ url, id, otherParams });
            return response;
        },
        enabled: enabled,
    });
}
