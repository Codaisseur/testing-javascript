

## BDD in Node
Behaviour Driven Development: first we're going to describe what our app should do, then we are going to write the code to fit those descriptions. 

1. Create a new Folder
2. Create a new npm project: `npm init`
3. Install Chai and Mocha: `npm install chai mocha --save`
4. Create a `src/` directory for your app's source
5. Create a `src/index.js` as your main entry point and a `src/index.test.js` for our tests
6. Let's write a simple Juf app in there. Let's first write our tests, so we know what we'll have to write later. Of course at the core of our Juf app, there should be a `isJuf` function, which tests a value for juf-ness, let's start with a test for this:

	```javascript
	var expect = require('chai').expect;
	var app = require('./index');
	
	describe('juf', function(){
	    describe('isJuf', function(){
	        it('should return true for numbers that contain 7 or are divisible by 7', function(){
	            expect( isJuf(7) ).to.equal(true);
	            expect( isJuf(14) ).to.equal(true);
	            expect( isJuf(21) ).to.equal(true);
	            expect( isJuf(17) ).to.equal(true);
	            
	            expect( isJuf(5) ).to.equal(false);
	            expect( isJuf(12) ).to.equal(false);
	        })
	    });
	});
	```

7. Configure this test in our package.json:

	```json
	  "scripts": {
	    "test": "mocha src/index.test.js -w"
	  },
	```
	
8. Now we can run our test with `npm test`:
	
	```javascript
	  juf
	    isJuf
	      1) should return true for numbers that contain 7 or are divisible by 7
	
	
	  0 passing (10ms)
	  1 failing
	
	  1) juf isJuf should return true for numbers that contain 7 or are divisible by 7:
	     TypeError: app.isJuf is not a function
	      at Context.<anonymous> (src/index.test.js:7:25)
	```
	
9. Now that our test is in place, let's write our actual code for our `isJuf` function:

	```javascript
	function isJuf(number){
	    if(String(number).indexOf('7') !== -1 || number % 7 === 0 ){
	        return true;
	    }
	
	    return false;
	}
	
	module.exports = {
	    isJuf: isJuf
	};
	```
10. And the tests say...

	```
 juf
	    isJuf
	      ✓ should return true for numbers that contain 7 or are divisible by 7
	
	
	  1 passing (2ms)
  ```
11. Now let's refactor our code to something more readable: create a separate function for divisibleBy7 and contains7. First the tests:

	```javascript
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

            var resultOf17 = app.contains7(17);
            var resultOf70 = app.contains7(70);
            var resultOf878 = app.contains7(878);

            expect(resultOf17).to.equal(true);
            expect(resultOf70).to.equal(true);
            expect(resultOf878).to.equal(true);
        });

        it('should return false for numbers that dont contain 7', function(){

            var resultOf17 = app.contains7(4);
            var resultOf70 = app.contains7(21);
            var resultOf878 = app.contains7(888);

            expect(resultOf17).to.equal(false);
            expect(resultOf70).to.equal(false);
            expect(resultOf878).to.equal(false);
        });
    });
    ```
    
12. Then the refactor:
	```javascript
	function isJuf(number){
	    return isDivisibleBy7(number) || contains7(number);
	}
	
	function contains7(number){
	    return /7/.test(String(number));
	}
	
	function isDivisibleBy7(number){
	    return Number(number) % 7 === 0;
	}
	
	module.exports = {
	    isJuf: isJuf,
	    contains7: contains7,
	    isDivisibleBy7: isDivisibleBy7
	};
	```
	
13. Now that the building blocks of our app are done and tested. We can add the stuff that will run it in Node:

	```javascript
	// get the first command line argument
	var number = process.argv.slice(2)[0];
	
	if(isJuf(number)){
	    console.log("juf!")
	}
	```
	
	Now in this case you'd think you might not need tests, because the function is so simple. But imagine a function of 20 or more lines... suddenly it's not so easy to oversee what the function does and how it does it. You never know how your functions will grow over time, tests help you make sure you haven't broken anything.

## BDD in the Browser
Sometimes you can't or don't want to use NodeJS, don't worry, you can also run Mocha in your browser

1. Let's set up a new app. Make a new directory, type `npm start` and `npm install mocha chai --save`
2. Now create a test.html which will contain our test results:

	```html
	<!DOCTYPE html>
	<html>
	<head>
	    <meta charset="utf-8">
	    <title>Mocha Tests</title>
	    <link rel="stylesheet" href="node_modules/mocha/mocha.css" />
	</head>
	<body>
	<div id="mocha"></div>
	<script src="node_modules/chai/chai.js"></script>
	<script src="node_modules/mocha/mocha.js"></script>
	<script src="app.js"></script>
	<script>mocha.setup('bdd')</script>
	<script src="test.js"></script>
	<script>
	    mocha.run();
	</script>
	</body>
	</html>
	```
3. As you see we'll be including an app.js and a test.js, let's write the tests first! We want to create a Car in Javascript that can drive around the page. It has an x and an y position. Every time we tell it to drive, we have to give it a direction and it will go 10 pixels in that direction. It should start at position (10, 10). We want to test this Car class, before writing anything else.

	```javascript
	var expect = chai.expect;
	
	describe('Car', function() {
	
	    var myCar = new Car();
	
	    it('should start at position X: 10', function(){
	        expect( myCar.x ).to.equal(10);
	    });
	
	    it('should start at position Y: 10', function(){
	        expect( myCar.x ).to.equal(10);
	    });
	});
```
Now let's create the skeleton for our Car app in app.js:

	```
	function Car(){
	    
	}
	```
	
4. Let's fix Car so that it passes the test:

	```javascript
	function Car(){
	    this.x = 10;
	    this.y = 10;
	}
	```
5. Now it passes the test! We can also test other things except for `equals`, such as: is x and instance of Y. Like this:

	`expect(myCar).to.be.an.instanceof(Car);`

To see what else you can test for, go to: http://chaijs.com/guide/styles/

6. Now let's add drive functionality, first write a test:
	
	```javascript

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
    ```

7. Now let's write the code:

	```javascript
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
    ```
	
## BDD with React

