using SION.Models.Dto;

namespace SION.Models.Mapper
{
    public static class ReseauxSociauxMapper
    {
        public static ReseauxSociauxDto Map(this ReseauxSociaux reseauxSocial)
        {
            return new ReseauxSociauxDto
            {
                Id = reseauxSocial.Id,
                UrlImage = reseauxSocial.UrlImage,
                AccueilId = reseauxSocial.AccueilId,
                Description = reseauxSocial.Description,
            };
        }

        public static ReseauxSociauxVm Vm(this ReseauxSociaux reseauxSocial)
        {
            return new ReseauxSociauxVm
            {
                Id = reseauxSocial.Id,
                UrlImage = reseauxSocial.UrlImage,
                AccueilId = reseauxSocial.AccueilId,
                Description = reseauxSocial.Description,
            };
        }


        public static ReseauxSociaux ToDto(this ReseauxSociauxDto reseauxSocial)
        {
            return new ReseauxSociaux
            {
                Id = reseauxSocial.Id,
                UrlImage = reseauxSocial.UrlImage,
                AccueilId = reseauxSocial.AccueilId,
                Description = reseauxSocial.Description,
            };
        }
        public static List<ReseauxSociauxDto> Map(this List<ReseauxSociaux> reseauxSociauxes)
        {
            return reseauxSociauxes.Select(m => m.Map()).ToList();
        }

        public static List<ReseauxSociauxVm> Vm(this List<ReseauxSociaux> reseauxSociauxes)
        {
            return reseauxSociauxes.Select(m => m.Vm()).ToList();
        }
    }

}
