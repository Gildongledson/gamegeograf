var imgBackground, imgDegrade, imgBackgroundGame, imgPosteOn, imgGledson, imginst, TendaG;
//uma animação
var soundAmb;
var winner;
var imagens = [];
var cimaUp = [];
var baixoDown = [];
var esquerdaLeft = [];
var direitaRight = [];
var paradoStop = [];
var contador = 0;
var tempo = 0;
var status = 0;
var statusF = 0;
var instruct = 0;
var walking1 = [];
var birding1 = [];
var sara=[];
var saraf2=[];
var clocking = 0;
var pontos=0;
var imgNordeste = [];
//var imgBat = [];
var oi=0;
var chances = 3;
var band, coletadosX = 210, coletadosY = 30;
var imgNordesteMap;
var loboGuara = 0;
var imggrade;
var varBand = ["Ceará","Paraiba","Rio Grande do Norte","Alagoas","Maranhão","Piauí","Bahia","Pernambuco","Sérgipe"];
var capitais = ["Capital - Fortaleza", "Capital - João Pessoa", "Capital - Natal", "Capital - Maceió", "Capital - São Luiz", "Capital - Terezina", "Capital - Salvador", "Capital - Recife", "Capital - Aracaju"];
var folclore = ["O maracatu cearense é uma manifestação cultural que"+"\n"+"representa um cortejo em homenagem aos Reis Negros","O estado da Paraiba"+"\n"+"é conhecido por ter o maior São João do Mundo","O fandango é comumente apresentado no"+"\n"+"Rio Grande do Norte durante o ciclo natalino", "Cavalhada tem origem nos torneios medievais. Era uma forma de"+"\n"+"entretenimento dos cavaleiros cansados das lutas e das guerras.","após muitas lutas enfrentadas para sua aceitação, a cidade"+"\n"+"de são Luís passou a ser considerada a capital do reggae.","A dança é realizada com casais que ficam em círculos para"+"\n"+"imitar o trote do cavalo, com passos moderados e rapidos", "A Capoeira e a mais conhecida e"+"\n"+"praticada forma de folclore na Bahia","Pernambuco tem muito a oferecer em ensinamentos políticos, em"+"\n"+"exemplos morais e éticos dados pelos seus inúmeros heróis","O Reisado é uma dança do período natalino em comemoração do "+"\n"+"nascimento do menino Jesus e em homenagem dos Reis Magos"];
var DialogoSara = ["Sara: olá Herói, Hoje vamos conhecer um pouco mais \n sobre o Nordeste, para isso é necessario que você \n colete uma bandeira em cada estado, mais cuidado...", "pois nesta area tem muitos Animais Silvestres, \n não se aproxime pois voce pode ser confundid@ \n com um caçador e perderá uma chance!", " \n CONTINUAR"];
var DialogoSaraF2 =["Sara: Olá Herói, precisamos salvar o lobo-Guará \n que esta sob dominio dos caçadores \n tome muito cuidado vou lhe mostrar a localização", "Você esta pronto?", "após libertalo venha ao meu encontro"];
var music01, telaAnterior = 1;
var largCanvas, altCanvas;
// variaveis ultilizadas
var xMinBotao = 145;
var larguraBotao = 200;
var xMaxBotao = xMinBotao + larguraBotao;
var yMinBotao = 469;
var alturaBotao = 60;
var yMaxBotao = yMinBotao + alturaBotao;
var tela = 0;
var largura = 200;
var altura = 50;
var xMenu1 = 150;
var xMenu2 = 150;
var xMenu3 = 150;
var xMenu4 = 150;
var xMenu5 = 20;
var xMenu6 = 20;
var xMenu7 = 20;
var yMenu1 = 85;
var yMenu2 = 145;
var yMenu3 = 205;
var yMenu3 = 205;
var yMenu4 = 265;
var yMenu5 =540;
var yMenu6 =540;
var yMenu7 =540;
var posicaoX = 50;
var posicaoY = 500;
var px=66, py=238;
var sarapf2X = 420, sarapf2Y= 480;
var capturados = 0;
var sX= 210, sY=360;
var F, squareX=50, squareY=50;
var d2;
//var sXs=320;
//var sYs=350;
var sXs=[245, 320, 330, 330, 90, 150, 200, 320, 320];
var sYs=[200, 250, 210, 315, 180, 280, 380, 280, 350];
var BatX = -20;
var BatX1 = -80;
var BatX2 = -50;
var BatY = 300;
var BatY1 = 150;
var BatY2 = 75;
var morte, morte1, foxdeath;
var imgGameOver;
var gameover;
var imgwin;
var arara = [];
var walkingSound;
var parrotSound;
var perfectSound;
var imgGrass;
var contDsara = 0; 
var parou;
var mapFase2, mapFase2cima;

var Contrabandista=[];

var foxUp=[], foxDown=[], foxLeft=[], foxRight=[];

var foxX=350, foxY=130;
var foxSound;

var segundaF = false;

