/**
 * Khối 1: Input
 * + length(chiều dài), width (chiều rộng)
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức chu vi, diện tích hình chữ nhật
 *     chuviP = (length + width) * 2;
 *     dientichS = length * width;
 * Khối 3: Output
 *  Chu vi hình chữ nhật, diện tích hình chữ nhật
 */

function calcPsHcn(){
    var length = document.getElementById("lengthHcn").value;
    var width = document.getElementById("widthHcn").value;
    //console.log(length,width);
    chuviP = (Number(length) + Number(width)) * 2;
    dientichS = length * width;

    document.getElementById("txtResultPS").innerHTML = "Chu vi hình chữ nhật là:" + chuviP + "<br> Diện tích hình chữ nhật là:" + dientichS;
}
document.getElementById("btnCalcPS").onclick = calcPsHcn;