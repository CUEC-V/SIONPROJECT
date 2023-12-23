namespace SION.Models
{
    public class AccueilVM
    {
        public AccueilVm Accueil { get; set; }

        public List<MenuThematiqueVm> MenuThematique { get; set; }

        public AccueilVM()
        {
            Accueil = new AccueilVm();
            MenuThematique = new List<MenuThematiqueVm>();
        }
    }
}
