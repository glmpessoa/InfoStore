using Microsoft.AspNetCore.Mvc;

namespace InfoStore.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(string login, string senha)
        {
            TempData["sucesso"] = "Logado com sucesso";
            return RedirectToAction("Index");
        }
    }
}
