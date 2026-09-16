namespace backend.Models
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;        // f.eks. "Skriveverksted for CV og jobbsøknad"
        public string Organization { get; set; } = string.Empty; // f.eks. "Sammen"
        public string Location { get; set; } = string.Empty;     // "Sted" fra mockupen
        public string? Description { get; set; }                 // "Informasjon"-teksten
        public DateTime EventStart { get; set; }
        public DateTime EventEnd { get; set; }
        public int CreatedByUserId { get; set; }
    }
}