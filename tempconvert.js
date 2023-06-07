/*let temp =40;
temp=tofahrenheit(temp);
console.log(temp)
temp=tocelcius(temp);
console.log(Math.floor(temp))

document.getElementById('saves').onclick=function tocelcius (temp){
return temp-32*(5/9);
}


document.getElementById('saves').onclick=function tofahrenheit(temp){
    return temp*9/5+32
}*/


let value_of_temp=document.getElementById("num1")
value_of_temp=window.prompt("enter temperature");

document.getElementById('save1').onclick=function(){
    console.log("the value is ="+(value_of_temp-32*5/9));
}


document.getElementById('save2').onclick=function(){
    console.log("the value of farenheit is ="+value_of_temp*9/5+32);
}

