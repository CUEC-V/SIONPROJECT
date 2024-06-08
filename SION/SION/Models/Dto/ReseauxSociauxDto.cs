using System.ComponentModel.DataAnnotations;

namespace SION.Models.Dto
{
    public class ReseauxSociauxDto
    {
        public int Id { get; set; }

        [DataType(DataType.Html)]
        public string UrlImage { get; set; }

        public string Description { get; set; }

        public int AccueilId { get; set; }
    }
}
