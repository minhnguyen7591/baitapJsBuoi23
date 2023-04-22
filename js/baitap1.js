/**
 * Khối 1: Input
 * + salary(lương 1 ngày), numberDays (số ngày)
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức tính lương
 *     totalSalary = salary * numberDays
 * Khối 3: Output
 *  Tổng tiền lương nhân viên
 */
function calcSalary(){
    var salary = 100000;
    var numberDays = document.getElementById("inputDays").value;
    var totalSalary = Number(salary) * Number(numberDays);
    console.log(numberDays,totalSalary);
    document.getElementById("txtResult").innerHTML = "Tổng lương nhân viên:" + totalSalary.toLocaleString() + "VND";
}
document.getElementById("btnCalc").onclick = calcSalary;
