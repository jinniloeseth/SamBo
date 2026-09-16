namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Username { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public string RoomNumber { get; set; } = string.Empty;
        public UserRole Role { get; set; } = UserRole.Student;

        public UserSettings? Settings { get; set; }
    }

    public enum UserRole
    {
        Student,
        Admin
    }
}