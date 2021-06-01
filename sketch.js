var rock
var paper
var scissors
var rockImg
var paperImg
var scissorsImg
var rockButton
var paperButton
var scissorsButton
var gameState = "0"
var play
var r
var computer
var a
var b 
var c
var d
var e
var f
var playerScore = 0
var computerScore = 0

function preload(){
rockImg = loadImage("rock.png")
paperImg = loadImage("paper.png")
scissorsImg = loadImage("scissors.png")
}

function setup(){
createCanvas(1000,500)
rock = createSprite(650,250)
paper = createSprite(650,250)
scissors = createSprite(649,251)
d = rockImg
e = paperImg
f = scissorsImg
rock.addImage(d)
paper.addImage(e)
scissors.addImage(f)
rock.visible = false;
paper.visible = false;
scissors.visible = false;
rockButton = createButton("rock")
paperButton = createButton("paper")
scissorsButton = createButton("scissors")
rockButton.position(333,450)
paperButton.position(499.5,450)
scissorsButton.position(666,450)
play = createSprite(487.5,35,25,25)
computer =  createSprite(750,250,50,50)
computer.visible = false
a = rockImg
b = paperImg
c = scissorsImg

}

function draw(){
background("white")
drawSprites()
rockButton.mousePressed(R)
paperButton.mousePressed(P)
scissorsButton.mousePressed(S)
r = Math.round(random(1,3))

if(mousePressedOver(play)){
    computer.visible = true
switch(r){
    case 1:computer.addImage(a)
break
    case 2:computer.addImage(b)
break
    case 3:computer.addImage(c)
}
}

if(a === f){
    playerScore = playerScore+1
}

if(a === e){
    computerScore = computerScore+1
}

if(a === d){
    playerScore = playerScore
    computerScore = computerScore
}

if(b === d){
    playerScore = playerScore+1
}

if(b === e){
    playerScore = playerScore
    computerScore = computerScore
}

if(b === f){
    computerScore = computerScore+1
}

if(c === d){
    computerScore = computerScore+1
}

if(c === e){
    playerScore = playerScore + 1
}

if(c === f){
    playerScore = playerScore
    computerScore = computerScore
}

text("playerScore:"+ playerScore, 900,45)
text("computerScore:"+ computerScore, 900,65)
}

function R(){
rock.visible = true
paper.visible = false
scissors.visible = false
}

function P(){
    paper.visible = true
    rock.visible = false
    scissors.visible = false
}

function S(){
    scissors.visible = true
    rock.visible = false
    paper.visible = false
}

