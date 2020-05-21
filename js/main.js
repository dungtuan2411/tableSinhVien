function getMyEle(id) {
  return document.getElementById(id);
}
function layThongTin() {
  var maSinhVien = getMyEle('maSV').value;
  var tenSinhVien = getMyEle('tenSV').value;
  var loaiSinhVien = getMyEle("loaiSV").value;
  var diemToan = parseFloat(getMyEle('diemToan').value);
  var diemVan = parseFloat(getMyEle('diemVan').value);
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
  getMyEle('spanMaSV').innerHTML = sinhVien.maSV;
  getMyEle('spanTenSV').innerHTML = sinhVien.tenSV;
  getMyEle('spanLoaiSV').innerHTML = sinhVien.loaiSV;
  getMyEle('spanTB').innerHTML = sinhVien.tinhDiemTB();
  getMyEle('spanXepLoai').innerHTML = sinhVien.xepLoaiSV();
}


