using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class LongToDecimal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Amount",
                table: "ChequeDetails",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "bigint");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "Amount",
                table: "ChequeDetails",
                type: "bigint",
                nullable: false,
                oldClrType: typeof(decimal));
        }
    }
}
