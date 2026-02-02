let n = parseInt(prompt("Nhập số nguyên"));

if(n%2==0){
    console.log("số chẵn");
}else{
    console.log("số lẻ");
}
if (n>1){
    console.log("Số dương");
    for (let i = 1; i <= n; i++){
        console.log(i);
    }
}else if(n==0){
    console.log("n = 0");
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}else{
    console.log("Sô âm");
    console.log("Giá trị n không hợp lệ để tạo dãy số");
}