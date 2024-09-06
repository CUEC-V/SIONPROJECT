using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SION.DbData;
using SION.Models;

namespace SION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RessourceController : ControllerBase
    {
        private readonly SionContext _context;

        public RessourceController(SionContext context)
        { 
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<RessourceDto>> GetRessources()
        {
            if (_context.Ressources == null)
            {
                return NotFound();
            }
            var ressources = _context
                .Ressources.OrderByDescending(v => v.Creation)
                .Select(s => s.Map()).ToList();

            return ressources;
        }

        [HttpPost]
        [Route("creer")]
        public async Task<ActionResult<RessourceDto>> PostAccueil(RessourceDto ressource)
        {
            if (_context.Ressources == null)
            {
                return Problem("Entity set 'SionContext.Ressources'  is null.");
            }

            _context.Ressources.Add(ressource.ToDto());
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRessource", new { id = ressource.Id }, ressource);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<RessourceDto>> GetRessource(int id)
        {
            if (_context.Ressources == null)
            {
                return NotFound();
            }

            var ressource = await _context.Ressources
                .FirstOrDefaultAsync(a => a.Id == id);

            if (ressource == null)
            {
                return NotFound();
            }

            var vm = ressource.Map();

            return vm;
        }
    }
}
