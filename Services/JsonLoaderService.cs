using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Components;
using System.Text.Json;

public class JsonLoaderService
{
    private readonly HttpClient _httpClient;

    public JsonLoaderService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<T> LoadJsonAsync<T>(string language, string section)
    {
        string filePath = $"data/{section}/{language}.json";
        var response = await _httpClient.GetAsync(filePath);

        if (response.IsSuccessStatusCode)
        {
            var json = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<T>(json);
        }

        return default;
    }
}
