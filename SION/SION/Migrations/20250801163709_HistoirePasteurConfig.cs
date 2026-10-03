using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SION.Migrations
{
    /// <inheritdoc />
    public partial class HistoirePasteurConfig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HistoirePasteur",
                table: "Accueils",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HistoirePasteur",
                table: "Accueils");
        }
    }
}
