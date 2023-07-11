/******************* gnb **************************/


const gnbBtn = document.querySelector('.gnbBtn');
const closeBtn = document.querySelector('.closeBtn');
const gnb_open = document.querySelector('.gnb_open');
const dark = document.querySelector('.dark');
const a = document.querySelectorAll('a');

a.forEach((aa) => {
    aa.addEventListener('click',() => {
        aa.preventDefault();
    })
})

console.log(gnbBtn,closeBtn)

//gnb가 왼쪽에서 튀어나오게
gnbBtn.addEventListener('click',()=>{
    console.log('????')
    gnb_open.style = `transform: translateX(0)`;
    dark.style.display = 'block';
})

//gnb가 왼쪽으로 들어가게

closeBtn.addEventListener('click',()=>{
    console.log('??')
    gnb_open.style = `transform: translateX(-100%)`;
    dark.style.display = 'none';
})


/******************* gnb 리스트버튼 눌렀을때 이동하기 *********************** 

 * 1. 버튼 누르기  ul>li>a  => btn_menu
 * 2. 페이지 닫기   => closeBtn
 * 3. 해당페이지 이동하기
 * ****/


const btn_menus = document.querySelectorAll('.btn_menu')

function handleIconClick() {
    gnb_open.style = `transform: translateX(-100%)`;
    dark.style.display = 'none';
}



// 클릭 이벤트 리스너 등록
btn_menus.forEach((btn_menu)=>{
btn_menu.addEventListener('click', ()=>{handleIconClick()});
})

// 각 버튼에 클릭 이벤트 리스너 등록


for (var i = 0; i < btn_menus.length; i++) {
    btn_menus[i].addEventListener('click', function () {      
      const target = this.getAttribute('data-target'); // data-target 속성값 가져오기
      const section = document.querySelector(target); // 해당 섹션 요소 선택
    if (section) {
    // 해당 섹션이 존재할 경우 스크롤 이동
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // 부드러운 스크롤을 위해 smooth 옵션 사용
    });
    }
});
}










/******************* text 배경 **************************/


// const pTag1 = document.querySelector('.first-parallel')
// const pTag2 = document.querySelector('.second-parallel')
const pTag3 = document.querySelector('.third-parallel')
const pTag4 = document.querySelector('.forth-parallel')
const pTag5 = document.querySelector('.fifth-parallel')
const pTag6 = document.querySelector('.sixth-parallel')
// const pTag7 = document.querySelector('.seventh-parallel')
// const pTag8 = document.querySelector('.eighth-parallel')
// const pTag9 = document.querySelector('.ninth-parallel')
// const pTag10 = document.querySelector('.tenth-parallel')

// const textArr1 = 'JAVASCRIPT REACT HTML SASS VUE CSS JQUERY Yummmmmmmmmy SPA'.split(' ')
// const textArr2 = 'corelDraw lllustrator PremierePro AfterEffects Figma react'.split(' ')
const textArr3 = "Let's Dive Into This Tutorial Take It Easy! Don't Worry".split(' ')
const textArr4 = 'Pure Moral Conscientious Meritorious Worthy Exemplary Upright '.split(' ')
const textArr5 = 'JAVASCRIPT REACT HTML SASS VUE CSS JQUERY Yummmmmmmmmy SPA '.split(' ')
const textArr6 = 'Pure Moral Conscientious Meritorious Worthy Exemplary Upright '.split(' ')
// const textArr7 = 'corelDraw lllustrator PremierePro AfterEffects Figma react '.split(' ')
// const textArr8 = 'JAVASCRIPT REACT HTML SASS VUE CSS JQUERY Yummmmmmmmmy SPA '.split(' ')
// const textArr9 = 'Pure Moral Conscientious Meritorious Worthy Exemplary Upright '.split(' ')
// const textArr10 = 'corelDraw lllustrator PremierePro AfterEffects Figma react '.split(' ')

// let count1 = 0
// let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
// let count7 = 0
// let count8 = 0
// let count9 = 0
// let count10 = 0

// initTexts(pTag1, textArr1)
// initTexts(pTag2, textArr2)
initTexts(pTag3, textArr3)
initTexts(pTag4, textArr4)
initTexts(pTag5, textArr5)
initTexts(pTag6, textArr6)
// initTexts(pTag7, textArr7)
// initTexts(pTag5, textArr8)
// initTexts(pTag9, textArr9)
// initTexts(pTag10, textArr10)

