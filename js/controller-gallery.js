function onInit() {
    renderProjs()
}


function renderProjs() {
    var elPortfolio = $('.portfolio-container');
    var strHTML = '';
    for (var i = 0; i < gProjs.length; i++) {
        var proj = getProjById(i);
        strHTML += `    
  <div class="col-md-4 col-sm-6 portfolio-item ">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" id="${proj.id}" onclick="renderModal(${proj.id})">
      <div class="portfolio-hover">
          <div class="portfolio-hover-content">
          <i class="fa fa-plus fa-3x"></i>
          </div>
      </div>
      <img class="img-fluid " src="img/projs/${proj.id}.png" alt="">
      </a>
      <div class="portfolio-caption hover-shadow">
      <h4>${proj.name}</h4>
      <p class="text-muted">${proj.title}</p>
      </div>
      </div>`
    }
    $(elPortfolio).html(strHTML);
};


function renderModal(projId) {
    var proj = getProjById(projId);
    var elModal = $('.modal-container');
    var strHtml =
        `<div class="modal-body">
         <h2> ${proj.name}</h2>
         <h3> ${proj.title}</h3>
         <p class='item-intro text-muted'>${proj.desc}</p>
         
         <img class="img-fluid d-block mx-auto portfolio-img" src="img/projs/${proj.id}.png" alt="">
         <button class='btn btn-primary btn-lg' style="margin:25px" type='button' onclick="onOpenProj(${projId})">
         <i class='fa fa-external-link-alt'></i>
         Let's go</button>
         <ul class="list-inline">
         <li>Originally published: ${proj.publishedAt}</li>
         <li>Category: ${proj.labels}</li>
         </ul>
         <button class="btn btn-primary" data-dismiss="modal" type="button">
         <i class="fa fa-times"></i>
         Close Project</button>
                </div>
        </div>`

    $(elModal).html(strHtml);
}

function onOpenProj(id) {
    switch (id) {
        case 0:
            window.open('https://dorrang.github.io/first.sprint/');
            break;
        case 1:
            window.open('https://dorrang.github.io/bookShop/');
            break;
        case 2:
            window.open('https://dorrang.github.io/Touch.Nums/');
            break;
    }
}

(function($) {
    "use strict";

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    });

})(jQuery); // End of use strict