using System.ComponentModel.DataAnnotations;

namespace SION.Models
{
    public class Accueil
    {
        public int Id { get; set; }

        [DataType(DataType.Html)]
        public string TexteIntroductif { get; set; }

        public string ImageAngeDuSeigneur { get; set; }

        public string ImageNueeSunSet { get; set; }

        public string ImageOffmann { get; set; }


        public string TexteApocalypseDixSept { get; set; }

        [DataType(DataType.Html)]
        public string TexteBienvenu { get; set; }

        public string ImagePasteur { get; set; }

        #region : Vidéo de la prière 
        [DataType(DataType.Html)]
        public string TexteHaut { get; set; }

        public string Video { get; set; }

        [DataType(DataType.Html)]
        public string TextBas { get; set; }
        #endregion

        #region : Image de l'aigle 
        public string Image { get; set; }

        [DataType(DataType.Html)]
        public string TexteProphete { get; set; }

        #endregion

        public string NomEglise { get; set; }

        #region : Adresse 

        public string NumeroLibelleAdresse { get; set; }

        public string CodePostaleVillePays { get; set; }

        public string NumeroTelephone { get; set; }
        #endregion

        #region : Horaires ouverture 
        public string PremierJourCulte { get; set; }

        public string DeuxiemeJourCulte { get; set; }

        public string TroisiemeJourCulte { get; set; }

        public string AutreJoureCulte { get; set; }

        public string ImageChandelier { get; set; }

        #endregion

        #region : orde de l'église
        public string OrdreEglise1 { get; set; }

        public string OrdreEglise2 { get; set; }

        public string OrdreEglise3 { get; set; }

        public string OrdreEgliseTitre { get; set; }

        public string OrdreEgliseSousTitre { get; set; }
        #endregion

        #region : Ressources

        public string RessourceTitre { get; set; }

        public string RessourceSousTitre { get; set; }

        #endregion

        #region : Emblèmes et mémoriaux

        public string EmblemeMemorialTitre { get; set; }

        public string EmblemeMemorialSousTitre { get; set; }

        public string CrucifixTexte { get; set; }

        #endregion

        public virtual ICollection<ReseauxSociaux> ReseauxSociauxes { get; set; }
        public virtual ICollection<MenuThematique> MenuThematiques { get; set; }
    }
}
