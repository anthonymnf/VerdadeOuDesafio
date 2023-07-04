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
  "Faça 5 minutos de massagem no seu amor (ele(a) escolhe onde)",
  "Tire uma peça de roupa",
  "Diga algo provocante para seu amor",
  "Fale de seus planos para um futuro juntos",
  "Dê um beijo no seu amor, onde você quiser",
  "Dê um longo e demorado abraço",
  "Dê um longo e demorado beijo na boca",
  "Pausa de 5 minutos para carinhos",
  "Tire uma peça de roupa",
  "Beije a região que mais gosta nele(a)",
  "Mande uma foto sensual",
  "Tire uma peça de roupa",
  "Sussurre algo quente no ouvido dele(a) ",
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
