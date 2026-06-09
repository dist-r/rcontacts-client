using System.Text.Json.Serialization;

namespace rcontacts.Models;

public class Contact
{
    [JsonPropertyName("id")]
    public string Id { get; set; } = string.Empty;

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("email")]
    public string Email { get; set; } = string.Empty;

    [JsonPropertyName("phone")]
    public string Phone { get; set; } = string.Empty;
}

public class GetAllContactsResponse
{
    public string Message { get; set; } = string.Empty;
    public bool Success { get; set; } = false;
    public List<Contact> Data { get; set; } = [];
}
