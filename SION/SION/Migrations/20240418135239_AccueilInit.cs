using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SION.Migrations
{
    /// <inheritdoc />
    public partial class AccueilInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Accueils",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TexteIntroductif = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageAngeDuSeigneur = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageNueeSunSet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageOffmann = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TexteApocalypseDixSept = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TexteBienvenu = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImagePasteur = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TexteHaut = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Video = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TextBas = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TexteProphete = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NomEglise = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumeroLibelleAdresse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CodePostaleVillePays = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumeroTelephone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PremierJourCulte = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DeuxiemeJourCulte = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    TroisiemeJourCulte = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AutreJoureCulte = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageChandelier = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Accueils", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MenuThematiques",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageTitre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageLienDetail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AccueilId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MenuThematiques", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MenuThematiques_Accueils_AccueilId",
                        column: x => x.AccueilId,
                        principalTable: "Accueils",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ReseauxSociaux",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UrlImage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AccueilId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReseauxSociaux", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ReseauxSociaux_Accueils_AccueilId",
                        column: x => x.AccueilId,
                        principalTable: "Accueils",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_MenuThematiques_AccueilId",
                table: "MenuThematiques",
                column: "AccueilId");

            migrationBuilder.CreateIndex(
                name: "IX_ReseauxSociaux_AccueilId",
                table: "ReseauxSociaux",
                column: "AccueilId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MenuThematiques");

            migrationBuilder.DropTable(
                name: "ReseauxSociaux");

            migrationBuilder.DropTable(
                name: "Accueils");
        }
    }
}
