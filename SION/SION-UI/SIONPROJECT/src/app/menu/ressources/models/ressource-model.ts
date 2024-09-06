export interface Ressource {
    id: number;

    titre: string;

    sousTitre: string;

    auteur: string;

    url: string;

    description: string;

    creation?: Date;

    dateModification?: Date;

    typeRessource: string;
}