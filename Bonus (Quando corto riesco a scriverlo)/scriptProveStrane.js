console.log(`
    /////////////////////////////////////
    Prova con step da 3:
    /////////////////////////////////////
    `);
//Prova Strana fatta facendo saltelli di 3 per volta negli step del for, per vedere se può essere più efficiente in quanto fa meno cicli
for (let i = 0; i <= 100; i += 3) {
    if (i !== 0 ) {
        console.log(((i - 2) % 5 === 0) ? 'Buzz' : ((i - 2) > 0) ? i - 2 : ''); // Controlliamo se il numero 2 posti prima di i è divisibile per 5 ( e anche se è > 0)
                                                                                // Se si, stampiamo Buzz
        console.log(((i - 1) % 5 === 0) ? 'Buzz' : ((i - 1) > 0) ? i - 1 : ''); // Controlliamo se il numero 1 posto prima di i è divisibile per 5 ( e anche se è > 0)
                                                                                // Se si, stampiamo Buzz
        console.log((i % 5 === 0) ? 'FizzBuzz' : 'Fizz');                       // Controlliamo se il numero corrente è divisibile per 5
                                                                                // Se si, stampiamo FizzBuzz, altrimenti Fizz (step di 3, saranno sempre divisibili per 3)
    }
    if(i === 99){                                                               // Arrivato a 99, non possiamo fare step di 3 oltre, quindi per il 100 lo stampiamo manualmente
        console.log('Buzz');
    }
} 
console.log(`
    /////////////////////////////////////
    Prova con step da 5:
    /////////////////////////////////////
    `);
//Proviamo ancora più strano, step da 5 così faccio solo 20 iterazioni
for(let i = 0; i<= 100; i += 5) //Step di 5 quindi sempre Buzz di sicuro.
{
    if(i !== 0){
        console.log(((i-4) % 3 == 0) ? 'Fizz' : i-4);
        console.log(((i-3) % 3 == 0) ? 'Fizz' : i-3);
        console.log(((i-2) % 3 == 0) ? 'Fizz' : i-2);
        console.log(((i-1) % 3 == 0) ? 'Fizz' : i-1);
        console.log((i % 3 === 0) ? 'FizzBuzz' : 'Buzz'); // Caso base, se è divisibile anche per 3, è un Fizzbuzz altrimenti è un Buzz;
    }
}