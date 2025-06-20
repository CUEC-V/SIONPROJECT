using Humanizer;
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
        private readonly IWebHostEnvironment _environment;

        public RessourceController(SionContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [HttpGet]
        public ActionResult<IEnumerable<RessourceDto>> GetRessources(string? type)
        {
            if (_context.Ressources == null)
            {
                return NotFound();
            }

            //var ressources = _context
            //    .Ressources.OrderByDescending(v => v.Creation)
            //    .Select(s => s.Map()).ToList();

            var ressources = _context.Ressources.ToList();

            if (!string.IsNullOrEmpty(type))
            {
                ressources = ressources.FindAll(r => r.TypeRessource == type);
            }

            if (!ressources.Any())
            {
                return new List<RessourceDto>();
            }

            return ressources.OrderByDescending(v => v.Creation)
                .Select(s => s.Map()).ToList();
        }

        [HttpPost]
        [Route("creer")]
        public async Task<ActionResult<RessourceDto>> PostAccueil(RessourceDto ressource)
        {
            if (_context.Ressources == null)
            {
                return Problem("Entity set 'SionContext.Ressources'  is null.");
            }

            try
            {
                _context.Ressources.Add(ressource.ToDto());
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                var teu = ex;
            }
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

        [HttpPost]
        [Route("fichier")]

        public async Task<ActionResult> File(string ressourceKey)
        {
            if (ressourceKey is null)
            {
                return BadRequest();
            }

            Ressource? ressource = null;
            try
            {
                ressource = await _context.Ressources.FindAsync(Convert.ToInt32(ressourceKey));
            }
            catch (Exception ex)
            {

            }

            if (ressource == null)
            {
                return BadRequest();
            }

            var httpRequest = HttpContext.Request;
            var files = httpRequest.Form.Files;
            if (!files.Any())
            {
                return BadRequest();
            }

            var file = httpRequest.Form.Files[0];
            ressource.Url = await file.Create(_environment);

            _context.Entry(ressource).State = EntityState.Detached;

            _context.Entry(ressource).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return BadRequest();
            }

            return Ok(ressource);
        }

        [HttpPut]
        [Route("modifie")]
        public async Task<IActionResult> PutRessource(RessourceDto ressource)
        {
            var dto = await _context.Ressources.FindAsync(ressource.Id);
            if (dto == null)
                return NotFound();

            dto.IsPublie = !dto.IsPublie;

            _context.Ressources.Entry(dto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {

            }

            return NoContent();
        }
    }
}
