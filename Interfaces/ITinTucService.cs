using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Web_TinTuc.Models;

namespace Web_TinTuc.Interfaces
{
    public interface ITinTucService
    {
        List<TinTuc> Get();
        Dictionary<string, dynamic> GetDataTable();
        TinTuc GetById(int id);
        void Create(TinTuc model);
        void Update(TinTuc model);
        void Delete(TinTuc model);
    }
}
