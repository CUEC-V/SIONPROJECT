export interface AccueilModel {
    id: number;

    nomEglise: string;

    texteIntroductif: string;

    imageAngeDuSeigneur: string;

    imageNueeSunSet: string;

    imageOffmann: string;

    texteApocalypseDixSept: string;

    texteBienvenu: string;

    imagePasteur: string;

    texteHaut: string;

    video: string;

    textBas: string;

    //region : Image de l'aigle 

    image: string;

    texteProphete: string;

    // Adresse 

    numeroLibelleAdresse: string;

    codePostaleVillePays: string;

    numeroTelephone: string;

    // Horaires ouverture 
    premierJourCulte: string;

    deuxiemeJourCulte: string;

    troisiemeJourCulte: string;

    autreJoureCulte: string;

    imageChandelier: string;

    ordreEglise1: string;

    ordreEglise2: string;

    ordreEglise3: string;

    ordreEgliseTitre: string;

    ordreEgliseSousTitre: string;

    ressourceTitre: string;

    ressourceSousTitre: string;

    emblemeMemorialTitre: string;

    emblemeMemorialSousTitre: string;

    crucifixTexte: string;
}