function playsound(){
  if(tela == telaAnterior){
    return false;
    }else{
    telaAnterior = tela; return true;
    }
}
function preload(){
      imgBackground = loadImage('img/imgbrasil.png');
      imgDegrade = loadImage('img/Degrade.jpg');
      imgBackgroundGame = loadImage('img/imgFundo.png');
      imgPosteOn = loadImage('img/PosteOn.png');
      imgTendaG = loadImage('img/TendaG.png');  
      imginst = loadImage('img/instrucao.png'); 
      imgGledson = loadImage('img/Gledson.jpg');
      imgGameOver =loadImage('img/gameOver.png');
      imgwin =loadImage('img/win.png');
      imgNordesteMap = loadImage('img/mapa do nordeste.png');
      imgGrass = loadImage("img/Grass.png");
      imgparou = loadImage("img/parou.png");
      mapFase2 = loadImage("img/mapfase2.jpg");
      mapFase2cima = loadImage("img/mapfase2cima.png");
      imgGrade = loadImage("img/grade.png");

      //sons
      soundAmb = loadSound("sound/AMBForst_Forest.ogg");
      gameover = loadSound("sound/gameover.wav");
      winner = loadSound("sound/winner.wav");
      walkingSound = loadSound("sound/walking.ogg");
      parrotSound = loadSound("sound/parrot.wav");
      perfectSound = loadSound("sound/perfect.mp3");
      foxSound = loadSound("sound/fox.wav");
  

      //inimigo bat
      //imgBat [0] = loadImage("img/monster/__Bat02_Fly_000.png");
      //imgBat [1] = loadImage("img/monster/__Bat02_Fly_001.png");
      //imgBat [2] = loadImage("img/monster/__Bat02_Fly_002.png");
      //imgBat [3] = loadImage("img/monster/__Bat02_Fly_003.png");
      //imgBat [4] = loadImage("img/monster/__Bat02_Fly_004.png");
      //imgBat [5] = loadImage("img/monster/__Bat02_Fly_005.png");
      //imgBat [6] = loadImage("img/monster/__Bat02_Fly_006.png");
      //imgBat [7] = loadImage("img/monster/__Bat02_Fly_007.png");
      
      //arara
      arara [0] = loadImage("img/parrot/parrot01.png");
      arara [1] = loadImage("img/parrot/parrot02.png");
      arara [2] = loadImage("img/parrot/parrot03.png");
      arara [3] = loadImage("img/parrot/parrot04.png");
      arara [4] = loadImage("img/parrot/parrot05.png");
      arara [5] = loadImage("img/parrot/parrot06.png");
      arara [6] = loadImage("img/parrot/parrot07.png");
      arara [7] = loadImage("img/parrot/parrot08.png");
      arara [8] = loadImage("img/parrot/parrot09.png");
      //bandeiras
      imgNordeste [0] = loadImage("img/bandeiras/Nordeste01.png");
      imgNordeste [1] = loadImage("img/bandeiras/Nordeste02.png");
      imgNordeste [2] = loadImage("img/bandeiras/Nordeste03.png");
      imgNordeste [3] = loadImage("img/bandeiras/Nordeste04.png");
      imgNordeste [4] = loadImage("img/bandeiras/Nordeste05.png");
      imgNordeste [5] = loadImage("img/bandeiras/Nordeste06.png");
      imgNordeste [6] = loadImage("img/bandeiras/Nordeste07.png");
      imgNordeste [7] = loadImage("img/bandeiras/Nordeste08.png");
      imgNordeste [8] = loadImage("img/bandeiras/Nordeste09.png");

      //sara
      sara[0] = loadImage("img/sara/tile013.png");
      sara[1] = loadImage("img/sara/tile014.png");
      sara[2] = loadImage("img/sara/tile015.png");
      sara[3] = loadImage("img/sara/tile016.png");
      sara[4] = loadImage("img/sara/tile017.png");
      sara[5] = loadImage("img/sara/tile018.png");
      sara[6] = loadImage("img/sara/tile019.png");
      sara[7] = loadImage("img/sara/tile026.png");
      sara[8] = loadImage("img/sara/tile027.png");
      sara[9] = loadImage("img/sara/tile028.png");
      sara[10] = loadImage("img/sara/tile029.png");
      sara[11] = loadImage("img/sara/tile030.png");
      sara[12] = loadImage("img/sara/tile031.png");
      sara[13] = loadImage("img/sara/tile032.png");
      sara[14] = loadImage("img/sara/tile039.png");
      sara[15] = loadImage("img/sara/tile040.png");
      sara[16] = loadImage("img/sara/tile041.png");
      sara[17] = loadImage("img/sara/tile042.png");
      sara[18] = loadImage("img/sara/tile043.png");
      sara[19] = loadImage("img/sara/tile044.png");
      sara[20] = loadImage("img/sara/tile045.png");
  
      //saraf2
      saraf2[0] = loadImage("img/sara/tile013.png");
      saraf2[1] = loadImage("img/sara/tile014.png");
      saraf2[2] = loadImage("img/sara/tile015.png");
      saraf2[3] = loadImage("img/sara/tile016.png");
      saraf2[4] = loadImage("img/sara/tile017.png");
      saraf2[5] = loadImage("img/sara/tile018.png");
      saraf2[6] = loadImage("img/sara/tile019.png");

      //parado
      paradoStop[0] = loadImage("img/tenda/tile000.png");
      paradoStop[1] = loadImage("img/tenda/tile001.png");
      paradoStop[2] = loadImage("img/tenda/tile002.png");
      paradoStop[3] = loadImage("img/tenda/tile003.png");
      paradoStop[4] = loadImage("img/tenda/tile004.png");
      paradoStop[5] = loadImage("img/tenda/tile005.png");
      paradoStop[6] = loadImage("img/tenda/tile006.png");
      paradoStop[7] = loadImage("img/tenda/tile007.png");

      //direita
      direitaRight[0] = loadImage("img/direita/tile024.png");
      direitaRight[1] = loadImage("img/direita/tile025.png");
      direitaRight[2] = loadImage("img/direita/tile026.png");
      direitaRight[3] = loadImage("img/direita/tile027.png");
      direitaRight[4] = loadImage("img/direita/tile028.png");
      direitaRight[5] = loadImage("img/direita/tile029.png");
      direitaRight[6] = loadImage("img/direita/tile030.png");
      direitaRight[7] = loadImage("img/direita/tile031.png");

      //esquerda

      esquerdaLeft[0] = loadImage("img/esquerda/tile016.png");
      esquerdaLeft[1] = loadImage("img/esquerda/tile017.png");
      esquerdaLeft[2] = loadImage("img/esquerda/tile018.png");
      esquerdaLeft[3] = loadImage("img/esquerda/tile019.png");
      esquerdaLeft[4] = loadImage("img/esquerda/tile020.png");
      esquerdaLeft[5] = loadImage("img/esquerda/tile021.png");
      esquerdaLeft[6] = loadImage("img/esquerda/tile022.png");
      esquerdaLeft[7] = loadImage("img/esquerda/tile023.png");

      //cima
      cimaUp[0] = loadImage("img/cima/tile008.png"); 
      cimaUp[1] = loadImage("img/cima/tile009.png"); 
      cimaUp[2] = loadImage("img/cima/tile010.png");
      cimaUp[3] = loadImage("img/cima/tile011.png");
      cimaUp[4] = loadImage("img/cima/tile012.png");
      cimaUp[5] = loadImage("img/cima/tile013.png");
      cimaUp[6] = loadImage("img/cima/tile014.png");
      cimaUp[7] = loadImage("img/cima/tile015.png");

      //baixo

      baixoDown[0] = loadImage("img/baixo/tile000.png"); 
      baixoDown[1] = loadImage("img/baixo/tile001.png"); 
      baixoDown[2] = loadImage("img/baixo/tile002.png");
      baixoDown[3] = loadImage("img/baixo/tile003.png");
      baixoDown[4] = loadImage("img/baixo/tile004.png");
      baixoDown[5] = loadImage("img/baixo/tile005.png");
      baixoDown[6] = loadImage("img/baixo/tile006.png");
      baixoDown[7] = loadImage("img/baixo/tile007.png");

      //caminhando

      walking1[0] = loadImage("img/heroeze/tile000.png");
      walking1[1] = loadImage("img/heroeze/tile001.png"); 
      walking1[2] = loadImage("img/heroeze/tile002.png"); 
      walking1[3] = loadImage("img/heroeze/tile003.png"); 
      walking1[4] = loadImage("img/heroeze/tile004.png"); 
      walking1[5] = loadImage("img/heroeze/tile005.png"); 
      walking1[6] = loadImage("img/heroeze/tile006.png"); 
      walking1[7] = loadImage("img/heroeze/tile007.png"); 
      walking1[8] = loadImage("img/heroeze/tile008.png"); 
      walking1[9] = loadImage("img/heroeze/tile009.png"); 
      walking1[10] = loadImage("img/heroeze/tile010.png"); 
      walking1[11] = loadImage("img/heroeze/tile011.png"); 
  
      //caçador
      Contrabandista[0]= loadImage("img/aman/tile000.png");
      Contrabandista[1]= loadImage("img/aman/tile001.png");
      Contrabandista[2]= loadImage("img/aman/tile002.png");
      Contrabandista[3]= loadImage("img/aman/tile003.png");
      Contrabandista[4]= loadImage("img/aman/tile004.png");
      Contrabandista[5]= loadImage("img/aman/tile005.png");
      Contrabandista[6]= loadImage("img/aman/tile006.png");
      Contrabandista[7]= loadImage("img/aman/tile007.png");
      Contrabandista[8]= loadImage("img/aman/tile008.png");
      
      

      //bird1
      //parado
      birding1[0] = loadImage("img/parado/tile000.png");
      birding1[1] = loadImage("img/parado/tile001.png");
      birding1[2] = loadImage("img/parado/tile002.png");
      birding1[3] = loadImage("img/parado/tile003.png");
      birding1[4] = loadImage("img/parado/tile004.png");
      birding1[5] = loadImage("img/parado/tile005.png");
      birding1[6] = loadImage("img/parado/tile006.png");
      birding1[7] = loadImage("img/parado/tile007.png");
  
      //raposa \/ \/ \/
  
      foxDown [0] = loadImage("img/fox/foxd1.png");
      foxDown [1] = loadImage("img/fox/foxd2.png"); 
      foxDown [2] = loadImage("img/fox/foxd3.png"); 
      foxDown [3] = loadImage("img/fox/foxd4.png"); 
      foxDown [4] = loadImage("img/fox/foxd1.png"); 
      foxDown [5] = loadImage("img/fox/foxd2.png"); 
      foxDown [6] = loadImage("img/fox/foxd3.png"); 
      foxDown [7] = loadImage("img/fox/foxd4.png"); 
  
      foxUp [0] = loadImage("img/fox/foxu1.png");
      foxUp [1] = loadImage("img/fox/foxu2.png"); 
      foxUp [2] = loadImage("img/fox/foxu3.png"); 
      foxUp [3] = loadImage("img/fox/foxu4.png"); 
      foxUp [4] = loadImage("img/fox/foxu1.png"); 
      foxUp [5] = loadImage("img/fox/foxu2.png"); 
      foxUp [6] = loadImage("img/fox/foxu3.png"); 
      foxUp [7] = loadImage("img/fox/foxu4.png");
  
      foxLeft [0] = loadImage("img/fox/foxl1.png");
      foxLeft [1] = loadImage("img/fox/foxl2.png");
      foxLeft [2] = loadImage("img/fox/foxl3.png");
      foxLeft [3] = loadImage("img/fox/foxl4.png");
      foxLeft [4] = loadImage("img/fox/foxl1.png");
      foxLeft [5] = loadImage("img/fox/foxl2.png");
      foxLeft [6] = loadImage("img/fox/foxl3.png");
      foxLeft [7] = loadImage("img/fox/foxl4.png");
      
      foxRight [0] = loadImage("img/fox/foxr1.png");
      foxRight [1] = loadImage("img/fox/foxr2.png");
      foxRight [2] = loadImage("img/fox/foxr3.png");
      foxRight [3] = loadImage("img/fox/foxr4.png");
      foxRight [4] = loadImage("img/fox/foxr1.png");
      foxRight [5] = loadImage("img/fox/foxr2.png");
      foxRight [6] = loadImage("img/fox/foxr3.png");
      foxRight [7] = loadImage("img/fox/foxr4.png");
  
}
//************************************************************************************
function colide(){
      d = int(dist(posicaoX,posicaoY,sX, sY));
      d2 = int(dist(posicaoX,posicaoY,sarapf2X, sarapf2Y));
      morte = int(dist(posicaoX,posicaoY,BatX, BatY));
      morte1 = int(dist(posicaoX,posicaoY,BatX1, BatY1));
      morte2 = int(dist(posicaoX,posicaoY,BatX2, BatY1));
      foxdeath = int(dist(posicaoX,posicaoY, foxX, foxY));
      //foxdeath1 = int(dist(BatX1, BatY1, foxX, foxY));
      //foxdeath2 = int(dist(BatX2, BatY2, foxX, foxY));
  
  
      
      stroke(0,0,255);
      F = int(dist(posicaoX,posicaoY,sXs[oi],sYs[oi]));
      textSize(20);
  
  if(foxdeath<20){
          loboGuara = 1;
          foxSound.play();
          foxX= -600;
      } 
  if(morte2<20){
          posicaoX = 220;
          posicaoY = 500;
          chances--;
          parrotSound.play();
          loboGuara = 0;
          foxX=350;
      }    
  if(morte1<20){
          posicaoX = 220;
          posicaoY = 500;
          chances--;
          parrotSound.play();
          loboGuara = 0;
          foxX=350;
      }
  
      if(morte<20){
          posicaoX = 220;
          posicaoY = 500;
          chances--;
          parrotSound.play();
          loboGuara = 0;
          foxX=350;
      }
      if(d<20){
      capturados++;
      }
      
      if(d2<10){
      capturados++;
      }
      
      if(F<20){
        pontos++;
        perfectSound.play();
        oi++;
        //chances++;
      if(oi>8){
        oi = 0;
          }
      }
}

