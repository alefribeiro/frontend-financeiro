import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardAction,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Fornecedor } from "@/utils/types/fornecedores.type";
import { Pencil, Trash } from "lucide-react";

const dataFornecedores: Fornecedor[] = [
    {
        id: 19,
        nome: "Gás/Água",
        cnpj: "06347409006953",
        logradouro: "ESTM MARTINHO GONCALVES DE SOUZA",
        numero: "346",
        complemento: "GALPAO01 SALA 07",
        bairro: "PIRES",
        cep: "37.642-582",
        email: "agua@mineral.com.br",
        criado_em: "2025-05-29T23:26:42.578890Z",
        atualizado_em: "2025-05-30T00:48:37.146724Z",
        cidade: {
            nome: "Maceió",
            estado: {
                nome: "Alagoas",
                uf: "AL",
            },
        },
        telefones: [
            { id: 62, telefone: "9988-77668999" },
            { id: 67, telefone: "82981302572" },
            { id: 68, telefone: "82981302572" },
        ],
    },
    {
        id: 20,
        nome: "Supermercado Silva",
        cnpj: "11222333000144",
        logradouro: "RUA DAS FLORES",
        numero: "120",
        complemento: "LOJA 01",
        bairro: "CENTRO",
        cep: "60.010-123",
        email: "compras@supermercadosilva.com",
        criado_em: "2025-04-21T09:15:00.000Z",
        atualizado_em: "2025-05-01T18:00:00.000Z",
        cidade: {
            nome: "Fortaleza",
            estado: {
                nome: "Ceará",
                uf: "CE",
            },
        },
        telefones: [
            { id: 101, telefone: "85991234567" },
            { id: 102, telefone: "85999887766" },
        ],
    },
    {
        id: 21,
        nome: "Constrular Materiais",
        cnpj: "33445566000199",
        logradouro: "AV. CONSTRUÇÃO",
        numero: "785",
        complemento: "DEPÓSITO",
        bairro: "INDUSTRIAL",
        cep: "31.112-000",
        email: "vendas@constrular.com.br",
        criado_em: "2025-03-11T10:00:00.000Z",
        atualizado_em: "2025-03-12T10:30:00.000Z",
        cidade: {
            nome: "Belo Horizonte",
            estado: {
                nome: "Minas Gerais",
                uf: "MG",
            },
        },
        telefones: [{ id: 201, telefone: "31991122334" }],
    },
    {
        id: 22,
        nome: "Tecno Print",
        cnpj: "99887766000133",
        logradouro: "RUA DA IMPRESSÃO",
        numero: "55",
        complemento: "SALA 3",
        bairro: "GRÁFICA",
        cep: "05.345-678",
        email: "contato@tecnoprint.com",
        criado_em: "2025-02-10T08:45:00.000Z",
        atualizado_em: "2025-02-10T08:45:00.000Z",
        cidade: {
            nome: "São Paulo",
            estado: {
                nome: "São Paulo",
                uf: "SP",
            },
        },
        telefones: [
            { id: 301, telefone: "11995544332" },
            { id: 302, telefone: "11991110000" },
        ],
    },
    {
        id: 23,
        nome: "Auto Peças Brasil",
        cnpj: "44556677000111",
        logradouro: "AV. DOS AUTOMÓVEIS",
        numero: "999",
        complemento: "",
        bairro: "AUTO SHOPPING",
        cep: "70.010-000",
        email: "pecas@autobrasil.com",
        criado_em: "2025-01-05T14:22:00.000Z",
        atualizado_em: "2025-04-18T10:00:00.000Z",
        cidade: {
            nome: "Brasília",
            estado: {
                nome: "Distrito Federal",
                uf: "DF",
            },
        },
        telefones: [{ id: 401, telefone: "61988887777" }],
    },
    {
        id: 24,
        nome: "Distribuidora do Norte",
        cnpj: "55667788000122",
        logradouro: "ROD. BR-101",
        numero: "KM 45",
        complemento: "GALPÃO 2",
        bairro: "DISTRITO INDUSTRIAL",
        cep: "68.900-000",
        email: "logistica@dnorte.com",
        criado_em: "2025-05-01T12:00:00.000Z",
        atualizado_em: "2025-05-20T09:30:00.000Z",
        cidade: {
            nome: "Belém",
            estado: {
                nome: "Pará",
                uf: "PA",
            },
        },
        telefones: [
            { id: 501, telefone: "91991112233" },
            { id: 502, telefone: "91998887766" },
        ],
    },
];

export default function Page() {
    return (
        <Container className="grid grid-cols-3 gap-2">
            <>
                {dataFornecedores.map((fornecedor) => (
                    <Card
                        key={fornecedor.id}
                        className="cursor-pointer hover:inset-shadow-lg hover:bg-zinc-50 transition-shadow"
                    >
                        <CardHeader className="flex items-center justify-between">
                            <CardTitle>{fornecedor.nome}</CardTitle>
                            <CardAction className="space-x-2">
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button variant="ghost" size="icon">
                                            <Pencil
                                                className="size-4 text-teal-400"
                                                strokeWidth={2}
                                            />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Editar fornecedor
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Button variant="ghost" size="icon">
                                            <Trash
                                                className="size-4 text-rose-400"
                                                strokeWidth={2}
                                            />
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        Excluir fornecedor
                                    </TooltipContent>
                                </Tooltip>
                            </CardAction>
                        </CardHeader>
                        <CardContent>
                            <p>
                                <span className="font-semibold">CNPJ: </span>
                                {fornecedor.cnpj}
                            </p>
                            <>
                                {fornecedor.telefones.length === 1 ? (
                                    <p>
                                        <span className="font-semibold">
                                            Telefone:
                                        </span>{" "}
                                        {fornecedor.telefones[0].telefone}
                                    </p>
                                ) : (
                                    <div>
                                        <p>
                                            <span className="font-semibold">
                                                Telefone:
                                            </span>{" "}
                                            {fornecedor.telefones[0].telefone}
                                        </p>
                                        <p className="text-xs text-zinc-400">
                                            Mais{" "}
                                            {fornecedor.telefones.length - 1}{" "}
                                        </p>
                                    </div>
                                )}
                            </>
                        </CardContent>
                        <CardFooter className="flex-col items-start text-xs text-zinc-400">
                            <p>
                                <span className="font-bold">Criado em: </span>
                                {fornecedor.criado_em}
                            </p>
                            <p>
                                <span className="font-bold">
                                    Última atualização:{" "}
                                </span>
                                {fornecedor.atualizado_em}
                            </p>
                        </CardFooter>
                    </Card>
                ))}
            </>
        </Container>
    );
}
