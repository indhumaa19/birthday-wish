const captions=[{
  start:183, 
  end:198,
   text: "Nanbanae enaku kaadhalan aanaal athuthaan sarithiramo.... 💖"
}];
function setupCaptions(){

  const video = document.getElementById("finalVideo");
  const caption = document.getElementById("videoCaption");
  const captionText = document.getElementById("captionText");

  if(!video || !caption || !captionText) return;

  video.ontimeupdate = () => {

    const currentTime = video.currentTime;
    let activeCaption = null;

    captions.forEach(item => {
      if(currentTime >= item.start && currentTime <= item.end){
        activeCaption = item;
      }
    });

    if(activeCaption){
      captionText.innerText = activeCaption.text;
      caption.classList.add("show");
      burstHearts();
    }
    else{
      caption.classList.remove("show");
      captionText.innerText = "";
    }
  };
}

function burstHearts(){

  const container = document.getElementById("captionHearts");
  if(!container) return;

  for(let i=0; i<12; i++){

    const heart = document.createElement("span");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top  = (60 + Math.random() * 20) + "vh";

    heart.style.animationDelay = (Math.random()*0.3)+"s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 1800);
  }
}
/* 🎥 VIDEOS */

const videos = [
  ".mp4",
  "4.mp4",
  "2.mp4",
  "3.mp4",
  "7.mp4",
  "8.mp4",
  "1.mp4",
  "6.mp4"
];

let currentIndex = 0;

/* 🎁 START SCREEN */

function startSurprise(){
  document.querySelector(".start-screen").style.display = "none";
  document.getElementById("main").style.display = "block";
}

/* 🎥 VIDEO MODAL */

function openVideo(index){
  currentIndex = index;

  const modal = document.getElementById("galleryVideoModal");
  const video = document.getElementById("galleryVideo");

  if(video && modal){
    video.src = videos[index];
    modal.style.display = "flex";
    video.play();
  }
}

function closeVideo(){
  const modal = document.getElementById("galleryVideoModal");
  const video = document.getElementById("galleryVideo");

  if(video && modal){
    video.pause();
    video.src = "";
    modal.style.display = "none";
  }

  showNextPhoto();
}

/* 🖼️ NEXT PHOTO */

function showNextPhoto(){
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => card.classList.remove("active"));

  currentIndex = (currentIndex + 1) % cards.length;

  if(cards[currentIndex]){
    cards[currentIndex].classList.add("active");
  }
}

/* ❤️ LETTER */

const letterMessage = `Hiii 👋 Happy Birthday Lusu 💋 life long happya 
iru always stay blessed enjoy your life 😍 romba yoaikkatha ellame 
nallathave nadakum ok ... Feel pannatha  nalla padi un life la ennala 
panna thonutho athu ellam pannu na eppothum un kudave irupen un kuda na
 eppothum un kittaiye illa always close to my heart💚neeraiya sanda 
 podalam pesama pakkama kuda irukkalam but un Mela irukkura love mattum 
 enaku ennaikum kuraiyathu ok I always be with you 😊 enakke theriyum
  na unna athikama pakka matten pesa matten athukkunu unna pudikala 
  appdinula artham illa ok distance tha feel the real value of that
   person antha mathiri tha  nee en kitta mattum tha illa but en
    mind la eppothum unna yosikum puriyuthu paithaiyam 💙 appadila 
    unna vittu poyita matten✨😘💜 future la enna nadakum nu namakku theriyathu 
    athe mathiri future a nammala change pannavum mudiyathu " The present
     determines the future life " so romba yoaikkatha namma present a change
 pannuvum automatic a namma future change akum ok .. once again happy
  birthday Vicky 🥰 Ennatha nee en lover a
 iruthalum you are always my best friend 👀🤗`;

function openLetter(){
  const modal = document.getElementById("letterModal");
  const textBox = document.getElementById("typedText");

  if(modal && textBox){
    modal.style.display = "flex";
    textBox.innerHTML = "";
    typeLetter();
  }
}

function closeLetter(){
  const modal = document.getElementById("letterModal");
  const textBox = document.getElementById("typedText");

  if(modal) modal.style.display = "none";
  if(textBox) textBox.innerHTML = "";
}

/* ✨ Typing Animation */

function typeLetter(){
  let i = 0;
  const speed = 120;
  const textBox = document.getElementById("typedText");

  if(!textBox) return;
  typingActive=true;

  function typing(){
    if(!typingActive) return;

    if(i < letterMessage.length){
      textBox.innerHTML += letterMessage.charAt(i);
      i++;
      typingTimeout=setTimeout(typing, speed);
    } 
    else {
      // 💖 Letter finished → cinematic transition
      typingActive=false;
  

    }
  }

  typing();
}

function finishLetter(){
  
  const textBox = document.getElementById("typedText");

  typingActive = false;
  clearTimeout(typingTimeout);

  if(textBox){
    textBox.innerHTML = letterMessage; // show full text instantly
  }
  showAfterLetter();
}
/* 🌑 Fade + Video */

function startCinematicTransition(){

  const fade = document.getElementById("fadeScreen");
  const letterModal = document.getElementById("letterModal");

  if(fade){
    fade.classList.add("show");
  }

  setTimeout(() => {
    if(letterModal) letterModal.style.display = "none";
    playFinalVideo();
  }, 1500);
}


/* 🎬 Final Video */

function playFinalVideo(){

  const modal = document.getElementById("finalVideoModal");
  const video = document.getElementById("finalVideo");

  if(video && modal){
    video.src = "final.mp4";   // 🎥 YOUR FINAL VIDEO
    modal.style.display = "flex";
    video.play();
    setupCaptions();
  }
}
function closeFinalVideo(){
  const modal = document.getElementById("finalVideoModal");
  const video = document.getElementById("finalVideo");
  const caption = document.getElementById("videoCaption");

  if(video && modal){
    video.pause();
    video.src = "";
    modal.style.display = "none";
  }
  if(caption){
    caption.classList.remove("show");
    caption.innerText="";
  }
}
const finalMessage = 
"letter padichi  mudichitiya… 💌 Ippom song kettu feel pannu 🎵";

function showAfterLetter(){

  const box = document.getElementById("afterLetter");
  const line = document.getElementById("finalLine");

  if(!box || !line) return;

  box.style.display = "flex";
  line.innerHTML =""; // show full message instantly

  let i = 0;
  const speed = 50;

  function type(){
    if(i < finalMessage.length){
      line.innerHTML += finalMessage.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}
function startFinalVideo(){

  const box  = document.getElementById("afterLetter");

  if(box) box.style.display = "none";

  playFinalVideo();
}
function showNextPhoto(){
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => card.classList.remove("active"));

  currentIndex = (currentIndex + 1) % cards.length;

  if(cards[currentIndex]){
    cards[currentIndex].classList.add("active");
  }
}

