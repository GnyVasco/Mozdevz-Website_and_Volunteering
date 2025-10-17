import { LucideIcon } from "lucide-react";

/**
 * Interface para representar um link genérico.
 * Permite links internos e externos com diferentes tipos de ações.
 */
export interface Link {
    /** URL ou caminho do link */
    href: string;
    /** Texto a ser exibido para o link */
    label: string;
    /** Indica se o link deve abrir em uma nova aba */
    openInNewTab?: boolean;
    /** Classes CSS adicionais para estilização */
    className?: string;
    /** Atributos de acessibilidade */
    ariaLabel?: string;
    /** Função de callback opcional ao clicar no link */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    /** Ícone opcional para exibir junto ao link */
    icon?: LucideIcon;
    /** Indicador se o link está ativo/selecionado */
    isActive?: boolean;
    /** Dados adicionais que podem ser necessários para lógica de aplicação */
    metadata?: Record<string, unknown>;
}

/**
 * Tipo para links internos da aplicação, estendendo a interface base
 */
export type InternalLink = Link & {
    /** Indica que é um link interno */
    type: "internal";
    /** Parâmetros opcionais de rota */
    params?: Record<string, string | number>;
};

/**
 * Tipo para links externos, estendendo a interface base
 */
export type ExternalLink = Link & {
    /** Indica que é um link externo */
    type: "external";
    /** Política de referência para segurança */
    rel?: "noopener noreferrer" | "nofollow" | string;
};

/**
 * União dos tipos de links disponíveis
 */
export type NavigationLink = InternalLink | ExternalLink;

/**
 * Tipo para uma coleção de links, possivelmente agrupados
 */
export type LinkCollection = {
    /** Links principais */
    items: NavigationLink[];
    /** Links agrupados por categoria */
    groups?: {
        /** Nome do grupo de links */
        title: string;
        /** Links do grupo */
        items: NavigationLink[];
    }[];
};
