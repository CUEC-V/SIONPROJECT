using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;
using NuGet.Protocol.Plugins;
using SION.Data;
using SION.DbData;
using SION.Models;
using SION.Parameter;

namespace SION.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly SionContext _context;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly IServiceProvider _serviceProvider;
        private readonly RoleManager<IdentityRole> _roleManager;
        //https://learn.microsoft.com/fr-fr/aspnet/core/security/authorization/secure-data?view=aspnetcore-9.0
        public AuthController(SionContext context, SignInManager<IdentityUser> signInManager, IServiceProvider serviceProvider, RoleManager<IdentityRole> roleManager)
        {
            _context = context;
            _signInManager = signInManager;
            _serviceProvider = serviceProvider;
            _roleManager = roleManager;
        }

        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<ActionResult<SION.Models.Login?>> Login(SION.Models.Login login)
        {
            if (login is null)
            {
                return Ok(null);
            }
            var userManager = _serviceProvider.GetService<UserManager<IdentityUser>>();
            if (userManager == null)
            {
                return Ok(null);
            }
            var user = await userManager.FindByNameAsync(login.LoginTapeFormCtrl);
            // var result = await _signInManager.SignInAsync(new IdentityUser { Email=login.LoginTapeFormCtrl, UserName = login.LoginTapeFormCtrl, PasswordHash ="Cheritha1$"});
            if (user == null)
            {
                return Ok(null);
            }

            return Ok(login);
        }

        [HttpPost]
        [Route("password")]
        [AllowAnonymous]
        public async Task<ActionResult<PasswordModel?>> Password(PasswordModel password)
        {
            if (password is null)
            {
                return Ok(false);
            }

            var result = await _signInManager.PasswordSignInAsync(password.LoginTapeFormCtrl,
                        password.PasswordTapeFormCtrl, true, lockoutOnFailure: true);

            // var userManager = _serviceProvider.GetService<UserManager<IdentityUser>>();

            //if (userManager != null)
            //{
            //    var user = await userManager.FindByNameAsync(password.LoginTapeFormCtrl);
            //    if (user == null)
            //    {
            //        user = new IdentityUser
            //        {
            //            UserName = password.LoginTapeFormCtrl,
            //            EmailConfirmed = true
            //        };

            //        await userManager.CreateAsync(user, password.PasswordTapeFormCtrl);
            //    }

            //    if (user == null)
            //    {
            //        throw new Exception("Someting went strong enough!");
            //    }

            //    return Ok(!string.IsNullOrEmpty(user.Id));
            //}

            return Ok(result.Succeeded);
        }

        [HttpPost]
        [Route("addRole")]
        [Authorize(Roles = Rights.D)]
        public async Task<ActionResult<bool?>> AddRole(SionRole myrole)
        {
            if (myrole is null)
            {
                return Ok(false);
            }

            var role = new IdentityRole(myrole.Name);

            var result = await _roleManager.RoleExistsAsync(myrole.Name);
            if (!result)
            {
                await _roleManager.CreateAsync(role);
            }

            return Ok(result);
        }

        [HttpPost]
        [Route("addUserRole")]
        [Authorize(Roles = Rights.D)]
        public async Task<ActionResult<bool?>> AddUserRole(UserRole myrole)
        {
            if(myrole is null)
            {
                return Ok(false);
            }
    
            var _userManager = _serviceProvider.GetService<UserManager<IdentityUser>>();
            var user = await _userManager.FindByIdAsync(myrole.UserId);
            if(user == null)
            {
                return Ok(false);
            }

            // https://learn.microsoft.com/en-us/answers/questions/623030/assign-user-to-role-during-registration
            try
            {
                var result = await _userManager.AddToRoleAsync(user, myrole.RoleId);

                return Ok(result.Succeeded);
            }
            catch (Exception ex)
            {
            }
            return Ok(false);
        }

        [HttpGet]
        [Route("userRoles")]
        [AllowAnonymous]
        public async Task<ActionResult<UserRoleModel>> UserRoles()
        {
            var userManager = _serviceProvider.GetService<UserManager<IdentityUser>>();
            var roles = _roleManager.Roles;
            var users = userManager?.Users;

            var all = new UserRoleModel
            {
                Users = users?.Select(x => new UserModel { UserId = x.Id, User = x.UserName }).ToList(),
                Roles = roles?.Select(x => new RoleModel { RoleId = x.Name, Role = x.Name }).ToList()
            };

            return Ok(all);
        }
    }
}
