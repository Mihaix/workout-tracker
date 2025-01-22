using backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeightsController : ControllerBase
    {
        private readonly WorkoutDataDbContext _context;

        public WeightsController(WorkoutDataDbContext context)
        {
            _context = context;
        }

        [HttpGet]

        public async Task<ActionResult<List<Weight>>> GetWeights()
        {
            var weights = await _context.Weights.ToListAsync();
            return Ok(weights);
        }

        [HttpPost]

        public async Task<ActionResult<List<Weight>>> PostWeight(Weight weight)
        {
            _context.Weights.Add(weight);
            await _context.SaveChangesAsync();

            return Ok(weight);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Weight>>> DeleteWeight(int id)
        {
            var weigth = await _context.Weights.FindAsync(id);

            if (weigth == null)
                return NotFound("Not found");

            _context.Weights.Remove(weigth);
            await _context.SaveChangesAsync();

            return NoContent();
                    
        }

    }
}
