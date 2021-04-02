import BolitaInventario from '../classes/bolitaInventario';

window.addEventListener('load', () => {
    const ballsElements = document.querySelectorAll('.circleInv');
    const balls = [];

    ballsElements.forEach((ballElement, index) => {
        const newBall = new BolitaInventario(ballElement, (index-1)*100, 0);
        balls.push(newBall);
    });

    let offsetX = 0;
    let offsetY = 0;

    balls.forEach(ball => {
        const ballElement = ball.getElement();

        ballElement.addEventListener('mousedown', (event) => {
            balls.forEach(ball => {
                ball.setSelected(false);
            });
            ball.setSelected(true);
            offsetX = event.offsetX + 8;
            offsetY = event.offsetY + 8;
        });
    });

    document.addEventListener('mousemove', (event) => {
        balls.forEach(ball => {
            if(ball.isSelected()) {
                let x = event.clientX - (offsetX - ball.getElement().offsetWidth/2);
                let y = event.clientY - (offsetY - ball.getElement().offsetHeight/2);
                console.log(event);
                ball.setX(x);
                ball.setY(y);
                ball.updatePosition();
            }
        });
    });

    document.addEventListener('mouseup', (event) => {
        balls.forEach(ball => {
            ball.setSelected(false);
        });
        ball.setSelected(true);
    });
});