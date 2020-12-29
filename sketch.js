//Create variables here
var dog,dogImg,dogImg1;
var food,foodStock;
var database;
var foods;

function preload()
{
  //load images here
  dogImg = loadImage("images/dog.png");
  dogImg1 = loadImage("images/dog1.png");
}

function setup() {
	createCanvas(800, 700);
  
  datbase = firebase.database();

  dog = createSprite(250,300,150,150);
  dog.addImage(dogImg);

  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background("white");

if(keyWentDown("UP_ARROW"))
{
     writeStock(foods);
     dog.addImage(dogImg1);
}

  drawSprites();
  fill("black");
  text("Food Remaining:"+foods,170,200);
  textSize(13);
  text("Press up arrow key to feed the doggy",300,20);
  //add styles here

}
function readStock(data)
  {
     foods = data.val();
  }

  function writeStock(x)
  {
     if(x<=0)
     {
       x = 0
     } 
     
     else
    {
      x = x-1;
    }
    database.ref('/').update({
      food:x
    })
  }


