<p align="center">
    <img src="https://github.com/GeeksHubsAcademy/2020-geekshubs-media/blob/master/image/logo.png" >	
</p>


    Considere el siguiente problema:

    Escriba un programa corto que permita re-calcular el posicionamiento de los elementos dentro de un array.
	La dirección de moviento debe de ser en el orden contrario a las agujas del reloj.
    
    Se atiente al siguiente ejemplo:
       
	 Array			Mov		Resultado

    [2,3,5]      		2     		[5,2,3]   
    
	[0,2,8,6,7,8]      	5     		[8,0,2,8,6,7] 
   
    Para los casos excepcionales :
		- Un input nulo, no definido, NAN o array vacío debe devolver -1.
		- Arrays con el mismo número de elementos debe de devolver un array con un solo elemento.
    
    En la carpeta 'test/test01.js' se encuentra el fichero con la definición de nuestro método vacío.
    
    El modus operandi de trabajo es el siguiente:
    
    Debes 'forkear' el proyecto a tu cuenta.
    Puedes hacer PR's ilimitadas e ir validando poco a poco la solución contra nuestro respositorio con CI.
    Puedes trabajar en local y subir la solución haciendo un PR a nuestro repositorio.
    Cuando se envíe la PR final, debes indicar el tiempo de dedicación y los intentos que has hecho.
    También puedes añadir un comentario para dar cualquier tipo de feedback.
    
    En caso de duda, revisa en el apartado de 'Referencias'.       
    

    [Suite Tests]
    
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

	PASS  test/suite.test.js
	√ Rodamiento [0] | 0 -> [0] (5ms)
	√ Rodamiento null | x -> -1 (1ms)
	√ Rodamiento undefined | x -> -1 (1ms)
	√ Rodamiento NaN | x -> -1
	√ Rodamiento [1,5,2] | 2 -> [2,1,5] (1ms)
	√ Rodamiento [0,9,5,2,4] | 1 -> [9,5,2,4,0]
	√ Rodamiento [0,1,2,3,4] | 3 -> [4,0,1,2,3]
	√ Rodamiento [0,1,2,3,4] | 0 -> [0,1,2,3,4] (1ms)
	√ Rodamiento [0,0,0,0,0] | x -> [0]
	√ Rodamiento [n,n] | x -> [n] (22ms)

	Test Suites: 1 passed, 1 total
	Tests:       10 passed, 10 total
	Snapshots:   0 total
	Time:        4.684s, estimated 62s

## Referencias

* [Tutorial - Testing Automatizado](https://github.com/GeeksHubsAcademy/2020-js-vanilla-testing-FFFF/blob/master/README.md)
