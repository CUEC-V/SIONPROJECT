using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SION.Migrations
{
    /// <inheritdoc />
    public partial class Emblemes_memoriaux_ordre : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "EmblemeMemorialSousTitre",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EmblemeMemorialTitre",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OrdreEglise1",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OrdreEglise2",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OrdreEglise3",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OrdreEgliseSousTitre",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "OrdreEgliseTitre",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RessourceSousTitre",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RessourceTitre",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EmblemeMemorialSousTitre",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "EmblemeMemorialTitre",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "OrdreEglise1",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "OrdreEglise2",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "OrdreEglise3",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "OrdreEgliseSousTitre",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "OrdreEgliseTitre",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "RessourceSousTitre",
                table: "Accueils");

            migrationBuilder.DropColumn(
                name: "RessourceTitre",
                table: "Accueils");
        }
    }
}
