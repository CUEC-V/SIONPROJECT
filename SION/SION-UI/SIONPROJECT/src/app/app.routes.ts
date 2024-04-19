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
        path: '**',
        component: IntrouvableComponent
    },
];
