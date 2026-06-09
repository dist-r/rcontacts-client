using rcontacts.Models;
using rcontacts.Services;

namespace rcontacts.State;

public class ContactState
{
    private readonly ContactService _contactService;

    public event Action? OnChange;

    public List<Contact> Contacts { get; private set; } = new();
    public bool IsLoading { get; private set; }
    public string? Error { get; private set; }

    public bool IsAdding { get; private set; }
    public string? AddError { get; private set; }

  
    public bool IsEditing { get; private set; }
    public string? EditError { get; private set; }

    public bool IsRemoving { get; private set; }
    public string? RemoveError { get; private set; }

    public ContactState(ContactService contactService)
    {
        _contactService = contactService;
    }

    public async Task LoadContacts()
    {
        IsLoading = true;
        Error = null;
        NotifyStateChanged();

        try
        {
            var dataContacts = await _contactService.GetContacts();
            Contacts = dataContacts.Data;
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

    public async Task AddContact(string name, string email, string phone)
    {
        IsAdding = true;
        AddError = null;
        NotifyStateChanged();

        try
        {
            await _contactService.CreateContact(name, email, phone);
            await LoadContacts();
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

    public async Task EditContact(string id, string name, string email, string phone)
    {
        IsEditing = true;
        EditError = null;
        NotifyStateChanged();

        try
        {
            await _contactService.UpdateContact(id, name, email, phone);
            await LoadContacts();
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

    public async Task RemoveContact(string id)
    {
        IsRemoving = true;
        RemoveError = null;
        NotifyStateChanged();

        try
        {
            await _contactService.DeleteContact(id);
            await LoadContacts();
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
