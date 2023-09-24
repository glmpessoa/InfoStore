using Microsoft.AspNetCore.Mvc;

namespace InfoStore.Controllers
{
    public class FavoritoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
