namespace backend.Models
{
    public class Rules
    {
        public int Id { get; set; }
        public List<Rule> Regler { get; set; } = new();
        public string? Category { get; set; }
    }
}