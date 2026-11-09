function includeHeader(active=''){const h=`<header class="site-header"><div class="nav-wrap"><a class="brand" href="index.html"><img src="assets/images/logo.jpg" alt="START-UP logo"><span>START-UP</span></a><button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">Menu</button><nav class="nav-links"><a href="index.html" data-page="home">Home</a><a href="about.html" data-page="about">About</a><a href="members.html" data-page="members">Members</a><a href="showcase.html" data-page="showcase">Showcase</a><a href="contact.html" data-page="contact">Contact</a></nav></div></header>`;document.body.insertAdjacentHTML('afterbegin',h);const nav=document.querySelector('.nav-links');document.querySelector('.menu-toggle').addEventListener('click',e=>{nav.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',nav.classList.contains('open'))});if(active){const a=document.querySelector(`[data-page="${active}"]`);if(a)a.classList.add('active')}}
function includeFooter(){document.body.insertAdjacentHTML('beforeend',`<footer class="footer"><div class="footer-inner"><div><strong>START-UP</strong><br><small>Five Minds. Different Specializations. One Creative Vision.</small></div><small>Collaborative Technology & Arts Portfolio · 2026</small></div></footer>`)}
function memberCards(){return Object.entries(STARTUP_PROFILES).map(([id,p])=>`<a class="member-card" href="${id}.html"><img src="assets/images/${p.photo}" alt="Portrait of ${p.display}"><div><h3>${p.name}</h3><p class="preferred-name">Preferred name: ${p.display}</p><p>${p.title}</p><div class="role">${p.teamRole}</div></div></a>`).join('')}
function list(items){return items&&items.length?`<ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul>`:''}
function profilePage(id){
 const p=STARTUP_PROFILES[id];if(!p)return;
 document.title=p.name+' | START-UP';
 const panels=[];
 panels.push(['overview','Overview',`<div class="content-grid">
   ${p.bio?`<article class="info-card"><h3>Introduction</h3><p>${p.bio}</p></article>`:''}
   ${p.about?`<article class="info-card"><h3>About Me</h3><p>${p.about}</p></article>`:''}
   ${p.careerSummary?`<article class="info-card"><h3>Professional Summary</h3><p>${p.careerSummary}</p></article>`:''}
   ${p.strengths&&p.strengths.length?`<article class="info-card"><h3>Key Strengths</h3>${list(p.strengths)}</article>`:''}
   ${p.contribution?`<article class="info-card"><h3>What I Bring to a Team</h3><p>${p.contribution}</p></article>`:''}
   ${p.langs&&p.langs.length?`<article class="info-card"><h3>Languages</h3>${list(p.langs)}</article>`:''}
 </div>`]);
 if(p.education&&p.education.length)panels.push(['education','Education',`<div class="info-card"><h3>Education & Areas of Study</h3>${list(p.education)}</div>`]);
 if(p.skills&&p.skills.length)panels.push(['skills','Skills',`<div class="info-card"><h3>Skills & Tools</h3><ul class="pill-list">${p.skills.map(x=>`<li>${x}</li>`).join('')}</ul></div>`]);
 if(p.experience&&p.experience.length)panels.push(['experience','Experience',`<div class="info-card"><h3>Organizations & Activities</h3>${list(p.experience)}</div>`]);
 if(p.achievements&&p.achievements.length)panels.push(['achievements','Achievements',`<div class="info-card"><h3>Achievements & Recognition</h3>${list(p.achievements)}</div>`]);
 if(p.projects&&p.projects.length)panels.push(['projects','Projects',`<div class="info-card"><h3>Selected Projects & Work</h3>${p.projects.map(x=>`<div class="project-card"><h3>${x.name}</h3><p>${x.desc}</p></div>`).join('')}</div>`]);
 if((p.interests&&p.interests.length)||(p.goals&&p.goals.length)||(p.links&&p.links.length)){
   panels.push(['goals','Interests & Goals',`<div class="content-grid">
    ${p.interests&&p.interests.length?`<article class="info-card"><h3>Interests</h3>${list(p.interests)}</article>`:''}
    ${p.goals&&p.goals.length?`<article class="info-card"><h3>Career Direction & Goals</h3>${list(p.goals)}</article>`:''}
    ${p.links&&p.links.length?`<article class="info-card"><h3>Professional Links</h3><div class="link-list">${p.links.map(l=>`<a href="${l.url}" target="_blank" rel="noopener noreferrer">${l.label} ↗</a>`).join('')}</div></article>`:''}
   </div>`]);
 }
 document.querySelector('#profile-root').innerHTML=`<div class="profile-hero"><img class="profile-photo" src="assets/images/${p.photo}" alt="Portrait of ${p.name}"><div><div class="eyebrow">START-UP Member Profile</div><h1>${p.name}</h1><p class="preferred-name">Preferred name: ${p.display}</p><p class="lead">${p.title}</p><p class="tagline">“${p.tagline}”</p><p><strong>START-UP Role:</strong> ${p.teamRole}<br><strong>Program:</strong> ${p.course}</p><a class="small-link" href="members.html">← Back to Members Directory</a></div></div>
 <nav class="profile-nav" aria-label="Profile sections">${panels.map((s,i)=>`<button class="${i===0?'active':''}" data-tab="${s[0]}">${s[1]}</button>`).join('')}</nav>
 ${panels.map((s,i)=>`<section class="profile-panel ${i===0?'active':''}" id="${s[0]}">${s[2]}</section>`).join('')}`;
 document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));
  document.querySelectorAll('.profile-panel').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab));
 }));
}
