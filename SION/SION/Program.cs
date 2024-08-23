using Microsoft.EntityFrameworkCore;
using SION.DbData;
using System.Configuration;

var builder = WebApplication.CreateBuilder(args);


// Cors policy
var corsName = "PAT-TAB";
// Add services to the container.

builder.Services.AddControllers();

var config = new ConfigurationBuilder()
           .AddJsonFile("appsettings.json")
           .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", optional: true)
           .Build();

var connectionString = config.GetSection("ConnectionStrings")["DefaultConnection"];

builder.Services.AddDbContext<SionContext>(opt =>
    /*opt.UseInMemoryDatabase("SionItems")*/
    opt.UseSqlServer(connectionString));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHsts(options =>
{
    options.Preload = true;
    options.IncludeSubDomains = true;
    options.MaxAge = TimeSpan.FromDays(60);
    options.ExcludedHosts.Add("http://localhost:4200");
});

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsName,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200")
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                      });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(corsName);

app.UseAuthorization();

app.MapControllers();

app.Run();
