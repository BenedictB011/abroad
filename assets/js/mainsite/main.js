function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function getUrlParam(param)
{
  let urlParams = new URLSearchParams(window.location.search);

  return urlParams.get(param);
}

function getBaseUrl(uri) {
  let getUrl = window.location;
  let baseUrl = getUrl.protocol + "//" + getUrl.host + "/"; // + getUrl.pathname.split('/')[1] + '/'

  return baseUrl + uri;
}

function getAssetsUrl(uri) {
  return getBaseUrl('assets/' + uri);
}

function getRecaptchaSiteKey()
{
  return '6LfCwJsUAAAAAJU8kCrcxb6hufRVrENbSjM1Ux05';
}

function popupError()
{
  swal({
      title: 'Sorry, a server error was encountered.',
      text: 'Please refresh the page or try again later.',
      icon: 'error',
      closeOnClickOutside: false,
      closeOnEsc: false,
      dangerMode: true,
      button: false
  });
}

/*function loaderPopUp(options) {
  let title = 'Loading... Please wait...';
  let text = '';

  if (typeof options !== 'undefined') {
    if (typeof options.title !== 'undefined') {
        title = options.title;
    }

    if (typeof options.text !== 'undefined') {
        text = options.text;
    }
  }

  swal({
      title: title,
      text: text,
      closeOnClickOutside: false,
      closeOnEsc: false,
      button: false,
      icon: getAssetsUrl('img/loader.svg')
  });
}*/

function loaderPopUp(options) {
  $('#section-loader').removeClass('d-none');
}

function loaderClose()
{
  // swal.close();\
  $('#section-loader').addClass('d-none');
}

