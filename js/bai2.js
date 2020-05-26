function getMyEle(id) {
    return document.getElementById(id);
}
var mangSinhVien = [];
function hienThi(){
    // DOM đến form
    var txtmaSV = getMyEle('txtMaSV').value;
    var txtTenSV = getMyEle('txtTenSV').value;
    var txtLoaiSV = getMyEle('txtLoaiSV').value;
    var txtToan = parseFloat(getMyEle('txtToan').value);
    var txtLy = parseFloat(getMyEle('txtLy').value);
    var txtHoa = parseFloat(getMyEle('txtHoa').value);
    var txtRenLuyen = parseFloat(getMyEle('txtRen').value);
    // Tạo đối tượng sinh viên
    var sinhVien = {    
        maSV: txtmaSV,
        tenSV: txtTenSV,
        loaiSV: txtLoaiSV,
        diemRL: txtRenLuyen,
        diemTrungBinh: function() {
            return (txtToan + txtLy + txtHoa)/3;
        }
    }
    // Push đối tượng vào mảng
    mangSinhVien.push(sinhVien);  
    inThongTin();
}
function inThongTin() {
    var tbodySV = getMyEle('tbodySinhVien'); // Dom đến tbody
    tbodySV.innerHTML = "";
    // Duyệt mảng bằng for
    for (let i = 0; i < mangSinhVien.length; i++) {
        // Tạo 1 var arrSinhVien để đại diện cho 1 phần tử sinhVien trong mangSinhVien
        var arrSinhVien = mangSinhVien[i];
        
        var trSinhVien = document.createElement('tr'); // Tạo 1 dòng tr
        
        var tdMaSV = document.createElement('td'); // Tạo ô 
        tdMaSV.innerHTML = arrSinhVien.maSV;
        trSinhVien.appendChild(tdMaSV); // Hiển thị ô vào trSinhVien

        var tdTenSV = document.createElement('td');
        tdTenSV.innerHTML = arrSinhVien.tenSV;
        trSinhVien.appendChild(tdTenSV);

        var tdLoaiSV = document.createElement('td');
        tdLoaiSV.innerHTML = arrSinhVien.loaiSV;
        trSinhVien.appendChild(tdLoaiSV);

        var tdDTB = document.createElement('td');
        tdDTB.innerHTML = arrSinhVien.diemTrungBinh();
        trSinhVien.appendChild(tdDTB);

        var tdDRL = document.createElement('td');
        tdDRL.innerHTML = arrSinhVien.diemRL;
        trSinhVien.appendChild(tdDRL);

        tbodySV.appendChild(trSinhVien); // Hiển thị dòng trong tbodySinhVien
    }
}
