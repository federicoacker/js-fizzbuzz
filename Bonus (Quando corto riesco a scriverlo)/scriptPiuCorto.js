// Inizializzo una variabile parola nel ciclo
for(let i = 1, parola = ''; i <= 100; i++){
    //Le assegno un valore diverso a seconda dei casi, FizzBuzz se divisibile per 3 e per 5, 
    // Fizz se divisibile per 3, Buzz se divisibile per 5, i in tutti gli altri casi
    parola = (i % 3 === 0 && i % 5 === 0) ? 'FizzBuz' : ( i % 3 === 0) ? 'Fizz' : ( i % 5 === 0) ? 'Buzz' : i;
    //La stampo a console
    console.log(parola);
}