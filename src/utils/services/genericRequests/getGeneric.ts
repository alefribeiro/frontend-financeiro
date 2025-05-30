import { api } from "../clientHTTP";
interface Props {
    url: string;
    id?: string;
    otherParams?: { [key: string]: string | number | boolean | undefined };
}
export async function getGeneric<T>({
    url,
    id,
    otherParams,
}: Props): Promise<T> {
    const response = await api.get<T>(`${url}${id ? `${id}/` : ""}`, {
        params: {
            ...otherParams,
        },
    });
    return response.data;
}
