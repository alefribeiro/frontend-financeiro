import { cn } from "@/lib/utils";
import { ComponentProps, ReactNode } from "react";

interface ContairnerProps extends ComponentProps<"div"> {
    children: ReactNode;
}

export function Container({ children, className }: ContairnerProps) {
    return (
        <div className={cn("shadow-default rounded-xs py-4 px-5", className)}>
            {children}
        </div>
    );
}
