﻿using Microsoft.AspNetCore.Mvc;

namespace InfoStore.Controllers
{
    public class CarrinhoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
