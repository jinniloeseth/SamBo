namespace backend.Models
{
    public class Organization
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty; // f.eks. "Sammen"

        public List<Location> Locations { get; set; } = new();
    }
}