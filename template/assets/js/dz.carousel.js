/**
	Template Name 	 : W3Cart
	Author			 : DexignZone
	Version			 : 1.0
	File Name		 : dz.carousel.js
	Author Portfolio : https://themeforest.net/user/dexignzone/portfolio
	
	Core script to handle the entire theme and core functions
	
**/

/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';
	
    // Get Started ==========
    if(jQuery('.get-started').length > 0){
		var swiperGetStarted = new Swiper('.get-started', {
			speed: 1500,
			slidesPerView: "auto",
			spaceBetween: 0,
			autoplay: {
			   delay: 1500,
			},
			loop:false,
			pagination: {
                el: ".swiper-pagination",
                clickable: true,
			},
		});
	}
	
	if(jQuery('.banner-swiper').length > 0){
		var swiperBannerSwiper = new Swiper('.banner-swiper', {
			speed: 500,
			slidesPerView: 1,
			spaceBetween: 0,
			autoplay: {
			   delay: 1500,
			},
			loop: true,
			pagination: {
                el: ".swiper-pagination",
                clickable: true,
			},
			breakpoints: {
				575: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,				  
				},
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}
	
	if(jQuery('.category-swiper').length > 0){
		var swipercategorySwiper = new Swiper('.category-swiper', {
			speed: 500,
			slidesPerView: 4.5,
			spaceBetween: 12,
			loop: false,
		});
	}
	
	if(jQuery('.trending-swiper').length > 0){
		var swipertrendingSwiper = new Swiper('.trending-swiper', {
			speed: 500,
			slidesPerView: 2.2,
			spaceBetween: 15,
			autoplay: {
			   delay: 1500,
			},
			loop: true,
		});
	}
	if(jQuery('.product-detail-swiper').length > 0){
		var swiper = new Swiper(".product-detail-swiper", {
			spaceBetween: 10,
			slidesPerView: "auto",
			freeMode: true,
			watchSlidesProgress: true,
		});
		var swiper2 = new Swiper(".product-detail-swiper-2", {
			loop: true,
			spaceBetween: 0,
			autoplay: {
			   delay: 1500,
			},
			thumbs: {
			  swiper: swiper,
			},
		});
	}
	
	if(jQuery('.filter-swiper').length > 0){
		var swiperFilterSwiper = new Swiper('.filter-swiper', {
			speed: 500,
			slidesPerView: "auto",
			spaceBetween: 12,
			loop: false,
		});
	}
	
	if(jQuery('.offer-swiper').length > 0){
		var swiperOfferSwiper = new Swiper('.offer-swiper', {
			speed: 500,
			slidesPerView: 1.2,
			spaceBetween: 15,
			autoplay: {
			   delay: 1500,
			},
			loop: true,
		});
	}
});
/* Document .ready END */