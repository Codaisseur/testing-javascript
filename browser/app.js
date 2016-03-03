function Car(){
    this.x = 10;
    this.y = 10;

    createDOMNode(this);
    go(this);

    this.drive = function( direction ){
        switch(direction) {
            case 'left':
                this.x -= 10;
                break;
            case 'right':
                this.x += 10;
                break;
            case 'up':
                this.y -= 10;
                break;
            case 'down':
                this.y += 10;
                break;
        }

        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    };
}

function createDOMNode(car){
    car.element = document.createElement('div');
    car.element.style.position = "absolute";
    car.element.style.left = car.x + "px";
    car.element.style.top = car.y + "px";
    car.element.style.width = 20 + "px";
    car.element.style.height = 10 + "px";
    car.element.style.backgroundColor = "red";
    document.body.appendChild(car.element);
}

function go(car){
    setInterval(function(){
        car.drive("right");
    }, 1000);
}