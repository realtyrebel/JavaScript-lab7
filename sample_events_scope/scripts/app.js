//create a single variable in the global namespace
//all properties are public and can be changed - can be dangerous!!
var myApp = {
    PROMPT : 4,
    TITLE : "Lab7",
    events : {
        doSomething : function() {
            alert("Hello");
        },
        sayHello : function() {
            alert('Hello');
        },
        sayGoodBye : function() {
            alert('GoodBye');
        },
        mouseOver : function() {
            document.getElementById("btn2").innerHTML = "Moused over!<br>"
        },
        mouseOut : function() {
            document.getElementById("btn2").innerHTML = "Moused out!<br>"
        }
    },
    calculations : {
        sum : function() {
            var result = 0;
            var index = 4;
            var numbers = myApp.prompts.getNumbers(index);
            for(var i = 0; i < index; i++){
                result += numbers[i];
            }
            alert("sum is: " + result);
        }
    },
    prompts : {  
        getNumbers : function(index){

            var numbers = new Array();
            var i = 0;
            var max = index;
            while(i < index){
                var a = Number(prompt("Enter a number",""));    
                numbers.push(a);
                i++;
            };    
         return numbers;
        }
    }
}



                                                            