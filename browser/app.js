class Car{
    constructor(x, y){
        this.x = x || 10;
        this.y = y || 10;

        createDOMNode(this);
        go(this);
    }

    goVertical(){
        this.element.style.width = 10 + "px";
        this.element.style.height = 20 + "px";
    };

    goHorizontal(){
        this.element.style.width = 20 + "px";
        this.element.style.height = 10 + "px";
    };

    drive( direction ){
        switch(direction) {
            case 'left':
                this.x -= 20;
                this.goHorizontal();
                break;
            case 'right':
                this.x += 20;
                this.goHorizontal();
                break;
            case 'up':
                this.y -= 10;
                this.goVertical();
                break;
            case 'down':
                this.y += 10;
                this.goVertical();
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
    var direction = ["left", "right", "up", "down"];
    setInterval(function(){
        var random = Math.floor(Math.random() * 4);
        car.drive(direction[random]);
    }, 100);
}