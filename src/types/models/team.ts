import { Asset } from "./asset";

/**
 * Representa um membro da equipe com suas informações
 */
export type Team = {
    /** Identificador único do membro da equipe */
    id: string;

    /**
     * Cargo ou função do membro na equipe
     * Pode ser um dos valores predefinidos
     */
    role: TeamRole;

    /** Recursos visuais associados ao membro da equipe, como foto, avatar, etc. */
    asset: Asset;
};

/**
 * Tipos de cargos disponíveis para membros da equipe
 */
export type TeamRole =
    | "PRESIDENTE"
    | "VICE-PRESIDENTE"
    | "IT/DEVELOPER"
    | "GESTOR DE MARKETING E BRAND"
    | "GESTOR DE COMUNIDADES"
    | "GESTORA DE COMUNICAÇÃO"
    | "DESIGNER";
