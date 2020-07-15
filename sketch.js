var dog,dogHappy,foodStock,food,dogimg
 

function preload()
{
  
}

function setup() {
  createCanvas(800, 700);
   database=firebase.database();
   foodStock=database.ref('Food')
  foodStock.on("value", readStock)
  
    
  
}


function draw() { 
  background(46,139,87) 

  drawSprites();
  textSize(100)
  text("Food:"+ food,170,200)
  if(keyWentDown(UP_ARROW)){
    writeStock(food)
  }
 
 
}
function readStock(data){
  food= data.val()
}

function writeStock(a){
  
  a=a-1
  database.ref('/').update({
    Food:a
  })
  if(a<=0){
    a=0
  }
  else{
    a=a-1;
  }
}




