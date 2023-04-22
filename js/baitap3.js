/**
 * Khối 1: Input
 * + usd, numUsd, changeVnd;
 * 
 * Khối 2:
 * B1: Tạo hàm, gắn hàm vào button
 * B2: Trong hàm, tạo công thức quy đổi
 *     changeVnd = numUsd * usd
 * Khối 3: Output
 *  Giá trị quy đổi từ USD sang VND
 */

function changeToVnd(){
    const usd = 23500
    var numUsd = document.getElementById("inputUsd").value;
    var changeVnd = Number(numUsd)* usd;

    document.getElementById("txtResult3").innerHTML = "Giá trị đổi sang VND:" + changeVnd.toLocaleString() + "VND";

}
document.getElementById("btnChange").onclick = changeToVnd;
