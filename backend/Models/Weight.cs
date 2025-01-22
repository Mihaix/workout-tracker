using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Weight
    {
        [Key]
        public int WeightId { get; set; }

        [Required]
        public float CurrentWeight { get; set; }

        [Required]
        public DateTime WeightDate { get; set; } 

    }
}
