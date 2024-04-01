// NOTE: main server for this app is the ExpressJS app under /server.
// This is an experiment that could replace that as the BE for this project

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/", () =>
{
    string message = "Acme API running on C# / ASP.NET";
    return message;
})
.WithOpenApi();

app.Run();
