namespace backend.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Organization { get; set; } = string.Empty;
        public string LocationName { get; set; } = string.Empty; // NB: se kommentar under
        public string? Description { get; set; }
        public DateTime EventStart { get; set; }
        public DateTime EventEnd { get; set; }

        public int LocationId { get; set; }
        public Location? Location { get; set; }

        public int CreatedByUserId { get; set; }
    }
}