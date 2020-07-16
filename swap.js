var a=5;
var b=7;
console.log("before swap:a=",a,"b=",b);
var temp=a;
a=b;
b=temp;
console.log("after swap:a=",a,"b=",b);

//new one..

var x=5;
var y=7;
x=x+y;
y=x-y;
x=x-y;
console.log("after swap:x =",x,"y=",y);

var p=5;
var q=7;
[p,q]=[q,p];
console.log("after swap: p=",p,"q=",q);

//random number

var num=3.9999;
var result1=Math.floor(num);
var result3=Math.ceil(num);
var result4=Math.round(num);
var result5=Math.random();
var result6=Math.random()*10;
var rand=Math.round(result6);
console.log(result1);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(rand);
for(var a=0;a<10;a++){
    var b=Math.random()*6;
    var output=Math.round(b);
    console.log(output);
}

var business = 450;
var minister = 350;
var teacher=590;
if(business>minister){
    if(business>teacher){
        console.log("business is bigger");
    }
    else{
        console.log("teacher is bigger");
    }
    
}
else{
    if(minister>teacher){
        console.log("Minister is bigger");
    }
    else{
        console.log("Teacher is bigger");
    }
}

//use max to get the biggest number

var g=78;
var h=89;
var k=56;
var max=Math.max(g,h,k);
console.log(max);

//largest from an array

var marks=[45,56,67,78,89];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var element=marks[i];
    if(element>max){
        max=element;
    }
}
console.log("Highest is: ",max);
//sum of array numbers

var numbersss=[45,44,56,67,78,89,65];
var sum=0;
for(var i=0;i<numbersss.length;i++){
    var elements=numbersss[i];
    sum=sum+element;
}
console.log("Total=",sum);

//function wise


function getArraySum(num){
    var sum=0;
    for(var d=0;d<num.length;d++){
        var value=num[d];
        sum=sum+value;
    }
    return sum;
}
var num=[13,45,56,78,89,90,111,134,345];
var resu=getArraySum(num);
console.log(resu);
var num1=[13,45,56,78,89,90,111,134,345,34,56];
var resu3=getArraySum(num1);
console.log(resu3);