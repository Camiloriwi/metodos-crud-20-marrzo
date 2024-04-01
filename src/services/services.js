

// generando una contraseña aleatoria  para utilizarla o tambien como sugerencia para el usuario


const  gnerarPassword = (length = 8) => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const rdmIndex = Math.floor(Math.random() * charset.length);
        password += charset[rdmIndex];
    }
    return password;
};

export default gnerarPassword;

// explicacion detallada del codigo 


// 1. `const  gnerarPassword = (length = 8) => {`}

// Define una función llamada `gnerarPassword` que toma un argumento `length` con un valor predeterminado de 8. Esta función generará una contraseña de longitud `length`.


// 2. `const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; 

// Define una cadena de caracteres que se utilizará para generar la contraseña. Esta cadena incluye todas las letras minúsculas y mayúsculas del alfabeto inglés y todos los dígitos del 0 al 9.

// 3. `let password = '';

//  Inicializa una variable `password` con una cadena vacía. Esta variable almacenará la contraseña generada.

// 4. `for (let i = 0; i < length; i++) {};

// Inicia un bucle que se ejecutará `length` veces. En cada iteración del bucle, se añadirá un carácter aleatorio a la contraseña.

// 5. `const randomIndex = Math.floor(Math.random() * charset.length); _

//  Genera un índice aleatorio. `Math.random()` genera un número aleatorio entre 0 y 1, y al multiplicarlo por `charset.length` obtenemos un número aleatorio entre 0 y la longitud de `charset`. `Math.floor()` redondea este número hacia abajo al entero más cercano para obtener un índice válido para `charset`.

// 6. `password += charset[rdmIndex];

// Añade el carácter en `charset` en la posición `randomIndex` a la contraseña.

// 7. `return password;
// Después de que el bucle ha terminado, la función devuelve la contraseña generada.

// 8. `export default gnerarPassword;

// Exporta la función `gnerarPassword` como exportación predeterminada del módulo, lo que significa que puede ser importada en otros archivos utilizando `import gnerarPassword from './archivo';`.
 