function imagem(img,x,y,escala){
      largFig = img.width*escala;
      altFig = img.height*escala;
      image(img,x,y,largFig, altFig);
}

function setup() {
      largCanvas = imgBackground.width;
      altCanvas = imgBackground.height;
      var cnv = createCanvas(500, 500);
      cnv.mousePressed(startPulse);
      //soundAmb.play();


      createCanvas(largCanvas, altCanvas);
      pulse = new p5.Pulse();
      pulse.amp(0.5);
      pulse.freq(220);
}
function startPulse() {
      pulse.start();
      pulse.amp(0.08, 0.02);

}
function mouseReleased() {
      pulse.amp(0, 0.1);
}

function draw() {
  
      background(imgBackground);
      colide();
  // tela do menu
if(tela == 0 ){
      var w = map(mouseX, 0, width, 25, 75);
      w = constrain(w, 0, 1);
      pulse.width(w);
    
      if(mouseX > xMinBotao && mouseX < xMaxBotao && mouseY > yMinBotao && mouseY < yMaxBotao){ 
      fill(150,50);
      if (mouseIsPressed){
          tela = 1;
        }
      }else{
      noFill();
      }
      rect(xMinBotao, yMinBotao, larguraBotao, alturaBotao, 15);
      stroke(0);
      fill(190,80);
}
if(tela==1){
      if(playsound()){
    soundAmb.pause();
}
      runing = false;
      background(imgDegrade);
      //menu com três opções
      //iniciar o jogo
      textAlign(CENTER);
      textSize(26);
    
      //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu1 && mouseX < xMenu1 + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
      stroke(200);
      fill(190,80);
      rect(xMenu1, yMenu1, largura, altura, 15);
      //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
      tela = 2;      
        }
      }
    
      fill(240);
      noStroke();
      text("Iniciar", 250,120);
    
      //Conteúdo do jogo
      //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu2 && mouseX < xMenu2 + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
      stroke(200);
      fill(190,80);
      rect(xMenu2, yMenu2, largura, altura, 15);
       //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
      tela = 3;       
        }
      }
      fill(240);
      noStroke();
      text("Instruções", 250,180);
    
      //créditos
      //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu3 && mouseX < xMenu3 + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
      stroke(200);
      fill(190,80);
      rect(xMenu3, yMenu3, largura, altura, 15);
      //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
      tela = 4;       
        }
      }
      fill(240);
      noStroke();
      text("Créditos", 250,240);
    
      if(mouseX > xMenu4 && mouseX < xMenu4 + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
      stroke(200);
      fill(190,80);
      rect(xMenu4, yMenu4, largura, altura, 15);
      //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
      tela = 0;       
        }
      }
      fill(240);
      noStroke();
      text("Voltar", 250,300);
}
  
  //tela onde o jogo acontece
  
