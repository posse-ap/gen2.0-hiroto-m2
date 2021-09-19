'use strict';

let pic = [
    'https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png',
    'https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png',
    'https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png',
    'https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png',
]

let choices = [
    ['たかなわ', 'たかわ', 'こうわ'],
    ['かめいど', 'かめど', 'かめと'],
    ['こうじまち', 'おかとまち', 'かゆまち'],
    ['おなりもん', 'おかどもん', 'ごせいもん'],
    ['とどろき', 'たたりき', 'たたら'],
    ['しゃくじい', 'せきこうい', 'いじい'],
    ['ぞうしき', 'ざっしょく', 'ざっしき'],
    ['おかちまち', 'ごしろちょう', 'みとちょう'],
    ['ししぼね', 'ろっこつ', 'しこね'],
    ['こぐれ', 'こしゃく', 'こばく'],
]

let main = '';

for (let i = 0; i < 10; i++) {
    main += `<div class="whole">`
        + `<div class="quiz-box">`
        + `<h1 class="question">${i+1}. この地名はなんて読む？</h1>`
        + `<div class="image-box">`
        + `<img src="${pic[i]}" alt="" class="quiz-img">`
        + `</div>`
        + `<ul class="quiz-choice">`
        + `<li id="choice1" onclick="movement(1)" onclick="">${choices[i][2]}</li>`
        + `<li id="choice2" onclick="movement(2)">${choices[i][1]}</li>`
        + `<li id="choice3" onclick="movement()">${choices[i][0]}</li>`
        + `</ul>`
        + `<div id="correct-response"></div>`
        + `<div id="wrong-response"></div>`
        + `</div>`
        + `</div>`

    entire.innerHTML = main;
}

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');

const correctResponse = document.getElementById('correct-response');
const wrongResponse = document.getElementById('wrong-response');

/// ボタンを押した時実行する
function movement(choiceNumber) {
    const clickedChoice = document.getElementById('choice' + choiceNumber);
    // 選択肢のボタンの色を変える
    choice3.classList.add('correct-answer-button');
    clickedChoice.classList.add('wrong-answer-button');
}


// 正解の時の回答ボックスの表示
choice3.addEventListener('click', function () {
    const detailCorrectResponse = document.createElement('div');
    detailCorrectResponse.className = 'response-box';
    detailCorrectResponse.innerHTML = `<!-- 正解の時の回答ボックスの内容 -->
    <h1 class = "correct">正解!</h1>
    <p>正解は「たかなわ」です！</p>`
    correctResponse.appendChild(detailCorrectResponse);
    choice1.classList.add('no-pointer');
    choice2.classList.add('no-pointer');
    choice3.classList.add('no-pointer');
});

// 不正解の時の回答ボックスの表示
choice1.addEventListener('click', function () {
    const detailWrongResponse = document.createElement('div');
    detailWrongResponse.className = 'response-box';
    detailWrongResponse.innerHTML = `<!-- 不正解の時の回答ボックスの内容 -->
    <h1 class = "wrong">不正解!</h1>
    <p>正解は「たかなわ」です！</p>`
    wrongResponse.appendChild(detailWrongResponse);
    choice1.classList.add('no-pointer');
    choice2.classList.add('no-pointer');
    choice3.classList.add('no-pointer');
});
choice2.addEventListener('click', function () {
    const detailWrongResponse = document.createElement('div');
    detailWrongResponse.className = 'response-box';
    detailWrongResponse.innerHTML = `<!-- 不正解の時の回答ボックスの内容 -->
    <h1 class = "wrong">不正解!</h1>
    <p>正解は「たかなわ」です！</p>`
    wrongResponse.appendChild(detailWrongResponse);
    choice1.classList.add('no-pointer');
    choice2.classList.add('no-pointer');
    choice3.classList.add('no-pointer');
});
