/**
 * Lección 2: Operadores
 */
class Lesson2Operators extends Lesson {
    constructor() {
        super({
            id: 'operadores',
            number: 2,
            icon: 'fas fa-plus',
            title: 'Operadores',
            intro: 'Los operadores permiten realizar operaciones con valores. JavaScript incluye operadores aritméticos, de comparación y lógicos para manipular datos.',
            keyPoints: [
                'Operadores aritméticos: +, -, *, /, %, **',
                'Operadores de comparación: ==, ===, !=, !==, <, >, <=, >=',
                'Operadores lógicos: &&, ||, !',
                'Operadores de asignación: =, +=, -=, *=, /='
            ],
            examples: [
                {
                    title: 'Operadores Aritméticos',
                    code: `let a = 10;
let b = 3;

// Suma
console.log(a + b); // 13

// Resta
console.log(a - b); // 7

// Multiplicación
console.log(a * b); // 30

// División
console.log(a / b); // 3.333...

// Módulo (resto)
console.log(a % b); // 1

// Potencia
console.log(a ** b); // 1000`,
                    explanation: 'Los operadores aritméticos realizan operaciones matemáticas básicas.'
                },
                {
                    title: 'Operadores de Comparación',
                    code: `let x = 5;
let y = "5";

// Igualdad (==) - convierte tipos
console.log(x == y); // true

// Igualdad estricta (===) - compara tipo y valor
console.log(x === y); // false

// Desigualdad
console.log(x != y); // false
console.log(x !== y); // true

// Mayor que
console.log(x > 3); // true

// Menor o igual
console.log(x <= 5); // true`,
                    explanation: 'Usa siempre === y !== para comparaciones estrictas y evitar errores.'
                },
                {
                    title: 'Operadores Lógicos',
                    code: `let edad = 25;
let tieneLicencia = true;

// AND (&&) - ambas condiciones deben ser verdaderas
if (edad >= 18 && tieneLicencia) {
    console.log("Puede conducir");
}

// OR (||) - al menos una condición debe ser verdadera
if (edad < 18 || !tieneLicencia) {
    console.log("No puede conducir");
}

// NOT (!) - invierte el valor booleano
console.log(!true); // false
console.log(!false); // true`,
                    explanation: 'Los operadores lógicos permiten combinar múltiples condiciones.'
                }
            ],
            summary: `
                <p>En esta lección aprendiste sobre:</p>
                <ul>
                    <li><strong>Operadores aritméticos:</strong> para cálculos matemáticos</li>
                    <li><strong>Operadores de comparación:</strong> para comparar valores</li>
                    <li><strong>Operadores lógicos:</strong> para combinar condiciones</li>
                    <li><strong>Precedencia:</strong> el orden en que se evalúan las operaciones</li>
                </ul>
                <p>Los operadores son herramientas esenciales para manipular y comparar datos.</p>
            `
        });
    }
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Lesson2Operators;
} else {
    window.Lesson2Operators = Lesson2Operators;
}
