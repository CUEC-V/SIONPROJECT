using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SION.DbData;
using SION.Models;
using SION.Models.Mapper;

namespace SION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccueilController : ControllerBase
    {
        private readonly SionContext _context;

        public AccueilController(SionContext context)
        {
            _context = context;
        }

        // GET: api/Accueil
        [HttpGet]
        public ActionResult<IEnumerable<AccueilVM>> GetAccueils()
        {
            if (_context.Accueils == null)
            {
                return NotFound();
            }
            return _context.Accueils
                .Include(t => t.MenuThematiques)
                .Select(s => new AccueilVM { Accueil = s.Vm(), MenuThematique = s.MenuThematiques.Select(v => v.Vm()).ToList() }).ToList();
        }

        // GET: api/Accueil/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AccueilVM>> GetAccueil(int id)
        {
            if (_context.Accueils == null)
            {
                return NotFound();
            }
            var accueil = await _context.Accueils
                .Include(t => t.MenuThematiques)
                .FirstOrDefaultAsync(a => a.Id == id);

            if (accueil == null)
            {
                return NotFound();
            }

            return new AccueilVM
            {
                Accueil = accueil.Vm(),
                MenuThematique = accueil.MenuThematiques.Select(v => v.Vm()).ToList()
            };
        }

        // PUT: api/Accueil/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccueil(int id, AccueilDto accueil)
        {
            if (id != accueil.Id)
            {
                return BadRequest();
            }

            _context.Entry(accueil.ToDto()).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccueilExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Accueil
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AccueilDto>> PostAccueil(AccueilDto accueil)
        {
            if (_context.Accueils == null)
            {
                return Problem("Entity set 'SionContext.Accueils'  is null.");
            }
            _context.Accueils.Add(accueil.ToDto());
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccueil", new { id = accueil.Id }, accueil);
        }

        // DELETE: api/Accueil/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccueil(int id)
        {
            if (_context.Accueils == null)
            {
                return NotFound();
            }
            var accueil = await _context.Accueils.FindAsync(id);
            if (accueil == null)
            {
                return NotFound();
            }

            _context.Accueils.Remove(accueil);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccueilExists(int id)
        {
            return (_context.Accueils?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
