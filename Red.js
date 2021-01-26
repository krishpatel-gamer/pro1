class Red{
  constructor(x,y,width,height){
      var options ={
        isStatic:true 
      }
  this.width = width;
  this.height = height;
      this.box = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.box);
      
    }
    display(){
        fill( "red" );
      rectMode(CENTER);
      rect(this.box.position.x,this.box.position.y,this.width,this.height);
  
    }
  } 