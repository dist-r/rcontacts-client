using Blazored.LocalStorage;
using Microsoft.AspNetCore.Components;
using rcontacts.Models;
using rcontacts.Services;

namespace rcontacts.State;

public class AuthState
{
    private readonly AuthService _authService;
    private readonly ILocalStorageService _localStorage;
    private readonly NavigationManager _navigation;

    public event Action? OnChange;

    public bool IsLoggingIn { get; private set; }
    public bool IsRegistering { get; private set; }
    public string? LoginError { get; private set; }
    public string? RegisterError { get; private set; }
    public bool IsAuthenticated { get; private set; }
    public User? CurrentUser { get; private set; }

    public AuthState(AuthService authService, ILocalStorageService localStorage, NavigationManager navigation)
    {
        _authService = authService;
        _localStorage = localStorage;
        _navigation = navigation;
    }
    
    public async Task Login(string email, string password)
    {
        IsLoggingIn = true;
        LoginError = null;
        NotifyStateChanged();

        try
        {
            var result = await _authService.Login(email, password);
            await _localStorage.SetItemAsync("token", result.Data.Token);
            IsAuthenticated = true;
            NotifyStateChanged();
            _navigation.NavigateTo("/home");
        }
        catch (Exception ex)
        {
            LoginError = ex.Message;
            NotifyStateChanged();
        }
        finally
        {
            IsLoggingIn = false;
            NotifyStateChanged();
        }
    }

    public async Task Register(string username, string name, string email, string password)
    {
        IsRegistering = true;
        RegisterError = null;
        NotifyStateChanged();

        try
        {
            var result = await _authService.Register(username, name, email, password);
            // await _localStorage.SetItemAsync("token", result.Data.Token);
            NotifyStateChanged();
            _navigation.NavigateTo("/signin");
        }
        catch (Exception ex)
        {
            RegisterError = ex.Message;
            NotifyStateChanged();
        }
        finally
        {
            IsRegistering = false;
            NotifyStateChanged();
        }
    }

    public async Task Logout()
    {
        await _localStorage.RemoveItemAsync("token");
        IsAuthenticated = false;
        CurrentUser = null;
        NotifyStateChanged();
        _navigation.NavigateTo("/signin");
    }

    /// <summary>
    /// Cek token di localStorage saat komponen mount
    /// </summary>
    public async Task CheckAuth()
    {
        var token = await _localStorage.GetItemAsync<string>("token");
        IsAuthenticated = !string.IsNullOrEmpty(token);

        if (IsAuthenticated)
        {
            CurrentUser = await _authService.GetCurrentUser();
            if (CurrentUser == null)
            {
                await _localStorage.RemoveItemAsync("token");
                IsAuthenticated = false;
            }
        }
        NotifyStateChanged();
    }

    // Notify semua komponen yang subscribe untuk re-render
    private void NotifyStateChanged() => OnChange?.Invoke();
}
