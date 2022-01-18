//tính tiền

document.getElementById("tinhTien").onclick = function () {
  var soKM = document.getElementById("soKM").value;
  var thoiGianCho = document.getElementById("thoiGianCho").value;
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;
  var xuatTien = document.querySelector("#xuatTien");
  var tong = 0;

  switch (loaiXe) {
    case 'Uber X':
      tong = tongXeCoBan(0, soKM, thoiGianCho);
      break;
    case 'Uber SUV':
      tong = tongXeCoBan(1, soKM, thoiGianCho);
      break;
    case 'Uber Black':
      tong = tongXeCoBan(2, soKM, thoiGianCho);
      break;
    default:
      break;
  }
  (document.getElementsByClassName("dongia")[0].style.display = "block"),
    (xuatTien.innerHTML = tong.toLocaleString("vi", {
      style: "currency",
      currency: "VND",
    }));
};

function tongXeCoBan(sotienTang, soKM, thoiGianCho) {
  var tong;
  sotienTang = sotienTang*1000;
  if (soKM <= 1) {
    tong = (8000 + sotienTang);
  } else {
    if (soKM < 20) tong = (12000 + sotienTang*2);
    else tong =  (10000 + sotienTang*2);
  }
  return (tong + (thoiGianCho * (sotienTang+2000))) ;
}

//in hóa đơn
document.getElementById("inHoaDon").onclick = function () {
  var soKM = document.getElementById("soKM").value;
  var thoiGianCho = document.getElementById("thoiGianCho").value;
  var loaiXe = document.querySelector('input[name="selector"]:checked').value;
  var xuatTien = document.querySelector("#xuatTien");
  var tong = 0;
  switch (loaiXe) {
    case 'Uber X':
      tong = tongXeCoBan(0, soKM, thoiGianCho);
      break;
    case 'Uber SUV':
      tong = tongXeCoBan(1, soKM, thoiGianCho);
      break;
    case 'Uber Black':
      tong = tongXeCoBan(2, soKM, thoiGianCho);
      break;
    default:
      break;
  }
  var inLoaiXe = document.querySelector("#inLoaiXe");
  var inSoKM = document.querySelector("#inSoKM");
  var inSoPhut = document.querySelector("#inSoPhut");
  var xuatTien = document.querySelector("#inTongTien");
  inLoaiXe.innerHTML = loaiXe;
  inSoKM.innerHTML = soKM +"KM";
  inSoPhut.innerHTML = thoiGianCho +"Phut";
  xuatTien.innerHTML = tong.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};
