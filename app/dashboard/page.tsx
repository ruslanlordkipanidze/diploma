import { Button } from "@/components/ui/button";
import Link  from "next/link";
import prisma from "../lib/db";
import { File } from 'lucide-react';

async function getData() {
    const data = await prisma.note.findMany({
        where: {
           
        },
        orderBy: {
            
        }
    })
}

export default async function DashboardPage() {
    const data = await getData()
    return (
       <div className="grid items-start gap-y-8">
        <div className="flex items-center justify-between px-2">
            <div className="grid gap-1">
            <h1 className="text-3xl md:text-4xl font-bold">Ваші нотатки</h1>
                <p className="text-lg text-muted-foreground">Тут ви можете побачити та створити нотатки</p>
            </div>
            <Button asChild>
                <Link href="/dashboard/new">Створити нотатку</Link>
            </Button>
        </div>
        
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border-dashed text-center animate-in fade-in-50">
            
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                <File className="w-10 h-10 text-primary" />
            </div>
            <h1 className="mt-6 text-xl font-semibold">Немає нотаток</h1>
        </div>
       </div>
    )
}