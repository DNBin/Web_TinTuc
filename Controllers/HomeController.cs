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

        public ActionResult Posts()
        {
            var list = _tintucService.Get();
            return View(list);
        }

        public ActionResult Detail(int id)
        {
            var data = _tintucService.GetById(id);
            return View(data);
        }


        [HttpPost]
        public ActionResult Get()
        {
            var data = _tintucService.GetDataTable();
            return Json(data, JsonRequestBehavior.AllowGet);
        }

        public JsonResult UploadImage(HttpPostedFileBase upload)
        {
            Random rd = new Random();
            var fileName = rd.Next(1, 10000).ToString() + upload.FileName;
            upload.SaveAs(Server.MapPath("~/Assets/images/news/" + fileName));
          /*  if (file != null)
            {
                _tintucService.UploadImage(TaiKhoanID, file.FileName);
            }*/
            return Json(fileName, JsonRequestBehavior.AllowGet);
        }

        public JsonResult UploadImageCkEditor(HttpPostedFileBase upload)
        {
            Random rd = new Random();
            var fileName = rd.Next(1, 10000).ToString() + upload.FileName;
            upload.SaveAs(Server.MapPath("~/Assets/images/news/" + fileName));

            var data = new Dictionary<string, dynamic>()
            {
                {"fileName", fileName },
                {"uploaded", 1 },
                {"url", "https://localhost:44370/Assets/images/news/"+fileName },
            };

            return Json(data, JsonRequestBehavior.AllowGet);
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


        [HttpPost]
        public ActionResult GetListNews()
        {
            var data = _tintucService.GetListNews();
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