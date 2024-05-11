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
        public virtual ICollection<ReseauxSociaux> ReseauxSociauxes { get; set; }
        public virtual ICollection<MenuThematique> MenuThematiques { get; set; }
    }
}
