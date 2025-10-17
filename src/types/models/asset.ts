/*eslint-disable */

/**
 * Representa um tipo de ativo versátil que pode ser usado em toda a aplicação.
 */
export type Asset = {
    /** Identificador único para o ativo */
    id: string;
    /** Nome do ativo */
    name: string;
    /** Tipo do ativo (ex: imagem, vídeo, documento) */
    type: "image" | "video" | "document" | "audio" | "other";
    /** URL ou caminho para o ativo */
    url: string;
    /** Tamanho do ativo em bytes */
    size?: number;
    /** Tipo MIME do ativo */
    mimeType: string;
    /** Descrição alternativa do ativo */
    alt: string;
    metadata?: {
        /** Largura do ativo (para imagens e vídeos) */
        width?: number;
        /** Altura do ativo (para imagens e vídeos) */
        height?: number;
        /** Duração do ativo (para vídeos e áudio) */
        duration?: number;
        /** Propriedades personalizadas adicionais */
        [key: string]: any;
    };
    /** Tags opcionais para categorizar o ativo */
    tags?: string[];
};
