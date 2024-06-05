using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using portfolio;
using MudBlazor.Services;
using Microsoft.Extensions.Localization;
using Microsoft.Extensions.DependencyInjection;
using System.Globalization;

var builder = WebAssemblyHostBuilder.CreateDefault(args);
// builder.Services.AddLocalization(options => options.ResourcesPath = "Resources");

builder.Services.AddMudServices();
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");


// var supportedCultures = new[] { new CultureInfo("en"), new CultureInfo("pt") };
// builder.Services.Configure<RequestLocalizationOptions>(options =>
// {
//     options.DefaultRequestCulture = new Microsoft.AspNetCore.Localization.RequestCulture("en");
//     options.SupportedCultures = supportedCultures;
//     options.SupportedUICultures = supportedCultures;
});

builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