$(document).ready(function() {
  loaderClose();
  /*===========================
          General JS (Start)
  ===========================*/
  /*Initialize perfect scrollbar*/
  if (typeof PerfectScrollbar !== "undefined") {
    $(".scroll").each(function() {
      var ps = new PerfectScrollbar($(this)[0],{
          wheelPropagation:true
      });
    });
  }

  /*===========================
          General JS (End)
  ===========================*/

  /*Mobile Menu*/
  $('#menuToggle').click(function(){
      $('#menuContents').toggleClass('icon-close');
  });

  /*Mega Menu*/
  $("a.mega-menu-toggle").click(function(){
      $(this).toggleClass("dropdown-toggle-inverse");
  });

  /*Hide Mega Menu on Small Screens*/
  $('a.hide-mega').click(function(){
      $('div.mega-menu').removeClass('show');
      $('a.mega-menu-toggle').toggleClass("dropdown-toggle-inverse");
  });



  $(window).bind('scroll', function () {
      $('section.call-out').toggleClass('d-block fadeInUp animated', $(window).scrollTop() > 0);
  });

  $(window).scroll(function() {    

      var scroll = $(window).scrollTop();

      if (scroll > 0) {
          $('nav.menu').addClass('shadow border-bottom-0');
          $('header#nav').addClass('fixed-top fadeInDown animated');
      } else {
          $('nav.menu').addClass('menu navbar navbar-expand-lg bg-white py-2 border-bottom-0 pr-0');
          $('nav.menu').removeClass('shadow border-bottom-0');
          $('header#nav').removeClass('fixed-top fadeInDown animated');
      }
  });

  /*===========================
      mainsite JS (Start)
  ===========================*/

  $('[data-toggle="tooltip"]').tooltip();

  /*Other Job Cat*/
  $('#otherJobCat').on('hidden.bs.collapse', function(){
      $('a.show-more-toggle').text('Show More');
      $('a.show-more-toggle').toggleClass("dropdown-toggle-inverse");
  });
  $('#otherJobCat').on('shown.bs.collapse', function(){
      $('a.show-more-toggle').text('Show Less');
      $('a.show-more-toggle').toggleClass("dropdown-toggle-inverse");
  });

  $('a[href^="#"].toggle-category').click(function(){
      $(this).toggleClass('toggle-hide');
  });

  // Testimonial Owl Carousel
  $('.owl-carousel.testimonial-carousel').owlCarousel({
      autoplay:true,
      // rewind:true,
      autoplayTimeout: 10000,
      autoplayHoverPause:true,
      center:true,
      loop:false,
      stagePadding:20,
      margin:20,
      nav:true,
      /*navText:[
      "<i class='iconsmind-Arrow-LeftinCircle mr-2 display-4 word-primary'></i>",
      "<i class='iconsmind-Arrow-RightinCircle ml-2 display-4 word-primary'></i>"
      ],*/
      navText:[
      "<i class='iconsmind-Arrow-OutLeft mr-2 display-4 word-primary'></i>",
      "<i class='iconsmind-Arrow-OutRight ml-2 display-4 word-primary'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          }
      }
  });

  /*===========================
          mainsite JS (End)
  ===========================*/

  /*===========================
          Job Page (Start)
  ===========================*/

  // Job Page Owl Carousel
  $('.owl-carousel.job-carousel').owlCarousel({
      autoplay:true,
      rewind:true,
      center:true,
      loop:false,
      margin:10,
      nav:true,
      navText:[
      "<i class='iconsmind-Arrow-LeftinCircle  word-primary nav-country nav-country-left'></i>",
      "<i class='iconsmind-Arrow-RightinCircle word-primary nav-country nav-country-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          }
      }
  });

  $('#searchJob').click(function(){
      $('#job').removeClass('d-none');
      $('#agency').addClass('d-none');
  });

  $('#searchAgency').click(function(){
      $('#agency').removeClass('d-none');
      $('#job').addClass('d-none');
  });

  /*===========================
          Job Page (End)
  ===========================*/

  /*===========================
          Help (Start)
  ===========================*/

  $('a[href^="#"].toggle-collapse').click(function(){
      $(this).toggleClass('toggle-minus');
  });

  $('#submitSearch').click(function(){
      $('#defaultQuestions').addClass('d-none');
      $('#questionList').removeClass('d-none');
      $('#questionList').addClass('animated zoomIn');
  });

  $('#answerLink1').click(function(){
      $('#questionList').addClass('d-none');
      $('#answersView').removeClass('d-none');
      $('#answersView').addClass('animated zoomIn');

  });

  $('#goBack').click(function(){
      $('#questionList').removeClass('d-none');
      $('#answersView').addClass('d-none');
  });
  /*===========================
          Help (End)
  ===========================*/

  /*===========================
      Job Event Form (Start)
  ===========================*/
  /*Initialize datepicker*/
  // $('.datepicker').datepicker();

  //Initial Load
  $('#eventNext2').removeClass('d-inline-block');
  $('#eventNext3').removeClass('d-inline-block');
  $('#eventPrevious1').addClass('d-none');
  $('#eventPrevious1').removeClass('d-inline-block');
  $('#eventPrevious2').addClass('d-none');
  $('#eventPrevious2').removeClass('d-inline-block');
  $('#eventPrevious3').addClass('d-none');
  $('#eventPrevious3').removeClass('d-inline-block');


  $('#eventNext1').click(function(){
      $('#step1').addClass('d-none');
      $('#step2').removeClass('d-none');
      $('#step2').addClass('fadeInUp animated');
      $('#contactDetails').removeClass('d-none');
      $('#addJobOrderForm').removeClass('d-none');
      $('#eventDetails').addClass('d-none');
      $('#contactDetails').addClass('fadeInUp animated');
      $('li#stepTrack2 a > span').addClass('active');
      $('li#stepTrack2 span:nth-child(2)').removeClass('text-muted');
      $('li#stepTrack1 a > span').removeClass('active');
      $('li#stepTrack1 span:nth-child(2)').addClass('text-muted');
      $('#eventNext1').removeClass('d-inline-block');
      $('#eventNext1').addClass('d-none');
      $('#eventNext2').removeClass('d-none');
      $('#eventPrevious1').addClass('d-inline-block');
      $('#eventPrevious1').removeClass('d-none');
      $('#eventSubmit').removeClass('d-none');
  });


  $('#eventNext2').click(function(){
      $('#addJobOrder').removeClass('d-none');
      $('#addJobOrder').addClass('fadeInUp animated');
      $('#eventDetails').addClass('d-none');
      $('#contactDetails').addClass('d-none');
      $('#eventPrevious1').addClass('d-none');
      $('#eventPrevious2').addClass('d-none');
      $('#eventNext3').removeClass('d-none');
      $('#eventNext3').addClass('d-inline-block');
      $('li#stepTrack3 a > span').addClass('active');
      $('li#stepTrack3 span:nth-child(2)').removeClass('text-muted');
      $('li#stepTrack1 a > span').removeClass('active');
      $('li#stepTrack1 span:nth-child(2)').addClass('text-muted');
      $('li#stepTrack2 a > span').removeClass('active');
      $('li#stepTrack2 span:nth-child(2)').addClass('text-muted');
      $('#eventPrevious1').removeClass('d-inline-block');
      $('#eventPrevious1').addClass('d-none');
      $('#eventPrevious2').addClass('d-inline-block');
      $('#eventPrevious2').removeClass('d-none');
      $(this).addClass('d-none');
      $(this).removeClass('d-inline-block');
      $('#addJobOrderForm').addClass('d-none');
  });

  $('#eventPrevious1').click(function(){
      $('#step2').addClass('d-none');
      $('#step1').addClass('fadeInUp animated');
      $('#step1').removeClass('d-none');
      $('#eventDetails').removeClass('d-none');
      $('#contactDetails').addClass('d-none');
      $('#addjobOrder').addClass('d-none');
      $('#eventDetails').addClass('fadeInUp animated');
      $('li#stepTrack2 a > span').removeClass('active');
      $('li#stepTrack2 span:nth-child(2)').addClass('text-muted');
      $('li#stepTrack1 a > span').addClass('active');
      $('li#stepTrack1 span:nth-child(2)').removeClass('text-muted');
      $('#eventNext2').removeClass('d-inline-block');
      $('#eventNext2').addClass('d-none');
      $('#eventNext1').removeClass('d-none');
      $(this).removeClass('d-inline-block');
      $(this).addClass('d-none');
      $('#eventNext3').addClass('d-none');
      $('#eventNext3').removeClass('d-inline-block');
      $('#addJobOrderForm').addClass('d-none');
      $('#eventSubmit').addClass('d-none');
  });

  $('#eventPrevious2').click(function(){
      $('#contactDetails').removeClass('d-none');
      $('#addJobOrder').addClass('d-none');
      $(this).removeClass('d-inline-block');
      $(this).addClass('d-none');
      $('#eventPrevious1').removeClass('d-none');
      $('#eventPrevious1').addClass('d-inline-block');
      $('li#stepTrack3 a > span').removeClass('active');
      $('li#stepTrack3 span:nth-child(2)').addClass('text-muted');
      $('li#stepTrack2 a > span').addClass('active');
      $('li#stepTrack2 span:nth-child(2)').removeClass('text-muted');
      $('#eventNext2').removeClass('d-none');
      $('#eventNext2').addClass('d-inline-block');
      $('#eventNext3').addClass('d-none');
      $('#eventNext3').removeClass('d-inline-block');
      $('#addJobOrderForm').removeClass('d-none');
  });

  $('#eventSubmit').click(function(){
      $('#step2').addClass('d-none');
      $('#step1').addClass('d-none');
      $('#eventDetails').addClass('d-none');
      $('#contactDetails').addClass('d-none');
      $('#eventPrevious1').addClass('d-none');
      $('#eventPrevious1').removeClass('d-inline-block');
      $('#successfullEvent').removeClass('d-none');
      $('#successfullEvent').addClass('fadeInUp animated');
      $('li#stepTrack2 a > span').removeClass('active');
      $('li#stepTrack2 span:nth-child(2)').addClass('text-muted');
      $('li#stepTrack1 a > span').removeClass('active');
      $('li#stepTrack1 span:nth-child(2)').addClass('text-muted');
      $('li#stepTrack3 a > span').addClass('active');
      $('li#stepTrack3 span:nth-child(2)').removeClass('text-muted');
      $(this).addClass('d-none');
  });

  $('#saveCompanyProfile').click(function(){
      $('#eventNext1').removeClass('disabled');
  });

  $('#updateCompanyProfileForm').click(function(){
      $('#companyProfileForm').removeClass('d-none');
      $('#displayCompany').addClass('d-none');
      $(this).addClass('d-none');
  });

  $('#updateCompanyProfileBtn').click(function(){
      $('#companyProfileForm').addClass('d-none');
      $('#displayCompany').removeClass('d-none');
      $('#updateCompanyProfileForm').removeClass('d-none');
  });
  /*===========================
      Job Event Form (End)
  ===========================*/

  /*===========================
          About (Start)
  ===========================*/
  // Job Page Owl Carousel
  $('.owl-carousel.partnership-carousel').owlCarousel({
      autoplay:true,
      center:true,
      loop:true,
      margin:60,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:4
          },
          700:{
              items:5
          },
          800:{
              items:6
          },
          900:{
              items:7
          },
          1000:{
              items:8
          }
      }
  });
  /*===========================
          About (End)
  ===========================*/

  /*===========================
          Testimonial (Start)
  ===========================*/
  $('#submitSuccessStory').click(function(){
      $('#testimonialPostForm').addClass('d-none');
      $('#successPostStory').removeClass('d-none');
      $('#successPostStory').addClass('animated fadeInUp');
  });

  /*===========================
          Testimonial (End)
  ===========================*/

  // AOS
  // AOS.init();

  if ($().select2) {
    $(".select2-single, .select2-multiple").select2({
      theme: "bootstrap",
      placeholder: "",
      maximumSelectionLength: 6,
      containerCssClass: ":all:"
    });

    $(".select2-clear").select2({
      theme: "bootstrap",
      placeholder: "",
      allowClear: true,
      containerCssClass: ":all:"
    });
  }

  if ($('form').length) {
    $('form').on('submit', function (e) {
      loaderPopUp();
      $(this).find(':submit').prop('disabled', true);
    });

    $('form').areYouSure();
  }

  if ($('ul.pagination > li.page-item').not('.active').length) {
    $('ul.pagination > li.page-item').not('.active').on('click', function (e) {
      loaderPopUp();
    });
  }

  if ($('div.invalid-feedback').length) {
    $('div.invalid-feedback').first().parent().find(':input').focus();
  }

  let $inputMobile = $('.input-mobile');

  if ($inputMobile.length) {
    let utilsUrl = getAssetsUrl("js/vendor/intlTelInput-utils.js");

    $inputMobile.intlTelInput({
        nationalMode: false,
        initialCountry: "ph",
        utilsScript: utilsUrl
    });

    $inputMobile.on("countrychange", function() {
      $(this).closest('.intl-tel-input').find('input').val('');
    });
  }

  // If no content is loaded
  $("*").on("error", function() {
    $(this).addClass('lazy-load');
    $(this).attr('alt', '');
  });

  // Collapse icon trigger
  $('.trigger-collapse')
        .find('div.collapse')
        .not('.show')
        .prev('button')
        .trigger('click');

  if (window.location.search) {
    let utms = [
      'utm_campaign',
      'utm_source',
      'utm_medium',
      'utm_content',
      'utm_term'
    ];
    let params = [];

    for (var i in utms) {
      if (getUrlParam(utms[i])) {
        params.push(utms[i] + '=' + getUrlParam(utms[i]));
      }
    }

    if (params.length) {
      let queryString = '?' + params.join('&');

      if (queryString) {
        $('a').each(function() {
          let href = $(this).attr('href');
          
          if (href && href.includes('utm') === false) {
            if (href.includes('#') === false && href.includes('?') === false) {
              $(this).attr('href', href + queryString);
            }

            if (href.includes('?') === true) {
              $(this).attr('href', href + '&' + queryString.replace('?', ''));
            }

            if (href.includes('#') === true) {
              hrefs = href.split('#');
              if ($(this).closest('.sidebar').length === 0) {
                $(this).attr('href', hrefs[0] + queryString + '#' + hrefs[1]);
              }
            }
          }
        });

        $('form').each(function() {
          let action = $(this).attr('action');

          if (action) {
            if (action.includes('?') === false) {
              $(this).attr('action', action + window.location.search);
            }
          }
        });
      }
    }
  }
});

$("#form-search-jobs").submit(function( e ) {
  var searchBase = $("input[name='search-base']:checked").val();

  $(this).attr('action', 'mainsite/JobSearch/process');
  $('#keywords').attr('name', 'keywords');

  if (searchBase == 'seabased') {
    $(this).attr('action', 'https://seamanjobsite.workabroad.ph/search-jobs');
    $('#keywords').attr('name', 'search[keyword]');
  }
});

// Select2 Dependency Updates
$(document).on('select2:open', function() {
    document.querySelector('.select2-search__field').focus();
});

