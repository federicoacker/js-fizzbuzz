//Prova Strana fatta facendo saltelli di 3 per volta negli step del for, per vedere se può essere più efficiente in quanto fa meno cicli

for (let i = 0; i <= 100; i += 3) {
    if (i >= 1) {
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