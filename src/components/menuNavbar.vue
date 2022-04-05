<template>
  <div id="nav-main" class="nav-sprite">
    <input type="checkbox" id="ham-menu">      
    
    <label for="ham-menu">
        <div class="hide-des">
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
            <span class="menu-line"></span>
        </div>

    </label>

    <div class="full-page-green">

    </div>
    <div class="ham-menu">
        <ul class="centre-text bold-text">
            <li class="menu-navbar-items">Home</li>
            <li class="menu-navbar-items">Categories</li>
            <li class="menu-navbar-items">Services</li>
            <li class="menu-navbar-items">Shop</li>
            <li class="menu-navbar-items">Support</li>
            <li class="menu-navbar-items">Contact us</li>

        </ul>
    </div>

    <div class="nav-left">
        <div id="nav-menu">
            <span class="hm-icon-label ">All</span>
            <span class="hm-icon-label ">Today's Deals</span>
            <span class="hm-icon-label ">Customer Service</span>
            <span class="hm-icon-label ">Registry</span>
            <span class="hm-icon-label ">Gift Cards</span>
            <span class="hm-icon-label ">Sell</span>
        </div>
    </div>
    <div class="nav-right">
        <div id="nav-swmslot">
         <!--Scheduled SWM widget failed to render-->
        </div>
    </div>
  </div>  
</template>

<script>
export default {
}
</script>

<style>
:root {
  --home-bg-color: #f2f3ee;
  --menu-bg-color: #cbcbc2;
  --silde-btn-border: #808080;
  --slide-btn-bg: #ddf2db;
  --slide-btn-hoverbg: #f1fff1;
  --alpha-green: rgba(33, 96, 47, 0.51);
  --icon-hover-color: #344a39;
  --icon-hover-bg: #709680;
  --text-color: #616161;
  --border-color: #709680;
  --heading-color: #344a39;
  --box-shadow-color: #b5b5ac;
  --lightest-green: #86a58d;
  --light-green: #9ab09a;
  --dark-green: rgba(52, 74, 57, 0.86);
  --box-shadow: 0px 0px 3px 5px var(--box-shadow-color);
  --border-radius: 60px 5px;
  --fade-green: rgba(57, 87, 64, 0.55);
}

#nav-main.nav-sprite, #nav-main.nav-sprite {
    padding-left: 1px;
}

#nav-main {
    height: 70px;
    padding-top: 0;
}
#nav-main.nav-sprite {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
}
#nav-main {
    background-image: none;
    background-color: #232f3e;
}
#nav-main,  .nav-main {
    width: 100%;
    padding-top: 1px;
    position: relative;
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    -ms-transform: translate3d(0,0,0);
    -o-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    z-index: 4;
    background-position: 0 -725px;
}

.nav-left{
    margin-left: 55px;
}

.nav-sprite-v1 .nav-sprite, .nav-sprite-v1 .nav-icon {
    background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png);
    background-position: 0 1000px;
    background-repeat: repeat-x;
}
#nav-main.nav-sprite .nav-left, nav-fixed #nav-main.nav-sprite .nav-left {
    margin-right: 0;
}
#nav-main .nav-left, .nav-main .nav-left {
    margin-right: 1px;
}
#nav-main .nav-fill, #nav-main .nav-left, #nav-main .nav-right, .nav-main .nav-fill, .nav-main .nav-left, .nav-main .nav-right {
    max-height: 39px;
}
.nav-left, .nav-right {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
}
#nav-main .nav-fill, #nav-main .nav-left, #nav-main .nav-right,  .nav-main .nav-fill,  .nav-main .nav-left,  .nav-main .nav-right {
    max-height: 55px;
}

