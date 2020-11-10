function init() {
  var vidDefer = document.getElementsByTagName('iframe');
  for (var i=0; i<vidDefer.length; i++) {
  if(vidDefer[i].getAttribute('data-src')) {
  vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
  } } }
window.onload = init;
(function($) {
//   $('.who__slider').slick({
//     centerMode: true,
//     slidesToShow: 3,
//     variableWidth: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToScroll: 1,
//     arrows: false,
//     dots: false,
//   });
var flky = new Flickity( '.who__slider', {
    autoPlay: true,
    cellAlign: 'center',
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
})

  $('body').on('keyup', 'input.card-input', function () {
    var key = event.keyCode || event.charCode;
    var inputs = $('input.card-input');
    if (($(this).val().length === this.size) && key != 32) {
      inputs.eq(inputs.index(this) + 1).focus();
    }
    if (key == 8 || key == 46) {
      var indexNum = inputs.index(this);
      if (indexNum != 0) {
        inputs.eq(inputs.index(this) - 1).val('').focus();
      }
    }
  });
  $('body').on('keyup', 'input.exp-input', function () {
    var key = event.keyCode || event.charCode;
    var inputs = $('input.exp-input');
    if (($(this).val().length === this.size) && key != 32) {
      inputs.eq(inputs.index(this) + 1).focus();
    }
    if (key == 8 || key == 46) {
      var indexNum = inputs.index(this);
      if (indexNum != 0) {
        inputs.eq(inputs.index(this) - 1).val('').focus();
      }
    }
  });
  $('.purchase__form-card').on('click', function () {
    $('#card').focus();
  })
  $('.purchase__form-exp').on('click', function () {
    $('#expire-card').focus();
  })


  // $(function () {
  //   new WOW().init();
  // });
  $(".hero__order-btn, .who__bonus-oder a").on('click', function () {
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".purchase").offset().top
    }, 2000);
  });
  let countDate = moment().format('2020/11/28 12:00', "America/Sao_Paulo");
  $('#daysUntilStream').countdown(countDate, function(event) {
    $(this).html(event.strftime('%D Days'));
  });
  $('#daysUntilStream1').countdown(countDate, function(event) {
    $(this).html(event.strftime('%D Days'));
  });
  $('#hoursUntilStream').countdown(countDate, function(event) {
    $(this).html(event.strftime('%H Hours'));
  });
  $('#hoursUntilStream1').countdown(countDate, function(event) {
    $(this).html(event.strftime('%H Hours'));
  });

  $(function(){
    let formRow = $('.form-row_duplicate');
    let formRowDuplicate = $('.form-row_duplicate .form-row_hidden');
    let formRowDelete = $('.form-row_active_close');

    $('.purchase__form-footer-add a').on('click', function(e){
      e.preventDefault();
      if( $('.form-row_duplicate .form-row').length < 4 ){
        $(formRowDuplicate).clone().appendTo(formRow).removeClass('form-row_hidden').addClass('form-row_active');
      }
    })

    $('.form-row_duplicate').on('click', '.form-row_active_close', function(){
        $(this).closest('.form-row_active').remove();
    })
  });

  var isFirefox = (navigator.userAgent.indexOf('Firefox') !== -1);
  if(isFirefox){
    $('body').addClass('isFirefox')
  }
  else{
    $('body').addClass('isNotFirefox')
  }
 

}
)(jQuery);
  
function snow () {
  particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.8,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      // "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );
}
function snow2 () {
  particlesJS('particles-ss',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.8,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 10,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 10,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "bottom",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );
}

// On document ready
$(function () {
  snow();
  snow2();
});

