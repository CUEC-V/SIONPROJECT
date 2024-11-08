import { ReseauSocialModel } from "../../features/reseau-social/models/reseau-social-model";
import { AccueilModel } from "./accueil-model";
import { MenuThematiqueModel } from "./menu-thematique-model";
import { ReseauSocial } from "./reseau-social";

export interface Accueil {
    accueil: AccueilModel;
    menuThematique: MenuThematiqueModel[];
    reseauxSociaux: ReseauSocialModel[];
}
