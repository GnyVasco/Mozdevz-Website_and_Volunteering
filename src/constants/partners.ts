import { Team } from "@/types/models/team";
import {
    agencia_nacional,
    ciuem,
    cowl,
    espaco,
    kabum,
    ministerio,
    oxfam,
    psi,
    reino,
    standard_bank,
    vodacom,
    world_bank,
} from "./images";

export const PARTNERS: Omit<Team, "role">[] = [
    {
        id: "Oxfam",
        asset: oxfam,
    },
    {
        id: "Vodacom",
        asset: vodacom,
    },
    {
        id: "Espaço de Inovação",
        asset: espaco,
    },
    {
        id: "The World Bank",
        asset: world_bank,
    },
    {
        id: "Kabum",
        asset: kabum,
    },
    {
        id: "Ministerio da Ciência e Tecnologia",
        asset: ministerio,
    },
    {
        id: "Agência Nacional de Desenvolvimento Geo-Espacial",
        asset: agencia_nacional,
    },
    {
        id: "Reino dos Países Baixos",
        asset: reino,
    },
    {
        id: "CIUEM",
        asset: ciuem,
    },
    {
        id: "COWL",
        asset: cowl,
    },
    {
        id: "Standard Bank",
        asset: standard_bank,
    },
    {
        id: "PSI",
        asset: psi,
    },
];