.nav-left {
    position: relative;
    float: left;
    width: auto;
    display: inline-block;
    margin-top: 7px;
}
#nav-menu, #nav-menu .hm-icon {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
}
#nav-menu {
    align-items: center;
    width: auto;
    height: auto;
    border: none;
    text-decoration: none;
    padding: 8px 9px 8px 9px;
    margin: 5px 0 6px 0;
}
a#nav-menu {
    height: 40px;
    margin: 10px 7px 10px 7px;
    padding: 10px 8px 10px 8px;
}
a#nav-menu {
    float: left;
    margin: 7px 7px 8px 7px;
    padding: 8px 8px 8px 8px;
    width: 38px;
    height: 36px;
    font-size: 25px;
    color: #fff;
    border-radius: 3px;
    border: 1px solid #666;
}
#nav-menu .hm-icon {
    width: 17px;
    height: 14px;
    background-position: -172px -255px;
}
#nav-menu, #nav-menu .hm-icon {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
}
a#nav-menu .hm-icon {
    background-position: -136px -255px;
    width: 20px;
    height: 18px;
    position: absolute;
}

.nav-sprite-v1 .nav-sprite, .nav-sprite-v1 .nav-icon {
    background-image: url(https://images-na.ssl-images-amazon.com/images/G/01/gno/sprites/nav-sprite-global-1x-hm-dsk-reorg._CB405937547_.png);
    background-position: 0 1000px;
    background-repeat: repeat-x;
}
em, i {
    font-style: italic;
}
#nav-menu .hm-icon-label {
    color: #fff;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    margin-left: 10px;
    padding-left: 5px;
    white-space: nowrap;
    cursor: pointer;
}
#nav-main .nav-fill, #nav-main .nav-left, #nav-main .nav-right, .nav-main .nav-fill, .nav-main .nav-left, .nav-main .nav-right {
    max-height: 39px;
}

.nav-fill {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
    -webkit-box: 1;
    -moz-box: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
#nav-main .nav-fill, #nav-main .nav-left, #nav-main .nav-right,  .nav-main .nav-fill,  .nav-main .nav-left,  .nav-main .nav-right {
    max-height: 55px;
}
.nav-fill {
    width: auto;
    overflow: hidden;
    white-space: nowrap;
}
#nav-main.nav-sprite #nav-shop {
    padding: 0;
}
nav-packard-glow #nav-shop {
    padding-top: 0;
}
#nav-shop {
    margin-top: 0;
}
.nav-packard-glow #nav-shop {
    padding-right: 7px;
}
.nav-packard-glow #nav-shop {
    padding: 6px 15px 0 0;
    width: auto;
}
#nav-shop {
    float: left;
    padding: 6px 12px 0 15px;
    text-decoration: none;
    margin-top: 2px;
    width: auto;
}
#nav-main.nav-sprite #nav-xshop-container {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
    -webkit-box: 1;
    -moz-box: 1;
    -webkit-flex: 1 1 100%;
    -ms-flex: 1 1 100%;
    flex: 1 1 100%;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-pack: end;
    -moz-box-pack: end;
    -ms-flex-pack: end;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    min-width: 0;
}
#nav-xshop-container {
    padding: 0;
}
.nav-packard-glow #nav-xshop-container {
    position: static;
    float: none;
    padding: 2px 0 0 0;
}
#nav-xshop-container {
    position: relative;
    float: left;
    margin: 0;
    padding: 0;
    z-index: 20;
}
#nav-main.nav-sprite .nav-fill #nav-xshop-container #nav-xshop, nav-fixed #nav-main.nav-sprite .nav-fill #nav-xshop-container #nav-xshop {
    padding-left: 0;
}
#nav-main.nav-sprite #nav-xshop-container #nav-xshop {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
    -webkit-box: 1;
    -moz-box: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-box-align: end;
    -moz-box-align: end;
    -ms-flex-align: end;
    -webkit-align-items: flex-end;
    align-items: flex-end;
}
#nav-xshop-container #nav-xshop {
    margin-top: 0;
    padding-left: 2px;
}
.nav-bluebeacon #nav-xshop {
    margin: 21px 0 0;
    max-height: 39px;
    overflow: hidden;
}
#nav-main.nav-sprite .nav-fill #nav-xshop-container #nav-xshop .nav-a, nav-fixed #nav-main.nav-sprite .nav-fill #nav-xshop-container #nav-xshop  {
    margin: 5px 0 6px 0;
    padding: 8px 9px;
}

