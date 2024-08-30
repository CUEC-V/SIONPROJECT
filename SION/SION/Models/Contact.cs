namespace SION.Models
{
    public class Contact
    {
        public int Id { get; set; }

        public string? RaisonSociale { get; set; }

        public string? Email { get; set; }

        public string? Objet { get; set; }

        public string ? NumeroTelephone { get; set; }

        public string? Message { get; set; }

        public DateTime? Publication { get; set; }
    }
}
