function Car(){
    this.x = 10;
    this.y = 10;

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
    }
}