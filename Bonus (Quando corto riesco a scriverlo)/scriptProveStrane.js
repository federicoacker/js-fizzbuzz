let i = 1;
while(i <= 100){
    // mettere i++ dentro questo console comand con il ternario non fa l'assegnazione effettiva per i quindi poi diventa un ciclo infinito
    console.error((i % 3 === 0 && i % 5 === 0) ? 'FizzBuz' : ( i % 3 === 0) ? 'Fizz' : ( i % 5 === 0) ? 'Buzz' : i); 
    i++;
}