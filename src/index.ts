
class Cat {
  say() {
    console.log("meow ~ shit");
  }
}
var kitty = new Cat();

kitty.say = function() {
  console.log("woof !");

  throw new Error('fuck you');
};
kitty.say(); // meow ~ 

