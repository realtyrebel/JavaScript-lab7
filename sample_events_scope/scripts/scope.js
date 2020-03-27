//local and global scope
var name = "Jake";//declare a global variable 

function getName( ) {
	var name = "Jane";//local variable with the same name 
}
getName();//displays "Jane"


//when you don't use the var keyword
scope = "global";//global variable
function checkScope() {
      scope = "local";//just overwrote the global variable 
}
checkScope();
document.write(scope, "</br>");// displays "local</br>"


//using the module pattern
var module = (function ( ) {
	return {
		myMethod : function ( ) {
			document.write("myMethod has been called", "</br>");
		}
	};
})();

module.myMethod();


//module pattern with two public methods
var myModule = (function () {
    var value = 0;  //private variable
    
    return {
        increment : function (inc) {
            value += typeof inc === "number" ? inc : 1;
        },
        getValue : function () {
            return value;
        }
    };
}());

myModule.increment(5);
document.write("value is: ", myModule.getValue(), "</br>");


//module pattern with public and private method
var anotherModule = (function () {
   var privateMethod = function () {
    };
    var publicMethod = function () {
        console.log("Hello");
    };
    return {
        publicMethod : publicMethod
   };    
}( ));  
