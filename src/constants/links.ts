import { Link } from "@/types";
import {
    ArrowUpRight,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
} from "lucide-react";
export const HEADER_LINKS: Link[] = [
    {
        label: "Sobre",
        href: "/about",
    },
    {
        label: "Eventos",
        href: "/events",
    },
    {
        label: "Comunidade",
        href: "/community",
    },
    {
        label: "Blog",
        href: "/blog",
    },
    {
        label: "Treinamentos",
        href: "/training",
        icon: ArrowUpRight,
    },
];

export const SOCIALS: Link[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/mozdevz",
        icon: Facebook,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/mozdevz",
        icon: Instagram,
    },
    {
        label: "Twitter",
        href: "https://www.twitter.com/mozdevz",
        icon: Twitter,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/mozdevz",
        icon: Linkedin,
    },
];
