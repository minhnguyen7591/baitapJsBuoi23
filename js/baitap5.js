/**
 * Khối 1: Input
 * + Số nguyên dương có 2 chữ số
 * + num
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính
 *     ten = math.floor(num/10)
 *     unit = num % 10;
 *     total = ten + unit;
 * Khối 3: Output
 *  + Tổng 2 chữu số từu số nguyên dương
 *  + Total
 */
function calcTotal(){
    var num = document.getElementById("num2so").value;
    // var ten = Math.floor(num / 10);
    // var unit = num % 10;
    // var total = ten + unit;
    var total = (Math.floor(num / 10)) + (num % 10);
    document.getElementById("txtResulTotal").innerHTML = "Tổng 2 chữ số:" + total;

}
document.getElementById("btnCalcTotal").onclick = calcTotal;
