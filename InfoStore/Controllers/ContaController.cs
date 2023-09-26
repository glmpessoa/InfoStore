using Microsoft.AspNetCore.Mvc;

namespace InfoStore.Controllers
{
    public class ContaController : Controller
    {
        public IActionResult Login(string login, string senha)
        {
            return View();
        }

        public IActionResult Registro(string registro, string senha) 
        { 
            return View();
        }
    }
}
