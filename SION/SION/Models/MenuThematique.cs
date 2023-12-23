namespace SION.Models
{
    public class MenuThematique
    {
        public int Id { get; set; }

        public string ImageUrl { get; set; }

        public string ImageTitre { get; set; }

        public string ImageLienDetail { get; set;}

        public int AccueilId { get; set; }
        public Accueil Accueil { get; set; }
    }
}
