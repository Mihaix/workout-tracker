using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Workout
    {
        [Key]
        public int WorkoutId { get; set; }

        [Required]
        public DateTime Date { get; set; }

        public string WorkoutType { get; set; } = null!;
        public string Exercise { get; set; } = null!;

        [Required]
        public int Sets { get; set; }

        public string Reps { get; set; } = null!;

        public string? Weight { get; set; }

        public string? IntensityDuration { get; set; }

        public string? Notes { get; set; }
    }
}
