const quiz = [
  {
    question: 'もりやていじが新一を招待したアフタヌーンパーティの開催日はいつでしょう？',
    answers: [ '3月31日 月曜日', '4月29日 火曜日', '5月4日 日曜日', 'この中にない'],
    correct: '4月29日 火曜日'
  }, {
    question: 'ねぇ、新一は赤と青のどっちが好き？',
    answers: [ 'え、まぁ赤かなぁ', 'ん、まぁ赤かなぁ', 'え、じゃあ赤かなぁ', 'ん、じゃあ赤かなぁ'],
    correct: 'ん、じゃあ赤かなぁ'
  }, {
    question: 'もりやていじの本名は？',
    answers: [ '森谷 帝次', '森谷 帝二', '森谷 貞治', '森谷 貞次'],
    correct: '森谷 貞治'
  }, {
    question: '火薬庫からオクトーゲンを含む大量の爆薬が盗まれたのはなんという会社でしょう？',
    answers: [ '東海火薬', '東洋火薬', '東西火薬', '東欧火薬'],
    correct: '東洋火薬'
  }, {
    question: '西多摩市の岡本市長の息子 浩平が事故当時吸っていたタバコの銘柄は？',
    answers: [ 'Panter', 'Panther', 'Peter', 'Potter'],
    correct: 'Panter'
  }, {
    question: '東都環状鉄道の運行部長は誰？',
    answers: [ '井口', '入口', '坂口', '門口'],
    correct: '坂口'
  }, {
    question: '東都環状線の爆弾が仕掛けられていた場所は？',
    answers: [ '座席の下', '網棚の上', '車体の下', '線路の間'],
    correct: '線路の間'
  }, {
    question: '蘭と遊んでいた園子が別れて向かったのは何駅？',
    answers: [ '米花駅', '緑台駅', '沢袋駅', '銅座駅'],
    correct: '銅座駅'
  }, {
    question: '赤い糸の伝説の主演は山崎稚内ともうひとり誰？',
    answers: [ '飛騨三七三', '高山三七三', '岐阜三七三', '下呂三七三'],
    correct: '高山三七三'
  }, {
    question: '真実は？',
    answers: [ 'いつもひとつ', 'バーロー', 'おまんがな', 'A secret makes a woman woman'],
    correct: 'いつもひとつ'
  }

];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}