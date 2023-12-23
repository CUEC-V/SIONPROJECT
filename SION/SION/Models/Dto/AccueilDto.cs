namespace SION.Models
{
    public class AccueilDto
    {
        public int Id { get; set; }

        public string TexteIntroductif { get; set; }

        public string ImageAngeDuSeigneur { get; set; }

        public string ImageNueeSunSet { get; set; }

        public string ImageOffmann { get; set; }


        public string TexteApocalypseDixSept { get; set; }

        public string TexteBienvenu { get; set; }

        public string ImagePasteur { get; set; }

        #region : Vidéo de la pière 
        public string TexteHaut { get; set; }

        public string Video { get; set; }

        public string TextBas { get; set; }
        #endregion

        #region : Image de l'aigle 
        public string Image { get; set; }

        public string TexteProphete { get; set; }

        #endregion

        public List<MenuThematique> MenuThematiques { get; set; } = new List<MenuThematique>();
    }
}
