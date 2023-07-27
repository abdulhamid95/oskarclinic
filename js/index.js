const mql = window.matchMedia("(max-width: 992px)")
const mql2 = window.matchMedia("(max-width: 767px)")

const changeSlideView = (slide) => {
  var swiper = new Swiper(".swiper", {
    slidesPerView: slide,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const handleOrientationChange = (e) => {
  if (mql2.matches) {
    changeSlideView(1)
  } else if (mql.matches) {
    changeSlideView(2)
  } else {
    changeSlideView(3)
  }
}


handleOrientationChange();

mql.onchange = (e) => {
  handleOrientationChange(e);
}

mql2.onchange = (e) => {
  handleOrientationChange(e);
}

var brands = new Swiper(".brands", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
});

const slideResults = document.getElementById('swiper-results');
const slideLab = document.getElementById('swiper-lab');
const result = document.getElementById('our-results');
const lab = document.getElementById('our-lab');

document.querySelectorAll('input[type="radio"]').forEach(item => {
  item.addEventListener('change', () => {
    if (result.checked) {
        slideResults.classList.remove('d-none')
        slideLab.classList.add('d-none')
      
    } else if(lab.checked) {
      slideResults.classList.add('d-none')
      slideLab.classList.remove('d-none')
    }
  })
})


var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    let website = new CountUp('year-count', 0, 30, 0, 2.5);
    website.start();
    let happyPatients = new CountUp('happy-patients', 0, 150, 0, 2.5);
    happyPatients.start();
    let expertsDoctors = new CountUp('experts-doctors', 0, 120, 0, 2.5);
    expertsDoctors.start();
    let hospitalRoom = new CountUp('hospital-room', 0, 30, 0, 2.5);
    hospitalRoom.start();
    let awardWinner = new CountUp('award-winner', 0, 70, 0, 2.5);
    awardWinner.start();
  };

  let scrollpos = window.scrollY
  const header = document.querySelector("nav")
  const header_height = header.offsetHeight

  const add_class_on_scroll = () => header.classList.add("fade-in", "fixed-top")
  const remove_class_on_scroll = () => header.classList.remove("fade-in", "fixed-top")

  window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;

    if (scrollpos >= header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

  })

  document.getElementById("year").innerHTML = new Date().getFullYear();