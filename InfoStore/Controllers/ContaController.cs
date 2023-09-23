using Microsoft.AspNetCore.Mvc;

namespace InfoStore.Controllers
{
    public class ContaController : Controller
    {
        public IActionResult Index()
        {
            List<string> contas = new List<string>();
            contas.Add("Conta 1");
            contas.Add("Conta 12");
            contas.Add("Conta 13");
            contas.Add("Conta 14");
            contas.Add("Conta 15");
            contas.Add("Conta 16");
            contas.Add("Conta 17");
            contas.Add("Conta 20");
            return View(contas);
        }
    }
}
