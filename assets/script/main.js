$('.voices__slider').slick({
  dots: true,
  infinite: true,
  arrows: true,
  appendArrows: $('.voices__arrow-box'),
  prevArrow: '<svg class="voices__prev-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7,15a1,1,0,0,1,0,2H11.414l4.294,4.292a1,1,0,1,1-1.416,1.416l-6-6a1,1,0,0,1,0-1.416l6-6a1,1,0,1,1,1.416,1.416L11.414,15Z" fill="#00afbf"/></svg>',
  nextArrow: '<svg class="voices__next-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,0A16,16,0,1,1,0,16,16,16,0,0,1,16,0ZM9,15a1,1,0,0,0,0,2H20.586l-4.294,4.292a1,1,0,1,0,1.416,1.416l6-6a1,1,0,0,0,0-1.416l-6-6a1,1,0,0,0-1.416,1.416L20.586,15Z" fill="#00afbf"/></svg>',
  slidesToShow: 1,
  slidesToScroll: 1
 });