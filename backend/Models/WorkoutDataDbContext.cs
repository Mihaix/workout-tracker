using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class WorkoutDataDbContext : DbContext
    {
        public WorkoutDataDbContext (DbContextOptions options) : base (options)
        { }

        public DbSet<Weight> Weights { get; set; }
        public DbSet<Workout> Workouts { get; set; }
    }
}
