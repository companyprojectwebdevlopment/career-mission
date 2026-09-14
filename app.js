const screens=[...document.querySelectorAll('.screen')];
let current=0;
const progress=document.getElementById('progress-bar');
function show(i){screens.forEach((s,idx)=>s.classList.toggle('active',idx===i));current=i;progress.style.width=`${((i+1)/screens.length)*100}%`;const back=document.getElementById('back-btn');if(back){back.classList.toggle('hidden-back',i===0);}window.scrollTo({top:0,behavior:'smooth'});document.body.classList.remove('page-pop');void document.body.offsetWidth;document.body.classList.add('page-pop');if(i===9) playFinalCelebration();}
document.querySelectorAll('[data-next]').forEach(btn=>btn.addEventListener('click',()=>show(Math.min(current+1,screens.length-1))));
const backBtn=document.getElementById('back-btn');if(backBtn) backBtn.addEventListener('click',()=>show(Math.max(current-1,0)));


function playFinalCelebration(){
 const screen=document.getElementById('screen-9');
 const celebration=document.getElementById('final-celebration');
 if(!screen||!celebration)return;
 screen.classList.remove('celebrating');
 celebration.classList.remove('play','fade-out');
 void celebration.offsetWidth;
 screen.classList.add('celebrating');
 celebration.classList.add('play');
 clearTimeout(window.__finalCelebrationTimer);
 window.__finalCelebrationTimer=setTimeout(()=>celebration.classList.add('fade-out'),7200);
}

const chats={
1:`<div class="bubble-row"><div class="bubble"><span class="who">Kuchnahi Ji</span>Are koi na 😌</div><div class="bubble me"><span class="who">Krishna</span>Achha malik 😅 phir matter close 😂</div></div>`,
2:`<div class="bubble-row"><div class="bubble"><span class="who">Kuchnahi Ji</span>Suno n, python ka notes send karo 😭</div><div class="bubble me"><span class="who">Krishna</span>Customer care active hai madam 😂 bhej raha hu.</div></div>`,
3:`<div class="bubble-row"><div class="bubble me"><span class="who">Krishna</span>English practice kare? Main help kar dunga 😌</div><div class="bubble"><span class="who">Kuchnahi Ji</span>Saam ko call karti hu, okk.</div></div>`,
4:`<div class="bubble-row"><div class="bubble me"><span class="who">Krishna</span>Stock me aur bhi photos hain 😂 bheju?</div><div class="bubble"><span class="who">System</span>Embarrassing evidence detected 🚨😂</div></div>`
};
document.querySelectorAll('[data-chat]').forEach(btn=>btn.addEventListener('click',()=>{btn.classList.remove('locked');btn.classList.add('unlocked');btn.querySelector('b').textContent='Unlocked 😂';document.getElementById('chat-stage').innerHTML=chats[btn.dataset.chat];}));

const moodText={
focus:'System report: Aaj full power 😎 Bas plan banao aur kaam start. Motivation ko disturb mat karo 😂',
lazy:'Feeling lazy? Mann ka wait karoge to job HR le jayega 😂 10 minute kaam start karo, bas.',
confused:'Confusion detected 😵‍💫 Ek hi next step choose karo. Sab kuch ek saath solve karna zaroori nahi.',
kuchnahi:'Kuchnahi mode 😑😂 Thik hai. Bas ek 15-minute task karke phir officially “kuchnahi” bolna.'
};
document.querySelectorAll('[data-mood]').forEach(b=>b.addEventListener('click',()=>document.getElementById('mood-response').textContent=moodText[b.dataset.mood]));

const stepText=[
'Skills: Aaj ek topic revise karo. Chhota step bhi progress hai.',
'Practice: 30 min problem solving. Sirf dekhna nahi, khud type karna 😌',
'Project: Ek chhota feature complete karo. Proof > promise.',
'Apply: Aaj kam se kam 1 application. Perfect opportunity ka wait mat karo 😂',
'Interview: 5 questions aloud answer karo. Confidence practice se aata hai.',
'Job: Congratulations 😂 Ab party se pehle joining mail check kar lena.'
];
let unlocked=0;
document.querySelectorAll('[data-step]').forEach(step=>step.addEventListener('click',()=>{
 const idx=+step.dataset.step;if(idx>unlocked)return;
 document.getElementById('roadmap-response').textContent=stepText[idx];
 if(idx===unlocked && unlocked<5){unlocked++;document.querySelector(`[data-step="${unlocked}"]`).classList.add('unlocked');}
}));

const excuseText={
1:'Mann kal bhi busy ho sakta hai 😂 15 min start karo. Motivation baad me aa jayega.',
2:'Time audit karo 😌 20 min mil jayega. Phone ko 20 min ke liye chhutti do.',
3:'Evidence unavailable 😂 Try karke report submit karo, phir decide karenge.',
4:'Kal ek mythical place hai 😂 Aaj 10 min start karo.',
5:'HR tumhara wait nahi karega 😭 Jo 70% match kare usme apply kar do.'
};
document.querySelectorAll('[data-excuse]').forEach(b=>b.addEventListener('click',()=>document.getElementById('excuse-response').textContent=excuseText[b.dataset.excuse]));

const advice=[
'Overthinking detected 🚨 Pehle 10 min kaam start karo, tension baad me lena 😂',
'Resume perfect nahi hona chahiye. Bhejna chahiye 😌',
'Aaj 1% better = future wali tum thoda zyada relaxed 😎',
'Comparison band. Kal wali version se better hona hai, duniya se nahi.',
'Rejection = game over nahi. Bas next level ka loading screen 😂',
'Phone side me. 25 min focus. Phir 5 min bakwas allowed 😂',
'Ek skill ko proof me badlo: project, GitHub, ya real task.'
];
document.getElementById('advice-btn').addEventListener('click',()=>{
 const txt=advice[Math.floor(Math.random()*advice.length)];document.getElementById('advice-card').textContent=txt;
});

document.querySelectorAll('.mission-picker button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.mission-picker button').forEach(x=>x.style.outline='none');b.style.outline='2px solid #6ee7ff';b.textContent='✅ '+b.textContent.replace(/^✅\s*/,'');}));

document.getElementById('final-btn').addEventListener('click',(e)=>{const box=document.getElementById('last-reveal');box.classList.remove('hidden');e.currentTarget.textContent='Mission Complete 💙';});
show(0);
