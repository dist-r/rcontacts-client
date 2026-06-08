using System.Net.Http.Json;
using rcontacts.Models;

namespace rcontacts.Services;

/// <summary>
/// Berisi fungsi login() dan register() yang memanggil API
/// </summary>
public class AuthService
{
    private readonly ApiClient _api;

    public AuthService(ApiClient api)
    {
        _api = api;
    }

    /// <summary>
    /// POST /auth/login
    /// </summary>
    public async Task<LoginResponse> Login(string email, string password)
    {
        var response = await _api.Client.PostAsJsonAsync("/api/v2/auth/login", new { email, password });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ErrorResponse>();
            throw new Exception(error?.Message ?? "Login gagal");
        }

        var result = await response.Content.ReadFromJsonAsync<LoginResponse>();
        return result ?? throw new Exception("Response tidak valid");
    }

    /// <summary>
    /// POST /auth/register
    /// </summary>
    public async Task<RegisterResponse> Register(string username, string name, string email, string password)
    {
        var response = await _api.Client.PostAsJsonAsync("/api/v2/auth/register", new { username, name, email, password });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ErrorResponse>();
            throw new Exception(error?.Message ?? "Registrasi gagal");
        }

        var result = await response.Content.ReadFromJsonAsync<RegisterResponse>();
        return result ?? throw new Exception("Response tidak valid");
    }

    public async Task<User?> GetCurrentUser()
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.GetAsync("/api/v2/users/profile");
        if (!response.IsSuccessStatusCode) return null;
        return await response.Content.ReadFromJsonAsync<User>();
    }
}

internal class ErrorResponse
{
    public string? Message { get; set; }
}
