using Blazored.LocalStorage;
using MudBlazor.Services;
using rcontacts.Components;
using rcontacts.Services;
using rcontacts.State;

var builder = WebApplication.CreateBuilder(args);

// ── Razor Components ──────────────────────────────────────────────────────────
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

// ── MudBlazor ────────────────────────────────────────────────────────────────
// Ekuivalen: import { QueryClient, QueryClientProvider } dari react-query
builder.Services.AddMudServices();

// ── Blazored.LocalStorage ─────────────────────────────────────────────────────
// Ekuivalen: localStorage.getItem/setItem di JavaScript
builder.Services.AddBlazoredLocalStorage();

// ── HttpClient (API Client) ────────────────────────────────────────────────────
// Ekuivalen: axios.create({ baseURL: "http://localhost:3000/api/v1" })
var apiBaseUrl = builder.Configuration["ApiSettings:BaseUrl"] ?? "http://localhost:3000";
builder.Services.AddHttpClient<ApiClient>(client =>
{
    client.BaseAddress = new Uri(apiBaseUrl);
    client.Timeout = TimeSpan.FromSeconds(10);
});

// ── Services (Service Layer) ───────────────────────────────────────────────────
// Ekuivalen: service/auth.ts, service/contact.ts
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<ContactService>();

// ── State (Hooks Equivalent) ───────────────────────────────────────────────────
// Ekuivalen: hooks/useAuth.ts, hooks/useContact.ts
// Scoped = satu instance per SignalR circuit (per user session)
builder.Services.AddScoped<AuthState>();
builder.Services.AddScoped<ContactState>();

// ── Localization (untuk MudBlazor) ────────────────────────────────────────────
builder.Services.AddLocalization();

var app = builder.Build();

// ── HTTP Pipeline ─────────────────────────────────────────────────────────────
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
