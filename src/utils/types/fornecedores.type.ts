export interface Estado {
    nome: string;
    uf: string;
}

export interface Cidade {
    nome: string;
    estado: Estado;
}

export interface Telefone {
    id: number;
    telefone: string;
}

export interface Fornecedor {
    id: number;
    nome: string;
    cnpj: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    email: string;
    criado_em: string; // ISO date string
    atualizado_em: string; // ISO date string
    cidade: Cidade;
    telefones: Telefone[];
}
