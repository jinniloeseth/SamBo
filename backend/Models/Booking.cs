namespace backend.Models
{
    public class Booking
    {
        public int Id { get; set; }
        public string RoomNumber { get; set; } = string.Empty;
        public DateTime BookingStart { get; set; }
        public DateTime BookingEnd { get; set; }

        public int LocationId { get; set; }
        public Location? Location { get; set; }

        public int CreatedByUserId { get; set; }
    }
}