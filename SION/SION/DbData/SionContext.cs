using Microsoft.EntityFrameworkCore;
using SION.Models;

namespace SION.DbData
{
    public class SionContext : DbContext
    {
        public SionContext(DbContextOptions<SionContext> context) : base(context) { }

        public DbSet<Accueil> Accueils { get; set; } = null;

        public DbSet<MenuThematique> MenuThematiques { get; set; } = null;
    }
}
