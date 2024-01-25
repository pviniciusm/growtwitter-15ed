import { Tweet } from "../models/tweet.model";
import { users } from "./users.data";

export const tweets: Tweet[] = [
    {
        content: "Olá! Vamos passear hoje?",
        type: "N",
        id: "1234",
        user: users[0],
    },
    {
        content: "Prefiro ser temido ou amado? Fácil. Ambos. Quero que as pessoas tenham medo do quanto me amam ;)",
        type: "N",
        id: "9999",
        user: users[0],
    },
    {
        content: "Esta é uma demonstração da aplicação inspiradora do Bloco Intermediário - Programa Starter :)",
        type: "N",
        id: "8888",
        user: users[1],
    },
    {
        content: "Prefiro ser temido ou amado? Fácil. Ambos. Quero que as pessoas tenham medo do quanto me amam ;)",
        type: "N",
        id: "9999",
        user: users[0],
    },
    {
        content: "Esta é uma demonstração da aplicação inspiradora do Bloco Intermediário - Programa Starter :)",
        type: "N",
        id: "8888",
        user: users[1],
    },
];
