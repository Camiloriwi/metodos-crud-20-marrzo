
const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.alloc(5, 15);
console.log(buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

buf3.fill(1);
console.log(buf3);

buf2.write("abcedf");
console.log(buf2);

// explicacion del codigo 


// 1. `const buf1 = Buffer.alloc(10);
// Crea un nuevo buffer de 10 bytes y lo inicializa con ceros. Luego imprime el buffer en la consola.

// 2. `const buf2 = Buffer.alloc(5, 15);
//` - Crea un nuevo buffer de 5 bytes y lo inicializa con el valor 15. Luego imprime el buffer en la consola.

// 3. `const buf3 = Buffer.allocUnsafe(10);
//` - Crea un nuevo buffer de 10 bytes sin inicializarlo. Esto significa que el buffer contendrá datos aleatorios que estaban en la memoria en ese momento. Luego imprime el buffer en la consola.

// 4. `buf3.fill(1);
//` - Llena el buffer `buf3` con el valor 1. Luego imprime el buffer en la consola.

// 5. `buf2.write("abcedf");
//` - Escribe la cadena "abcedf" en el buffer `buf2`. Luego imprime el buffer en la consola.

// Es importante tener en cuenta que `Buffer.allocUnsafe` puede ser más rápido que `Buffer.alloc`, pero debe usarse con cuidado ya que los datos antiguos en la memoria pueden ser sensibles. Siempre debes llenar un buffer creado con `Buffer.allocUnsafe` antes de usarlo.

