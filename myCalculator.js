function EnterNumber(x){

    document.getElementById("Answer").value +=x;
} 

EnterNumber(x);

function EnterOperator(z){

  document.getElementById("Answer").value +=z;
}

EnterOperator(z);

function EnterEqual(){

  var result= document.getElementById("Answer").value;
   document.getElementById("Answer").value=eval(result);

}

EnterEqual();

function EnterClear(){
  document.getElementById("Answer").value=null;
}

EnterClear();
