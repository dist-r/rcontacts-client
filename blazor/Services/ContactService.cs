using System.Net.Http.Json;
using System.Text.Json.Serialization;
using rcontacts.Models;

namespace rcontacts.Services;

/// <summary>
/// Ekuivalen service/contact.ts di React-TS
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
    /// Ekuivalen: export const getContacts = async () => { ... }
    /// GET /contacts
    /// </summary>
    public async Task<List<Contact>> GetContacts()
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.GetAsync("/api/v1/contacts");

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal memuat kontak");
        }

        var result = await response.Content.ReadFromJsonAsync<List<Contact>>();
        return result ?? new List<Contact>();
    }

    /// <summary>
    /// Ekuivalen: export const createContact = async (name, email, phone) => { ... }
    /// POST /contacts
    /// </summary>
    public async Task CreateContact(string name, string email, string phone)
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.PostAsJsonAsync("/api/v1/contacts", new { name, email, phone });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal menambah kontak");
        }
    }

    /// <summary>
    /// Ekuivalen: export const updateContact = async (id, name, email, phone) => { ... }
    /// PUT /contacts/:id
    /// </summary>
    public async Task UpdateContact(string id, string name, string email, string phone)
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.PutAsJsonAsync($"/api/v1/contacts/{id}", new { name, email, phone });

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadFromJsonAsync<ServiceErrorResponse>();
            throw new Exception(error?.Message ?? "Gagal memperbarui kontak");
        }
    }

    /// <summary>
    /// Ekuivalen: export const deleteContact = async (id) => { ... }
    /// DELETE /contacts/:id
    /// </summary>
    public async Task DeleteContact(string id)
    {
        await _api.SetAuthHeader();
        var response = await _api.Client.DeleteAsync($"/api/v1/contacts/{id}");

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
