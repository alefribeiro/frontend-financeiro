import { Container } from "@/components/Container";
import { DisplayInformation } from "@/components/DisplayInformation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Fornecedor } from "@/utils/types/fornecedores.type";
import { ReactNode } from "react";

interface ViewModalProps {
    children?: ReactNode;
    forneceder: Fornecedor;
}

export function ViewModal({ children, forneceder }: ViewModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{forneceder.nome}</DialogTitle>
                </DialogHeader>
                <Container className="flex flex-wrap justify-between gap-4 text-justify">
                    <DisplayInformation label="CNPJ:" value={forneceder.cnpj} />
                    <DisplayInformation
                        label="Email:"
                        value={forneceder.email}
                    />

                    <DisplayInformation
                        label="Logradouro:"
                        value={forneceder.logradouro}
                    />
                    <DisplayInformation
                        label="Bairro:"
                        value={forneceder.bairro}
                    />
                    <DisplayInformation
                        label="Número:"
                        value={forneceder.numero}
                    />

                    <DisplayInformation
                        label="Complemento:"
                        value={forneceder.complemento}
                    />
                    <DisplayInformation label="CEP:" value={forneceder.cep} />
                    <DisplayInformation
                        label="Cidade:"
                        value={
                            forneceder.cidade.nome +
                            " - " +
                            forneceder.cidade.estado.uf
                        }
                    />
                    {forneceder.telefones.map((telefone) => (
                        <DisplayInformation
                            key={telefone.id}
                            label="Telefone:"
                            value={telefone.telefone}
                        />
                    ))}
                </Container>
            </DialogContent>
        </Dialog>
    );
}
