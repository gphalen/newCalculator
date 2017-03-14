var buttons = [
  0,
   1,
   2,
   3,
   4,
  5,
   6,
   7,
   8,
   9
]

var first = "";
var second = "";
var divBool=false;
var decBool=false;
var zeroBool=false;
var x=false;

var rectangle = document.getElementById('rectangle');
rectangle.innerHTML=0;
var y=0;
var i=0;

  
function createCallback( z ){
  
  return function(){
   
    if (rectangle.innerHTML === "0" || first.length === 0) {
      
      rectangle.innerHTML = buttons[z];
    } else  { 
      if (z!=0)
      zeroBool=true;
      if (divBool==true && (z==0) && zeroBool==false)
        alert ("You cannot divide by zero.")
      else
    rectangle.innerHTML = rectangle.innerHTML + buttons[z];
    }
     first = first + z.toString(); 
  }
}
for(var i=0;i<10;i++) {
  
  $("#numbutton" + i).click(createCallback(i) 
   
   
    
  );
}




$("#plus").click(function(){
  divBool=false;
  decBool=false;
  zeroBool=false;
  rectangle.innerHTML+= "+";
})

$("#divide").click(function(){
  divBool=false;
  decBool=false;
  zeroBool=false;
  rectangle.innerHTML+= "/";
  divBool=true;
})

$("#multiply").click(function(){
  divBool=false;
  decBool=false;
  zeroBool=false;
  rectangle.innerHTML+= "*";
})

$("#minus").click(function(){
  divBool=false;
  decBool=false;
  zeroBool=false;
  rectangle.innerHTML+= "-";
})

$("#decimal").click(function(){
  if (decBool==true)
    alert("You cannot have two consecutive decimals.");
  else
  rectangle.innerHTML+= ".";
  decBool=true;
})

$("#equals").click(function(){
  rectangle.innerHTML= eval(rectangle.innerHTML);
})

$("#clear").click(function(){
  rectangle.innerHTML=0;
  divBool=false;
  zeroBool=false;
}
  )
                                