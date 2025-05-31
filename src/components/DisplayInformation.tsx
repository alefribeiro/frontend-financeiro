interface DisplayInformationProps {
    label: string;
    value: string | number;
}

export function DisplayInformation({ label, value }: DisplayInformationProps) {
    return (
        <p className="text-zinc-600">
            <span className="font-semibold">{label} </span>
            {value ? value : "Sem informação"}
        </p>
    );
}
