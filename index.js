var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0 ; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress",function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

function makeSound(key){
  switch (key){
    case "H":
      var audio1 = new Audio ("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "A":
    var audio2 = new Audio ("sounds/tom-2.mp3");
    audio2.play();
    break;

    case "M":
    var audio3 = new Audio ("sounds/tom-3.mp3");
    audio3.play();
    break;

    case "E":
    var audio4 = new Audio ("sounds/tom-4.mp3");
    audio4.play();
    break;

    case "E":
    var audio5 = new Audio ("sounds/tom-4.mp3");
    audio5.play();
    break;

    case "Z":
    var audio6 = new Audio ("sounds/crash.mp3");
    audio6.play();
    break;

    case "h":
      var audio1 = new Audio ("sounds/tom-1.mp3");
      audio1.play();
      break;

    case "a":
    var audio2 = new Audio ("sounds/tom-2.mp3");
    audio2.play();
    break;

    case "m":
    var audio3 = new Audio ("sounds/tom-3.mp3");
    audio3.play();
    break;

    case "e":
    var audio4 = new Audio ("sounds/tom-4.mp3");
    audio4.play();
    break;

    case "e":
    var audio5 = new Audio ("sounds/tom-4.mp3");
    audio5.play();
    break;

    case "z":
    var audio6 = new Audio ("sounds/crash.mp3");
    audio6.play();
    break;

    default: console.log("not working");
  }
}
