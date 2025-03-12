import { LucideIcon } from "lucide-react";
import { MotionValue } from "framer-motion";

export type NavItems ={
    title: string;
    url: string;
    icon: LucideIcon;
    isActive: boolean;
    items: any[];
} 

export type PageProps = {
    scrollYProgress: MotionValue<number>
}