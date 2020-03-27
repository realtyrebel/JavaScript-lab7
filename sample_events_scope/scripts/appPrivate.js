/*using the module pattern to create a single variable in the global namespace and expose only public methods*/


var app =  (function() {
    
    //private variables
    var PROMPT = 4;
    var TITLE =  "Lab7";

    var doSomething = function() {
            alert("Hello");
    };
    
    var sayHello = function() {
            alert('Hello');
    };
    
    var sayGoodBye = function() {
            alert('GoodBye');
    };
    
    var mouseOver = function() {
            document.getElementById("btn2").innerHTML = "Moused over!<br>"
    };
    
    var mouseOut =  function() {
            document.getElementById("btn2").innerHTML = "Moused out!<br>"
    };


    var sum = function() {
            var result = 0;
            var index = 4;
            var numbers = getNumbers(index);
            for(var i = 0; i < index; i++){
                result += numbers[i];
            }
            alert("sum is: " + result);
    };
    
    //private method
    var getNumbers = function(index){

            var numbers = new Array();
            var i = 0;
            var max = index;
            while(i < index){
                var a = Number(prompt("Enter a number",""));    
                numbers.push(a);
                i++;
            };    
         return numbers;
    };
    
    return {
      doSomething : doSomething,
      sayHello : sayHello,
      sayGoodBye : sayGoodBye,
      mouseOver : mouseOver,
      mouseOut : mouseOut,
      sum : sum     
    };
            
})();