// On window load
$(window).on('load', function () { });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0KCkge1xyXG4gIHZhciB2aWREZWZlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKTtcclxuICBmb3IgKHZhciBpPTA7IGk8dmlkRGVmZXIubGVuZ3RoOyBpKyspIHtcclxuICBpZih2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcclxuICB2aWREZWZlcltpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsdmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcclxuICB9IH0gfVxyXG53aW5kb3cub25sb2FkID0gaW5pdDtcclxuKGZ1bmN0aW9uKCQpIHtcclxuLy8gICAkKCcud2hvX19zbGlkZXInKS5zbGljayh7XHJcbi8vICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4vLyAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4vLyAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcclxuLy8gICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4vLyAgICAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuLy8gICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4vLyAgICAgYXJyb3dzOiBmYWxzZSxcclxuLy8gICAgIGRvdHM6IGZhbHNlLFxyXG4vLyAgIH0pO1xyXG52YXIgZmxreSA9IG5ldyBGbGlja2l0eSggJy53aG9fX3NsaWRlcicsIHtcclxuICAgIGF1dG9QbGF5OiB0cnVlLFxyXG4gICAgY2VsbEFsaWduOiAnY2VudGVyJyxcclxuICAgIHByZXZOZXh0QnV0dG9uczogZmFsc2UsXHJcbiAgICBwYWdlRG90czogZmFsc2UsXHJcbiAgICB3cmFwQXJvdW5kOiB0cnVlLFxyXG59KVxyXG5cclxuICAkKCdib2R5Jykub24oJ2tleXVwJywgJ2lucHV0LmNhcmQtaW5wdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC5jaGFyQ29kZTtcclxuICAgIHZhciBpbnB1dHMgPSAkKCdpbnB1dC5jYXJkLWlucHV0Jyk7XHJcbiAgICBpZiAoKCQodGhpcykudmFsKCkubGVuZ3RoID09PSB0aGlzLnNpemUpICYmIGtleSAhPSAzMikge1xyXG4gICAgICBpbnB1dHMuZXEoaW5wdXRzLmluZGV4KHRoaXMpICsgMSkuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmIChrZXkgPT0gOCB8fCBrZXkgPT0gNDYpIHtcclxuICAgICAgdmFyIGluZGV4TnVtID0gaW5wdXRzLmluZGV4KHRoaXMpO1xyXG4gICAgICBpZiAoaW5kZXhOdW0gIT0gMCkge1xyXG4gICAgICAgIGlucHV0cy5lcShpbnB1dHMuaW5kZXgodGhpcykgLSAxKS52YWwoJycpLmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuICAkKCdib2R5Jykub24oJ2tleXVwJywgJ2lucHV0LmV4cC1pbnB1dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LmNoYXJDb2RlO1xyXG4gICAgdmFyIGlucHV0cyA9ICQoJ2lucHV0LmV4cC1pbnB1dCcpO1xyXG4gICAgaWYgKCgkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gdGhpcy5zaXplKSAmJiBrZXkgIT0gMzIpIHtcclxuICAgICAgaW5wdXRzLmVxKGlucHV0cy5pbmRleCh0aGlzKSArIDEpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoa2V5ID09IDggfHwga2V5ID09IDQ2KSB7XHJcbiAgICAgIHZhciBpbmRleE51bSA9IGlucHV0cy5pbmRleCh0aGlzKTtcclxuICAgICAgaWYgKGluZGV4TnVtICE9IDApIHtcclxuICAgICAgICBpbnB1dHMuZXEoaW5wdXRzLmluZGV4KHRoaXMpIC0gMSkudmFsKCcnKS5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgJCgnLnB1cmNoYXNlX19mb3JtLWNhcmQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCcjY2FyZCcpLmZvY3VzKCk7XHJcbiAgfSlcclxuICAkKCcucHVyY2hhc2VfX2Zvcm0tZXhwJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnI2V4cGlyZS1jYXJkJykuZm9jdXMoKTtcclxuICB9KVxyXG5cclxuXHJcbiAgLy8gJChmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICBuZXcgV09XKCkuaW5pdCgpO1xyXG4gIC8vIH0pO1xyXG4gICQoXCIuaGVyb19fb3JkZXItYnRuLCAud2hvX19ib251cy1vZGVyIGFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJChbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcDogJChcIi5wdXJjaGFzZVwiKS5vZmZzZXQoKS50b3BcclxuICAgIH0sIDIwMDApO1xyXG4gIH0pO1xyXG4gIGxldCBjb3VudERhdGUgPSBtb21lbnQoKS5mb3JtYXQoJzIwMjAvMTEvMjggMTI6MDAnLCBcIkFtZXJpY2EvU2FvX1BhdWxvXCIpO1xyXG4gICQoJyNkYXlzVW50aWxTdHJlYW0nKS5jb3VudGRvd24oY291bnREYXRlLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgJCh0aGlzKS5odG1sKGV2ZW50LnN0cmZ0aW1lKCclRCBEYXlzJykpO1xyXG4gIH0pO1xyXG4gICQoJyNkYXlzVW50aWxTdHJlYW0xJykuY291bnRkb3duKGNvdW50RGF0ZSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJUQgRGF5cycpKTtcclxuICB9KTtcclxuICAkKCcjaG91cnNVbnRpbFN0cmVhbScpLmNvdW50ZG93bihjb3VudERhdGUsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJyVIIEhvdXJzJykpO1xyXG4gIH0pO1xyXG4gICQoJyNob3Vyc1VudGlsU3RyZWFtMScpLmNvdW50ZG93bihjb3VudERhdGUsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJyVIIEhvdXJzJykpO1xyXG4gIH0pO1xyXG5cclxuICAkKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgZm9ybVJvdyA9ICQoJy5mb3JtLXJvd19kdXBsaWNhdGUnKTtcclxuICAgIGxldCBmb3JtUm93RHVwbGljYXRlID0gJCgnLmZvcm0tcm93X2R1cGxpY2F0ZSAuZm9ybS1yb3dfaGlkZGVuJyk7XHJcbiAgICBsZXQgZm9ybVJvd0RlbGV0ZSA9ICQoJy5mb3JtLXJvd19hY3RpdmVfY2xvc2UnKTtcclxuXHJcbiAgICAkKCcucHVyY2hhc2VfX2Zvcm0tZm9vdGVyLWFkZCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgaWYoICQoJy5mb3JtLXJvd19kdXBsaWNhdGUgLmZvcm0tcm93JykubGVuZ3RoIDwgNCApe1xyXG4gICAgICAgICQoZm9ybVJvd0R1cGxpY2F0ZSkuY2xvbmUoKS5hcHBlbmRUbyhmb3JtUm93KS5yZW1vdmVDbGFzcygnZm9ybS1yb3dfaGlkZGVuJykuYWRkQ2xhc3MoJ2Zvcm0tcm93X2FjdGl2ZScpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgICQoJy5mb3JtLXJvd19kdXBsaWNhdGUnKS5vbignY2xpY2snLCAnLmZvcm0tcm93X2FjdGl2ZV9jbG9zZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZm9ybS1yb3dfYWN0aXZlJykucmVtb3ZlKCk7XHJcbiAgICB9KVxyXG4gIH0pO1xyXG5cclxuICB2YXIgaXNGaXJlZm94ID0gKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRmlyZWZveCcpICE9PSAtMSk7XHJcbiAgaWYoaXNGaXJlZm94KXtcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNGaXJlZm94JylcclxuICB9XHJcbiAgZWxzZXtcclxuICAgICQoJ2JvZHknKS5hZGRDbGFzcygnaXNOb3RGaXJlZm94JylcclxuICB9XHJcbiBcclxuXHJcbn1cclxuKShqUXVlcnkpO1xyXG4gIFxyXG5mdW5jdGlvbiBzbm93ICgpIHtcclxuICBwYXJ0aWNsZXNKUygncGFydGljbGVzLWpzJyxcclxuICAgIHtcclxuICAgICAgXCJwYXJ0aWNsZXNcIjoge1xyXG4gICAgICAgIFwibnVtYmVyXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogODAsXHJcbiAgICAgICAgICBcImRlbnNpdHlcIjoge1xyXG4gICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxyXG4gICAgICAgICAgICBcInZhbHVlX2FyZWFcIjogODAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImNvbG9yXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogXCIjZmZmZmZmXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2hhcGVcIjoge1xyXG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICBcInN0cm9rZVwiOiB7XHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMCxcclxuICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicG9seWdvblwiOiB7XHJcbiAgICAgICAgICAgIFwibmJfc2lkZXNcIjogNVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiaW1hZ2VcIjoge1xyXG4gICAgICAgICAgICBcInNyY1wiOiBcImltZy9naXRodWIuc3ZnXCIsXHJcbiAgICAgICAgICAgIFwid2lkdGhcIjogMTAwLFxyXG4gICAgICAgICAgICBcImhlaWdodFwiOiAxMDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwib3BhY2l0eVwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IDAuOCxcclxuICAgICAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwic3BlZWRcIjogMSxcclxuICAgICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLjEsXHJcbiAgICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJzaXplXCI6IHtcclxuICAgICAgICAgIFwidmFsdWVcIjogMTAsXHJcbiAgICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxyXG4gICAgICAgICAgXCJhbmltXCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwic3BlZWRcIjogMTAsXHJcbiAgICAgICAgICAgIFwic2l6ZV9taW5cIjogMC4xLFxyXG4gICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICBcImRpc3RhbmNlXCI6IDE1MCxcclxuICAgICAgICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXHJcbiAgICAgICAgICBcIm9wYWNpdHlcIjogMC40LFxyXG4gICAgICAgICAgXCJ3aWR0aFwiOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm1vdmVcIjoge1xyXG4gICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgIFwic3BlZWRcIjogMixcclxuICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiYm90dG9tXCIsXHJcbiAgICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwic3RyYWlnaHRcIjogZmFsc2UsXHJcbiAgICAgICAgICBcIm91dF9tb2RlXCI6IFwib3V0XCIsXHJcbiAgICAgICAgICBcImF0dHJhY3RcIjoge1xyXG4gICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJyb3RhdGVYXCI6IDYwMCxcclxuICAgICAgICAgICAgXCJyb3RhdGVZXCI6IDEyMDBcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIFwiaW50ZXJhY3Rpdml0eVwiOiB7XHJcbiAgICAgICAgXCJkZXRlY3Rfb25cIjogXCJjYW52YXNcIixcclxuICAgICAgICBcImV2ZW50c1wiOiB7XHJcbiAgICAgICAgICBcIm9uaG92ZXJcIjoge1xyXG4gICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcclxuICAgICAgICAgICAgXCJtb2RlXCI6IFwicmVwdWxzZVwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJvbmNsaWNrXCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJtb2RlXCI6IFwicHVzaFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJyZXNpemVcIjogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb2Rlc1wiOiB7XHJcbiAgICAgICAgICBcImdyYWJcIjoge1xyXG4gICAgICAgICAgICBcImRpc3RhbmNlXCI6IDQwMCxcclxuICAgICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XHJcbiAgICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwiYnViYmxlXCI6IHtcclxuICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICAgIFwic2l6ZVwiOiA0MCxcclxuICAgICAgICAgICAgXCJkdXJhdGlvblwiOiAyLFxyXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogOCxcclxuICAgICAgICAgICAgXCJzcGVlZFwiOiAzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJyZXB1bHNlXCI6IHtcclxuICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiAyMDBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcInB1c2hcIjoge1xyXG4gICAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiA0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgICBcInBhcnRpY2xlc19uYlwiOiAyXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvLyBcInJldGluYV9kZXRlY3RcIjogdHJ1ZSxcclxuICAgICAgXCJjb25maWdfZGVtb1wiOiB7XHJcbiAgICAgICAgXCJoaWRlX2NhcmRcIjogZmFsc2UsXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kX2NvbG9yXCI6IFwiI2I2MTkyNFwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZF9pbWFnZVwiOiBcIlwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZF9wb3NpdGlvblwiOiBcIjUwJSA1MCVcIixcclxuICAgICAgICBcImJhY2tncm91bmRfcmVwZWF0XCI6IFwibm8tcmVwZWF0XCIsXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kX3NpemVcIjogXCJjb3ZlclwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBzbm93MiAoKSB7XHJcbiAgcGFydGljbGVzSlMoJ3BhcnRpY2xlcy1zcycsXHJcbiAgICB7XHJcbiAgICAgIFwicGFydGljbGVzXCI6IHtcclxuICAgICAgICBcIm51bWJlclwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IDgwLFxyXG4gICAgICAgICAgXCJkZW5zaXR5XCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcclxuICAgICAgICAgICAgXCJ2YWx1ZV9hcmVhXCI6IDgwMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJjb2xvclwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcInNoYXBlXCI6IHtcclxuICAgICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxyXG4gICAgICAgICAgXCJzdHJva2VcIjoge1xyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDAsXHJcbiAgICAgICAgICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcInBvbHlnb25cIjoge1xyXG4gICAgICAgICAgICBcIm5iX3NpZGVzXCI6IDVcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImltYWdlXCI6IHtcclxuICAgICAgICAgICAgXCJzcmNcIjogXCJpbWcvZ2l0aHViLnN2Z1wiLFxyXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEwMCxcclxuICAgICAgICAgICAgXCJoZWlnaHRcIjogMTAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIm9wYWNpdHlcIjoge1xyXG4gICAgICAgICAgXCJ2YWx1ZVwiOiAwLjgsXHJcbiAgICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcclxuICAgICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6IDEsXHJcbiAgICAgICAgICAgIFwib3BhY2l0eV9taW5cIjogMC4xLFxyXG4gICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIFwic2l6ZVwiOiB7XHJcbiAgICAgICAgICBcInZhbHVlXCI6IDEwLFxyXG4gICAgICAgICAgXCJyYW5kb21cIjogdHJ1ZSxcclxuICAgICAgICAgIFwiYW5pbVwiOiB7XHJcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgICBcInNwZWVkXCI6IDEwLFxyXG4gICAgICAgICAgICBcInNpemVfbWluXCI6IDAuMSxcclxuICAgICAgICAgICAgXCJzeW5jXCI6IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImxpbmVfbGlua2VkXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJkaXN0YW5jZVwiOiAxNTAsXHJcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgICAgXCJvcGFjaXR5XCI6IDAuNCxcclxuICAgICAgICAgIFwid2lkdGhcIjogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXCJtb3ZlXCI6IHtcclxuICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICBcInNwZWVkXCI6IDIsXHJcbiAgICAgICAgICBcImRpcmVjdGlvblwiOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXHJcbiAgICAgICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxyXG4gICAgICAgICAgXCJvdXRfbW9kZVwiOiBcIm91dFwiLFxyXG4gICAgICAgICAgXCJhdHRyYWN0XCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwicm90YXRlWFwiOiA2MDAsXHJcbiAgICAgICAgICAgIFwicm90YXRlWVwiOiAxMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBcImludGVyYWN0aXZpdHlcIjoge1xyXG4gICAgICAgIFwiZGV0ZWN0X29uXCI6IFwiY2FudmFzXCIsXHJcbiAgICAgICAgXCJldmVudHNcIjoge1xyXG4gICAgICAgICAgXCJvbmhvdmVyXCI6IHtcclxuICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXHJcbiAgICAgICAgICAgIFwibW9kZVwiOiBcInJlcHVsc2VcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwib25jbGlja1wiOiB7XHJcbiAgICAgICAgICAgIFwiZW5hYmxlXCI6IHRydWUsXHJcbiAgICAgICAgICAgIFwibW9kZVwiOiBcInB1c2hcIlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicmVzaXplXCI6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwibW9kZXNcIjoge1xyXG4gICAgICAgICAgXCJncmFiXCI6IHtcclxuICAgICAgICAgICAgXCJkaXN0YW5jZVwiOiA0MDAsXHJcbiAgICAgICAgICAgIFwibGluZV9saW5rZWRcIjoge1xyXG4gICAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBcImJ1YmJsZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogNDAwLFxyXG4gICAgICAgICAgICBcInNpemVcIjogNDAsXHJcbiAgICAgICAgICAgIFwiZHVyYXRpb25cIjogMixcclxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDgsXHJcbiAgICAgICAgICAgIFwic3BlZWRcIjogM1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicmVwdWxzZVwiOiB7XHJcbiAgICAgICAgICAgIFwiZGlzdGFuY2VcIjogMjAwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgXCJwdXNoXCI6IHtcclxuICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogNFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIFwicmVtb3ZlXCI6IHtcclxuICAgICAgICAgICAgXCJwYXJ0aWNsZXNfbmJcIjogMlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgXCJyZXRpbmFfZGV0ZWN0XCI6IHRydWUsXHJcbiAgICAgIFwiY29uZmlnX2RlbW9cIjoge1xyXG4gICAgICAgIFwiaGlkZV9jYXJkXCI6IGZhbHNlLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZF9jb2xvclwiOiBcIiNiNjE5MjRcIixcclxuICAgICAgICBcImJhY2tncm91bmRfaW1hZ2VcIjogXCJcIixcclxuICAgICAgICBcImJhY2tncm91bmRfcG9zaXRpb25cIjogXCI1MCUgNTAlXCIsXHJcbiAgICAgICAgXCJiYWNrZ3JvdW5kX3JlcGVhdFwiOiBcIm5vLXJlcGVhdFwiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZF9zaXplXCI6IFwiY292ZXJcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICk7XHJcbn1cclxuXHJcbi8vIE9uIGRvY3VtZW50IHJlYWR5XHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gIHNub3coKTtcclxuICBzbm93MigpO1xyXG59KTtcclxuXHJcbi8vIE9uIHdpbmRvdyBsb2FkXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHsgfSk7Il19
