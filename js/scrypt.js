const ball = document.createElement('div');
const answerText = new Array('Так','Ні','спитай в нормальних <br> людей','все може бути','спробуй','не варто','не лізь туди');
document.body.style.backgroundColor = 'black';
document.body.style.display= 'flex';
document.body.style.flexDirection= 'column';
document.body.style.alignItems = 'center';
document.body.style.justify = 'center';

ball.style.background = 'radial-gradient(circle closest-corner, #000dfeff 0%, rgba(78, 205, 197, 0) 70%)';
ball.style.color = 'white';
ball.style.width = "800px";
ball.style.height = "800px";
ball.style.display = 'flex';
ball.style.justifyContent = 'center';
ball.style.alignItems = 'center';
ball.style.marginTop = '100px';


const answer = document.createElement('p');
answer.style.position = 'absolute';
answer.style.textAlign = 'center';
answer.innerHTML = "введіть питання <br> та <br> натисніть на кулю";
answer.style.fontSize = '24px';
answer.style.top = '430px';
answer.style.cursor = 'pointer';
ball.appendChild(answer);

const imageBall = document.createElement('img');
imageBall.src = "./image/ball.png";
imageBall.style.width = '600px';
imageBall.style.height = '600px';
imageBall.style.objectFit = 'cover';
imageBall.style.transition = 'transform 0.3s ease';
imageBall.style.cursor = 'pointer';

const question = document.createElement('input');
question.style.position = 'absolute';
question.style.top = '140px';
question.style.width = '40%';
question.style.height = '40px';
question.placeholder = 'Введіть ваше питання тут...';
question.style.fontSize = '26px';
question.style.paddingLeft = '25px'; 
question.style.color = '#b3b3b3ff'; 
question.style.backgroundColor = 'rgba(255, 255, 255, 0)';
question.style.border = '2px solid #000dfeff';
question.style.borderRadius = '25px';

ball.appendChild(imageBall);
document.body.append(ball);
ball.prepend(question);

const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0% { transform: translateX(0); }
        15% { transform: translateX(-100px) }
        25% { transform: translateX(0); }
        35% { transform: translateX(100px); }
        45% { transform: translateX(0); }
        55% { transform: translateX(-50px); }
        65% { transform: translateX(0); }
        75% { transform: translateX(50px); }
        100% { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
imageBall.addEventListener('click', clickOnBall);
answer.addEventListener('click', clickOnBall);

function clickOnBall(){
    if (question.value === "" || question.value.indexOf('?') === -1) {
        imageBall.style.pointerEvents = "none";
        answer.style.pointerEvents = "none";
       question.value = '';
        question.style.border = '2px solid #ff0000ff';
         question.placeholder = 'Будь ласка, введіть питання, або поставте знак питання';
         setTimeout(()=>{ 
        imageBall.style.pointerEvents = 'auto';
        answer.style.pointerEvents = 'auto';
         question.style.border = '2px solid #000dfeff';
         question.placeholder = 'Введіть ваше питання тут...';
         },2000);
        return;
    }
    imageBall.style.pointerEvents = 'none';
    answer.style.pointerEvents = 'none';
    imageBall.style.animation = 'shake 1s ease';
    answer.innerHTML = answerText[randomText()];
    setTimeout(()=>{
        question.value = '';
        answer.innerHTML = "введіть наступне <br> питання  та <br> натисніть на кулю";
        question.placeholder = 'Введіть ваше наступне питання';
          imageBall.style.pointerEvents = 'auto';
          answer.style.pointerEvents = 'auto';
    },3000)

    setTimeout(() => {
        imageBall.style.animation = '';
    }, 1000);
}
function randomText(){
return Math.floor(Math.random()* answerText.length);
}
