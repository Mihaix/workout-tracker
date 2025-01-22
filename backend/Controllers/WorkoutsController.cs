using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkoutsController : ControllerBase
    {
        private readonly WorkoutDataDbContext _context;

        public WorkoutsController(WorkoutDataDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Workout>>> GetWorkouts()
        {
            var workouts = await _context.Workouts.ToListAsync();
            return Ok(workouts);
        }

        [HttpPost]

        public async Task<ActionResult<List<Workout>>> PostWorkout(Workout workout)
        {
            _context.Workouts.Add(workout);
            await _context.SaveChangesAsync();

            return Ok(workout);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Workout>>> DeleteWorkout(int id)
        {
            var workout = await _context.Workouts.FindAsync(id);

            if (workout == null)
                return NotFound("Not found");

            _context.Workouts.Remove(workout);
            await _context.SaveChangesAsync();

            return NoContent();

        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Workout>> PutWorkout(int id, Workout workout)
        {
            if (id != workout.WorkoutId)
                return BadRequest();

            if (!_context.Workouts.Any(e => e.WorkoutId == id))
                return NotFound();

            _context.Entry(workout).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();

        }
    }
}
