const faturamento = [
  "22174.1664",
  "24537.6698",
  "26139.6134",
  "26742.6612",
  "42889.2258",
  "46251.174",
  "11191.4722",
  "3847.4823",
  "373.7838",
  "2659.7563",
  "48924.2448",
  "18419.2614",
  "35240.1826",
  "43829.1667",
  "18235.6852",
  "4355.0662",
  "13327.1025",
  "25681.8318",
  "1718.1221",
  "13220.495",
  "8414.61",
];

let soma = 0;
let acimaDaMedia = 0;

const max = Math.max(...faturamento);
const min = Math.min(...faturamento);

for (let i = 0; i < faturamento.length; i++) {
  soma = parseFloat(soma) + parseFloat(faturamento[i]);
}

let media = soma / faturamento.length;

for (let j = 0; j < faturamento.length; j++) {
  if (faturamento[j] > media) {
    acimaDaMedia = acimaDaMedia + 1;
  }
}

alert(`O maior faturamento em um dia foi de ${max}`);
alert(`O menor faturamento em um dia foi de ${min}`);
alert(`${acimaDaMedia} dias tiveram um faturamento acima da média`);