#nav-main.nav-sprite #nav-xshop-container #nav-xshop , #nav-main.nav-sprite #nav-xshop-container #nav-xshop .nav-a:active, #nav-main.nav-sprite #nav-xshop-container #nav-xshop .nav-a:focus, #nav-main.nav-sprite #nav-xshop-container #nav-xshop .nav-a:hover {
    margin: 5px 1px 6px 0;
}
#nav-main.nav-sprite #nav-xshop-container #nav-xshop  {
    padding: 8px 9px 8px 9px;
    scroll-margin: 0;
    height: 12px;
    box-sizing: content-box;
}
#nav-xshop-container #nav-xshop .nav-a {
    margin-top: 6px;
}
.nav-a {
    padding: 7px 7px 7px 8px;
    margin: 1px 2px 12px 1px;
    color: #fff;
}
#nav-xshop .nav-a:first-of-type {
    padding-left: 0;
}
#nav-xshop .nav-a {
    float: left;
    font-family: inherit;
    font-size: 14px;
}
#nav-main.nav-sprite .nav-right {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
    -webkit-box: 0;
    -moz-box: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}
#nav-main .nav-fill, #nav-main .nav-left, #nav-main .nav-right, .nav-main .nav-fill, .nav-main .nav-left, .nav-main .nav-right {
    max-height: 39px;
}
.nav-left, .nav-right {
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    position: static;
    float: none;
}
#nav-main .nav-fill, #nav-main .nav-left, #nav-main .nav-right,  .nav-main .nav-fill,  .nav-main .nav-left,  .nav-main .nav-right {
    max-height: 55px;
}
.nav-right {
    position: relative;
    float: right;
    width: auto;
    display: inline-block;
}


#ham-menu {
  display: none;
}
label[for="ham-menu"] {
  display: block;
  position: fixed;
  top: 8px;
  left: 6px;
  z-index: 999;
  width: 60px;
  height: 60px;
  background-color: var(--home-bg-color);
  border-radius: 15px;
  border: 2px solid var(--border-color);
}
.ham-menu {
  width: 50vh;
  height: 250px;
  position: fixed;
  top: 0;
  visibility: hidden;
  transform: translate(-110%);
  z-index: 998;
  background-color: rgba(68, 64, 57, 0.822);
  transition: 1s;
  display: flex;  
}
.ham-menu > ul {
  display: flex;
  flex-flow: column nowrap;
  padding: 5px;
  margin-left: 70px;
  height: 100%;
}
.ham-menu > ul > li {
  font-size: 2rem;
  white-space: nowrap;
  letter-spacing: 0.12em;
  cursor: pointer;
  color: rgb(255, 255, 255);
}
#ham-menu:checked + label {
  background-color: transparent;
  border-color: var(--dark-green);
}
#ham-menu:checked ~ div.ham-menu {
  transform: translate(0px);
  visibility: visible;
}
.full-page-green {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-green);
  z-index: 997;
  opacity: 0;
  visibility: hidden;
  display: none;
  transition: 500ms;
  position: absolute;
  top: 0;
  left: 0;
}
#ham-menu:checked ~ div.full-page-green {
  display: block;
  opacity: 1;
  visibility: visible;
}
[for="ham-menu"] > div {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  align-items: center;
}
.menu-line {
  display: block;
  width: 17px;
  height: 2px;
  margin: 10px 0 5px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  background-color: var(--border-color);
  transition: 500ms;
  transform-origin: right center;
}
[for="ham-menu"] > div > span:nth-child(4),
[for="ham-menu"] > div > span:nth-child(5),
[for="ham-menu"] > div > span:nth-child(6) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  transform-origin: left center;
}
#ham-menu:checked + label span {
  background-color: var(--dark-green);
}
#ham-menu:checked + label span:nth-child(2),
#ham-menu:checked + label span:nth-child(5) {
  transform: scale(0);
}
#ham-menu:checked + label span:nth-child(1) {
  transform: translateY(17px) rotate(45deg);
}
#ham-menu:checked + label span:nth-child(4) {
  transform: translateY(17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(3) {
  transform: translateY(-17px) rotate(-45deg);
}
#ham-menu:checked + label span:nth-child(6) {
  transform: translateY(-17px) rotate(45deg);
}
.menu-navbar-items{

}
</style>