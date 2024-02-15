import {Card, CardContent} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';


const featuredListItems = [
    {name: 'Завантажити нотатки 📄'},
    {name: 'Поділитися нотатками 👫'},
    {name: 'Видаляйте нотатки 🗑'},
]

export default function BillingPage() {
    return (
    <div className="max-w-md mx-auto space-y-4">
        <Card className="flex flex-col">
            <CardContent className="py-8">
                <div>
                    <h3 className="inine-flex px-4 py-1 rounded-full text-sm font-semibold trackind-wide uppercase bg-primary/10 text-primary">
                        За місяць
                    </h3>
                </div>
                <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    ₴190<span className="ml-1 text-2xl text-muted-foreground">/місяць</span>
                </div>
            <p className='mt-5 text-lg text-muted-foreground'>
                    Пишіть нотатки, якими ви будете пишатися.
                </p>
            </CardContent>
            <div className='flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-secondary rounded-lg m-1 space-y-6 sm:p-10 sm:pt-6'>
            <ul className='space-y-4'>
                {featuredListItems.map((item, index) => (
                    <li key={index} className='flex items-center'>
                        <div className="flex-shrink-0">
                            <CheckCircle2 className='h-6 w-6 text-blue-500'/>
                        </div>
                    <p className='ml-2 text-base'>{item.name}</p>
                    </li>
                ))}
            </ul>
            <form className='w-full'>
            <Button className='w-full'>Придбати</Button>
            </form>
            </div>
        </Card>
    </div>
    )
}