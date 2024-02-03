using SION.Models;

namespace SION.Models
{
    public static class AccueilMapper
    {
        public static AccueilDto Map(this Accueil accueil)
        {
            return new AccueilDto
            {
                Id = accueil.Id,
                TexteIntroductif = accueil.TexteIntroductif,
                ImageAngeDuSeigneur = accueil.ImageAngeDuSeigneur,
                ImageNueeSunSet = accueil.ImageNueeSunSet,
                ImageOffmann = accueil.ImageOffmann,
                TexteApocalypseDixSept = accueil.TexteApocalypseDixSept,
                TexteBienvenu = accueil.TexteBienvenu,
                ImagePasteur = accueil.ImagePasteur,
                TexteHaut = accueil.TexteHaut,
                Video = accueil.Video,
                TextBas = accueil.TextBas,
                Image = accueil.Image,
                TexteProphete = accueil.TexteProphete,
                NomEglise = accueil.NomEglise,
                NumeroLibelleAdresse = accueil.NumeroLibelleAdresse,
                CodePostaleVillePays = accueil.CodePostaleVillePays,
                NumeroTelephone = accueil.NumeroTelephone,
                PremierJourCulte = accueil.PremierJourCulte,
                DeuxiemeJourCulte = accueil.DeuxiemeJourCulte,
                TroisiemeJourCulte = accueil.TroisiemeJourCulte,
                AutreJoureCulte = accueil.AutreJoureCulte,
                ImageChandelier = accueil.ImageChandelier,
                ReseauxSociauxes = accueil.ReseauxSociauxes.ToList(),
                MenuThematiques = accueil.MenuThematiques.ToList(),
            };
        }

        public static AccueilVm Vm(this Accueil accueil)
        {
            return new AccueilVm
            {
                Id = accueil.Id,
                TexteIntroductif = accueil.TexteIntroductif,
                ImageAngeDuSeigneur = accueil.ImageAngeDuSeigneur,
                ImageNueeSunSet = accueil.ImageNueeSunSet,
                ImageOffmann = accueil.ImageOffmann,
                TexteApocalypseDixSept = accueil.TexteApocalypseDixSept,
                TexteBienvenu = accueil.TexteBienvenu,
                ImagePasteur = accueil.ImagePasteur,
                TexteHaut = accueil.TexteHaut,
                Video = accueil.Video,
                TextBas = accueil.TextBas,
                Image = accueil.Image,
                TexteProphete = accueil.TexteProphete,
                NomEglise = accueil.NomEglise,
                NumeroLibelleAdresse = accueil.NumeroLibelleAdresse,
                CodePostaleVillePays = accueil.CodePostaleVillePays,
                NumeroTelephone = accueil.NumeroTelephone,
                PremierJourCulte = accueil.PremierJourCulte,
                DeuxiemeJourCulte = accueil.DeuxiemeJourCulte,
                TroisiemeJourCulte = accueil.TroisiemeJourCulte,
                AutreJoureCulte = accueil.AutreJoureCulte,
                ImageChandelier = accueil.ImageChandelier,
            };
        }

        public static Accueil ToDto(this AccueilDto accueil)
        {
            return new Accueil
            {
                Id = accueil.Id,
                TexteIntroductif = accueil.TexteIntroductif,
                ImageAngeDuSeigneur = accueil.ImageAngeDuSeigneur,
                ImageNueeSunSet = accueil.ImageNueeSunSet,
                ImageOffmann = accueil.ImageOffmann,
                TexteApocalypseDixSept = accueil.TexteApocalypseDixSept,
                TexteBienvenu = accueil.TexteBienvenu,
                ImagePasteur = accueil.ImagePasteur,
                TexteHaut = accueil.TexteHaut,
                Video = accueil.Video,
                TextBas = accueil.TextBas,
                Image = accueil.Image,
                TexteProphete = accueil.TexteProphete,
                NomEglise = accueil.NomEglise,
                NumeroLibelleAdresse = accueil.NumeroLibelleAdresse,
                CodePostaleVillePays = accueil.CodePostaleVillePays,
                NumeroTelephone = accueil.NumeroTelephone,
                PremierJourCulte = accueil.PremierJourCulte,
                DeuxiemeJourCulte = accueil.DeuxiemeJourCulte,
                TroisiemeJourCulte = accueil.TroisiemeJourCulte,
                AutreJoureCulte = accueil.AutreJoureCulte,
                ImageChandelier = accueil.ImageChandelier,
                ReseauxSociauxes = accueil.ReseauxSociauxes.ToList(),
                MenuThematiques = accueil.MenuThematiques.ToList(),
            };
        }

        public static List<AccueilDto> Map(this List<Accueil> accueils)
        {
            return accueils.Select(a => a.Map()).ToList();
        }
    }
}
