var expect = chai.expect;

describe('Car', function() {

    var carWithoutXY = new Car();
    it('should create an instance of Car', function() {
        expect(carWithoutXY).to.be.an.instanceof(Car);
    });

    it('when created with no X, it should start at position X: 10', function(){
        expect( carWithoutXY.x ).to.equal(10);
    });

    it('when created with no Y,, it should start at position Y: 10', function(){
        expect( carWithoutXY.y ).to.equal(10);
    });

    var carWithoutXY50 = new Car(50, 50);

    it('when created with X: 50, it should start at position X: 10', function(){
        expect( carWithoutXY50.x ).to.equal(50);
    });

    it('when created with Y: 50, it should start at position Y: 10', function(){
        expect( carWithoutXY50.y ).to.equal(50);
    });

    describe('drive', function(){
        var carOne = new Car(100, 100);
        carOne.drive('right');
        carOne.drive('down');

        it('should have an x of +10 after driving right once', function(){
            expect( carOne.x ).to.equal(110);
        });

        it('should have an y of +10 after driving down once', function(){
            expect( carOne.y ).to.equal(110);
        });

        var carTwo = new Car(200, 200);
        carTwo.drive('left');
        carTwo.drive('up');
        it('should have an x of -10 after driving left once', function(){
            expect( carTwo.x ).to.equal(190);
        });

        it('should have an y of -10 after driving up once', function(){
            expect( carTwo.y ).to.equal(190);
        });
    });
});