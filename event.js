
const EventEmitter = require('events'); 

const myEmitter = new EventEmitter();

someFunction = function (){
  console.log('Something has happened!');
}
myEmitter.on('Some event', someFunction);

myEmitter.emit('Some event');


// 1. `const EventEmitter = require('events');
//` - Importa el módulo `events` de Node.js, que proporciona la clase `EventEmitter`.

// 2. `const myEmitter = new EventEmitter();
//` - Crea una nueva instancia de `EventEmitter`.

// 3. `someFunction = function (){ console.log('Something has happened!'); }
//` - Define una función que imprime "Something has happened!" en la consola.

// 4. `myEmitter.on('Some event', someFunction);
//` - Registra la función `someFunction` como un oyente del evento 'Some event'. Esto significa que cada vez que se emita el evento 'Some event', se llamará a `someFunction`.

// 5. `myEmitter.emit('Some event');
//` - Emite el evento 'Some event'. Esto desencadena la ejecución de todos los oyentes registrados para este evento, en este caso, `someFunction`.

// Por lo tanto, la salida de este código será "Something has happened!" impreso en la consola.
