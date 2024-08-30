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
    public class ContactController : ControllerBase
    {
        private readonly SionContext _context;
        public ContactController(SionContext context) { _context = context; }

        [HttpGet]
        public ActionResult<IEnumerable<ContactVm>> GetMessages()
        {
            if (_context.Contacts == null)
            {
                return NotFound();
            }
            var contacts = _context
                .Contacts.OrderByDescending(v => v.Publication)
                .Select(s => s.Vm()).ToList();

            return contacts;
        }

        [HttpPost]
        [Route("creer")]
        public async Task<ActionResult<ContactDto>> PostAccueil(ContactDto contact)
        {
            if (_context.Contacts == null)
            {
                return Problem("Entity set 'SionContext.Contacts'  is null.");
            }

            _context.Contacts.Add(contact.ToDto());
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetContact", new { id = contact.Id }, contact);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ContactVm>> GetContact(int id)
        {
            if (_context.Contacts == null)
            {
                return NotFound();
            }

            var contact = await _context.Contacts
                .FirstOrDefaultAsync(a => a.Id == id);

            if (contact == null)
            {
                return NotFound();
            }

            var vm = contact.Vm();

            return vm;
        }
    }
}
