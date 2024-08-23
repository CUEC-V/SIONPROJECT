namespace SION.Models
{
    public static class ContactMapper
    {
        public static ContactDto Map(this Contact contact)
        {
            return new ContactDto
            {
                Id = contact.Id,
                Courriel = contact.Email,
                Telephone = contact.NumeroTelephone,
                SujetCourriel = contact.Objet,
                NomEtprenoms = contact.RaisonSociale,
                Message = contact.Message,
                Publication = contact.Publication,
            };
        }

        public static ContactVm Vm(this Contact contact)
        {
            return new ContactVm
            {
                Id = contact.Id,
                Message = contact.Message,
                Courriel = contact.Email,
                Telephone = contact.NumeroTelephone,
                NomEtprenoms = contact.RaisonSociale,
                SujetCourriel = contact.Objet,
                Publication = contact.Publication,
            };
        }

        public static Contact ToDto(this ContactDto contact)
        {
            return new Contact
            {
                Id = contact.Id,
                Email = contact.Courriel,
                Message = contact.Message,
                RaisonSociale = contact.NomEtprenoms,
                NumeroTelephone = contact.Telephone,
                Objet = contact.SujetCourriel,
                Publication = DateTime.Now,
            };
        }

        public static List<ContactDto> Map(this List<Contact> contacts)
        {
            return contacts.Select(m => m.Map()).ToList();
        }
    }
}
