var expect = require('chai').expect;
var app = require('./index');

describe('juf', function(){
    describe('isJuf', function(){
        it('should return true for numbers that contain 7 or are divisible by 7', function(){
            expect( app.isJuf(7) ).to.equal(true);
            expect( app.isJuf(14) ).to.equal(true);
            expect( app.isJuf(21) ).to.equal(true);
            expect( app.isJuf(17) ).to.equal(true);

            expect( app.isJuf(5) ).to.equal(false);
            expect( app.isJuf(12) ).to.equal(false);
        })
    });
});



//
describe('juf', function(){
    describe('isDivisibleBy7', function(){

        it('should return true for numbers divisible by 7', function(){

            var resultOf14 = app.isDivisibleBy7(14);
            var resultOf21 = app.isDivisibleBy7(21);
            var resultOf70 = app.isDivisibleBy7(70);

            expect(resultOf14).to.equal(true);
            expect(resultOf21).to.equal(true);
            expect(resultOf70).to.equal(true);
        });

        it('should return false for numbers not divisible by 7', function(){

            var resultOf10 = app.isDivisibleBy7(10);
            var resultOf22 = app.isDivisibleBy7(22);
            var resultOf61 = app.isDivisibleBy7(61);

            expect(resultOf10).to.equal(false);
            expect(resultOf22).to.equal(false);
            expect(resultOf61).to.equal(false);
        });
    });

    describe('contains7', function(){

        it('should return true for numbers that contain 7', function(){

            var resultOf17 = app.has7(17);
            var resultOf70 = app.has7(70);
            var resultOf878 = app.has7(878);

            expect(resultOf17).to.equal(true);
            expect(resultOf70).to.equal(true);
            expect(resultOf878).to.equal(true);
        });

        it('should return false for numbers that dont contain 7', function(){

            var resultOf17 = app.has7(4);
            var resultOf70 = app.has7(21);
            var resultOf878 = app.has7(888);

            expect(resultOf17).to.equal(false);
            expect(resultOf70).to.equal(false);
            expect(resultOf878).to.equal(false);
        });
    });
});