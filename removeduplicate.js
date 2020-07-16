var name=[3,4,5,6,7,8,4,10,11,3,14,5,16];
var uniqueName=[];
for (var i=0;i<name.length;i++){
    var element=name[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);

var speech="My name is Nayeem";
console.log(speech.length);
console.log(speech[3]);

var lecture="I am an Engineer";
var count=0;
for(var a=0;a<lecture.length;a++){
    var lec=lecture[a];
    if(lec ==" "){
        count++;
    }
}
console.log(count);

function reverseString(str){
    var reverse="";
    for(var i=0;i<str.length;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;
}
var statement="Hi I am different than anyone";
var forMe=reverseString(statement);
console.log(forMe);
