namespace SION.Models
{
    public class ReseauxSociaux
    {
        public int Id { get; set; }

        public string UrlImage { get; set; }

        public string Description { get; set; }

        public Accueil Accueil { get; set; }

        public int AccueilId { get; set; }
    }
}
