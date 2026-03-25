// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

/* // Fase 1: creo una variabile che sia modificabile che sarà quella che viene cambiata e poi stampata.
let parola = '';
// Fase 2: Comincio a pensare al ciclo for, è abbastanza semplice, deve solo andare da 1 a 100;
for(let i = 1; i <= 100; i++){
    // Fase 3: 
    
    // Comincio a pensare ai condizionali, abbiamo, SE l'indice del nostro for, 
    // quindi i % 3 === 0 allora aggiungeremo Fizz alla nostra parola
    if(i % 3 === 0){
        parola += "Fizz";
    }
    // Poi in seguito un altro if separato da questo, SE l'indice del nostro for, 
    // quindi i % 5 === 0 allora aggiungeremo Buzz alla nostra parola
    if(i % 5 === 0){
        parola += "Buzz";
    }
    // Alla fine di questi due check, SE la nostra parola non è vuota (ovvero le abbiamo dato Fizz o Buzz o FizzBuzz) 
    // allora stampiamo la parola, altrimenti stampiamo il numero
    if(parola.length !== 0){ //La parola non è vuota, quindi le è stato assegnato Fizz, Buzz o FizzBuzz
        console.log(parola);
        //Riassegnamo la parola a una stringa vuota per ricominciare il nostro ciclo
        parola = '';
    }
    else{ // La parola è vuota, quindi stampiamo il numero
        console.log(i);
    }
} */

// Usando lo short-circuiting dell'&&, vorrà dire che quando i%3 ci da false, 
// lui non andrà ad eseguire il codice a destra 
// (perché non proverà a valutare se è vero o falso in quanto il codice a sinistra già è stato stabilito come falso)
// Facciamo poi la stessa cosa per i % 5 === 0 e p.lenght === 0
// E' un po' un abuso della proprietà di shortcircuiting visto che p+='Fizz' non ci restituisce un booleano come valore
for(let i = 1, p = ''; i <= 100; i++, p = ''){
    (i % 3 === 0) && (p += 'Fizz');
    (i % 5 === 0) && (p += 'Buzz');
    (p.length === 0) && (p += i);
    console.log(p);
}