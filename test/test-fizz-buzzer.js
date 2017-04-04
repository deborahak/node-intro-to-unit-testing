const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should return "fizz-buzz" for multiples of 15', function(){
		const multFifteen = fizzBuzzer(75)
		multFifteen.should.equal('fizz-buzz')
	});
	it('should return "buzz" for multiples of 5', function(){
		const multFive = fizzBuzzer(10)
		multFive.should.equal('buzz')
	});
	it('should return "fizz" for multiples of 3', function(){
		const multThree = fizzBuzzer(9)
		multThree.should.equal('fizz')
	});
	it('should return number if not a multiple of 3 or 5', function(){
		[17, 22, 91].forEach(function(input){
			fizzBuzzer(input).should.equal(input);
		});
	});
	it('should produce error if input is not a number', function(){
		const wrongInput = [true, 'cat']
		wrongInput.forEach(function(input){
			(function(){
				fizzBuzzer(input)
			}).should.throw(Error);
		});
	});
});



