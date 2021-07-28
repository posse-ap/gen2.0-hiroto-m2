let choice1 = document.getElementById('choice1');
let choice2 = document.getElementById('choice2');
let choice3 = document.getElementById('choice3');

// 選択肢のボタンの色を変える
function movement(choiceno) {
    let clicked_choice = document.getElementById('choice'+choiceno);
    choice3.classList.add('correct-answer-button');
    clicked_choice.classList.add('wrong-answer-button');
}

// 正解の時の回答ボックスの表示
let correct_response = document.getElementById('correct-response');
choice3.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = '正解！';
    correct_response.appendChild(paragraph);
}, false);

// 不正解の時の回答ボックスの表示
let wro_res = document.getElementById('wrong_response');
function movement(choiceno) {
    let clicked_choice = document.getElementById('choice'+choiceno);
}
clicked_choice.addEventListener('click', function () {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = '不正解!';
    wrong_response.appendChild(paragraph);
}, false);