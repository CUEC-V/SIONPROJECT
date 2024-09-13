using System.ComponentModel.DataAnnotations;

namespace SION.Models
{
    public class Ressource
    {
        public int Id { get; set; }

        public string? Titre { get; set; }

        public string? SousTitre { get; set; }

        [Display(Name ="Provenance")]
        public string? Auteur { get; set; }

        [DataType(DataType.ImageUrl)]
        public string? Url { get; set; }

        [DataType(DataType.Html)]
        public string? Description { get; set; }

        public DateTime Creation {  get; set; }

        public DateTime DateModification { get; set; }

        public string? TypeRessource { get; set; }

        public bool IsPublie { get; set; }
    }
}
