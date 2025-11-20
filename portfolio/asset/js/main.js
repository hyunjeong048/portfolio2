
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);



const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

const hoverTargets = document.querySelectorAll("a, button");

hoverTargets.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(2)";
    cursor.style.backgroundColor = "rgba(180, 140, 100, 0.9)";
  });
  el.addEventListener("mouseleave", () => {
    cursor.style.transform = "translate(-50%, -50%) scale(1)";
    cursor.style.backgroundColor = "rgba(200, 180, 150, 0.8)";
  });
});


$(function () {
  var $header = $('#header');
  var $about = $('.sc-about');

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    var aboutTop = $about.offset().top;

    if (scrollTop >= aboutTop) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }
  });
});


$('.nav-item a').click(function(e){
    e.preventDefault();

    cont=$(this).data('cont');

    $('html').animate({
        scrollTop: $(cont).offset().top
    },500);
})

$('.mobile-item a').click(function(e){
  e.preventDefault();

  const cont = $(this).data('cont');
  const $target = $(cont);

  if ($target.length) {
    $('html, body').animate({
      scrollTop: $target.offset().top
    }, 500);
  }
  const $mobileMenu = $('#header .group-mobile');
  $mobileMenu.removeClass('show');

  setTimeout(function(){
    $mobileMenu.css('display', 'none');
  }, 500);
});


$('#header .btn-menu').click(function(e) {
  e.preventDefault();
  $('#header .group-mobile').addClass('show');
  $('body').addClass('scroll-hide');
});

$('#header .group-mobile .btn-close').click(function(e) {
  e.preventDefault();
  $('#header .group-mobile').removeClass('show');
  $('body').removeClass('scroll-hide');
});



const headTxt = new SplitType('.sc-intro .title span', { types: 'chars' });

const intro1 = gsap.timeline({

    scrollTrigger: {
        trigger: '.sc-intro',
        start: '0% 0%',
        end: '50% 0%',
        // markers: true,
        scrub:0
    }
})
intro1.to('.sc-intro .title',{
  yPercent:-30
},'a')
intro1.to('.sc-intro .title .char',{
  yPercent:"random(-100,-400)",
  rotation:"random(-100,100)",
},'a')



const project1 = gsap.timeline({

    scrollTrigger: {
        trigger: '.sc-project',
        start: '0% 0%',
        end: '100% 100%',
        scrub: 0,
        // markers: true,
    }
})
project1
.from('.sc-project .project._2',{
  scale: 0.7,
})
.from('.sc-project .project._3',{
  scale: 0.7,
})
.from('.sc-project .project._4',{
  scale: 0.7,
})
.from('.sc-project .project._5',{
  scale: 0.7,
})
.from('.sc-project .project._6',{
  scale: 0.7,
})
.from('.sc-project .project._7',{
  scale: 0.7,
})
.from('.sc-project .project._8',{
  scale: 0.7,
})
.from('.sc-project .project._9',{
  scale: 0.7,
})
