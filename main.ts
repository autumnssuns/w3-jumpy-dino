function restart () {
    dinoX = 0
    dinoY = 4
    score = 0
    isOver = false
    generateObstacle()
    draw()
}
input.onButtonPressed(Button.A, function () {
    if (isOver) {
        restart()
    }
    for (let index = 0; index < 4; index++) {
        dinoY += -1
        draw()
        basic.pause(50)
    }
    for (let index = 0; index < 4; index++) {
        dinoY += 1
        draw()
        basic.pause(100)
    }
})
function draw () {
    basic.clearScreen()
    led.plot(dinoX, dinoY)
    for (let index = 0; index <= obstacleHeight - 1; index++) {
        led.plot(obstacleX, obstacleY + index)
    }
}
function generateObstacle () {
    obstacleX = 4
    obstacleY = randint(0, 4)
    obstacleHeight = randint(1, 4)
}
function checkCollision () {
    if (dinoX == obstacleX) {
        for (let index = 0; index <= obstacleHeight - 1; index++) {
            if (dinoY == obstacleY + index) {
                basic.showIcon(IconNames.Sad)
                basic.showNumber(score)
                isOver = true
            }
        }
    }
}
let obstacleY = 0
let obstacleX = 0
let obstacleHeight = 0
let isOver = false
let score = 0
let dinoY = 0
let dinoX = 0
restart()
basic.forever(function () {
    checkCollision()
    while (isOver) {
        basic.showNumber(score)
    }
    basic.pause(100)
    if (obstacleX < 0) {
        generateObstacle()
        score += 1
    } else {
        obstacleX += -1
    }
    draw()
})
