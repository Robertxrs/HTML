function soma(x, y){
	if(typeof x !== 'number'||
     typeof y !== 'number'
    ){
        throw new ReferenceError('error no x ou no y');
     }
     return x + y;
}

try {

    console.log(soma(1, 2));
    console.log(soma('1',2));
} catch (error) {
    console.log('aaaaaaa');
}