function initTexts(element, textArray) {
    textArray.push(...textArray)
    for (let i = 0; i < textArray.length; i++) {
        element.innerText += `${textArray[i]}\u00A0\u00A0\u00A0`
    }
}
function marqueeText(count, element, direction) {
    if (count > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`
        count = 0
    }
    element.style.transform = `translate3d(${direction * count}px, 0, 0)`
    return count
}
function animate() {
    // count1++
    // count2++
    count3++
    count4++
    count5++
    count6++
    // count7++
    // count8++
    // count9++
    // count10++

    // count1 = marqueeText(count1, pTag1, -1)
    // count2 = marqueeText(count2, pTag2, 1)
    count3 = marqueeText(count3, pTag3, -1)
    count4 = marqueeText(count4, pTag4, 1)
    count5 = marqueeText(count4, pTag5, -1)
    count6 = marqueeText(count4, pTag6, 1)
    // count7 = marqueeText(count4, pTag7, -1)
    // count8 = marqueeText(count4, pTag8, 1)
    // count9 = marqueeText(count4, pTag9, -1)
    // count10 = marqueeText(count4, pTag10, 1)

    window.requestAnimationFrame(animate)
}
function scrollHandler() {
    // count1 += 15
    // count2 += 15
    count3 += 15
    count4 += 15
    count5 += 15
    count6 += 15
    // count7 += 15
    // count8 += 15
    // count9 += 15
    // count10 += 15
    }
window.addEventListener('scroll', scrollHandler)
animate()










/**************************  slider ==sec3 *************************************/



const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            },        
        769: {
            slidesPerView: 3,
            },
        1024: {
            slidesPerView: 4,
        }
    }
    });







/************************** skill 다이얼 *************************************/


// window.onload = function () {
//   var gauges = []; // 게이지 객체를 저장할 배열

//   // 게이지 생성 함수
//   function createGauge(containerId, maxValue, initialValue) {
//     var gauge = Gauge(
//       document.getElementById(containerId).getElementsByClassName('gauge')[0], {
//         max: maxValue,
//         dialStartAngle: -90,
//         dialEndAngle: -90.001,
//         value: initialValue,
//         label: function (value) {
//           return Math.round(value * 100) / 100;
//         }
//       }
//     );

//     gauges.push(gauge); // 생성한 게이지를 배열에 추가

//     (function loop() {
//       gauge.setValueAnimated(gauge.displayedValue || initialValue, 1);
//       window.setTimeout(loop, 4000);
//     })();
//   }

//   // 12개의 게이지 생성
//   for (var i = 1; i <= 13; i++) {
//     var containerId = 'gauge' + i;
//     var maxValue = 100;
//     var initialValue = Math.floor(Math.random() * (maxValue + 1));

//     createGauge(containerId, maxValue, initialValue);
//   }
// };



function createGauge(containerId, maxValue, finalValue) {
    var gauge = Gauge(
        document.getElementById(containerId).getElementsByClassName('gauge')[0], {
        max: maxValue,
        dialStartAngle: -90,
        dialEndAngle: -90.001,
        value: 0,
        label: function (value) {
          return Math.round(value * 100) / 100;
        }
    }
    );

    var intervalId = setInterval(function () {
      gauge.setValueAnimated(0, 0.5); // 초기값을 0으로 설정
        setTimeout(function () {
            gauge.setValueAnimated(finalValue, 0.5); // 최종값으로 설정
        }, );
        clearInterval(intervalId);
    }, 500);

return gauge;
}

window.onload = function () {
var gauges = []; // 게이지 객체를 저장할 배열

    // 13개의 게이지 생성
    var gaugeValues = [95, 85, 85, 85, 80, 90, 90, 90, 70, 85, 75, 70, 75];
    for (var i = 1; i <= 13; i++) {
    var containerId = 'gauge' + i;
    var maxValue = 100;
    var finalValue = gaugeValues[i - 1];

    var gauge = createGauge(containerId, maxValue, finalValue);
    gauges.push(gauge);
}
};





/************************** sec4 아코디언 *************************************/



const items = document.querySelectorAll('.item');
const sec4_txt_wrap = document.querySelectorAll('.sec4_txt_wrap');

//이미지
const expand = (item, i) => {
    items.forEach((it, ind) => {
        if (i === ind) return;
        it.clicked = false;
    });
    gsap.to(items, {
        width: item.clicked ? '15vw' : '8vw',
        duration: 2,
        ease: 'elastic(1, .6)' });


    item.clicked = !item.clicked;
    gsap.to(item, {
        width: item.clicked ? '42vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)' });

    };

    items.forEach((item, i) => {
    item.clicked = false;
    item.addEventListener('click', () => expand(item, i));
    });


// 텍스트
    const texts = (item, i) => {
        sec4_txt_wrap.forEach((it, ind) => {
            if (i === ind) return;
            it.clicked = false;
        });
        gsap.to(sec4_txt_wrap, {
            width: item.clicked ? '15vw' : '8vw',
            duration: 2,
            ease: 'elastic(1, .6)' });
    
            item.clicked = !item.clicked;
            gsap.to(item, {
                width: item.clicked ? '42vw' : '15vw',
                duration: 2.5,
                ease: 'elastic(1, .3)' });    
        }         
    
        sec4_txt_wrap.forEach((item, i) => {
        item.clicked = false;
        item.addEventListener('click', () => {
            
            texts(item, i)});
        });



/************************** footer 글자따라다니는 애니메이션 *************************************/


function _classPrivateMethodGet(receiver, privateSet, fn) {if (!privateSet.has(receiver)) {throw new TypeError("attempted to get private field on non-instance");}return fn;}function _classPrivateFieldSet(receiver, privateMap, value) {var descriptor = privateMap.get(receiver);if (!descriptor) {throw new TypeError("attempted to set private field on non-instance");}if (descriptor.set) {descriptor.set.call(receiver, value);} else {if (!descriptor.writable) {throw new TypeError("attempted to set read only private field");}descriptor.value = value;}return value;}function _classPrivateFieldGet(receiver, privateMap) {var descriptor = privateMap.get(receiver);if (!descriptor) {throw new TypeError("attempted to get private field on non-instance");}if (descriptor.get) {return descriptor.get.call(receiver);}return descriptor.value;}var _points = new WeakMap();class FibonacciSphere {


    get points() {
        return _classPrivateFieldGet(this, _points);
        }
    
        constructor(N) {_points.set(this, { writable: true, value: void 0 });
        _classPrivateFieldSet(this, _points, []);
    
        const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    
        for (let i = 0; i < N; i++) {
            const y = 1 - i / (N - 1) * 2;
            const radius = Math.sqrt(1 - y ** 2);
            const a = goldenAngle * i;
            const x = Math.cos(a) * radius;
            const z = Math.sin(a) * radius;
    
            _classPrivateFieldGet(this, _points).push([x, y, z]);
        }
        }}var _root = new WeakMap();var _size = new WeakMap();var _sphere = new WeakMap();var _tags = new WeakMap();var _rotationAxis = new WeakMap();var _rotationAngle = new WeakMap();var _rotationSpeed = new WeakMap();var _frameRequestId = new WeakMap();var _initEventListeners = new WeakSet();var _updatePositions = new WeakSet();var _onMouseMove = new WeakSet();var _update = new WeakSet();
    
    
    
    class TagsCloud {
    
    
    
    
    
    
    
    
    
        constructor(root) {_update.add(this);_onMouseMove.add(this);_updatePositions.add(this);_initEventListeners.add(this);_root.set(this, { writable: true, value: void 0 });_size.set(this, { writable: true, value: void 0 });_sphere.set(this, { writable: true, value: void 0 });_tags.set(this, { writable: true, value: void 0 });_rotationAxis.set(this, { writable: true, value: void 0 });_rotationAngle.set(this, { writable: true, value: void 0 });_rotationSpeed.set(this, { writable: true, value: void 0 });_frameRequestId.set(this, { writable: true, value: void 0 });
        _classPrivateFieldSet(this, _root, root);
        _classPrivateFieldSet(this, _size, _classPrivateFieldGet(this, _root).offsetWidth);
        _classPrivateFieldSet(this, _tags, root.querySelectorAll('.tag'));
        _classPrivateFieldSet(this, _sphere, new FibonacciSphere(_classPrivateFieldGet(this, _tags).length));
        _classPrivateFieldSet(this, _rotationAxis, [1, 0, 0]);
        _classPrivateFieldSet(this, _rotationAngle, 0);
        _classPrivateFieldSet(this, _rotationSpeed, 0);
    
        _classPrivateMethodGet(this, _updatePositions, _updatePositions2).call(this);
        _classPrivateMethodGet(this, _initEventListeners, _initEventListeners2).call(this);
        _classPrivateFieldGet(this, _root).classList.add('-loaded');
        }

        start() {
        _classPrivateMethodGet(this, _update, _update2).call(this);
    
        _classPrivateFieldSet(this, _frameRequestId, requestAnimationFrame(this.start.bind(this)));
        }
    
        stop() {
        cancelAnimationFrame(_classPrivateFieldGet(this, _frameRequestId));
        }}var _initEventListeners2 = function _initEventListeners2() {window.addEventListener('resize', _classPrivateMethodGet(this, _updatePositions, _updatePositions2).bind(this));document.addEventListener('mousemove', _classPrivateMethodGet(this, _onMouseMove, _onMouseMove2).bind(this));};var _updatePositions2 = function _updatePositions2() {const sin = Math.sin(_classPrivateFieldGet(this, _rotationAngle));const cos = Math.cos(_classPrivateFieldGet(this, _rotationAngle));const ux = _classPrivateFieldGet(this, _rotationAxis)[0];const uy = _classPrivateFieldGet(this, _rotationAxis)[1];const uz = _classPrivateFieldGet(this, _rotationAxis)[2];const rotationMatrix = [[cos + ux ** 2 * (1 - cos), ux * uy * (1 - cos) - uz * sin, ux * uz * (1 - cos) + uy * sin], [uy * ux * (1 - cos) + uz * sin, cos + uy ** 2 * (1 - cos), uy * uz * (1 - cos) - ux * sin], [uz * ux * (1 - cos) - uy * sin, uz * uy * (1 - cos) + ux * sin, cos + uz ** 2 * (1 - cos)]];const N = _classPrivateFieldGet(this, _tags).length;for (let i = 0; i < N; i++) {const x = _classPrivateFieldGet(this, _sphere).points[i][0];const y = _classPrivateFieldGet(this, _sphere).points[i][1];const z = _classPrivateFieldGet(this, _sphere).points[i][2];const transformedX = rotationMatrix[0][0] * x + rotationMatrix[0][1] * y + rotationMatrix[0][2] * z;const transformedY = rotationMatrix[1][0] * x + rotationMatrix[1][1] * y + rotationMatrix[1][2] * z;const transformedZ = rotationMatrix[2][0] * x + rotationMatrix[2][1] * y + rotationMatrix[2][2] * z;const translateX = _classPrivateFieldGet(this, _size) * transformedX / 2;const translateY = _classPrivateFieldGet(this, _size) * transformedY / 2;const scale = (transformedZ + 2) / 3;const transform = `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`;const opacity = (transformedZ + 1.5) / 2.5;_classPrivateFieldGet(this, _tags)[i].style.transform = transform;_classPrivateFieldGet(this, _tags)[i].style.opacity = opacity;}};var _onMouseMove2 = function _onMouseMove2(e) {const rootRect = _classPrivateFieldGet(this, _root).getBoundingClientRect();const deltaX = e.clientX - (rootRect.left + _classPrivateFieldGet(this, _root).offsetWidth / 2);const deltaY = e.clientY - (rootRect.top + _classPrivateFieldGet(this, _root).offsetHeight / 2);const a = Math.atan2(deltaX, deltaY) - Math.PI / 2;const axis = [Math.sin(a), Math.cos(a), 0];const delta = Math.sqrt(deltaX ** 2 + deltaY ** 2);const speed = delta / Math.max(window.innerHeight, window.innerWidth) / 10;_classPrivateFieldSet(this, _rotationAxis, axis);_classPrivateFieldSet(this, _rotationSpeed, speed);};var _update2 = function _update2() {_classPrivateFieldSet(this, _rotationAngle, _classPrivateFieldGet(this, _rotationAngle) + _classPrivateFieldGet(this, _rotationSpeed));_classPrivateMethodGet(this, _updatePositions, _updatePositions2).call(this);};
    
    
    
    function main() {
        {
        const root = document.querySelector('.tags-cloud');
        const cloud = new TagsCloud(root);
    
        cloud.start();
        }
    
        // {  로고따라 움직이는 마우스 기능
        // const cursor = document.getElementById('cursor');
        // const isActivated = false;
    
        // document.addEventListener('mousemove', e => {
        //     if (!isActivated) {
        //     cursor.classList.add('-activated');
        //     }
    
        //     cursor.style.transform =
        //     `translateX(${e.clientX}px) translateY(${e.clientY}px)`;
        // });
        // }
    }
    
    
    document.addEventListener('DOMContentLoaded', () => {
        main();
    });



    

/************************** header onscroll  *************************************/


const menuItem = document.querySelectorAll('.nav_a');
console.log(menuItem)



//헤더 버튼
menuItem.forEach(function(aa,bb){
    aa.onclick = function(e){
    e.preventDefault();
    document.querySelector(`#s${bb+1}`).scrollIntoView({behavior: "smooth"})
}
})

  //v버튼
for(let i=1; i <=6;  i++){
document.querySelector(`#s${i} .btnDown`).onclick = function(){
    document.querySelector(`#s${i+1}`).scrollIntoView({behavior: "smooth"})  
}
}
