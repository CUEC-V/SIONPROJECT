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
            var accueils = _context.Accueils
                .Include(t => t.MenuThematiques)
                .Include(t => t.ReseauxSociauxes)
                .Select(s => new AccueilVM { Accueil = s.Vm(), MenuThematique = s.MenuThematiques.Select(v => v.Vm()).ToList(), ReseauxSociaux = s.ReseauxSociauxes.Select(v => v.Vm()).ToList() }).ToList();

            return accueils;
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
                .Include(t => t.ReseauxSociauxes)
                .FirstOrDefaultAsync(a => a.Id == id);

            if (accueil == null)
            {
                return NotFound();
            }

            return new AccueilVM
            {
                Accueil = accueil.Vm(),
                MenuThematique = accueil.MenuThematiques.Select(v => v.Vm()).ToList(),
                ReseauxSociaux = accueil.ReseauxSociauxes.Select(v => v.Vm()).ToList()
            };
        }

        // PUT: api/Accueil/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        //[HttpPut("{id}")]
        [HttpPut]
        [Route("modifie")]
        public async Task<IActionResult> PutAccueil(AccueilDto accueil)
        {
            var dto = await _context.Accueils.FindAsync(accueil.Id);
            if (dto == null)
                return NotFound();
                
                _context.Entry(dto).State = EntityState.Detached;

            var dt = accueil.ToDto();

            try
            {
                _context.Accueils.Entry(dt).State = EntityState.Modified;
            }
            catch (Exception ex)
            {

            }

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException ex)
            {

            }

            return NoContent();
        }

        // POST: api/Accueil
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        [Route("creer")]
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
