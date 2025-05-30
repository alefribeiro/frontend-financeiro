import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu";

export function NavBar() {
    return (
        <nav className="w-full">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuLink asChild>
                        <Link href="/">Início</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                        <Link href="/Fornecedores">Fornecedores</Link>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    );
}
