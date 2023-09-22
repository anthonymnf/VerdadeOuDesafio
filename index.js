const verdade = [
  "O que pode ser melhorado no relacionamento?",
  "O que você mais ama nele (a)?",
  "O que você achou do nosso primeiro beijo?",
  "Pelo o quê você é grato no relacionamento?",
  "O que você acha mais engraçado nele (a)?",
  "Que música te faz lembrar dele (a)?",
  "Qual seu sonho para nós dois?",
  "O que você aprendeu com ele (a)?",
  "O que ele(a) faz que te deixa muito feliz?",
  "O que te faz sentir ciúmes?",
  "Pra você qual foi o momento mais feliz do relacionamento?",
  "O que ele(a) faz na cama que você mais gosta?",
  "Que tipo de sexo você mais gosta, suave ou selvagem?",
  "Qual foi o momento no qual você mais sentiu ciúmes de mim?",
  "O que você gostaria de melhorar na nossa relação?",
  "Para onde você gostaria de viajar comigo?",
  "O que você mais gosta na nossa relação?",
  "Como seria um dia perfeito comigo?",
  "O que você gostaria de realizar ao meu lado?",
  "Já teve alguma coisa na hora do sexo que você não pediu por vergonha?",
];

const desafio = [
  "Diga ao seu amor que o(a) ama de 5 maneiras diferentes",
  "Diga 3 coisas que você admira no seu companheiro(a)",
  "Faça um pouco de massagem no seu amor (ele(a) escolhe onde)",
  "Tire uma peça de roupa",
  "Diga algo provocante para seu amor",
  "Dê um beijo na parte íntima do seu parceiro(a)",
  // "Fale de seus planos para um futuro juntos",
  "Dê um beijo no seu amor, onde você quiser",
  "Dê um longo e demorado abraço",
  "Dê um longo e demorado beijo na boca",
  "Faça sexo oral no teu parceiro(a) por 1 minuto",
  "Um pouco de pausa para carinhos",
  "Tire uma peça de roupa",
  "Beije a região que mais gosta nele(a)",
  "Mande uma foto sensual",
  "Tire uma peça de roupa",
  "Sussurre algo quente no ouvido dele(a)",
  "Masturbe o seu parceiro(a) por 1 minuto",
  "Provoque ele(a)",
  "Dê um beijo na parte íntima do seu parceiro(a)",
  "Amarre as mãos e deixe o seu parceiro(a) fazer o que quiser com você por 2 minutos",
  "Coloque uma venda e deixe o seu parceiro(a) fazer o que quiser com você por 2 minutos",
  "Faça sexo oral no teu parceiro(a) por 1 minuto",
  "Abrace o seu parceiro(a) só com roupa íntima",
  "Fique sem roupa e sarre no teu parceiro(a) por 2 minutos, quem ceder a tentação e colocar dentro perde e tem que fazer um desafio",
  "Desafio Coringa: O teu parceiro(a) escolhe qualquer desafio pra você",
];

function sortear(array) {
  const element = document.getElementById("text");
  const num = Math.floor(Math.random() * (array.length - 1));
  element.innerText = array[num];
}

const btnTrue = document.getElementById("true");
const btnChallenge = document.getElementById("challenge");

btnTrue.addEventListener("click", () => {
  sortear(verdade);
});
btnChallenge.addEventListener("click", () => {
  sortear(desafio);
});
