"use client";
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
import { Pencil, Plus, Trash } from "lucide-react";
import { useFornecedor } from "./useFornecedor";
import { ViewModal } from "./components/ViewModal";

export default function Page() {
    const { getFonecedor } = useFornecedor();
    const { data: dataFornecedores } = getFonecedor;

    return (
        <Container className="space-y-8">
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h1 className="font-semibold text-2xl  text-center">
                        Fornecedores
                    </h1>
                    <Button variant="outline">
                        <Plus />
                        Fornecedor
                    </Button>
                </div>
                <hr className="w-full bg-zinc-200 h-0.5" />
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-2">
                {dataFornecedores?.map((fornecedor) => (
                    <ViewModal key={fornecedor.id} forneceder={fornecedor}>
                        <Card className="cursor-pointer hover:inset-shadow-lg hover:bg-zinc-50 transition-shadow">
                            <CardHeader className="flex items-center justify-between">
                                <CardTitle>{fornecedor.nome}</CardTitle>
                                <CardAction className="space-x-2">
                                    <Tooltip>
                                        <TooltipTrigger asChild>
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
                                        <TooltipTrigger asChild>
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
                                    <span className="font-semibold">
                                        CNPJ:{" "}
                                    </span>
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
                                                {
                                                    fornecedor.telefones[0]
                                                        .telefone
                                                }
                                            </p>
                                            <p className="text-xs text-zinc-400">
                                                Mais{" "}
                                                {fornecedor.telefones.length -
                                                    1}{" "}
                                            </p>
                                        </div>
                                    )}
                                </>
                            </CardContent>
                            <CardFooter className="flex-col items-start text-xs text-zinc-400">
                                <p>
                                    <span className="font-bold">
                                        Criado em:{" "}
                                    </span>
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
                    </ViewModal>
                ))}
            </div>
        </Container>
    );
}
