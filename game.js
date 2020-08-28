let lastRenderTime = 0
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './snake.js'
import { update as updateFood, draw as drawFood} from './food.js'
import { outsideGrid} from './grid.js'
const gameBoard = document.getElementById('game-board')

let gameOver = false

function main(currentTime){    
    if(gameOver){
        if(confirm("You lose")){
            window.location='/'
        }
        return
    }


    window.requestAnimationFrame(main)
    const secondSinceLastRender = (currentTime-lastRenderTime) / 1000
    if(secondSinceLastRender < 1/SNAKE_SPEED) return
    lastRenderTime = currentTime

    draw()
    update()
    
}
window.requestAnimationFrame(main)


function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML=""
    drawSnake(gameBoard)
    drawFood(gameBoard)

}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()

}