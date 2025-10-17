# 📚 JavaScript Junior Developer - Guía de Estudio Completa

Una guía educativa completa para convertirse en un **JavaScript Junior Developer** profesional. Incluye teoría, sintaxis, ejemplos prácticos, ejercicios y todo lo necesario para dominar JavaScript desde cero.

## 🎯 Índice de Contenidos

### **Módulo 1: Fundamentos de JavaScript**
- [Variables y Tipos de Datos](#variables-y-tipos-de-datos)
- [Operadores](#operadores)
- [Estructuras de Control](#estructuras-de-control)
- [Funciones](#funciones)
- [Arrays y Objetos](#arrays-y-objetos)

### **Módulo 2: JavaScript Moderno (ES6+)**
- [Let, Const y Var](#let-const-y-var)
- [Arrow Functions](#arrow-functions)
- [Template Literals](#template-literals)
- [Destructuring](#destructuring)
- [Spread y Rest Operators](#spread-y-rest-operators)
- [Modules (Import/Export)](#modules-importexport)

### **Módulo 3: DOM Manipulation**
- [Selección de Elementos](#selección-de-elementos)
- [Event Listeners](#event-listeners)
- [Modificación del DOM](#modificación-del-dom)
- [Formularios y Validación](#formularios-y-validación)

### **Módulo 4: Programación Asíncrona**
- [Callbacks](#callbacks)
- [Promises](#promises)
- [Async/Await](#asyncawait)
- [Fetch API](#fetch-api)
- [Manejo de Errores](#manejo-de-errores)

### **Módulo 5: Frameworks y Librerías**
- [React Básico](#react-básico)
- [Node.js Fundamentos](#nodejs-fundamentos)
- [NPM y Gestión de Paquetes](#npm-y-gestión-de-paquetes)

### **Módulo 6: Herramientas de Desarrollo**
- [Git y GitHub](#git-y-github)
- [VS Code](#vs-code)
- [Chrome DevTools](#chrome-devtools)
- [Debugging](#debugging)

---

## 📖 Módulo 1: Fundamentos de JavaScript

### Variables y Tipos de Datos

#### **Sintaxis:**
```javascript
// Declaración de variables
var nombre = "Juan";           // String
let edad = 25;                 // Number
const PI = 3.14159;           // Number (constante)

// Tipos de datos
let texto = "Hola mundo";      // String
let numero = 42;               // Number
let decimal = 3.14;            // Number
let booleano = true;           // Boolean
let nulo = null;               // Null
let indefinido = undefined;    // Undefined
let objeto = {};               // Object
let arreglo = [];              // Array
```

#### **Conceptos Clave:**
- **String:** Secuencia de caracteres entre comillas
- **Number:** Números enteros o decimales
- **Boolean:** `true` o `false`
- **Null:** Valor intencionalmente vacío
- **Undefined:** Variable declarada pero sin valor
- **Object:** Colección de propiedades
- **Array:** Lista ordenada de elementos

#### **Ejemplo Práctico:**
```javascript
// Información de un usuario
let usuario = {
    nombre: "María García",
    edad: 28,
    activo: true,
    hobbies: ["programar", "leer", "viajar"],
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Ciudad de México"
    }
};

console.log(usuario.nombre);        // "María García"
console.log(usuario.hobbies[0]);    // "programar"
console.log(usuario.direccion.ciudad); // "Ciudad de México"
```

### Operadores

#### **Operadores Aritméticos:**
```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (suma)
console.log(a - b);   // 7 (resta)
console.log(a * b);   // 30 (multiplicación)
console.log(a / b);   // 3.33... (división)
console.log(a % b);   // 1 (módulo/resto)
console.log(a ** b);  // 1000 (exponenciación)
```

#### **Operadores de Comparación:**
```javascript
let x = 5;
let y = "5";

console.log(x == y);   // true (igualdad débil)
console.log(x === y);  // false (igualdad estricta)
console.log(x != y);   // false (desigualdad débil)
console.log(x !== y);  // true (desigualdad estricta)
console.log(x > 3);    // true
console.log(x < 10);   // true
console.log(x >= 5);   // true
console.log(x <= 5);   // true
```

#### **Operadores Lógicos:**
```javascript
let esAdulto = true;
let tieneLicencia = false;

console.log(esAdulto && tieneLicencia);  // false (AND)
console.log(esAdulto || tieneLicencia);  // true (OR)
console.log(!esAdulto);                  // false (NOT)
```

### Estructuras de Control

#### **Condicionales (if/else):**
```javascript
let temperatura = 25;

if (temperatura > 30) {
    console.log("Hace mucho calor");
} else if (temperatura > 20) {
    console.log("Temperatura agradable");
} else if (temperatura > 10) {
    console.log("Hace fresco");
} else {
    console.log("Hace frío");
}

// Operador ternario
let mensaje = temperatura > 25 ? "Calor" : "Fresco";
```

#### **Switch:**
```javascript
let dia = "lunes";

switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "viernes":
        console.log("¡Fin de semana!");
        break;
    case "sábado":
    case "domingo":
        console.log("Día de descanso");
        break;
    default:
        console.log("Día laboral");
}
```

#### **Bucles (Loops):**
```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(`Iteración ${i}`);
}

// While loop
let contador = 0;
while (contador < 3) {
    console.log(`Contador: ${contador}`);
    contador++;
}

// For...of (para arrays)
let frutas = ["manzana", "banana", "naranja"];
for (let fruta of frutas) {
    console.log(fruta);
}

// For...in (para objetos)
let persona = { nombre: "Juan", edad: 30 };
for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}
```

### Funciones

#### **Declaración de Funciones:**
```javascript
// Función declarada
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Función expresada
let sumar = function(a, b) {
    return a + b;
};

// Arrow function (ES6)
let multiplicar = (a, b) => a * b;

// Función con parámetros por defecto
function crearUsuario(nombre, edad = 18, activo = true) {
    return {
        nombre,
        edad,
        activo
    };
}
```

#### **Scope y Hoisting:**
```javascript
// Hoisting con var
console.log(x); // undefined (no error)
var x = 5;

// No hoisting con let/const
console.log(y); // ReferenceError
let y = 10;

// Scope de función
function ejemplo() {
    let local = "Soy local";
    var global = "Soy global";
}

// console.log(local);  // Error
// console.log(global); // Error
```

### Arrays y Objetos

#### **Arrays:**
```javascript
let numeros = [1, 2, 3, 4, 5];

// Métodos de array
numeros.push(6);           // [1, 2, 3, 4, 5, 6]
numeros.pop();             // [1, 2, 3, 4, 5]
numeros.unshift(0);        // [0, 1, 2, 3, 4, 5]
numeros.shift();           // [1, 2, 3, 4, 5]

// Métodos de transformación
let dobles = numeros.map(n => n * 2);        // [2, 4, 6, 8, 10]
let pares = numeros.filter(n => n % 2 === 0); // [2, 4]
let suma = numeros.reduce((acc, n) => acc + n, 0); // 15

// Búsqueda
let indice = numeros.indexOf(3);     // 2
let existe = numeros.includes(3);    // true
let encontrado = numeros.find(n => n > 3); // 4
```

#### **Objetos:**
```javascript
let persona = {
    nombre: "Ana",
    edad: 25,
    saludar: function() {
        return `Hola, soy ${this.nombre}`;
    }
};

// Acceso a propiedades
console.log(persona.nombre);        // "Ana"
console.log(persona["edad"]);       // 25
console.log(persona.saludar());     // "Hola, soy Ana"

// Modificación
persona.ciudad = "Madrid";
persona.edad = 26;

// Destructuring
let { nombre, edad } = persona;
console.log(nombre, edad); // "Ana" 26
```

---

## 📖 Módulo 2: JavaScript Moderno (ES6+)

### Let, Const y Var

#### **Diferencias Clave:**
```javascript
// VAR - Function scoped, hoisted
function ejemploVar() {
    console.log(x); // undefined
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x); // 2
    }
    console.log(x); // 2
}

// LET - Block scoped, temporal dead zone
function ejemploLet() {
    // console.log(y); // ReferenceError
    let y = 1;
    if (true) {
        let y = 2;
        console.log(y); // 2
    }
    console.log(y); // 1
}

// CONST - Block scoped, no reasignable
const PI = 3.14159;
// PI = 3.14; // TypeError

const objeto = { nombre: "Juan" };
objeto.edad = 25; // ✅ Permitido
// objeto = {}; // ❌ Error
```

### Arrow Functions

#### **Sintaxis:**
```javascript
// Función tradicional
function sumar(a, b) {
    return a + b;
}

// Arrow function
const sumar = (a, b) => a + b;

// Con un parámetro (paréntesis opcionales)
const cuadrado = x => x * x;

// Sin parámetros
const saludar = () => "Hola mundo";

// Con cuerpo de función
const procesar = (datos) => {
    let resultado = datos.map(item => item * 2);
    return resultado.filter(item => item > 10);
};
```

#### **Diferencias con `this`:**
```javascript
let objeto = {
    nombre: "Objeto",
    
    // Método tradicional
    metodoTradicional: function() {
        console.log(this.nombre); // "Objeto"
        
        setTimeout(function() {
            console.log(this.nombre); // undefined (this cambia)
        }, 1000);
    },
    
    // Arrow function
    metodoArrow: function() {
        console.log(this.nombre); // "Objeto"
        
        setTimeout(() => {
            console.log(this.nombre); // "Objeto" (this se mantiene)
        }, 1000);
    }
};
```

### Template Literals

#### **Sintaxis:**
```javascript
let nombre = "María";
let edad = 30;

// Concatenación tradicional
let mensaje1 = "Hola, me llamo " + nombre + " y tengo " + edad + " años";

// Template literals
let mensaje2 = `Hola, me llamo ${nombre} y tengo ${edad} años`;

// Multilínea
let html = `
    <div class="usuario">
        <h2>${nombre}</h2>
        <p>Edad: ${edad}</p>
        <p>Fecha: ${new Date().toLocaleDateString()}</p>
    </div>
`;

// Expresiones
let precio = 19.99;
let descuento = 0.1;
let total = `Total: $${(precio * (1 - descuento)).toFixed(2)}`;
```

### Destructuring

#### **Arrays:**
```javascript
let colores = ["rojo", "verde", "azul"];

// Destructuring básico
let [primero, segundo, tercero] = colores;
console.log(primero);  // "rojo"
console.log(segundo);  // "verde"

// Con valores por defecto
let [a, b, c = "amarillo"] = ["rojo", "verde"];
console.log(c); // "amarillo"

// Saltar elementos
let [x, , z] = colores;
console.log(x, z); // "rojo" "azul"

// Rest operator
let [primero, ...resto] = colores;
console.log(resto); // ["verde", "azul"]
```

#### **Objetos:**
```javascript
let usuario = {
    nombre: "Carlos",
    edad: 28,
    email: "carlos@email.com",
    direccion: {
        calle: "Av. Principal 123",
        ciudad: "Barcelona"
    }
};

// Destructuring básico
let { nombre, edad, email } = usuario;

// Con nombres diferentes
let { nombre: nombreUsuario, edad: años } = usuario;

// Con valores por defecto
let { nombre, edad, telefono = "No disponible" } = usuario;

// Destructuring anidado
let { direccion: { calle, ciudad } } = usuario;

// Rest operator en objetos
let { nombre, ...otrosDatos } = usuario;
```

### Spread y Rest Operators

#### **Spread Operator (...):**
```javascript
// Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinado = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Copiar array
let copia = [...arr1]; // [1, 2, 3]

// Objetos
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinado = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

// Sobrescribir propiedades
let actualizado = { ...obj1, b: 5 }; // { a: 1, b: 5 }

// Función con parámetros
function sumar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}
console.log(sumar(1, 2, 3, 4)); // 10
```

### Modules (Import/Export)

#### **Export:**
```javascript
// math.js
export const PI = 3.14159;

export function sumar(a, b) {
    return a + b;
}

export function restar(a, b) {
    return a - b;
}

// Export por defecto
export default function multiplicar(a, b) {
    return a * b;
}

// Export con alias
export { sumar as add, restar as subtract };
```

#### **Import:**
```javascript
// main.js
import multiplicar, { PI, sumar, restar } from './math.js';
import { add, subtract } from './math.js';

// Import con alias
import { sumar as suma } from './math.js';

// Import de todo
import * as math from './math.js';
console.log(math.PI); // 3.14159
```

---

## 📖 Módulo 3: DOM Manipulation

### Selección de Elementos

#### **Métodos de Selección:**
```javascript
// Por ID
let elemento = document.getElementById('miId');

// Por clase
let elementos = document.getElementsByClassName('miClase');

// Por etiqueta
let parrafos = document.getElementsByTagName('p');

// Selectores CSS (modernos)
let elemento = document.querySelector('#miId');
let elementos = document.querySelectorAll('.miClase');
let parrafo = document.querySelector('p:first-child');

// Selectores complejos
let enlaces = document.querySelectorAll('a[href^="https"]');
let inputs = document.querySelectorAll('input[type="text"]');
```

#### **Navegación del DOM:**
```javascript
let elemento = document.querySelector('.contenido');

// Padres
let padre = elemento.parentElement;
let padreNodo = elemento.parentNode;

// Hijos
let hijos = elemento.children;
let primerHijo = elemento.firstElementChild;
let ultimoHijo = elemento.lastElementChild;

// Hermanos
let hermanoAnterior = elemento.previousElementSibling;
let hermanoSiguiente = elemento.nextElementSibling;
```

### Event Listeners

#### **Tipos de Eventos:**
```javascript
let boton = document.querySelector('#miBoton');

// Evento de clic
boton.addEventListener('click', function(evento) {
    console.log('Botón clickeado');
    console.log(evento.target); // Elemento que disparó el evento
});

// Evento de mouse
boton.addEventListener('mouseover', function() {
    console.log('Mouse sobre el botón');
});

boton.addEventListener('mouseout', function() {
    console.log('Mouse salió del botón');
});

// Evento de teclado
document.addEventListener('keydown', function(evento) {
    console.log('Tecla presionada:', evento.key);
    if (evento.key === 'Enter') {
        console.log('Enter presionado');
    }
});

// Evento de formulario
let formulario = document.querySelector('#miFormulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Evitar envío por defecto
    console.log('Formulario enviado');
});
```

#### **Delegación de Eventos:**
```javascript
// En lugar de agregar listeners a cada elemento
let lista = document.querySelector('#miLista');
lista.addEventListener('click', function(evento) {
    if (evento.target.tagName === 'LI') {
        console.log('Elemento de lista clickeado:', evento.target.textContent);
    }
});
```

### Modificación del DOM

#### **Crear Elementos:**
```javascript
// Crear elemento
let nuevoDiv = document.createElement('div');
nuevoDiv.textContent = 'Nuevo contenido';
nuevoDiv.className = 'mi-clase';
nuevoDiv.id = 'nuevo-id';

// Crear con atributos
let nuevoEnlace = document.createElement('a');
nuevoEnlace.href = 'https://ejemplo.com';
nuevoEnlace.textContent = 'Enlace';
nuevoEnlace.setAttribute('target', '_blank');

// Agregar al DOM
let contenedor = document.querySelector('#contenedor');
contenedor.appendChild(nuevoDiv);
contenedor.insertBefore(nuevoEnlace, nuevoDiv);
```

#### **Modificar Contenido:**
```javascript
let elemento = document.querySelector('#miElemento');

// Contenido de texto
elemento.textContent = 'Nuevo texto';
elemento.innerHTML = '<strong>Texto con HTML</strong>';

// Atributos
elemento.setAttribute('data-id', '123');
elemento.setAttribute('class', 'nueva-clase');
let valor = elemento.getAttribute('data-id');

// Clases CSS
elemento.classList.add('activo');
elemento.classList.remove('inactivo');
elemento.classList.toggle('visible');
elemento.classList.contains('activo'); // true/false
```

#### **Eliminar Elementos:**
```javascript
let elemento = document.querySelector('#elementoAEliminar');

// Eliminar elemento
elemento.remove();

// Eliminar desde el padre
let padre = elemento.parentElement;
padre.removeChild(elemento);

// Eliminar todos los hijos
let contenedor = document.querySelector('#contenedor');
contenedor.innerHTML = '';
```

### Formularios y Validación

#### **Acceso a Formularios:**
```javascript
let formulario = document.querySelector('#miFormulario');

// Acceso a campos
let nombre = formulario.elements.nombre;
let email = formulario.elements.email;
let edad = formulario.elements.edad;

// O por querySelector
let nombre = formulario.querySelector('input[name="nombre"]');
```

#### **Validación Básica:**
```javascript
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    let nombre = formulario.elements.nombre.value;
    let email = formulario.elements.email.value;
    let edad = formulario.elements.edad.value;
    
    // Validaciones
    if (nombre.length < 2) {
        mostrarError('El nombre debe tener al menos 2 caracteres');
        return;
    }
    
    if (!validarEmail(email)) {
        mostrarError('El email no es válido');
        return;
    }
    
    if (edad < 18) {
        mostrarError('Debes ser mayor de edad');
        return;
    }
    
    // Si todo está bien
    console.log('Formulario válido');
    enviarDatos({ nombre, email, edad });
});

function validarEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function mostrarError(mensaje) {
    let errorDiv = document.querySelector('#error');
    errorDiv.textContent = mensaje;
    errorDiv.style.display = 'block';
}
```

---

## 📖 Módulo 4: Programación Asíncrona

### Callbacks

#### **Concepto Básico:**
```javascript
// Función que toma un callback
function procesarDatos(datos, callback) {
    console.log('Procesando datos...');
    setTimeout(() => {
        let resultado = datos.map(item => item * 2);
        callback(null, resultado);
    }, 1000);
}

// Uso del callback
procesarDatos([1, 2, 3], function(error, resultado) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Resultado:', resultado); // [2, 4, 6]
    }
});
```

#### **Callback Hell (Problema):**
```javascript
// ❌ Callback hell - difícil de leer y mantener
obtenerUsuario(1, function(usuario) {
    obtenerPosts(usuario.id, function(posts) {
        obtenerComentarios(posts[0].id, function(comentarios) {
            obtenerLikes(comentarios[0].id, function(likes) {
                console.log('Likes:', likes);
            });
        });
    });
});
```

### Promises

#### **Crear Promises:**
```javascript
// Promise básica
let miPromise = new Promise((resolve, reject) => {
    let exito = true;
    
    if (exito) {
        resolve('Operación exitosa');
    } else {
        reject('Error en la operación');
    }
});

// Usar Promise
miPromise
    .then(resultado => {
        console.log(resultado); // "Operación exitosa"
    })
    .catch(error => {
        console.error(error); // "Error en la operación"
    });
```

#### **Promise con Fetch:**
```javascript
function obtenerDatos(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos obtenidos:', data);
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
            throw error;
        });
}

// Uso
obtenerDatos('https://api.ejemplo.com/usuarios')
    .then(usuarios => {
        console.log('Usuarios:', usuarios);
    });
```

#### **Promise.all y Promise.race:**
```javascript
// Promise.all - espera todas las promesas
let promesas = [
    fetch('/api/usuarios'),
    fetch('/api/posts'),
    fetch('/api/comentarios')
];

Promise.all(promesas)
    .then(responses => {
        return Promise.all(responses.map(r => r.json()));
    })
    .then(datos => {
        console.log('Todos los datos:', datos);
    })
    .catch(error => {
        console.error('Error en alguna petición:', error);
    });

// Promise.race - la primera que se resuelve
Promise.race([
    fetch('/api/rapida'),
    fetch('/api/lenta')
])
.then(response => {
    console.log('Primera respuesta:', response);
});
```

### Async/Await

#### **Sintaxis Básica:**
```javascript
// Función async
async function obtenerUsuario(id) {
    try {
        let response = await fetch(`/api/usuarios/${id}`);
        let usuario = await response.json();
        return usuario;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Uso
obtenerUsuario(1)
    .then(usuario => {
        console.log('Usuario:', usuario);
    });
```

#### **Múltiples Operaciones Asíncronas:**
```javascript
// Secuencial (una después de otra)
async function procesoSecuencial() {
    let usuario = await obtenerUsuario(1);
    let posts = await obtenerPosts(usuario.id);
    let comentarios = await obtenerComentarios(posts[0].id);
    
    return { usuario, posts, comentarios };
}

// Paralelo (todas al mismo tiempo)
async function procesoParalelo() {
    let [usuario, posts, comentarios] = await Promise.all([
        obtenerUsuario(1),
        obtenerPosts(1),
        obtenerComentarios(1)
    ]);
    
    return { usuario, posts, comentarios };
}
```

### Fetch API

#### **Peticiones Básicas:**
```javascript
// GET
async function obtenerDatos() {
    try {
        let response = await fetch('https://api.ejemplo.com/datos');
        let datos = await response.json();
        return datos;
    } catch (error) {
        console.error('Error:', error);
    }
}

// POST
async function enviarDatos(datos) {
    try {
        let response = await fetch('https://api.ejemplo.com/datos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datos)
        });
        
        if (!response.ok) {
            throw new Error('Error en la petición');
        }
        
        let resultado = await response.json();
        return resultado;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

#### **Manejo de Errores con Fetch:**
```javascript
async function peticionConManejoErrores(url) {
    try {
        let response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'TypeError') {
            console.error('Error de red:', error.message);
        } else {
            console.error('Error HTTP:', error.message);
        }
        throw error;
    }
}
```

### Manejo de Errores

#### **Try/Catch:**
```javascript
async function operacionRiesgosa() {
    try {
        let resultado = await operacionQuePuedeFallar();
        return resultado;
    } catch (error) {
        console.error('Error capturado:', error.message);
        
        // Manejar diferentes tipos de error
        if (error instanceof TypeError) {
            console.error('Error de tipo');
        } else if (error instanceof ReferenceError) {
            console.error('Error de referencia');
        } else {
            console.error('Error desconocido');
        }
        
        // Re-lanzar el error si es necesario
        throw error;
    } finally {
        console.log('Operación finalizada');
    }
}
```

#### **Manejo de Errores en Promises:**
```javascript
function operacionConPromise() {
    return new Promise((resolve, reject) => {
        // Simular operación asíncrona
        setTimeout(() => {
            let exito = Math.random() > 0.5;
            
            if (exito) {
                resolve('Éxito');
            } else {
                reject(new Error('Operación falló'));
            }
        }, 1000);
    });
}

// Manejo de errores
operacionConPromise()
    .then(resultado => {
        console.log('Resultado:', resultado);
    })
    .catch(error => {
        console.error('Error:', error.message);
    })
    .finally(() => {
        console.log('Operación completada');
    });
```

---

## 📖 Módulo 5: Frameworks y Librerías

### React Básico

#### **Componente Funcional:**
```javascript
import React, { useState, useEffect } from 'react';

function MiComponente() {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('');
    
    useEffect(() => {
        document.title = `Contador: ${contador}`;
    }, [contador]);
    
    const incrementar = () => {
        setContador(contador + 1);
    };
    
    return (
        <div>
            <h1>Hola, {nombre || 'Usuario'}</h1>
            <input 
                type="text" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
            />
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    );
}

export default MiComponente;
```

#### **Props y Eventos:**
```javascript
// Componente padre
function App() {
    const [usuarios, setUsuarios] = useState([]);
    
    const agregarUsuario = (usuario) => {
        setUsuarios([...usuarios, usuario]);
    };
    
    return (
        <div>
            <FormularioUsuario onAgregar={agregarUsuario} />
            <ListaUsuarios usuarios={usuarios} />
        </div>
    );
}

// Componente hijo
function FormularioUsuario({ onAgregar }) {
    const [nombre, setNombre] = useState('');
    
    const manejarSubmit = (e) => {
        e.preventDefault();
        if (nombre.trim()) {
            onAgregar({ id: Date.now(), nombre });
            setNombre('');
        }
    };
    
    return (
        <form onSubmit={manejarSubmit}>
            <input 
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Nombre del usuario"
            />
            <button type="submit">Agregar</button>
        </form>
    );
}
```

### Node.js Fundamentos

#### **Servidor Básico:**
```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const servidor = http.createServer((req, res) => {
    let ruta = req.url === '/' ? '/index.html' : req.url;
    let archivo = path.join(__dirname, 'public', ruta);
    
    fs.readFile(archivo, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Archivo no encontrado</h1>');
        } else {
            let ext = path.extname(archivo);
            let contentType = 'text/html';
            
            switch (ext) {
                case '.js':
                    contentType = 'text/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
            }
            
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

const puerto = process.env.PORT || 3000;
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en puerto ${puerto}`);
});
```

#### **Express.js Básico:**
```javascript
const express = require('express');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/usuarios', (req, res) => {
    res.json([
        { id: 1, nombre: 'Juan' },
        { id: 2, nombre: 'María' }
    ]);
});

app.post('/api/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    
    // Validación básica
    if (!nombre || !email) {
        return res.status(400).json({ error: 'Nombre y email requeridos' });
    }
    
    // Aquí guardarías en base de datos
    const nuevoUsuario = { id: Date.now(), nombre, email };
    res.status(201).json(nuevoUsuario);
});

app.listen(3000, () => {
    console.log('Servidor Express corriendo en puerto 3000');
});
```

### NPM y Gestión de Paquetes

#### **package.json:**
```json
{
    "name": "mi-proyecto",
    "version": "1.0.0",
    "description": "Mi proyecto de JavaScript",
    "main": "index.js",
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "test": "jest",
        "build": "webpack --mode production"
    },
    "dependencies": {
        "express": "^4.18.2",
        "cors": "^2.8.5",
        "dotenv": "^16.0.3"
    },
    "devDependencies": {
        "nodemon": "^2.0.22",
        "jest": "^29.5.0",
        "webpack": "^5.76.0"
    },
    "keywords": ["javascript", "node", "express"],
    "author": "Tu Nombre",
    "license": "MIT"
}
```

#### **Comandos NPM:**
```bash
# Instalar dependencias
npm install

# Instalar paquete específico
npm install express

# Instalar como dependencia de desarrollo
npm install --save-dev nodemon

# Ejecutar scripts
npm start
npm run dev
npm test

# Actualizar paquetes
npm update

# Verificar vulnerabilidades
npm audit
npm audit fix
```

---

## 📖 Módulo 6: Herramientas de Desarrollo

### Git y GitHub

#### **Comandos Básicos:**
```bash
# Configuración inicial
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Inicializar repositorio
git init

# Ver estado
git status

# Agregar archivos
git add archivo.js
git add .  # Agregar todos los archivos

# Commit
git commit -m "Mensaje descriptivo"

# Ver historial
git log
git log --oneline

# Ramas
git branch                    # Ver ramas
git branch nueva-rama        # Crear rama
git checkout nueva-rama      # Cambiar a rama
git merge nueva-rama         # Fusionar rama

# Remoto
git remote add origin https://github.com/usuario/repo.git
git push -u origin main
git pull origin main
```

#### **Flujo de Trabajo:**
```bash
# 1. Crear nueva rama para feature
git checkout -b feature/nueva-funcionalidad

# 2. Hacer cambios y commits
git add .
git commit -m "Añadir nueva funcionalidad"

# 3. Subir rama
git push origin feature/nueva-funcionalidad

# 4. Crear Pull Request en GitHub

# 5. Después de merge, actualizar main
git checkout main
git pull origin main
git branch -d feature/nueva-funcionalidad
```

### VS Code

#### **Extensiones Esenciales:**
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Live Server**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **GitLens**

#### **Configuración (settings.json):**
```json
{
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "files.autoSave": "afterDelay",
    "editor.tabSize": 2,
    "editor.insertSpaces": true
}
```

### Chrome DevTools

#### **Console:**
```javascript
// Logging
console.log('Mensaje normal');
console.warn('Advertencia');
console.error('Error');
console.info('Información');

// Agrupación
console.group('Grupo de logs');
console.log('Log 1');
console.log('Log 2');
console.groupEnd();

// Tabla
console.table([
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 }
]);

// Tiempo
console.time('operacion');
// ... código ...
console.timeEnd('operacion');
```

#### **Debugging:**
```javascript
// Breakpoints en código
function funcionCompleja(datos) {
    debugger; // Pausa aquí
    let resultado = datos
        .filter(item => item.activo)
        .map(item => item.nombre)
        .sort();
    
    return resultado;
}

// En DevTools:
// 1. Sources tab
// 2. Seleccionar archivo
// 3. Hacer clic en número de línea para breakpoint
// 4. Usar controles de debug (step over, step into, etc.)
```

### Debugging

#### **Técnicas de Debug:**
```javascript
// 1. Console.log estratégicos
function procesarDatos(datos) {
    console.log('Datos de entrada:', datos);
    
    let filtrados = datos.filter(item => item.activo);
    console.log('Datos filtrados:', filtrados);
    
    let resultado = filtrados.map(item => item.nombre);
    console.log('Resultado final:', resultado);
    
    return resultado;
}

// 2. Assertions
function dividir(a, b) {
    console.assert(b !== 0, 'Divisor no puede ser cero');
    return a / b;
}

// 3. Try-catch con logging detallado
function operacionRiesgosa() {
    try {
        // Código que puede fallar
        let resultado = JSON.parse(datosInvalidos);
        return resultado;
    } catch (error) {
        console.error('Error en operacionRiesgosa:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date().toISOString()
        });
        throw error;
    }
}
```

---

## 🎯 Ejercicios Prácticos

### **Ejercicio 1: Calculadora Básica**
```javascript
// Crear una calculadora con las operaciones básicas
class Calculadora {
    constructor() {
        this.historial = [];
    }
    
    sumar(a, b) {
        let resultado = a + b;
        this.agregarAlHistorial(`${a} + ${b} = ${resultado}`);
        return resultado;
    }
    
    restar(a, b) {
        let resultado = a - b;
        this.agregarAlHistorial(`${a} - ${b} = ${resultado}`);
        return resultado;
    }
    
    multiplicar(a, b) {
        let resultado = a * b;
        this.agregarAlHistorial(`${a} * ${b} = ${resultado}`);
        return resultado;
    }
    
    dividir(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir por cero');
        }
        let resultado = a / b;
        this.agregarAlHistorial(`${a} / ${b} = ${resultado}`);
        return resultado;
    }
    
    agregarAlHistorial(operacion) {
        this.historial.push(operacion);
    }
    
    obtenerHistorial() {
        return this.historial;
    }
}

// Uso
let calc = new Calculadora();
console.log(calc.sumar(5, 3));        // 8
console.log(calc.multiplicar(4, 6));  // 24
console.log(calc.obtenerHistorial());
```

### **Ejercicio 2: Gestor de Tareas**
```javascript
// Sistema de gestión de tareas con localStorage
class GestorTareas {
    constructor() {
        this.tareas = this.cargarTareas();
    }
    
    agregarTarea(texto, prioridad = 'media') {
        const tarea = {
            id: Date.now(),
            texto,
            prioridad,
            completada: false,
            fechaCreacion: new Date().toISOString()
        };
        
        this.tareas.push(tarea);
        this.guardarTareas();
        return tarea;
    }
    
    completarTarea(id) {
        const tarea = this.tareas.find(t => t.id === id);
        if (tarea) {
            tarea.completada = true;
            this.guardarTareas();
        }
    }
    
    eliminarTarea(id) {
        this.tareas = this.tareas.filter(t => t.id !== id);
        this.guardarTareas();
    }
    
    obtenerTareas(filtro = 'todas') {
        switch (filtro) {
            case 'completadas':
                return this.tareas.filter(t => t.completada);
            case 'pendientes':
                return this.tareas.filter(t => !t.completada);
            default:
                return this.tareas;
        }
    }
    
    guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
    }
    
    cargarTareas() {
        const tareas = localStorage.getItem('tareas');
        return tareas ? JSON.parse(tareas) : [];
    }
}

// Uso
const gestor = new GestorTareas();
gestor.agregarTarea('Aprender JavaScript', 'alta');
gestor.agregarTarea('Hacer ejercicio', 'media');
console.log(gestor.obtenerTareas());
```

### **Ejercicio 3: API de Clima**
```javascript
// Cliente para API de clima
class ClimaAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.openweathermap.org/data/2.5';
    }
    
    async obtenerClimaPorCiudad(ciudad) {
        try {
            const url = `${this.baseURL}/weather?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            return this.formatearDatosClima(data);
        } catch (error) {
            console.error('Error al obtener clima:', error);
            throw error;
        }
    }
    
    formatearDatosClima(data) {
        return {
            ciudad: data.name,
            pais: data.sys.country,
            temperatura: Math.round(data.main.temp),
            sensacion: Math.round(data.main.feels_like),
            humedad: data.main.humidity,
            descripcion: data.weather[0].description,
            icono: data.weather[0].icon,
            viento: data.wind.speed
        };
    }
    
    async obtenerPronostico(ciudad, dias = 5) {
        try {
            const url = `${this.baseURL}/forecast?q=${ciudad}&appid=${this.apiKey}&units=metric&lang=es`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
            
            const data = await response.json();
            return this.formatearPronostico(data, dias);
        } catch (error) {
            console.error('Error al obtener pronóstico:', error);
            throw error;
        }
    }
    
    formatearPronostico(data, dias) {
        const pronostico = [];
        const fechasUnicas = new Set();
        
        data.list.forEach(item => {
            const fecha = item.dt_txt.split(' ')[0];
            if (fechasUnicas.size < dias && !fechasUnicas.has(fecha)) {
                fechasUnicas.add(fecha);
                pronostico.push({
                    fecha: fecha,
                    temperatura: Math.round(item.main.temp),
                    descripcion: item.weather[0].description,
                    icono: item.weather[0].icon
                });
            }
        });
        
        return pronostico;
    }
}

// Uso
const clima = new ClimaAPI('tu-api-key');
clima.obtenerClimaPorCiudad('Madrid')
    .then(datos => console.log('Clima actual:', datos))
    .catch(error => console.error('Error:', error));
```

---

## 📚 Recursos Adicionales

### **Documentación Oficial:**
- [MDN JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [Node.js Documentation](https://nodejs.org/docs/)
- [React Documentation](https://reactjs.org/docs/)

### **Cursos Recomendados:**
- [JavaScript.info](https://javascript.info/) - Tutorial completo
- [FreeCodeCamp](https://www.freecodecamp.org/) - Curso interactivo
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Libro online
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - Serie de libros

### **Herramientas de Práctica:**
- [Codepen](https://codepen.io/) - Editor online
- [JSFiddle](https://jsfiddle.net/) - Playground
- [Repl.it](https://repl.it/) - IDE online
- [LeetCode](https://leetcode.com/) - Problemas de algoritmos

### **Comunidades:**
- [Stack Overflow](https://stackoverflow.com/) - Preguntas y respuestas
- [Reddit r/javascript](https://www.reddit.com/r/javascript/) - Discusiones
- [Dev.to](https://dev.to/) - Artículos y tutoriales
- [GitHub](https://github.com/) - Código fuente y proyectos

---

## 🎯 Checklist para JavaScript Junior Developer

### **Fundamentos (✅/❌)**
- [ ] Variables (var, let, const)
- [ ] Tipos de datos y operadores
- [ ] Estructuras de control (if, switch, loops)
- [ ] Funciones y scope
- [ ] Arrays y objetos
- [ ] Clases y herencia

### **JavaScript Moderno (✅/❌)**
- [ ] Arrow functions
- [ ] Template literals
- [ ] Destructuring
- [ ] Spread/Rest operators
- [ ] Modules (import/export)
- [ ] Promises y async/await

### **DOM Manipulation (✅/❌)**
- [ ] Selección de elementos
- [ ] Event listeners
- [ ] Modificación del DOM
- [ ] Formularios y validación
- [ ] LocalStorage/SessionStorage

### **Programación Asíncrona (✅/❌)**
- [ ] Callbacks
- [ ] Promises
- [ ] Async/await
- [ ] Fetch API
- [ ] Manejo de errores

### **Frameworks/Librerías (✅/❌)**
- [ ] React básico
- [ ] Node.js fundamentos
- [ ] NPM/Yarn
- [ ] Webpack/Vite básico

### **Herramientas (✅/❌)**
- [ ] Git y GitHub
- [ ] VS Code
- [ ] Chrome DevTools
- [ ] Debugging
- [ ] Testing básico

---

## 🚀 Próximos Pasos

1. **Practica diariamente** con ejercicios pequeños
2. **Construye proyectos** reales para tu portfolio
3. **Contribuye a proyectos** open source
4. **Mantente actualizado** con las últimas tendencias
5. **Únete a comunidades** de desarrolladores
6. **Busca un mentor** o programa de mentoreo
7. **Aplica a trabajos** junior y aprende en el proceso

---

**¡Recuerda: La práctica constante es la clave para dominar JavaScript!** 🎯

---

*Este README es una guía completa y en constante evolución. Si encuentras errores o tienes sugerencias, ¡no dudes en contribuir!*
