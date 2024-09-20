// controller/calculadora.js

exports.calculo = (req, res) => {
    const { num1, num2, operacao } = req.body;

    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return res.status(400).send("Divisão por zero não é permitida.");
            }
            break;
        default:
            return res.status(400).send("Operação inválida.");
    }

    res.json({ resultado });
};
