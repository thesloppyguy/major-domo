import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export type NavItems = {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive: boolean;
    items: any[];
}

export type ContainerProps = {
    className?: string
    children?: ReactNode
}