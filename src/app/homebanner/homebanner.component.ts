import {
  Component,
  AfterViewInit,
  Renderer2,
  OnInit,
  ElementRef,
  Inject,
} from '@angular/core';

import './../../assets/js/custom.js';

import Typed from 'typed.js';

declare var jQuery: any;

@Component({
  selector: 'app-homebanner',
  templateUrl: './homebanner.component.html',
  styleUrls: ['./homebanner.component.scss'],
})
export class HomebannerComponent implements OnInit {
  typed: Typed;

  constructor() {}

  ngOnInit(): void {
    this.initializeTyped();
    // Other initialization logic for your component
  }

  initializeTyped(): void {
    const options = {
      strings: ['JS Developer', 'UI/UX Designer', 'Content Writer'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed('#type-it', options);
  }

  // initTyped() {
  //   const options = {
  //     strings: ['JS Developer', 'UI/UX Designer', 'Content Writer'],
  //     typeSpeed: 50,
  //     backSpeed: 30,
  //     loop: true,
  //     smartBackspace: true,
  //     cursorChar: '|',
  //   };

  //   this.typed = new Typed('.typing-text', options);
  // }

  // // type() {
  // //   if (this.charIndex < this.words[this.wordIndex].length) {
  // //     this.typingText += this.words[this.wordIndex].charAt(this.charIndex);
  // //     this.charIndex++;
  // //     setTimeout(() => {
  // //       this.type();
  // //     }, 100);
  // //   } else {
  // //     setTimeout(() => {
  // //       this.erase();
  // //     }, 1500);
  // //   }
  // // }

  // erase() {
  //   if (this.charIndex > 0) {
  //     this.typingText = this.words[this.wordIndex].substring(
  //       0,
  //       this.charIndex - 1
  //     );
  //     this.charIndex--;
  //     setTimeout(() => {
  //       this.erase();
  //     }, 50);
  //   } else {
  //     this.wordIndex++;
  //     if (this.wordIndex >= this.words.length) {
  //       this.wordIndex = 0;
  //     }
  //     setTimeout(() => {
  //       this.type();
  //     }, 500);
  //   }
  // }

  // constructor(@Inject(Renderer2) private renderer: Renderer2) {}

  // // JQuery:
  // ngOnInit(): void {
  //   this.masonry();
  //   this.PreLoad();
  //   this.particles();
  //   this.scrollBar();
  //   this.VideoBG();
  //   this.HeaderFixd();
  //   this.Counter();
  //   this.MenuClose();
  //   this.MenuTogglerClose();
  //   this.Gallery();
  //   this.HeaderHeight();
  //   this.MegaMenu();
  //   this.ProgressBar();
  //   this.mTypeIt();
  //   this.one_page();
  //   this.Owl();
  // }

  // private loadScript(scriptName: string, callback: () => void): void {
  //   if (!document.getElementById(scriptName.split('/').pop())) {
  //     const body = document.getElementsByTagName('body')[0];
  //     const script = document.createElement('script');
  //     script.type = 'text/javascript';
  //     script.src = scriptName;
  //     script.id = scriptName.split('/').pop();
  //     script.onload = callback;
  //     body.appendChild(script);
  //   } else if (callback) {
  //     callback();
  //   }
  // }

  // private PreLoad(): void {
  //   const loadingElement = document.getElementById('loading');
  //   if (loadingElement) {
  //     loadingElement.style.display = 'none';
  //   }
  // }

  // private MenuClose(): void {
  //   jQuery('.navbar-nav a').on('click', function () {
  //     const toggle = jQuery('.navbar-toggler').is(':visible');
  //     if (toggle) {
  //       jQuery('.navbar-collapse').collapse('hide');
  //     }
  //   });
  // }

  // private MenuTogglerClose(): void {
  //   jQuery('.toggler-menu').on('click', function () {
  //     jQuery(this).toggleClass('open');
  //     jQuery('.header-left').stop().toggleClass('menu-open menu-open-desk');
  //   });

  //   jQuery('.header-left a').on('click', function () {
  //     const toggle = jQuery('.toggler-menu').is(':visible');
  //     if (toggle) {
  //       jQuery('.header-left').removeClass('menu-open');
  //       jQuery('.toggler-menu').removeClass('open');
  //     }
  //   });
  // }

  // private HeaderFixd(): void {
  //   jQuery(window).on('scroll', function () {
  //     const HscrollTop = jQuery(window).scrollTop();
  //     if (HscrollTop >= 100) {
  //       jQuery('header').addClass('fixed-header');
  //     } else {
  //       jQuery('header').removeClass('fixed-header');
  //     }
  //   });
  // }

  // private HeaderHeight(): void {
  //   const HHeight = jQuery('.header-height .fixed-header-bar').height();
  //   jQuery('.header-height').css('min-height', HHeight);
  // }

  // private MegaMenu(): void {
  //   const mDropdown = jQuery('.m-dropdown-toggle');
  //   mDropdown.on('click', function () {
  //     jQuery(this).parent().toggleClass('open-menu-parent');
  //     jQuery(this).next('ul').toggleClass('open-menu');
  //     jQuery(this).toggleClass('open');
  //   });
  // }

  // private Counter(): void {
  //   const counter = jQuery('.counter');
  //   const $counter = jQuery('.counter');
  //   if (counter.length > 0) {
  //     this.loadScript('static/plugin/counter/jquery.countTo.js', function () {
  //       $counter.each(function () {
  //         const $elem = jQuery(this);
  //         $elem.appear(function () {
  //           $elem.find('.count').countTo({
  //             speed: 2000,
  //             refreshInterval: 10,
  //           });
  //         });
  //       });
  //     });
  //   }
  // }

  // private Owl(): void {
  //   const owl = jQuery('.owl-carousel');
  //   if (owl.length > 0) {
  //     this.loadScript(
  //       'static/plugin/owl-carousel/js/owl.carousel.min.js',
  //       function () {
  //         owl.owlCarousel({
  //           items: 1,
  //           loop: true,
  //           margin: 10,
  //           autoplay: true,
  //           autoplayTimeout: 3000,
  //           autoplayHoverPause: true,
  //           nav: true,
  //           navText: [
  //             '<i class="fa fa-angle-left"></i>',
  //             '<i class="fa fa-angle-right"></i>',
  //           ],
  //         });
  //       }
  //     );
  //   }
  // }

  // private particles(): void {
  //   const particle = jQuery('#particles-js');
  //   if (particle.length > 0) {
  //     this.loadScript(
  //       'static/plugin/particles/js/particles.min.js',
  //       function () {
  //         particle.particles('particles.json');
  //       }
  //     );
  //   }
  // }

  // private VideoBG(): void {
  //   const videoBg = jQuery('.video-bg');
  //   if (videoBg.length > 0) {
  //     this.loadScript('static/plugin/vide/jquery.vide.js', function () {
  //       videoBg.vide('static/images/video/video', {
  //         posterType: 'jpg',
  //       });
  //     });
  //   }
  // }

  // private Gallery(): void {
  //   const gallery = jQuery('.gallery');
  //   if (gallery.length > 0) {
  //     this.loadScript(
  //       'static/plugin/magnific/jquery.magnific-popup.min.js',
  //       function () {
  //         gallery.magnificPopup({
  //           delegate: 'a',
  //           type: 'image',
  //           gallery: {
  //             enabled: true,
  //           },
  //           zoom: {
  //             enabled: true,
  //             duration: 300,
  //             opener: function (element: any) {
  //               return element.find('img');
  //             },
  //           },
  //         });
  //       }
  //     );
  //   }
  // }

  // private ProgressBar(): void {
  //   const progressBar = jQuery('.progress-bar');
  //   if (progressBar.length > 0) {
  //     this.loadScript('static/plugin/counter/jquery.countTo.js', function () {
  //       progressBar.appear(function () {
  //         const datavl = progressBar.attr('data-value');
  //         progressBar.find('span').countTo({
  //           from: 0,
  //           to: datavl,
  //           speed: 3000,
  //           refreshInterval: 50,
  //         });
  //       });
  //     });
  //   }
  // }

  // private scrollBar(): void {
  //   const scrollBar = jQuery('.scroll-bar');
  //   if (scrollBar.length > 0) {
  //     this.loadScript(
  //       'static/plugin/scroll/jquery.mCustomScrollbar.js',
  //       function () {
  //         scrollBar.mCustomScrollbar({
  //           scrollInertia: 200,
  //         });
  //       }
  //     );
  //   }
  // }

  // private mTypeIt(): void {
  //   const mTypeIt = jQuery('.type-it');
  //   if (mTypeIt.length > 0) {
  //     this.loadScript('static/plugin/scroll/typed.js', function () {
  //       mTypeIt.typed({
  //         strings: ['Web Developer', 'UI/UX Designer'],
  //         loop: true,
  //         typeSpeed: 100,
  //         backDelay: 2000,
  //       });
  //     });
  //   }
  // }

  // private one_page(): void {
  //   const onePage = jQuery('.one-page');
  //   if (onePage.length > 0) {
  //     this.loadScript(
  //       'static/plugin/onepage/jquery.onepage-scroll.min.js',
  //       function () {
  //         onePage.onepage_scroll({
  //           sectionContainer: 'section',
  //           easing: 'ease-in-out',
  //           animationTime: 1000,
  //           pagination: true,
  //           updateURL: false,
  //         });
  //       }
  //     );
  //   }
  // }

  // private masonry(): void {
  //   const masonry = jQuery('.grid');
  //   if (masonry.length > 0) {
  //     this.loadScript('static/plugin/masonry/masonry.pkgd.min.js', function () {
  //       masonry.imagesLoaded(function () {
  //         masonry.isotope({
  //           itemSelector: '.grid-item',
  //           transitionDuration: '1s',
  //           percentPosition: true,
  //         });
  //       });
  //     });
  //   }
  // }

  // ngAfterViewInit() {
  //   const typeItElement = this.renderer.selectRootElement('#type-it');
  //   const contactBtnElement = this.renderer.selectRootElement('.px-btn');
  //   const imgElement = this.renderer.selectRootElement('.ht-img img');

  //   // Set the initial text content of the #type-it element
  //   this.renderer.setProperty(typeItElement, 'textContent', 'UI / UX Designer');

  //   // Add a click event listener to the .px-btn element
  //   this.renderer.listen(contactBtnElement, 'click', () => {
  //     alert('Contact button clicked!');
  //   });

  //   // Modify the src attribute of the image element to set the image source
  //   this.renderer.setAttribute(
  //     imgElement,
  //     'src',
  //     './../../assets/static/img/about-me-1.jpg'
  //   );
  // }
}
