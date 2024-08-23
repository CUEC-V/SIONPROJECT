using Microsoft.EntityFrameworkCore;
using SION.Models;
using SION.Models.Dto;

namespace SION.DbData
{
    public class SionContext : DbContext
    {
        public SionContext(DbContextOptions<SionContext> context) : base(context) { }

        public DbSet<Accueil> Accueils { get; set; } = default!;

        public DbSet<MenuThematique> MenuThematiques { get; set; } = default!;

        public DbSet<ReseauxSociaux> ReseauxSociaux { get; set; } = default!;

        public DbSet<Contact> Contacts { get; set; } = default!;
    }
}
