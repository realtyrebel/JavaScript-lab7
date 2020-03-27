document.getElementById('PressMe').addEventListener("click", myApp.events.doSomething);

document.getElementById('calc').addEventListener("click", myApp.calculations.sum);

document.getElementById('event').addEventListener("click", myApp.events.sayHello);
document.getElementById('event').addEventListener("click", myApp.events.sayGoodBye);

document.getElementById('btn2').addEventListener("mouseover", myApp.events.mouseOver);
document.getElementById('btn2').addEventListener("mouseout", myApp.events.mouseOut);

//looking at the event object
document.getElementById('btn3').addEventListener("click", function(e) {
    console.log(e);
});

//prevent default event behaviour
document.getElementById("link").addEventListener("click", function(e) { 
    e.preventDefault();
    console.log("clicked the link");
});