if(tela==2){
  
        //colisao nas bordas do mapa
      if(posicaoX >= width-32){
        posicaoX --;
      }
      if(posicaoX <= 0){
        posicaoX ++;
      }
      if(posicaoY >= height-32){
        posicaoY --;
      }
      if(posicaoY <= 85){
        posicaoY ++;
      }
  
      background(imgGrass);
      noFill();
      clocking++;  
    
      if(clocking>120){
        contador++;
        clocking=0;
      }
       tempo++;
      if(keyIsDown(RIGHT_ARROW)){
        status = 1;
        posicaoX = posicaoX +1;
      }else if(keyIsDown(LEFT_ARROW)){
        status = 2;
        posicaoX = posicaoX -1;
      }
      else if(keyIsDown(UP_ARROW)){
        status = 3
        posicaoY = posicaoY -1;
      }
      else if(keyIsDown(DOWN_ARROW)){
        status = 4;
        posicaoY = posicaoY +1;
      }
      else if (keyIsDown(LEFT_ARROW && 65)) {
      status = 2;
      posicaoX = posicaoX -1;
      }
      else if (keyIsDown(RIGHT_ARROW && 68)) {
      status = 1;
      posicaoX = posicaoX +1;
      }
      else if (keyIsDown(UP_ARROW && 87)) {
      status = 3
      posicaoY = posicaoY -1;
      }
      else if (keyIsDown(DOWN_ARROW && 83)) {
      status = 4;
      posicaoY = posicaoY +1;
      }else {
        status = 0;
      }
    
      if(status==0){
        image(birding1[contador%8], posicaoX, posicaoY, 40, 40);
      }
      else if(status==1){
        image(direitaRight[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==2){
        image(esquerdaLeft[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==3){
        image(cimaUp[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==4){
        image(baixoDown[contador%8], posicaoX, posicaoY, 24, 32);
      }    
      if(tempo>10){
        contador++;
        tempo=0;
      }

      //imagem(imgPosteOn, px, py, 0.75);
      //imagem(imgPosteOn, 354, 238, 0.75);
      //imagem(imgPosteOn, 354, -25, 0.75);
      //imagem(imgTendaG, 100, 100, 0.75);
      //imagem(imgTendaG, 300, 180, 0.75);
      image(paradoStop[0], 10, 380, 200,200);
      if(instruct == 0){
        image(sara[contador%21],sX, sY, 40, 40);
      }

//dialogo com SARA*******************************************************
      if(capturados>=10){
      fill("white");
      rect(35,400, 410,100);
      noFill();
      fill(0);
      textSize(15);
      text(DialogoSara [contDsara], 240, 420);
      textSize(20)
      text("Ok        Não       Voltar", 225, 490);
      //opção voltar
      if(mouseX > 270 && mouseX < 330 && mouseY > 469 && mouseY < 499){
      stroke(200);
      fill(190, 80);
      rect(270, 469, 60, 25, 15);
     
     
      if (mouseIsPressed){
      tela = 1;
      capturados=0;
      posicaoX = posicaoX-30; 
      contDsara = 0;
        }
      }
      if(mouseX > 186 && mouseX < 246 && mouseY > 469 && mouseY < 499){
      stroke(200);
      fill(190, 80);
      rect(186, 469, 60, 25, 15);
     
      if (mouseIsPressed){
      tela = 2;
      capturados=0;
      posicaoX = posicaoX-30; 
      contDsara = 0;
        }
      }
      // if que contrala o Sim do inicio do game
      if(mouseX > 112 && mouseX < 172 && mouseY > 469 && mouseY < 499){
      stroke(200);
      fill(190, 80);
      rect(112, 469, 60, 25, 15);
      
      if (mouseIsPressed){
      
      chances = 3;
      capturados=0;
      //posicaoX = posicaoX-30; 
      contDsara++;
      if(contDsara==3){
        tela = 5;
        contDsara = contDsara - contDsara;
            }
          }
        }
      }
      //Fim do dialogo com SARA***************************************************
  
  
      textAlign(CENTER);
      textSize(20);
    
      //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu5 && mouseX < xMenu5 + largura && mouseY > yMenu5 && mouseY < yMenu5 + altura){
      stroke(200);
      fill(190, 80);
      rect(xMenu5, yMenu5, largura-100, altura-25, 15);
      //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
      tela = 1;       
        }
      }
      fill(190, 80, 240);
      stroke(150);
      text("Voltar", xMenu5+50, yMenu5+20);
}
  
    //tela onde contem as informaçoes dos conteudos necesserios responder o jogo
  
if(tela==3){
      background(imginst);
      textAlign(CENTER);
      textSize(20);
      tempo++
      if(instruct == 0){
      image(walking1[contador%12], posicaoX+220, posicaoY-400, 150, 200);
      image(birding1[contador%8], posicaoX+200, posicaoY-400, 64, 64);
      }
      if(tempo>5){
        contador++;
        tempo=0;
      }
    
    //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu6 && mouseX < xMenu6 + largura && mouseY > yMenu6 &&       mouseY < yMenu6 + altura){
       stroke(200);
       fill(190, 80);
       rect(xMenu6, yMenu6, largura-100, altura-25, 15);
       //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
         tela = 1;
         }
      }
      fill(190, 80, 240);
      stroke(150);
      text("Voltar", xMenu6+50, yMenu6+20);
}
      //tela dos creditos
if(tela==4){
      background('pink');    
      imagem(imgGledson, 180, 75, 0.2);
      textAlign(CENTER);
      textSize(18);
      fill(0);
      text("Gildongledson Alves Fernandes",240,220);
      text("Graduando em Ciência e Tecnoligia/UFRN",240,245);
      text("Email - gledsonalves1989@gmail.com",240,270);
    
      //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu7 && mouseX < xMenu7 + largura && mouseY > yMenu7 && mouseY < yMenu5 + altura){
       stroke(200);
       fill(190, 80);
       rect(xMenu7, yMenu7, largura-100, altura-25, 15);
       //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
           tela = 1;       
          }
      }
        fill(190, 80, 240);
        stroke(150);
        text("Voltar", xMenu7+50, yMenu7+20);
}
  
  //Tela da primeira fase Precisa adicionar o tempo regressivo

