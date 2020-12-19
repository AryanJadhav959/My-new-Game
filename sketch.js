const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bikeImg,car1Img,car2Img,car3Img,car4Img;
var craterImg,lifeImg,backgroundImg;

function preload(){
    bikeImg = loadImage("images/player.jpg");
    car1Img = loadImage("images/car1.jpg");
    car2Img = loadImage("images/car2.jpg");
    car3Img = loadImage("images/car3.jpg");
    car4Img = loadImage("images/car4.jpg");
    craterImg = loadImage("images/craters.jpg");
    backgroundImg = loadImage("images/track.jpg");
    lifeImg = loadImage("images/life1.jpg");
}

function setup(){
    var canvas = createCanvas(400,400);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    
}