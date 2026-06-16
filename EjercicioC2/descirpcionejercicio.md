# Ejercicio 2 – Función con parámetros y retorno

- Diseña una función llamada calcularPromedio que reciba tres notas y retorne el
promedio final del estudiante.
- Si el promedio es mayor o igual a 3.0, muestra un mensaje indicando que aprobó;
de lo contrario, que reprobó.
- Aplica operadores lógicos y condicionales.

# Explicacion del Codigo

La función calcularPromedio recibe tres notas como parámetros. Después, dentro de la función, las notas se suman y el resultado se divide entre 3 para obtener el promedio, el cual se guarda en la variable promedio. Luego, con return promedio, la función devuelve ese resultado. Más adelante, la función es llamada enviando tres notas como argumentos y el promedio calculado se guarda en la variable resultado. Después, console.log() muestra el promedio en pantalla. Finalmente, se utiliza una condición if para verificar si el promedio es mayor o igual a 3.0; si se cumple, muestra el mensaje “El estudiante aprobó”, y si no se cumple, else muestra “El estudiante reprobó”.