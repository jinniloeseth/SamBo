namespace backend.Models
{
    public class RuleCategory
    {
        public int Id { get; set; }
        public string? Category { get; set; }

        public int LocationId { get; set; }
        public Location? Location { get; set; }

        public List<Rule> Rules { get; set; } = new();
    }
}