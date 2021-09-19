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

for (let questNum = 0; questNum < 10; questNum++) {
    main += `<div class="whole">`
        + `<div class="quiz-box">`
        + `<h1 class="question">${questNum + 1}. この地名はなんて読む？</h1>`
        + `<div class="image-box">`
        + `<img src="${pic[questNum]}" alt="" class="quiz-img">`
        + `</div>`
        + `<ul id="quiz-choice${questNum}" class="quiz-choice">`
        + `<li id="choice${questNum}-1">${choices[questNum][2]}</li>`
        + `<li id="choice${questNum}-2">${choices[questNum][1]}</li>`
        + `<li id="choice${questNum}-3">${choices[questNum][0]}</li>`
        + `</ul>`
        + `<div id="correct-response${questNum}"></div>`
        + `<div id="wrong-response${questNum}"></div>`
        + `</div>`
        + `</div>`

    entire.innerHTML = main;
}

let target = document.querySelector('ul');

for (let questNum = 0; questNum < 10; questNum++) {
    function shuffle () {
        for (let cho = document.getElementById(`quiz-choice${questNum}`).children.length; cho >= 0; cho--) {
            document.getElementById(`quiz-choice${questNum}`).appendChild(document.getElementById(`quiz-choice${questNum}`).children[Math.random() * cho | 0]);
        }
    }
    window.addEventListener('load', function() {
        shuffle();
    });
}

for (let questNum = 0; questNum < 10; questNum++) {

    // 正解の時の回答ボックスの表示
    document.getElementById(`choice${questNum}-3`).addEventListener('click', function () {
        document.getElementById(`choice${questNum}-3`).classList.add('correct-answer-button');
        const detailCorrectResponse = document.createElement('div');
        detailCorrectResponse.className = 'response-box';
        detailCorrectResponse.innerHTML = `<!-- 正解の時の回答ボックスの内容 -->
        <h1 class = "correct">正解!</h1>
            <p>正解は「${choices[questNum][0]}」です！</p>`
        document.getElementById(`correct-response${questNum}`).appendChild(detailCorrectResponse);
        document.getElementById(`choice${questNum}-1`).classList.add('no-pointer');
        document.getElementById(`choice${questNum}-2`).classList.add('no-pointer');
        document.getElementById(`choice${questNum}-3`).classList.add('no-pointer');
    });

    // 不正解の時の回答ボックスの表示
    document.getElementById(`choice${questNum}-1`).addEventListener('click', function () {
        document.getElementById(`choice${questNum}-1`).classList.add('wrong-answer-button');
        document.getElementById(`choice${questNum}-3`).classList.add('correct-answer-button');
        const detailWrongResponse = document.createElement('div');
        detailWrongResponse.className = 'response-box';
        detailWrongResponse.innerHTML = `<!-- 不正解の時の回答ボックスの内容 -->
            <h1 class = "wrong">不正解!</h1>
            <p>正解は「${choices[questNum][0]}」です！</p>`
        document.getElementById(`wrong-response${questNum}`).appendChild(detailWrongResponse);
        document.getElementById(`choice${questNum}-1`).classList.add('no-pointer');
        document.getElementById(`choice${questNum}-2`).classList.add('no-pointer');
        document.getElementById(`choice${questNum}-3`).classList.add('no-pointer');
    });
    document.getElementById(`choice${questNum}-2`).addEventListener('click', function () {
        document.getElementById(`choice${questNum}-2`).classList.add('wrong-answer-button');
        document.getElementById(`choice${questNum}-3`).classList.add('correct-answer-button');
        const detailWrongResponse = document.createElement('div');
        detailWrongResponse.className = 'response-box';
        detailWrongResponse.innerHTML = `<!-- 不正解の時の回答ボックスの内容 -->
            <h1 class = "wrong">不正解!</h1>
            <p>正解は「${choices[questNum][0]}」です！</p>`
        document.getElementById(`wrong-response${questNum}`).appendChild(detailWrongResponse);
        document.getElementById(`choice${questNum}-1`).classList.add('no-pointer');
        document.getElementById(`choice${questNum}-2`).classList.add('no-pointer');
        document.getElementById(`choice${questNum}-3`).classList.add('no-pointer');
    });
}





