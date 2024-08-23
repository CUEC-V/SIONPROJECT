namespace SION.Models
{
    public class ContactVm
    {
        public int Id { get; set; }

        public string? NomEtprenoms { get; set; }

        public string? Courriel { get; set; }

        public string? SujetCourriel { get; set; }

        public string? Telephone { get; set; }

        public string? Message { get; set; }

        public DateTime? Publication { get; set; }
    }
}
