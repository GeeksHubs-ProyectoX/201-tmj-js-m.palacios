const rodamiento = require('./test01.js');

	test('Rodamiento [0] | 0 -> [0]', function () {
		var expected = [0];
		var result = rodamiento([0],0);
		expect(result).toEqual(expected);
	});

	test('Rodamiento null | x -> -1', function () {
		var expected = -1;
		var result = rodamiento(null,null);
		expect(result).toBe(expected);
	});

	
	test('Rodamiento undefined | x -> -1', function () {
		var expected = -1;
		var result = rodamiento(undefined,null);
		expect(result).toEqual(expected);
	});

	 
	test('Rodamiento NaN | x -> -1', function () {
		var expected = -1;
		var result = rodamiento(NaN,null);
		expect(result).toEqual(expected);
	});

	
	test('Rodamiento [1,5,2] | 2 -> [2,1,5]', function () {
		var expected = [2,1,5];
		var result = rodamiento([1,5,2],2);
		expect(result).toEqual(expected);
	});

	
	test('Rodamiento [0,9,5,2,4] | 1 -> [9,5,2,4,0]', function () {
		var expected = [9,5,2,4,0];
		var result = rodamiento([0,9,5,2,4],1);
		expect(result).toEqual(expected);
	});

	test('Rodamiento [0,1,2,3,4] | 3 -> [4,0,1,2,3]', function () {
		var expected = [3,4,0,1,2];
		var result = rodamiento([0,1,2,3,4],3);
		expect(result).toEqual(expected);
	});

	test('Rodamiento [0,1,2,3,4] | 0 -> [0,1,2,3,4]', function () {
		var expected = [0,1,2,3,4];
		var result = rodamiento([0,1,2,3,4],0);
		expect(result).toEqual(expected);
	});

	test('Rodamiento [0,0,0,0,0] | x -> [0]', function () {
		var expected = [0];
		var result = rodamiento([0,0,0,0,0],0);
		expect(result).toEqual(expected);
	});

	
	test('Rodamiento [n,n] | x -> [n]', function () {
		for(var i = 1; i < 50 ; i++){
			var expected = [i];
			var array = [];
			for(var j = 0; j < i; j++)
				array[j]=i;
			
			var result = rodamiento(array,i)
			expect(result).toEqual(expected);
		}
	});