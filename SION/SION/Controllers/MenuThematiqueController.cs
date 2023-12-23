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
    public class MenuThematiqueController : ControllerBase
    {
        private readonly SionContext _context;

        public MenuThematiqueController(SionContext context)
        {
            _context = context;
        }

        // GET: api/MenuThematique
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MenuThematiqueDto>>> GetMenuThematiques()
        {
          if (_context.MenuThematiques == null)
          {
              return NotFound();
          }
            return await _context.MenuThematiques.Select(s=>s.Map()) .ToListAsync();
        }

        // GET: api/MenuThematique/5
        [HttpGet("{id}")]
        public ActionResult<MenuThematiqueDto> GetMenuThematique(int id)
        {
          if (_context.MenuThematiques == null)
          {
              return NotFound();
          }
            var menuThematique = _context.MenuThematiques.Find(id);

            if (menuThematique == null)
            {
                return NotFound();
            }

            return menuThematique.Map();
        }

        // PUT: api/MenuThematique/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMenuThematique(int id, MenuThematiqueDto menuThematique)
        {
            if (id != menuThematique.Id)
            {
                return BadRequest();
            }

            _context.Entry(menuThematique.ToDto()).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MenuThematiqueExists(id))
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

        // POST: api/MenuThematique
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MenuThematiqueDto>> PostMenuThematique(MenuThematiqueDto menuThematique)
        {
          if (_context.MenuThematiques == null)
          {
              return Problem("Entity set 'SionContext.MenuThematiques'  is null.");
          }
            _context.MenuThematiques.Add(menuThematique.ToDto());
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMenuThematique", new { id = menuThematique.Id }, menuThematique);
        }

        // DELETE: api/MenuThematique/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMenuThematique(int id)
        {
            if (_context.MenuThematiques == null)
            {
                return NotFound();
            }
            var menuThematique = await _context.MenuThematiques.FindAsync(id);
            if (menuThematique == null)
            {
                return NotFound();
            }

            _context.MenuThematiques.Remove(menuThematique);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MenuThematiqueExists(int id)
        {
            return (_context.MenuThematiques?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
