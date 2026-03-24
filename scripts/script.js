// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Fase 1: creo una variabile che sia modificabile che sarà quella che viene cambiata e poi stampata.
// Fase 2: Comincio a pensare al ciclo for, è abbastanza semplice, deve solo andare da 1 a 100;
// Fase 3: Comincio a pensare ai condizionali, abbiamo, SE l'indice del nostro for, quindi i, % 3 === 0 allora aggiungeremo 
// Fizz alla nostra parola
// Poi in seguito un altro if separato da questo, SE l'indice del nostro for, quindi i, % 5 === 0 allora aggiungeremo Buzz alla nostra parola
// Alla fine di questi due check, SE la nostra parola non è vuota (ovvero le abbiamo dato Fizz o Buzz o FizzBuzz) 
// allora stampiamo la parola, altrimenti stampiamo il numero