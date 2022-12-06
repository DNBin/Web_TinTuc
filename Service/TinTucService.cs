using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Web_TinTuc.Data;
using Web_TinTuc.Interfaces;
using Web_TinTuc.Models;

namespace Web_TinTuc.Service
{
    public class TinTucService: ITinTucService
    {
        private DataContext _context;
        public TinTucService(DataContext context)
        {
            _context = context;
        }
        public void Create(TinTuc model)
        {
            var check = _context.TinTucs.Where(x => x.TieuDe == model.TieuDe).FirstOrDefault();
            if (check != default(TinTuc))
                throw new Exception("Tin tức đã tồn tại.");
            var entity = new TinTuc();
            entity.TieuDe = model.TieuDe;
            entity.MoTa = model.MoTa;
            entity.NoiDung = model.NoiDung;
            entity.HinhAnh = model.HinhAnh;
            entity.NgayDang = DateTime.Now;

            _context.TinTucs.Add(entity);
            _context.SaveChanges();
        }

        public void Delete(TinTuc model)
        {
            var entity = _context.TinTucs.Where(x => x.Id == model.Id).FirstOrDefault();
            if (entity == default)
                throw new Exception("Không tìm thấy dữ liệu.");

            _context.TinTucs.Remove(entity);
            _context.SaveChanges();

        }

        public List<TinTuc> Get()
        {
            return _context.TinTucs.OrderByDescending(x => x.Id).ToList();
        }
        public Dictionary<string, dynamic> GetDataTable()
        {
            var list = _context.TinTucs.OrderByDescending(x => x.Id).ToList();
            var total = _context.TinTucs.OrderByDescending(x => x.Id).ToList().Count();
            var res = new Dictionary<string, dynamic>()
            {
                {"data", list },
                {"total", total },
            };
            return res;
        }

        public TinTuc GetById(int id)
        {
            return _context.TinTucs.Where(x => x.Id == id).FirstOrDefault();
        }

        public void Update(TinTuc model)
        {
            var entity = _context.TinTucs.Where(x => x.Id == model.Id).FirstOrDefault();
            if (entity == default)
                throw new Exception("Không tìm thấy dữ liệu.");

            entity.TieuDe = model.TieuDe;
            entity.MoTa = model.MoTa;
            entity.NoiDung = model.NoiDung;
            entity.HinhAnh = model.HinhAnh;
           /* entity.NgayDang = model.NgayDang;*/
            _context.SaveChanges();
        }

      /*  public void UploadImage(int id, string fileName)
        {
            var entity = _context.TinTucs.Where(x => x.TaiKhoanId == TaiKhoanID && x.IsDelete != true).FirstOrDefault();
            if (entity != default)
            {
                entity.HinhAnh = "/Assets/images/users/" + fileName;
                _context.SaveChanges();
            }
        }*/
    }
}