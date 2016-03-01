var expect = chai.expect;

describe('Car', function() {

    var myCar = new Car();
    expect(myCar).to.be.an.instanceof(Car);

    it('should start at position X: 10', function(){
        expect( myCar.x ).to.equal(10);
    });

    it('should start at position Y: 10', function(){
        expect( myCar.x ).to.equal(10);
    });

    describe('drive', function(){
        var carOne = new Car();
        carOne.drive('right');
        carOne.drive('down');

        it('should have an x of 20 after driving right once', function(){
            expect( carOne.x ).to.equal(20);
        });

        it('should have an y of 20 after driving down once', function(){
            expect( carOne.x ).to.equal(20);
        });

        var carTwo = new Car();
        carTwo.drive('left');
        carTwo.drive('up');
        it('should have an x of 20 after driving left once', function(){
            expect( carTwo.x ).to.equal(0);
        });

        it('should have an y of 20 after driving up once', function(){
            expect( carTwo.x ).to.equal(0);
        });
    });
});