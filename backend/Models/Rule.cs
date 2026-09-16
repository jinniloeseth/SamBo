namespace backend.Models
{
    public class Rule
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public int RulesId { get; set; }

    }
}