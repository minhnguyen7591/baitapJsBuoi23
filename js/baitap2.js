/**
 * Khối 1: Input
 * + num1,num2,num2,num4,num5, sumTb
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính lương
 *     sumTb = (num1+num2+num3+num4+num5) / 5
 * Khối 3: Output
 *  Giá trị trung bình của tổng 5 số
 */

function calcsumTb(){
    var num1 = document.getElementById("input1").value;
    var num2 = document.getElementById("input2").value;
    var num3 = document.getElementById("input3").value;
    var num4 = document.getElementById("input4").value;
    var num5 = document.getElementById("input5").value;
    var sumTb = (Number(num1)+Number(num2)+Number(num3)+Number(num4)+Number(num5)) / 5;
    
    document.getElementById("txtResultTb").innerHTML = "Giá trị trung bình của tổng 5 số:" + sumTb;
}
document.getElementById("btnCalcTb").onclick = calcsumTb;

