using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using SION.DbData;
using SION.Models;

namespace SION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly SionContext _context;
        private readonly SignInManager<IdentityUser> _signInManager;

        public AuthController(SionContext context, SignInManager<IdentityUser> signInManager)
        {
            _context = context;
            _signInManager = signInManager;
        }

        [HttpPost]
        [Route("login")]
        public async Task<ActionResult<SION.Models.Login?>> Login(SION.Models.Login login)
        {
            if (login is null)
            {
                return Ok();
            }

           // var result = await _signInManager.SignInAsync(new IdentityUser { Email=login.LoginTapeFormCtrl, UserName = login.LoginTapeFormCtrl, PasswordHash ="Cheritha1$"});

            return Ok(login);
        }

        [HttpPost]
        [Route("password")]
        public async Task<ActionResult<PasswordModel?>> Password(PasswordModel password)
        {
            if (password is null)
            {
                return Ok(false);
            }

            var result = await _signInManager.PasswordSignInAsync(password.LoginTapeFormCtrl,
                        password.PasswordTapeFormCtrl, true, lockoutOnFailure: true);

            return Ok(result.Succeeded);
        }
    }
}
