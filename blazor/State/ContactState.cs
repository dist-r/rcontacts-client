using rcontacts.Models;
using rcontacts.Services;

namespace rcontacts.State;

/// <summary>
/// Ekuivalen hooks/useContact.ts di React-TS
/// Scoped service — satu instance per browser session
///
/// Di React:
///   const { contacts, isLoading, addContact, editContact, removeContact } = useContacts();
/// Di Blazor:
///   [Inject] ContactState Contacts { get; set; }
/// </summary>
public class ContactState
{
    private readonly ContactService _contactService;

    // Ekuivalen event callback untuk notify komponen re-render
    public event Action? OnChange;

    // State — ekuivalen useState / useQuery di React
    public List<Contact> Contacts { get; private set; } = new();
    public bool IsLoading { get; private set; }
    public string? Error { get; private set; }

    // Add state
    public bool IsAdding { get; private set; }
    public string? AddError { get; private set; }

    // Edit state
    public bool IsEditing { get; private set; }
    public string? EditError { get; private set; }

    // Remove state
    public bool IsRemoving { get; private set; }
    public string? RemoveError { get; private set; }

    public ContactState(ContactService contactService)
    {
        _contactService = contactService;
    }

    /// <summary>
    /// Ekuivalen: useQuery({ queryKey: ["contacts"], queryFn: getContacts })
    /// Load semua kontak dari API
    /// </summary>
    public async Task LoadContacts()
    {
        IsLoading = true;
        Error = null;
        NotifyStateChanged();

        try
        {
            Contacts = await _contactService.GetContacts();
        }
        catch (Exception ex)
        {
            Error = ex.Message;
        }
        finally
        {
            IsLoading = false;
            NotifyStateChanged();
        }
    }

    /// <summary>
    /// Ekuivalen: useMutation({ mutationFn: createContact, onSuccess: invalidateQueries })
    /// </summary>
    public async Task AddContact(string name, string email, string phone)
    {
        IsAdding = true;
        AddError = null;
        NotifyStateChanged();

        try
        {
            await _contactService.CreateContact(name, email, phone);
            await LoadContacts(); // Reload seperti invalidateQueries
        }
        catch (Exception ex)
        {
            AddError = ex.Message;
            NotifyStateChanged();
        }
        finally
        {
            IsAdding = false;
            NotifyStateChanged();
        }
    }

    /// <summary>
    /// Ekuivalen: useMutation({ mutationFn: updateContact, onSuccess: invalidateQueries })
    /// </summary>
    public async Task EditContact(string id, string name, string email, string phone)
    {
        IsEditing = true;
        EditError = null;
        NotifyStateChanged();

        try
        {
            await _contactService.UpdateContact(id, name, email, phone);
            await LoadContacts(); // Reload seperti invalidateQueries
        }
        catch (Exception ex)
        {
            EditError = ex.Message;
            NotifyStateChanged();
        }
        finally
        {
            IsEditing = false;
            NotifyStateChanged();
        }
    }

    /// <summary>
    /// Ekuivalen: useMutation({ mutationFn: deleteContact, onSuccess: invalidateQueries })
    /// </summary>
    public async Task RemoveContact(string id)
    {
        IsRemoving = true;
        RemoveError = null;
        NotifyStateChanged();

        try
        {
            await _contactService.DeleteContact(id);
            await LoadContacts(); // Reload seperti invalidateQueries
        }
        catch (Exception ex)
        {
            RemoveError = ex.Message;
            NotifyStateChanged();
        }
        finally
        {
            IsRemoving = false;
            NotifyStateChanged();
        }
    }

    // Reset error state
    public void ClearErrors()
    {
        AddError = null;
        EditError = null;
        RemoveError = null;
        NotifyStateChanged();
    }

    private void NotifyStateChanged() => OnChange?.Invoke();
}
