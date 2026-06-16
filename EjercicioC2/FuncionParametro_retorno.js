function calcularpromedio (nota1, nota2, nota3){
    
    let promedio = (nota1 + nota2 + nota3) / 3;

    return promedio;
}

let resultado = calcularpromedio(3.0 , 2.0, 5.0);

console.log("El promedio final es " + resultado);

if (resultado => 3.0){
    console.log("El aprendiz aprobo");
}else{
    console.log("El aprendiz reprobo")
}




