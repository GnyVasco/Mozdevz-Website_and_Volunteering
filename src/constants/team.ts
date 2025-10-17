import { Team } from "@/types/models/team";
import {
    dario,
    malagy,
    melanie,
    valquiria,
    walter,
    edicelio,
    fenilde,
} from "./images";

export const TEAM: Team[] = [
    {
        id: "valquiria",
        role: "PRESIDENTE",
        asset: valquiria,
    },
    {
        id: "melanie",
        role: "VICE-PRESIDENTE",
        asset: melanie,
    },
    {
        id: "walter",
        role: "GESTOR DE COMUNIDADES",
        asset: walter,
    },
    {
        id: "dario",
        role: "GESTOR DE MARKETING E BRAND",
        asset: dario,
    },
    {
        id: "malagy",
        role: "IT/DEVELOPER",
        asset: malagy,
    },
    {
        id: "edicelio",
        role: "DESIGNER",
        asset: edicelio,
    },
    {
        id: "fenilde",
        role: "GESTORA DE COMUNICAÇÃO",
        asset: fenilde,
    },
];
