

'use client';
import { menuList } from "@/lib/menu-list";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function NavbarComponent() {
    const pathName = usePathname();
    return (
        <nav>
            {
                menuList.map((p)=>(
                
                    <Link key={p.name} href={p.url} style={
                        p.url === pathName ? { color: "red" } : {color: "white"}
                    }>{p.name}</Link>
                ))
                }
        </nav>
    );
}