if(tela==5){
    if(playsound()){
    soundAmb.play();
}
      //colisao nas bordas do mapa
      if(posicaoX >= width-32){
        posicaoX --;
      }
      if(posicaoX <= 0){
        posicaoX ++;
      }
      if(posicaoY >= height-32){
        posicaoY --;
      }
      if(posicaoY <= 85){
        posicaoY ++;
      }
      //O tempo seria inserido nessa tela e na tela 6 onde ocorre a segunda fase *************************
  
      background(imgBackgroundGame);
      image(imgNordesteMap,0, 80, 500, 500);
      fill(240);
      rect(0, 0, 500, 90);
      noFill();
      textSize(20);
      fill("black");
      text("Chances= "+chances, 65,40);
      text("Score= "+pontos, 400, 40);
      clocking++;
      text(varBand[oi],235, 25);
      fill('Red');
      text(capitais[oi], 235, 45);
      noFill();
      textSize(15);
      fill("black");
      text(folclore[oi], 235, 65);
      //fill("red")
      //stroke("black")
      //text("cuidado com os Animais \n Silvestres, não se aproxime \n pois voce pode ser confundid@ \n com um caçador e receberá \n uma punição!", 375, 480);
      //noFill();
      //noStroke();
      //image(imgNordeste[oi],coletadosX,coletadosY, 50, 30);
      image(imgNordeste[oi],sXs[oi],sYs[oi], 50,30);
  
      if(chances == 0){
        tela = 7;
      }
      //mostros inicio dos codigos
  
      if(instruct == 0){
      image(arara[contador%9], BatX, BatY, 42, 42);
      //image(imgBat[contador%8], BatX1, BatY1, 32, 32);
      //image(imgBat[contador%8], BatX2, BatY2, 32, 32);
      image(arara[contador%9], BatX1, BatY1, 42, 42);
      BatX++;
      BatX1 = BatX1 + 4;
      //BatX2 = BatX2 + 2;
        //if(BatX2 >= 500){
        //  BatX2 = -80
          //BatY2 = random(80, 500);
        //}
        if(BatX1 >= 500){
          BatX1 = -80
          BatY1 = random(80, 500);
        }
        if(BatX >= 500){
          BatX = -20
          BatY = random(80, 500);
        }
        if(tempo>5){
        contador++;
        tempo=0;
        }if(contador >= 8){
          contador = 0;
        }
      }
      
      //final do codigo dos monstros
      
  
      if(pontos == 9){
        tela=6;
        pontos = 0;
        chances = chances;
      }

       tempo++;
      if(keyIsDown(RIGHT_ARROW)){
        status = 1;
        posicaoX = posicaoX +1;
      }else if(keyIsDown(LEFT_ARROW)){
        status = 2;
        posicaoX = posicaoX -1;
      }
      else if(keyIsDown(UP_ARROW)){
        status = 3
        posicaoY = posicaoY -1;
      }
      else if(keyIsDown(DOWN_ARROW)){
        status = 4;
        posicaoY = posicaoY +1;
      }
      else if (keyIsDown(LEFT_ARROW && 65)) {
      status = 2;
      posicaoX = posicaoX -1;
      }
      else if (keyIsDown(RIGHT_ARROW && 68)) {
      status = 1;
      posicaoX = posicaoX +1;
      }
      else if (keyIsDown(UP_ARROW && 87)) {
      status = 3
      posicaoY = posicaoY -1;
      }
      else if (keyIsDown(DOWN_ARROW && 83)) {
      status = 4;
      posicaoY = posicaoY +1;
      }else {
        status = 0;
      }
    
      if(status==0){
        image(birding1[contador%8], posicaoX, posicaoY, 40, 40);
      }
      else if(status==1){
        image(direitaRight[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==2){
        image(esquerdaLeft[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==3){
        image(cimaUp[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==4){
        image(baixoDown[contador%8], posicaoX, posicaoY, 24, 32);
      }    
      if(tempo>10){
        contador++;
        tempo=0;
      }
      textAlign(CENTER);
      textSize(20);
    
    //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu5 && mouseX < xMenu5 + largura && mouseY > yMenu5 && mouseY < yMenu5 + altura){
     stroke(200);
     fill(190, 80);
     rect(xMenu5, yMenu5, largura-100, altura-25, 15);
     //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
       tela = 1;       
         }
      }
      fill(190, 80, 240);
      stroke(150);
      text("Voltar", xMenu5+50, yMenu5+20);
}
  
        //TELA 2 Fase ************************************************
if(tela==6){
        background(mapFase2);
        capturados = 0;
      //O tempo seria inserido nessa tela e na tela 6 onde ocorre a segunda fase *************************
      if(playsound()){
        soundAmb.pause();
      }  
      if(tempo>10){
        contador++;
        tempo=0;
      }
  
       //colisao nas bordas do mapa
      if(posicaoX >= width-32){
        posicaoX --;
      }
      if(posicaoX <= 0){
        posicaoX ++;
      }
      if(posicaoY >= height-32){
        posicaoY --;
      }
      if(posicaoY <= 85){
        posicaoY ++;
      }
      
      //image(mapFase2cima, 0, 80, 400, 500);
      fill("white");
      //rect(foxX, foxY, 50, 50, 15);
  
  
      image(foxDown[contador%8], foxX-50, foxY, 50, 50);
      image(imgGrade,foxX-50, foxY, 50, 50)
  
      
  
  
      noFill();
      fill(240);
      rect(0, 0, 500, 80);
      noFill();
      textSize(20);
      fill("black");
      text("Chances= "+chances, 65,40);
      text("Score= "+pontos, 400, 40);
      fill("black");
      stroke("orange")
      text("Salve o lobo-guará \n e entregue a Sara!", width/2, 25);
      noFill();
      noStroke();
      clocking++;
      //text(varBand[oi],235,25);
      //image(imgNordeste[oi],coletadosX,coletadosY, 50, 30);
      //image(imgNordeste[oi],sXs[oi],sYs[oi], 50,30);
  
      if(chances == 0){
        tela = 7;
      }
      //mostros inicio dos codigos
  
      if(instruct == 0){
      image(Contrabandista[contador%27], BatX, BatY, 40, 40);
      image(Contrabandista[contador%27], BatX1, BatY1, 40, 40);
      image(Contrabandista[contador%27], BatX2, BatY2, 40, 40);
      BatX++;
      BatX1 = BatX1 + 2;
      BatX2 = BatX2 + 2;
        
        if(BatX2 >= 500){
          BatX2 = -80
          BatY2 = random(80, 500);
        }
        if(BatX1 >= 500){
          BatX1 = -80
          BatY1 = random(80, 500);
        }
        if(BatX >= 500){
          BatX = -20
          BatY = random(80, 500);
        }
        if(tempo>5){
        contador++;
        tempo=0;
        }if(contador >= 8){
          contador = 0;
        }
        image(saraf2[contador%7],sarapf2X, sarapf2Y, 40, 40);
      if(capturados>=10){
      fill("white");
      rect(35,400, 410,100);
      noFill();
      fill(0);
      textSize(15);
      text(DialogoSaraF2 [contDsara], 240, 420);
      textSize(20)
      text("Ok        Não       Voltar", 225, 490);
      //opção voltar
      if(mouseX > 270 && mouseX < 330 && mouseY > 469 && mouseY < 499){
      stroke(200);
      fill(190, 80);
      rect(270, 469, 60, 25, 15);
     
     
      if (mouseIsPressed){
      tela = 1;
      capturados=0;
      posicaoX = posicaoX-30; 
      contDsara = 0;
        }
      }
      if(mouseX > 186 && mouseX < 246 && mouseY > 469 && mouseY < 499){
      stroke(200);
      fill(190, 80);
      rect(186, 469, 60, 25, 15);
     
      if (mouseIsPressed){
      tela = 2;
      capturados=0;
      posicaoX = posicaoX-30; 
      contDsara = 0;
        }
      }
      // if que contrala o Sim do inicio do game
      if(mouseX > 112 && mouseX < 172 && mouseY > 469 && mouseY < 499){
      stroke(200);
      fill(190, 80);
      rect(112, 469, 60, 25, 15);
      
      if (mouseIsPressed){
      
      chances = 3;
      capturados=0;
      //posicaoX = posicaoX-30; 
      contDsara++;
      if(contDsara==3){
        tela = 5;
        contDsara = contDsara - contDsara;
            }
          }
        }
      }
      }
      
  
      //final do codigo dos monstros
  
      //*******************************************
      
  
      if(pontos == 9){
        tela=8;
        pontos = 0;
        chances = 3;
      }

       tempo++;
      if(keyIsDown(RIGHT_ARROW)){
        status = 1;
        statusF = 1;
        posicaoX = posicaoX +1;
      }else if(keyIsDown(LEFT_ARROW)){
        status = 2;
        statusF = 2;
        posicaoX = posicaoX -1;
      }
      else if(keyIsDown(UP_ARROW)){
        status = 3;
        statusF = 3;
        posicaoY = posicaoY -1;
      }
      else if(keyIsDown(DOWN_ARROW)){
        status = 4;
        statusF = 4;
        posicaoY = posicaoY +1;
      }
      else if (keyIsDown(LEFT_ARROW && 65)) {
      status = 2;
      statusF = 2;
      posicaoX = posicaoX -1;
      }
      else if (keyIsDown(RIGHT_ARROW && 68)) {
      status = 1;
      statusF = 1;
      posicaoX = posicaoX +1;
      }
      else if (keyIsDown(UP_ARROW && 87)) {
      status = 3;
      statusF = 3;
      posicaoY = posicaoY -1;
      }
      else if (keyIsDown(DOWN_ARROW && 83)) {
      status = 4;
      statusF = 4;
      posicaoY = posicaoY +1;
      }else {
        status = 0;
        statusF = 0;
      }
    
      if(status==0){
        image(birding1[contador%8], posicaoX, posicaoY, 40, 40);
      }
      else if(status==1){
        image(direitaRight[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==2){
        image(esquerdaLeft[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==3){
        image(cimaUp[contador%8], posicaoX, posicaoY, 24, 32);
      }
      else if(status==4){
        image(baixoDown[contador%8], posicaoX, posicaoY, 24, 32);
      }    
  
      //FOX
  if(loboGuara == 1){
      if(statusF==0){
        image(foxRight[contador%1], posicaoX -45 , posicaoY, 40, 40);
      }
      else if(statusF==1){
        image(foxRight[contador%8], posicaoX-45 , posicaoY, 40, 40);
      }
      else if(statusF==2){
        image(foxLeft[contador%8], posicaoX-45 , posicaoY, 40, 40);
      }
      else if(statusF==3){
        image(foxUp[contador%8], posicaoX-45 , posicaoY, 40, 40);
      }
      else if(statusF==4){
        image(foxDown[contador%8], posicaoX-45 , posicaoY, 40, 40);
      }
      if(posicaoY > 500){
        tela = 8;
      }
         
  }
  
      if(tempo>10){
        contador++;
        tempo=0;
      }
      textAlign(CENTER);
      textSize(20);
      image(mapFase2cima, 0, 80, 470, 500);
    
    //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu5 && mouseX < xMenu5 + largura && mouseY > yMenu5 && mouseY < yMenu5 + altura){
     stroke(200);
     fill(190, 80);
     rect(xMenu5, yMenu5, largura-100, altura-25, 15);
     //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
       tela = 1;       
         }
      }
      fill(190, 80, 240);
      stroke(150);
      text("Voltar", xMenu5+50, yMenu5+20);
}
  // tela de game over
  
  
  if(tela==7){
     background(imgGameOver);
    if(playsound()){
     gameover.play();
    }
     //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu5 && mouseX < xMenu5 + largura && mouseY > yMenu5 &&       mouseY < yMenu5 + altura){
      stroke(200);
      fill(190, 80);
      rect(xMenu5, yMenu5, largura-100, altura-25, 15);
       //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
         tela = 1;       
        }
      }
      fill(190, 80, 240);
      stroke(150);
      text("Voltar", xMenu5+50, yMenu5+20);
  }
  if(tela==8){
     background(imgwin);
    if(playsound()){
     winner.play();
    }
     //esse if serve para quando passar o mouse encima do nome aparecer uma borda mostrando onde o mouse esta
      if(mouseX > xMenu5 && mouseX < xMenu5 + largura && mouseY > yMenu5 &&       mouseY < yMenu5 + altura){
      stroke(200);
      fill(190, 80);
      rect(xMenu5, yMenu5, largura-100, altura-25, 15);
       //esse if serve para quando clicar com o mouse mudar para a tela seguinte do menu
      if (mouseIsPressed){
         tela = 1;       
        }
      }
      fill(190, 80, 240);
      stroke(150);
      text("Voltar", xMenu5+50, yMenu5+20);
  }
}
