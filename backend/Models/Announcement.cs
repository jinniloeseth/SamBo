namespace backend.Models
{
    public class Announcement
    {
        public int Id { get; set; }
        public string RoomNumber { get; set; } = string.Empty;
        public DateTime Date { get; set; }
        public string Text { get; set; } = string.Empty;
        public bool IsPinned { get; set; } = false;
        public int CreatedByUserId { get; set; }
    }
}