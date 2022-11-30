using System;
using System.Data.Entity;
using Web_TinTuc.Models;

namespace Web_TinTuc.Data
{
    public partial class DataContext : DbContext
    {
        public virtual DbSet<TinTuc> TinTucs { get; set; }

        public DataContext() : base("name=ThiConnectionString")
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TinTuc>().ToTable("TinTuc");
            modelBuilder.Entity<TinTuc>().Property(e => e.Id).HasColumnName("ID");
            modelBuilder.Entity<TinTuc>().Property(e => e.TieuDe).HasMaxLength(100);
            modelBuilder.Entity<TinTuc>().Property(e => e.MoTa).HasMaxLength(200);
            modelBuilder.Entity<TinTuc>().Property(e => e.NoiDung).HasColumnType("ntext");
            modelBuilder.Entity<TinTuc>().Property(e => e.NgayDang).HasColumnType("date");
            modelBuilder.Entity<TinTuc>().Property(e => e.HinhAnh)
                    .HasMaxLength(100)
                    .IsUnicode(false);
        }

       
    }
}
