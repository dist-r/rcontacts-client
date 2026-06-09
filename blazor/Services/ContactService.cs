using System.Net.Http.Json;
using System.Text.Json.Serialization;
using rcontacts.Models;

namespace rcontacts.Services;

/// <summary>
/// Berisi CRUD operations untuk kontak
/// </summary>
public class ContactService
{
    private readonly ApiClient _api;

    public ContactService(ApiClient api)
    {
        _api = api;
    }

    /// <summary>
    /// GET /contacts
    /// </summary>
    public async Task<GetAllContactsResponse> GetContacts()
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.GetAsync("/api/v2/contacts");

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal memuat kontak");
        }

        var result = await response.Content.ReadFromJsonAsync<GetAllContactsResponse>();
        return result ?? new GetAllContactsResponse();
    }

    /// <summary>
    /// POST /contacts
    /// </summary>
    public async Task CreateContact(string name, string email, string phone)
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.PostAsJsonAsync("/api/v2/contacts", new { name, email, phone });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal menambah kontak");
        }
    }

    /// <summary>
    /// PUT /contacts/:id
    /// </summary>
    public async Task UpdateContact(string id, string name, string email, string phone)
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.PutAsJsonAsync($"/api/v2/contacts/{id}", new { name, email, phone });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal memperbarui kontak");
        }
    }

    /// <summary>
    /// DELETE /contacts/:id
    /// </summary>
    public async Task DeleteContact(string id)
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.DeleteAsync($"/api/v2/contacts/{id}");

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal menghapus kontak");
        }
    }
}

internal class ServiceErrorResponse
{
    public string? Message { get; set; }
}
