
class Cat {
  say() {
    console.log("meow ~ shit");
  }
}
var kitty = new Cat();

kitty.say = function() {
  console.log("woof !");
};
kitty.say(); // meow ~ 
