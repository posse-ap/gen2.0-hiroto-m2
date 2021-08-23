const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');

const correctResponse = document.getElementById('correct-response');
const wrongResponse = document.getElementById('wrong-response'); 

/// ボタンを押した時実行する
function movement(choiceNumber) {
    const clickedChoice = document.getElementById('choice'+choiceNumber);
    // 選択肢のボタンの色を変える
    choice3.classList.add('correct-answer-button');
    clickedChoice.classList.add('wrong-answer-button');
}

// 正解の時の回答ボックスの表示
choice3.addEventListener('click', function () {
    const detailCorrectResponse = document.createElement('div');
    detailCorrectResponse.className = 'response-box'
    detailCorrectResponse.innerHTML = `<!-- 正解の時の回答ボックスの内容 -->
    <h1 class = "correct">正解!</h1>
    <p>正解は「たかなわ」です！</p>`
    correctResponse.appendChild(detailCorrectResponse);
});

// 不正解の時の回答ボックスの表示
choice1.addEventListener('click', function () {
    const detailWrongResponse = document.createElement('div');
    detailWrongResponse.className = 'response-box'
    detailWrongResponse.innerHTML = `<!-- 不正解の時の回答ボックスの内容 -->
    <h1 class = "wrong">不正解!</h1>
    <p>正解は「たかなわ」です！</p>`
    wrongResponse.appendChild(detailWrongResponse);
});
choice2.addEventListener('click', function () {
    const detailWrongResponse = document.createElement('div');
    detailWrongResponse.className = 'response-box'
    detailWrongResponse.innerHTML = `<!-- 不正解の時の回答ボックスの内容 -->
    <h1 class = "wrong">不正解!</h1>
    <p>正解は「たかなわ」です！</p>`
    wrongResponse.appendChild(detailWrongResponse);
});
