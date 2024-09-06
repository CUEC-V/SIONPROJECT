namespace SION.Models
{
    public static class RessourceMapper
    {
        public static RessourceDto Map(this Ressource ressource)
        {
            return new RessourceDto
            {
                Id = ressource.Id,
                Auteur = ressource.Auteur,
                Creation = ressource.Creation,
                Description = ressource.Description,
                SousTitre = ressource.SousTitre,
                Titre = ressource.Titre,
                Url = ressource.Url,
                TypeRessource = ressource.TypeRessource,
                DateModification = ressource.DateModification,
            };
        }

        public static Ressource ToDto(this RessourceDto ressource)
        {
            return new Ressource
            {
                Id = ressource.Id,
                Auteur = ressource.Auteur,
                Creation = DateTime.Now,
                Description = ressource.Description,
                SousTitre = ressource.SousTitre,
                Titre = ressource.Titre,
                Url = ressource.Url,
                TypeRessource = ressource.TypeRessource,
                DateModification = ressource.DateModification
            };
        }

        public static List<RessourceDto> Map(this List<Ressource> ressources)
        {
            return ressources.Select(m => m.Map()).ToList();
        }
    }
}
