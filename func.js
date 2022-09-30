function sum(n) {
    var r=0;
    while (n!=0){
        r=r+(n%10);
        n=Math.floor(n/10);
    }
    return r;
}
function myFunction() {
  var n = document.getElementById("num").value;
  var r= sum(n);
  while(r>=10){
     r=sum(r);}
  alert("Lucky number is "+r);

 
}
