using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Web_TinTuc.Interfaces;
using Web_TinTuc.Models;

namespace Web_TinTuc.Controllers
{
    public class HomeController : Controller
    {
        private readonly ITinTucService _tintucService;
        public HomeController(ITinTucService tintucService)
        {
            _tintucService = tintucService;
        }
        public ActionResult Index()
        {
            var list = _tintucService.Get();
            return View(list);
        }
        [HttpPost]
        public ActionResult Get()
        {
            var data = _tintucService.GetDataTable();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult UploadImage(HttpPostedFileBase file)
        {
            var fileName = DateTime.Now + file.FileName;
            file.SaveAs(Server.MapPath("~/Assets/images/news/" + file.FileName));
          /*  if (file != null)
            {
                _tintucService.UploadImage(TaiKhoanID, file.FileName);
            }*/
            return Json(file.FileName, JsonRequestBehavior.AllowGet);
        }
        [HttpPost, ValidateInput(false)]
        public ActionResult Create(TinTuc model)
        {
            _tintucService.Create(model);
            var data = "";
            return Json(data, JsonRequestBehavior.AllowGet);
           
        }
        [HttpPost, ValidateInput(false)]
        public ActionResult Update(TinTuc model)
        {
            _tintucService.Update(model);
            var data = "";
            return Json(data, JsonRequestBehavior.AllowGet);

        }

        [HttpPost, ValidateInput(false)]
        public ActionResult Delete(TinTuc model)
        {
            _tintucService.Delete(model);
            var data = "";
            return Json(data, JsonRequestBehavior.AllowGet);

        }




        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}