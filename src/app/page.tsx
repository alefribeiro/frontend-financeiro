"use client";
import { Button } from "@/components/ui/button";

export default function Home() {
    function handleClick() {
        console.log("Você clicou no botão!");
    }
    return (
        <div className="">
            <Button onClick={handleClick}>Me clique.</Button>
        </div>
    );
}
