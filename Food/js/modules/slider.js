function slider({container, slide, prevArrow, nextArrow, totalCounter, currentCounter}) {
  //slider

  const slides = document.querySelectorAll(slide),
    prev = document.querySelector(prevArrow),
    next = document.querySelector(nextArrow),
    total = document.querySelector(totalCounter),
    current = document.querySelector(currentCounter),
    slider = document.querySelector(container);

  const nav = document.createElement('ol'),
    dots = [];

  let slideIndex = 1;

  showSlides(slideIndex);

  if (slides.length < 10) {
    total.textContent = '0' + slides.length;
  } else {
    total.textContent = slides.length;
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(item => item.classList.add('hide', 'fade'));

    slides[slideIndex - 1].classList.remove('hide');
    slides[slideIndex - 1].classList.add('show');

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });

  next.addEventListener('click', function () {
    plusSlides(1);
  });

  slider.style.position = 'relative';

  nav.classList.add('carousel-indicators');

  slider.append(nav);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.classList.add('dot');
    if (i == 0) {
      dot.style.opacity = 1;
    }

    nav.append(dot);
    dots.push(dot);
  }

  nav.addEventListener('click', function (event) {
    const target = event.target;
    if (target && target.classList.contains('dot')) {

    }
  });
}

export default slider;