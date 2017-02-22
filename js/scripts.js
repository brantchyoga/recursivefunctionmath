var factorial = function(number){
  if (number<=0){
    console.log(1);
  } else{
    return (number * factorial(number-1));
  }
};

$(function(){
  $("form#factorial").submit(function(event) {
    event.preventDefault();
    var factorialNumber = parseInt($("input#number").val());
    console.log(factorialNumber);
    // var factorialT = 0
    // for(var i=factorialNumber-1; i>0; i--){
    //   factorialNumber*=i;
    //   factorialT = factorialNumber;
    //   console.log(factorial);
    // };
    $("#factAnswer").text(factorial(factorialNumber));
  });
});
