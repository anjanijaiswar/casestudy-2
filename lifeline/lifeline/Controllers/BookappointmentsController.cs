using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using lifeline;

namespace lifeline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookappointmentsController : ControllerBase
    {
        private readonly postgresContext _context;

        public BookappointmentsController(postgresContext context)
        {
            _context = context;
        }

        // GET: api/Bookappointments
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bookappointment>>> GetBookappointments()
        {
            return await _context.Bookappointments.ToListAsync();
        }

        // GET: api/Bookappointments/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Bookappointment>> GetBookappointment(int id)
        {
            var bookappointment = await _context.Bookappointments.FindAsync(id);

            if (bookappointment == null)
            {
                return NotFound();
            }

            return bookappointment;
        }

        // PUT: api/Bookappointments/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBookappointment(int id, Bookappointment bookappointment)
        {
            if (id != bookappointment.Id)
            {
                return BadRequest();
            }

            _context.Entry(bookappointment).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookappointmentExists(id))
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

        // POST: api/Bookappointments
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Bookappointment>> PostBookappointment(Bookappointment bookappointment)
        {
            _context.Bookappointments.Add(bookappointment);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBookappointment", new { id = bookappointment.Id }, bookappointment);
        }

        // DELETE: api/Bookappointments/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Bookappointment>> DeleteBookappointment(int id)
        {
            var bookappointment = await _context.Bookappointments.FindAsync(id);
            if (bookappointment == null)
            {
                return NotFound();
            }

            _context.Bookappointments.Remove(bookappointment);
            await _context.SaveChangesAsync();

            return bookappointment;
        }

        private bool BookappointmentExists(int id)
        {
            return _context.Bookappointments.Any(e => e.Id == id);
        }
    }
}
