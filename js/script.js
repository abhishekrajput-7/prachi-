/* Personalize this date and the letter text below. */
const relationshipStart = new Date("2025-12-31T00:00:00");
const letter = `My love,\n\nYou have a way of turning ordinary moments into the kind I never want to forget. Thank you for being the warmth in my days, the calm in my storms, and the most beautiful part of my story.\n\nI choose you—in every lifetime, in every little moment, and in every tomorrow.`;

document.querySelectorAll('.reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), 180 + i * 130));
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('show'); if (entry.target.id === 'typed-letter') typeLetter(); } }), { threshold: .18 });
document.querySelectorAll('.timeline-card, #typed-letter').forEach(el => observer.observe(el));
let typed = false;
function typeLetter(){ if(typed) return; typed=true; const target=document.querySelector('#typed-letter'); let i=0; const write=()=>{ target.innerHTML=letter.slice(0,i).replace(/\n/g,'<br>'); if(i++ < letter.length) setTimeout(write,18); }; write(); }

function updateCounter(){ const diff = Math.max(0, Date.now()-relationshipStart); const s=Math.floor(diff/1000); const values=[Math.floor(s/86400),Math.floor(s/3600)%24,Math.floor(s/60)%60,s%60]; ['days','hours','minutes','seconds'].forEach((id,i)=>document.getElementById(id).textContent=String(values[i]).padStart(2,'0')); } updateCounter(); setInterval(updateCounter,1000);


const player = document.querySelector(".player");
const playBtn = document.querySelector(".play");
const music = document.getElementById("bgMusic");

playBtn.onclick = () => {

    if (music.paused) {

        music.play();

        player.classList.add("playing");

        playBtn.innerHTML = "Ⅱ";

    } else {

        music.pause();

        player.classList.remove("playing");

        playBtn.innerHTML = "▶";

    }

};

const surprise=document.querySelector('.surprise');


document.querySelector("#open-heart").onclick = () => {

    surprise.classList.add("open");

    heartBurst(innerWidth/2, innerHeight/2, 200);

    document.querySelector(".surprise-card h2").innerHTML =
    `I Love You<br><em>Prachi ❤️</em>`;

    document.querySelector(".surprise-card p").innerHTML =
    "Thank you for making my life beautiful.";

    document.querySelector(".surprise-card i").innerHTML =
    "Forever & Always ❤️";

};

document.querySelector('.close-surprise').onclick=()=>surprise.classList.remove('open');

const canvas=document.querySelector('#heart-canvas'),ctx=canvas.getContext('2d');let hearts=[];function size(){canvas.width=innerWidth;canvas.height=innerHeight}size();addEventListener('resize',size);function heartBurst(x,y,count=2){for(let i=0;i<count;i++) hearts.push({x,y,vx:(Math.random()-.5)*3,vy:-Math.random()*3-1,life:1,size:4+Math.random()*8})}addEventListener('mousemove',e=>{if(Math.random()>.7)heartBurst(e.clientX,e.clientY,1)});addEventListener('click',e=>heartBurst(e.clientX,e.clientY,20));function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);hearts=hearts.filter(h=>h.life>.02);hearts.forEach(h=>{h.x+=h.vx;h.y+=h.vy;h.vy+=.025;h.life*=.975;ctx.globalAlpha=h.life;ctx.fillStyle='#eeb39d';ctx.font=`${h.size}px serif`;ctx.fillText('♥',h.x,h.y)});ctx.globalAlpha=1;requestAnimationFrame(draw)}draw();
const glow=document.querySelector('.cursor-glow');addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});


const photos = document.querySelectorAll(".photo-card video");

const videoViewer = document.getElementById("videoViewer");
const viewerVideo = document.getElementById("viewerVideo");
const closeVideo = document.getElementById("closeVideo");

photos.forEach(video => {

    video.addEventListener("click", () => {

        videoViewer.style.display = "flex";

        viewerVideo.src = video.querySelector("source").src;

        viewerVideo.load();

        viewerVideo.play();

    });

});

closeVideo.onclick = () => {

    viewerVideo.pause();

    viewerVideo.src = "";

    videoViewer.style.display = "none";

};

videoViewer.onclick = (e) => {

    if (e.target === videoViewer) {

        viewerVideo.pause();

        viewerVideo.src = "";

        videoViewer.style.display = "none";

    }

};

photos.forEach(video => {

    video.pause();

    video.addEventListener("mouseenter", () => {

        video.play();

    });

    video.addEventListener("mouseleave", () => {

        video.pause();

        video.currentTime = 0;

    });

});



const heartsContainer = document.querySelector(".floating-hearts");

if (heartsContainer) {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("span");

        const icons = ["❤️","🌸","💖","🌺","💕","✨","🩷"];

heart.innerHTML = icons[Math.floor(Math.random()*icons.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration = (10 + Math.random() * 8) + "s";

        heart.style.fontSize = (18 + Math.random() * 20) + "px";

        heart.style.animationDelay = Math.random() * 5 + "s";

        heartsContainer.appendChild(heart);

    }

}

const loader=document.getElementById("loader");
const progress=document.getElementById("loaderProgress");
const percent=document.getElementById("loaderPercent");

let value=0;

const loading=setInterval(()=>{

    value++;

    progress.style.width=value+"%";

    percent.innerHTML=value+"%";

    if(value>=100){

        clearInterval(loading);

        setTimeout(()=>{

            loader.style.opacity="0";

            setTimeout(()=>{
                loader.style.display="none";
            },800);

        },500);

    }

},25);
