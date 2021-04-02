import BolitaMovSelector from '../classes/bolitaMovSelector';

window.addEventListener('load', () => {
    const selectors = document.querySelectorAll('.movSelector');

    let balls = [];
    selectors.forEach(selector => {
        const ball = new BolitaMovSelector(selector);
        balls.push(ball);
    });

    balls.forEach(ball =>{
        const ballElement = ball.getElement();
        ballElement.addEventListener('click', () => {
            balls.forEach(ball => {
                ball.setSelected(false);
                ball.getElement().classList.remove('movSelector--selected');
            });
            ball.setSelected(true);
            ballElement.classList.add('movSelector--selected');
        });

        console.log(selectors);
        console.log(balls);
    });


    console.log(selectors);
});