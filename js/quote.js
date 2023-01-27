const quotes = [
  {
    quote: "작은 일에서 성장할 능력이 있는 사람에게 큰일이 주어진다",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "말 적은 이가 제일 좋은 사람이다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "젊었을 때 형성된 좋은 습관이 모든 차이를 만든다.",
    author: "아리스토텔레스",
  },
  {
    quote: "인생의 위대한 목표는 지식이 아니라 행동이다.",
    author: "토마스 헨리 헉슬리",
  },
  {
    quote: "가을은 모든 잎사귀가 꽃이 되는 제 2의 봄이다",
    author: "알베르 카뮈",
  },
  {
    quote: "스스로가 평안을 얻지 못하면 외부에서 절대로 평안을 얻지 못합니다.",
    author: "달라이 라마",
  },
  {
    quote: "좋은 것은 위대함의 적이다",
    author: "볼테르",
  },
  {
    quote: "인생의 비밀은 예술 속에 있다.",
    author: "오스카 와일드",
  },
  {
    quote: "수명을 늘리려면 식사를 줄여라",
    author: "벤자민 프랭클린",
  },
  {
    quote: "상처는 잊되, 은혜는 결코 잊지 말라.",
    author: "공자",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
