namespace SION.Models.Mapper
{
    public static class MenuThematiqueMapper
    {
        public static MenuThematiqueDto Map(this MenuThematique menuThematique)
        {
            return new MenuThematiqueDto
            {
                Id = menuThematique.Id,
                ImageUrl = menuThematique.ImageUrl,
                ImageTitre = menuThematique.ImageTitre,
                ImageLienDetail = menuThematique.ImageLienDetail,
                AccueilId = menuThematique.AccueilId,
            };
        }

        public static MenuThematiqueVm Vm(this MenuThematique menuThematique)
        {
            return new MenuThematiqueVm
            {
                Id = menuThematique.Id,
                ImageUrl = menuThematique.ImageUrl,
                ImageTitre = menuThematique.ImageTitre,
                ImageLienDetail = menuThematique.ImageLienDetail,
                AccueilId = menuThematique.AccueilId,
            };
        }


        public static MenuThematique ToDto(this MenuThematiqueDto menuThematique)
        {
            return new MenuThematique
            {
                Id = menuThematique.Id,
                ImageUrl = menuThematique.ImageUrl,
                ImageTitre = menuThematique.ImageTitre,
                ImageLienDetail = menuThematique.ImageLienDetail,
                AccueilId = menuThematique.AccueilId,
            };
        }
        public static List<MenuThematiqueDto> Map(this List<MenuThematique> menuThematiques)
        {
            return menuThematiques.Select(m => m.Map()).ToList();
        }

        public static List<MenuThematiqueVm> Vm(this List<MenuThematique> menuThematiques)
        {
            return menuThematiques.Select(m => m.Vm()).ToList();
        }
    }
}
