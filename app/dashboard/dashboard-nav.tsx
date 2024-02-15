'use client';

import {Home, Settings, CreditCard} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
export const navItems = [
    {name: 'Головна', href: '/dashboard', icon: Home},
    {name: 'Налаштування', href: '/dashboard/settings', icon: Settings},
    {name: 'Білінг (у розробці)', href: '/dashboard/billing', icon: CreditCard}
]

export function DashboardNavigation() {
    const pathname = usePathname()
    return (
        <div className="grid items-start gap-2">
            {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
                <span className={cn(
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium hover:bg-accent', pathname === item.href ? 'bg-accent' : 'bg-transparent',

                )}>
                    <item.icon className="h-6 w-6" />
                    <span className="ml-2">{item.name}</span>
                </span>
            </Link>
            ))}
        </div>
    );
}