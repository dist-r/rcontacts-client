using System.Net.Http.Json;
using rcontacts.Models;

namespace rcontacts.Services;

/// <summary>
/// Ekuivalen service/auth.ts di React-TS
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
    /// Ekuivalen: export const login = async (email, password) => { ... }
    /// POST /auth/login
    /// </summary>
    public async Task<AuthResponse> Login(string email, string password)
    {
        var response = await _api.Client.PostAsJsonAsync("/api/v1/auth/login", new { email, password });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ErrorResponse>();
            throw new Exception(error?.Message ?? "Login gagal");
        }

        var result = await response.Content.ReadFromJsonAsync<AuthResponse>();
        return result ?? throw new Exception("Response tidak valid");
    }

    /// <summary>
    /// Ekuivalen: export const register = async (username, name, email, password) => { ... }
    /// POST /auth/register
    /// </summary>
    public async Task<AuthResponse> Register(string username, string name, string email, string password)
    {
        var response = await _api.Client.PostAsJsonAsync("/api/v1/auth/register", new { username, name, email, password });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ErrorResponse>();
            throw new Exception(error?.Message ?? "Registrasi gagal");
        }

        var result = await response.Content.ReadFromJsonAsync<AuthResponse>();
        return result ?? throw new Exception("Response tidak valid");
    }

    public async Task<User?> GetCurrentUser()
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.GetAsync("/api/v1/users/profile");
        if (!response.IsSuccessStatusCode) return null;
        return await response.Content.ReadFromJsonAsync<User>();
    }
}

internal class ErrorResponse
{
    public string? Message { get; set; }
}
