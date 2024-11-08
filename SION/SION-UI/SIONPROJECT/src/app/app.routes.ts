import { CeremoniesEvenementComponent } from './menu/ressources/ceremonies-evenement/ceremonies-evenement.component';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuiSommesNousComponent } from './menu/a-propos/qui-sommes-nous/qui-sommes-nous.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BiographieDuPasteurComponent } from './menu/a-propos/biographie-du-pasteur/biographie-du-pasteur.component';
import { LesOfficesComponent } from './menu/a-propos/les-offices/les-offices.component';
import { PredicationsComponent } from './menu/predications/predications.component';
import { NousRejoindreComponent } from './menu/services/nous-rejoindre/nous-rejoindre.component';
import { NousContacterComponent } from './menu/services/nous-contacter/nous-contacter.component';
import { RessourcesComponent } from './menu/ressources/ressources.component';
import { IntrouvableComponent } from './introuvable/introuvable.component';
import { AdminComponent } from './accueil/admin/admin.component';
import { VoirToutesLesPagesComponent } from './menu/ressources/pages/voir-toutes-les-pages/voir-toutes-les-pages.component';
import { AnnoncesComponent } from './menu/ressources/annonces/annonces.component';
import { TemoignagesComponent } from './menu/ressources/temoignages/temoignages.component';
import { CantiquesChantsComponent } from './menu/ressources/cantiques-chants/cantiques-chants.component';
import { MentionsLegalesComponent } from './footer/mentions-legales/mentions-legales.component';
import { TousDroitsReservesComponent } from './footer/tous-droits-reserves/tous-droits-reserves.component';
import { AdminGeneralComponent } from './admin-general/admin-general.component';
import { AdminReseauSocialComponent } from './features/reseau-social/admin-reseau-social/admin-reseau-social.component';
import { ReseauSocialComponent } from './features/reseau-social/reseau-social.component';
import { MajComponent } from './features/reseau-social/maj/maj.component';
import { AnnoncesDetailComponent } from './menu/ressources/pages/annonces-detail/annonces-detail.component';
import { MessageListComponent } from './menu/services/nous-contacter/contact/message-list/message-list.component';
import { MessageDetailComponent } from './menu/services/nous-contacter/contact/message-detail/message-detail.component';
import { AjouterRessourceComponent } from './menu/ressources/ajouter-ressource/ajouter-ressource.component';
import { GestionComponent } from './menu/ressources/gestion/gestion.component';
import { RessourceEditionComponent } from './menu/ressources/gestion/ressource-edition/ressource-edition.component';

export const routes: Routes = [
  {
    path: '',
    component: AccueilComponent
  },
  {
    path: 'Qui-sommes-nous',
    component: QuiSommesNousComponent
  },
  {
    path: 'Biographie-du-pasteur',
    component: BiographieDuPasteurComponent
  }
  ,
  {
    path: 'administration-page-accueil',
    component: AdminComponent
  },
  {
    path: 'administration-general',
    component: AdminGeneralComponent
  },
  {
    path: 'Les-offices',
    component: LesOfficesComponent
  },
  {
    path: 'Predications',
    component: PredicationsComponent
  },
  {
    path: 'Nous-rejoindre',
    component: NousRejoindreComponent
  },
  {
    path: 'Nous-contacter',
    component: NousContacterComponent
  },
  {
    path: 'Ressources',
    component: RessourcesComponent
  },

  {
    path: 'ressources/voir-toutes-les-pages',
    component: VoirToutesLesPagesComponent

  },

  {
    path: 'ressources/annonces',
    component: AnnoncesComponent

  },
  {
    path: 'ressources/annonces-detail',
    component: AnnoncesDetailComponent

  },

  {
    path: 'ressources/temoignages',
    component: TemoignagesComponent
  },
  {
    path: 'ressources/gestion',
    component: GestionComponent
  },
  {
    path: 'ressources/:id/edition/ajouter-fichier/:id',
    component: RessourceEditionComponent
  },
  
  {
    path: 'ressources/cantiques-chants',
    component: CantiquesChantsComponent
  },

  {
    path: 'ressources/ceremonies-evenement',
    component: CeremoniesEvenementComponent
  },
  {
    path: 'ressources/ressource-ajout',
    component: AjouterRessourceComponent
  },
  {
    path: 'mentions-legales',
    component: MentionsLegalesComponent
  },
  {
    path: 'tous-droits-reserves',
    component: TousDroitsReservesComponent
  },
  {
    path: 'admin-reseau-social',
    component: AdminReseauSocialComponent
  },
  {
    path: 'reseau-social',
    component: ReseauSocialComponent
  },
  {
    path: 'reseau-social/:id',
    component: MajComponent
  },
  {
    path: 'reseau-social/modifie/:id',
    component: MajComponent
  },
  {
    path: 'message-recus',
    component: MessageListComponent
  },
  {
    path: 'message-recus/:id',
    component: MessageDetailComponent
  },
  {
    path: '**',
    component: IntrouvableComponent
  },
];
