"use strict";window.onload=function(){new Swiper(".swiper-container",{autoplay:!0,delay:1e3,effect:"fade",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})};var $itemBox=$("li.nav-item"),$proBox=$(".nav-item>.pro-box"),flag=!1;$itemBox.mouseenter(function(){var e=this,o=$(this).index();0==flag?(console.log($proBox.eq(o).height()),$proBox.eq(o).animate({height:"240px"},function(){console.log("enter",e,$proBox.eq(o).height()),flag=!0})):($proBox.height("0px"),$proBox.eq(o).height("240px"),console.log("enter",this,$proBox.eq(o).height()))}),$itemBox.mouseleave(function(){var e=this,o=$(this).index();clearTimeout(i);var i=setTimeout(function(){console.log("leave",e,$proBox.eq(o).height()),0!=$proBox.eq(o).height()&&($proBox.eq(o).animate({height:"0px"}),flag=!1)},1e3)});