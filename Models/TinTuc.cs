using System;
using System.Collections.Generic;

namespace Web_TinTuc.Models
{
    public partial class TinTuc
    {
        public long Id { get; set; }
        public string TieuDe { get; set; }
        public string MoTa { get; set; }
        public string NoiDung { get; set; }
        public string HinhAnh { get; set; }
        public DateTime? NgayDang { get; set; }
    }
}
