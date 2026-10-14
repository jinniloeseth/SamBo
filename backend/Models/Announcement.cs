namespace backend.Models
{
    public class Announcement
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; } = string.Empty;
        public bool IsPinned { get; set; } = false;
        public AnnouncementCategory Category { get; set; } = AnnouncementCategory.General;

        public int CreatedByUserId { get; set; }
        public User? CreatedByUser { get; set; }
    }
}