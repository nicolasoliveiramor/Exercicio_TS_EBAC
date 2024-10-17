"use strict";
const funcaoDizOi = (nome) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(`Olá ${nome}, como vai?`);
        }
        catch (error) {
            reject(error);
        }
    });
};
const funcaoCalculaArea = (largura, comprimento) => {
    return new Promise((resolve, reject) => {
        if (largura < 0 || comprimento < 0) {
            reject(new Error(`Os valores não podem ser menores do que zero!`));
        }
        else if (typeof largura !== "number" || typeof comprimento !== "number") {
            reject(new Error(`Os valores devem ser números.`));
        }
        else {
            resolve(largura * comprimento);
        }
    });
};
funcaoDizOi('Nicolas')
    .then(result => console.log(result))
    .catch(error => console.error(error));
funcaoCalculaArea('25', '25')
    .then(result => console.log(`A área é de: ${result}m².`))
    .catch(error => console.error(error));
