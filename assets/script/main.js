$(document).ready(function () {
  $('.voices__slider').slick({
    dots: true,
    dotsClass: 'voices__dots-box',
    infinite: true,
    arrows: true,
    appendArrows: $('.voices__arrow-box'),
    prevArrow: '<svg class="pc_only voices__prev-arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M24,0A24,24,0,1,0,43.7,37.706,23.678,23.678,0,0,0,48,24,24,24,0,0,0,24,0ZM34.5,22.5a1.5,1.5,0,0,1,0,3H17.121l6.441,6.438a1.5,1.5,0,1,1-2.124,2.124l-9-9a1.5,1.5,0,0,1,0-2.124l9-9a1.5,1.5,0,0,1,2.124,2.124L17.121,22.5Z" fill="#00afbf"/></svg>',
    nextArrow: '<svg class="pc_only voices__next-arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0ZM13.5,22.5a1.5,1.5,0,0,0,0,3H30.879l-6.441,6.438a1.5,1.5,0,1,0,2.124,2.124l9-9a1.5,1.5,0,0,0,0-2.124l-9-9a1.5,1.5,0,0,0-2.124,2.124L30.879,22.5Z" fill="#00afbf"/></svg>',
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,

    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: true,
        appendArrows: $('.voices__arrow-box'),
        prevArrow: '<svg class="pc_only voices__prev-arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M24,0A24,24,0,1,0,43.7,37.706,23.678,23.678,0,0,0,48,24,24,24,0,0,0,24,0ZM34.5,22.5a1.5,1.5,0,0,1,0,3H17.121l6.441,6.438a1.5,1.5,0,1,1-2.124,2.124l-9-9a1.5,1.5,0,0,1,0-2.124l9-9a1.5,1.5,0,0,1,2.124,2.124L17.121,22.5Z" fill="#00afbf"/></svg>',
        nextArrow: '<svg class="pc_only voices__next-arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><path d="M24,0A24,24,0,1,1,0,24,24,24,0,0,1,24,0ZM13.5,22.5a1.5,1.5,0,0,0,0,3H30.879l-6.441,6.438a1.5,1.5,0,1,0,2.124,2.124l9-9a1.5,1.5,0,0,0,0-2.124l-9-9a1.5,1.5,0,0,0-2.124,2.124L30.879,22.5Z" fill="#00afbf"/></svg>',
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true,
        appendArrows: $('.voices__arrow-box'),
        prevArrow: '<svg class="sp_only voices__prev-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,0A16,16,0,1,0,32,16,16,16,0,0,0,16,0Zm7,15a1,1,0,0,1,0,2H11.414l4.294,4.292a1,1,0,1,1-1.416,1.416l-6-6a1,1,0,0,1,0-1.416l6-6a1,1,0,1,1,1.416,1.416L11.414,15Z" fill="#00afbf"/></svg>',
        nextArrow: '<svg class="sp_only voices__next-arrow" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M16,0A16,16,0,1,1,0,16,16,16,0,0,1,16,0ZM9,15a1,1,0,0,0,0,2H20.586l-4.294,4.292a1,1,0,1,0,1.416,1.416l6-6a1,1,0,0,0,0-1.416l-6-6a1,1,0,0,0-1.416,1.416L20.586,15Z" fill="#00afbf"/></svg>',
      }
    }]
  });

  $('.faq__accordion-toggle').click(function() {
    let icon = $(this).find('.faq__accordion-icon');
    let content = $(this).closest('.faq__card').find('.faq__accordion-content');

    if (content.is(':visible')) {
      content.slideUp();
      icon.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
    } else {
      $('.faq__accordion-content').slideUp();
      $('.faq__accordion-icon').removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
      content.slideDown();
      icon.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
    }
  });
});