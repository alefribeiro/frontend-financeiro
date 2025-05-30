import { useGetGeneric } from "@/hooks/queries/useGet";
import { Fornecedor } from "@/utils/types/fornecedores.type";
import { urlFornecedor } from "@/utils/urls";

export function useFornecedor() {
    const getFonecedor = useGetGeneric<Fornecedor[]>({ url: urlFornecedor });

    return {
        getFonecedor,
    };
}
