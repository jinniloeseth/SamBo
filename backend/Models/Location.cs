namespace backend.Models
{
    public class Location
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // f.eks. "Brann stadion"
        public string? Address { get; set; }
        public string? City { get; set; }

        public int OrganizationId { get; set; }
        public Organization? Organization { get; set; }
    }
}