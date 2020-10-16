class Tree {
    constructor(x, y, height, width){
        this.image = loadImage("./Plucking mangoes/tree.png")
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width; 
    }

    display(){
        image(this.image, this.x, this.y, this.height, this.width);

    }

}
