namespace rcontacts.Models;

public class LoginResponse
{
    public string Message { get; set; } = string.Empty;
    public DataLogin Data { get; set; } = new();
}

public class RegisterResponse
{
    public string Message { get; set; } = string.Empty;
    public DataRegister Data { get; set; } = new();
}

public class DataLogin
{
    public string Token { get; set; } = string.Empty;
    public User? User { get; set; }
}

public class DataRegister
{
    public string Token { get; set; } = string.Empty;
    public User? User { get; set; }
}
