using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SION.DbData;
using SION.Models;
using SION.Models.Dto;
using SION.Models.Mapper;

namespace SION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReseauxSocialController : ControllerBase
    {
        private readonly SionContext _context;

        public ReseauxSocialController(SionContext context)
        {
            _context = context;
        }

        // GET: api/ReseauxSocial
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ReseauxSociauxDto>>> GetReseauxSociauxDto()
        {
            if (_context.ReseauxSociaux == null)
            {
                return NotFound();
            }

            return await _context.ReseauxSociaux.Select(s => s.Map()).ToListAsync();
        }

        // GET: api/ReseauxSocial/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ReseauxSociauxDto>> GetReseauxSociauxDto(int id)
        {
            if (_context.ReseauxSociaux == null)
            {
                return NotFound();
            }
            var reseauxSociaux = await _context.ReseauxSociaux.FindAsync(id);

            if (reseauxSociaux == null)
            {
                return NotFound();
            }

            return reseauxSociaux.Map();
        }

        // PUT: api/ReseauxSocial/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReseauxSociauxDto(int id, ReseauxSociauxDto reseauxSociaux)
        {
            if (id != reseauxSociaux.Id)
            {
                return BadRequest();
            }

            _context.Entry(reseauxSociaux.ToDto()).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReseauxSociauxDtoExists(id))
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

        // POST: api/ReseauxSocial
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ReseauxSociauxDto>> PostReseauxSociauxDto(ReseauxSociauxDto reseauxSociaux)
        {
            if (_context.ReseauxSociaux == null)
            {
                return Problem("Entity set 'SionContext.ReseauxSociauxDto'  is null.");
            }
            _context.ReseauxSociaux.Add(reseauxSociaux.ToDto());
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetReseauxSociauxDto", new { id = reseauxSociaux.Id }, reseauxSociaux);
        }

        // DELETE: api/ReseauxSocial/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReseauxSociauxDto(int id)
        {
            if (_context.ReseauxSociaux == null)
            {
                return NotFound();
            }
            var reseauxSociauxDto = await _context.ReseauxSociaux.FindAsync(id);
            if (reseauxSociauxDto == null)
            {
                return NotFound();
            }

            _context.ReseauxSociaux.Remove(reseauxSociauxDto);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReseauxSociauxDtoExists(int id)
        {
            return (_context.ReseauxSociaux?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
