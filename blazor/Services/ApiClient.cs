using System.Net.Http.Headers;
using Blazored.LocalStorage;

namespace rcontacts.Services;

public class ApiClient
{
    private readonly HttpClient _httpClient;
    private readonly ILocalStorageService _localStorage;

    public ApiClient(HttpClient httpClient, ILocalStorageService localStorage)
    {
        _httpClient = httpClient;
        _localStorage = localStorage;
    }

    /// <summary>
    /// Tambahkan Authorization header dari token di localStorage
    /// </summary>
    public async Task SetAuthHeader()
    {
        var token = await _localStorage.GetItemAsync<string>("token");
        if (!string.IsNullOrEmpty(token))
        {
            _httpClient.DefaultRequestHeaders.Authorization =
                new AuthenticationHeaderValue("Bearer", token);
        }
        else
        {
            _httpClient.DefaultRequestHeaders.Authorization = null;
        }
    }

    public HttpClient Client => _httpClient;
}
