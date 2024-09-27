using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SION.Migrations
{
    /// <inheritdoc />
    public partial class SiteReseauSocial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Site",
                table: "ReseauxSociaux",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Site",
                table: "ReseauxSociaux");
        }
    }
}
