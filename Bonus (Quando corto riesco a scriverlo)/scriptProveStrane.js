//Prova Strana fatta facendo saltelli di 3 per volta negli step del for, per vedere se può essere più efficiente in quanto fa meno cicli

for (let i = 0; i <= 100; i += 3) {
    if (i >= 1) {
        console.log(((i - 2) % 5 === 0) ? 'Buzz' : ((i - 2) > 0) ? i - 2 : '');
        console.log(((i - 1) % 5 === 0) ? 'Buzz' : ((i - 1) > 0) ? i - 1 : '');
        console.log((i % 5 === 0) ? 'FizzBuzz' : 'Fizz');
    }
    if(i === 99){
        console.log('Buzz');
    }
}