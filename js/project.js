



// 버튼 상수 지정
const ALLbtn = document.querySelector('#ALLbtn');
const Mobilebtn = document.querySelector('#Mobilebtn');
const Reactbtn = document.querySelector('#Reactbtn');
const Vuebtn = document.querySelector('#Vuebtn');
const Responsivebtn = document.querySelector('#Responsivebtn');
const teamprojectbtn = document.querySelector('#teamprojectbtn');
const CloneSitebtn = document.querySelector('#CloneSitebtn');

// 아이템들 상수 지정
const alls = document.querySelectorAll('.ALL');
const Mobiles = document.querySelectorAll('.Mobile');
const Responsives = document.querySelectorAll('.Responsive');
const Reacts = document.querySelectorAll('.React');
const Vues = document.querySelectorAll('.Vue');
const teamproject = document.querySelectorAll('.teamproject');
const CloneSites = document.querySelectorAll('.CloneSite');

// 모든 아이템 숨기기
const hideAllItems = () => {
  alls.forEach((item) => {
    item.style.display = 'none';
  });
}

// all 버튼 클릭 이벤트 핸들러
ALLbtn.addEventListener('click', () => {
  alls.forEach((item) => {
    item.style.display = 'block';
  });
});

// Mobile 버튼 클릭 이벤트 핸들러
Mobilebtn.addEventListener('click', () => {
  hideAllItems();
  Mobiles.forEach((item) => {
    item.style.display = 'block';
  });
});

// React 버튼 클릭 이벤트 핸들러
Reactbtn.addEventListener('click', () => {
  hideAllItems();
  Reacts.forEach((item) => {
    item.style.display = 'block';
  });
});

// Vue 버튼 클릭 이벤트 핸들러
Vuebtn.addEventListener('click', () => {
  hideAllItems();
  Vues.forEach((item) => {
    item.style.display = 'block';
  });
});

// Responsive 버튼 클릭 이벤트 핸들러
Responsivebtn.addEventListener('click', () => {
  hideAllItems();
  Responsives.forEach((item) => {
    item.style.display = 'block';
  });
});

// teamproject 버튼 클릭 이벤트 핸들러
teamprojectbtn.addEventListener('click', () => {
  hideAllItems();
  teamproject.forEach((item) => {
    item.style.display = 'block';
  });
});

// CloneSite 버튼 클릭 이벤트 핸들러
CloneSitebtn.addEventListener('click', () => {
  hideAllItems();
  CloneSites.forEach((item) => {
    item.style.display = 'block';
  });
});
