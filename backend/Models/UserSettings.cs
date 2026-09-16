namespace backend.Models
{
    public class UserSettings
    {
        public int Id { get; set; }

        // Mandatory features are always shown, no field needed:
        // Information, Contact us

        // "Extra" features the user can toggle:
        public bool ShowEvents { get; set; } = true;
        public bool ShowBuySellRent { get; set; } = false;
        public bool ShowEquipmentBooking { get; set; } = false;
        public bool ShowNearbyStudentDeals { get; set; } = false;

        public int UserId { get; set; }
        public User? User { get; set; }
    }
}