var icon = "<i class='fa fa-hand-point-right'></i>";
var arrayNum = [];

function themSo() {
  var num = Number(document.getElementById("numN").value);
  arrayNum.push(num);
  document.getElementById("hienThi1").innerHTML = icon + " " + arrayNum;
}
function tongSoDuong() {
  var tong = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0) {
      tong += arrayNum[i];
    }
  }
  document.getElementById("hienThi2").innerHTML =
    icon + " " + "Tổng số dương: " + tong;
}
function demSoDuong() {
  var count = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0) {
      count++;
    }
  }
  document.getElementById("hienThi3").innerHTML =
    icon + " " + "Số dương: " + count;
}
function soNhoNhat() {
  var min = arrayNum[0];
  for (var i = 1; i < arrayNum.length; i++) {
    if (arrayNum[i] < arrayNum[0]) {
      min = arrayNum[i];
    }
  }
  document.getElementById("hienThi4").innerHTML =
    icon + " " + "Số nhỏ nhất: " + min;
}
function soDuongNhoNhat() {
  var arrayNumCopy = [];
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] > 0) {
      arrayNumCopy.push(arrayNum[i]);
    }
  }
  var min = arrayNumCopy[0];
  if (arrayNumCopy == 0) {
    document.getElementById("hienThi5").innerHTML =
      "Không có số dương nào trong mảng";
  } else {
    for (var i = 0; i < arrayNumCopy.length; i++) {
      if (arrayNumCopy[i] < arrayNumCopy[0]) {
        min = arrayNumCopy[i];
      }
    }
    document.getElementById("hienThi5").innerHTML =
      icon + " " + "Số dương nhỏ nhất: " + min;
  }
}
function soChanCuoiCung() {
  var soChan = 0;
  for (var i = 0; i < arrayNum.length; i++) {
    if (arrayNum[i] % 2 == 0) {
      soChan = arrayNum[i];
    }
  }
  document.getElementById("hienThi6").innerHTML =
    icon + " " + "Số chẵn cuối cùng: " + soChan;
}
function doiCho() {
  var viTri1 = document.getElementById("inpVT1").value;
  var viTri2 = document.getElementById("inpVT2").value;
  var temp = arrayNum[viTri1];
  arrayNum[viTri1] = arrayNum[viTri2];
  arrayNum[viTri2] = temp;
  document.getElementById("hienThi7").innerHTML =
    icon + " Mảng sau khi đổi: " + arrayNum;
}
function sapXepTangDan() {
  for (var i = 0; i < arrayNum.length; i++) {
    for (var j = 0; j < arrayNum.length - 1; j++) {
      if (arrayNum[j] > arrayNum[j + 1]) {
        var temp = arrayNum[j];
        arrayNum[j] = arrayNum[j + 1];
        arrayNum[j + 1] = temp;
      }
    }
  }
  document.getElementById("hienThi8").innerHTML = icon + " Mảng sau khi sắp xếp: " + arrayNum;
}
function soNguyenToDT(){
    for(var i = 0; i < arrayNum.length; i++){
        var count = 0;
        for(var j = 2; j < arrayNum[i]; j++){
            if(arrayNum[i]  % j == 0){
                count++;
            }
        }
        if(count == 0 && arrayNum[i] > 1){
            document.getElementById("hienThi9").innerHTML = icon + " Số nguyên tố đầu tiên: " + arrayNum[i];
            break;
        }  
    }
}
var arrayNum2 = [];
function themSo2() {
    var soNguyen = Number(document.getElementById("inpSoNguyen").value);
    arrayNum2.push(soNguyen);
    document.getElementById("hienThi10").innerHTML = icon + " " + arrayNum2;
}
function demSoNguyen() {
    var count = 0;
    for(var i = 0; i < arrayNum2.length; i++){
        if(Number.isInteger(arrayNum2[i])){
            count++;
        }
        
    }
    document.getElementById("hienThi11").innerHTML = icon + " " + count;
}
function soSanh() {
    var soDuong = 0;
    var soAm = 0;
    var show = document.getElementById("hienThi12");
    for(var i = 0; i < arrayNum.length; i++){
        if(arrayNum[i] > 0){
            soDuong++;
        } else{
            soAm++;
        }
    }
    if(soDuong > soAm){
        show.innerHTML = icon + " Số dương > Số âm";
    } else if(soDuong == soAm || arrayNum == 0){
        show.innerHTML = icon + " Số âm = Số dương";
    } 
    else{
        show.innerHTML = icon + " Số dương < Số âm";
    }
}
