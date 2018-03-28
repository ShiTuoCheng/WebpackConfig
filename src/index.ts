import "css/style";

class Cat {
  public say() {
    console.log("meow ~ shit");
  }
}
const kitty = new Cat();

kitty.say = () => {
  console.log("woof !");

  throw new Error("fuck you");
};
kitty.say(); // meow ~
