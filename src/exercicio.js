"use strict";
var exercicio;
(function (exercicio) {
    // Função para retornar uma saudação personalizada com o nome
    const dizOi = (nome) => `Olá ${nome}, como vai?`;
    console.log(dizOi('Nicolas'));
    // Função para calcular a área, com validação para evitar valores negativos
    const calculaArea = (largura, comprimento) => {
        // Verificação para garantir que os valores não sejam negativos
        if (largura < 0 || comprimento < 0) {
            throw new Error(`Os valores não podem ser menores que zero!`); // Corrigido o português aqui
        }
        // Retorna o cálculo da área (largura * comprimento)
        return largura * comprimento;
    };
    // Exibindo o resultado da função calculaArea no console
    console.log(`A área é de: ${calculaArea(25, 25)}m²`);
})(exercicio || (exercicio = {}));
