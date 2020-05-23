function getMyID(id) {
  return document.getElementById(id);
}
function layThongTin() {
  var maSinhVien = getMyID('maSV').value;
  var tenSinhVien = getMyID('tenSV').value;
  var loaiSinhVien = getMyID("loaiSV").value;
  var diemToan = parseFloat(getMyID('diemToan').value);
  var diemVan = parseFloat(getMyID('diemVan').value);
// Đối tượng
  var sinhVien = {
    maSV: maSinhVien,
    tenSV: tenSinhVien,
    loaiSV: loaiSinhVien,
    diemToan: diemToan,
    diemVan: diemVan,
    tinhDiemTB: function(){
      return (this.diemToan + this.diemVan) / 2;
    },
    xepLoaiSV: function(){
      var diemTB = this.tinhDiemTB();
      var xepLoai = "";
      if (diemTB >= 8) {
        xepLoai = 'Gioi';
      }
      else if (diemTB < 8 && diemTB >= 6.5) {
        xepLoai = 'Kha';
      }
      else {
        xepLoai = "Yeu";
      }
      return xepLoai;
    }
  }
  // Hiển thị
  getMyID('spanMaSV').innerHTML = sinhVien.maSV;
  getMyID('spanTenSV').innerHTML = sinhVien.tenSV;
  getMyID('spanLoaiSV').innerHTML = sinhVien.loaiSV;
  getMyID('spanTB').innerHTML = sinhVien.tinhDiemTB();
  getMyID('spanXepLoai').innerHTML = sinhVien.xepLoaiSV();
}


