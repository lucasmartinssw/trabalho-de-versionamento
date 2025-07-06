// src/app/page.tsx

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// Lista de rotas para facilitar a manutenção
const routes = [
  { href: "/produtos", label: "Produtos" },
  { href: "/eventos", label: "Eventos" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contato", label: "Contato" },
  { href: "/sobre-nos", label: "Sobre Nós" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-muted/40 p-4">
      <div className="hidden md:block">
        <Card className="w-[450px] shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Menu Principal</CardTitle>
            <CardDescription>
              Navegue pelas seções do nosso site.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {routes.map((route) => (
                <Link key={route.href} href={route.href} passHref>
                  <Button variant="outline" className="w-full justify-start py-6 text-base">
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Responsividade */}
      <div className="block md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg">
              <Menu className="mr-2 h-5 w-5" />
              Navegar pelo Site
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[75%] rounded-t-2xl">
            <SheetHeader className="text-left">
              <SheetTitle className="text-xl">Menu Principal</SheetTitle>
            </SheetHeader>
            <div className="mt-6 grid gap-4">
              {routes.map((route) => (
                <Link key={route.href} href={route.href} passHref>
                  <Button variant="secondary" className="w-full justify-start py-7 text-lg">
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </main>
  );
}