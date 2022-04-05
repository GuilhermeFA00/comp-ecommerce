<template>
    <header class="header-container bg-light w-100 border-bottom-light">
        <nav class="navbar container-full d-flex align-items-center mx-auto">
            <a class="navbar-logo d-flex align-items-center mr-auto" href="#">
                <h2>FA Ecommerce</h2>
            </a>
            <li class="nav-item d-flex mr-auto">
                <router-link to="/app"><a class="nav-link" >HOME</a></router-link>
            </li>
            <ul class="navbar-nav d-flex mr-auto">
                <li class="nav-item">
                    <a class="nav-link" ><i class="fas fa-mobile-alt"></i></a>
                </li>
                <li class="nav-item">
                    <router-link to="/login"><a class="nav-link" ><i class="fas fa-user"></i></a></router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

:root {
  --main-color: #ffc240;
  --main-color-hover: #fead34;
  --main-color-rgba: rgba(255, 194, 64, 0.3);
  --dark-gray: #323332;
  --medium-gray: #ababaa;
  --light-gray: #f1f1f1;
  --white: #fff;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: "Roboto", sans-serif;
}

h1 {
  font-size: 2.25rem;
}

h5 {
  color: var(--medium-gray);
  text-transform: uppercase;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  background: none;
  border: none;
  font-size: 0.75rem;
}

svg {
  display: block;
}

/* ---=== UTILITIES ===--- */

.bg-light,
.bg-light a {
  background: var(--white);
  color: var(--dark-gray);
}

.bg-dark,
.bg-dark a {
  background: var(--dark-gray);
  color: var(--white);
}

.mx-auto {
  margin: auto;
}

.mr-auto {
  margin-right: auto;
}

.ml-auto {
  margin-left: auto;
}

.w-100 {
  width: 100%;
}

.h-100 {
  height: 100%;
}

.container-full {
  max-width: 1200px;
}

.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.d-flex {
  display: flex;
}

.row {
  flex-direction: row;
}

.column {
  flex-direction: column;
}

.align-items-center {
  align-items: center;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}

.justify-content-around {
  justify-content: space-around;
}

.justify-content-evenly {
  justify-content: space-evenly;
}

.border-white {
  border: 2px solid var(--white);
}

.border-light {
  border: 1px solid var(--light-gray);
}

.border-bottom-light {
  border-bottom: 1px solid var(--light-gray);
}

.border-top-light {
  border-top: 1px solid var(--light-gray);
}

.border-right-light {
  border-right: 1px solid var(--light-gray);
}

.border-left-light {
  border-left: 1px solid var(--light-gray);
}

.border-medium {
  border: 2px solid var(--medium-gray);
}

.border-dark {
  border: 2px solid var(--dark-gray);
}

.rounded-circle {
  border-radius: 50%;
}

.rounded-pill {
  border-radius: 3rem;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
}

/* ---=== STYLES ===--- */

/* |||| HEADER |||| */
.header-container {
  position: sticky;
  top: 0;
  z-index: 1010;
  max-height: 3.75rem;
}

.header-container .active {
  box-shadow: inset 0 -0.5rem 0 var(--main-color-rgba);
}

.navbar {
  padding: 0.75rem 0;
  font-size: 1rem;
  font-weight: 700;
}

.navbar-logo {
  padding: 0.5rem 0;
}

.nav-link {
  margin-right: 3.5rem;
  cursor: pointer;
}

.nav-link:hover {
  animation: hoverEffect 300ms ease-in-out;
  animation-fill-mode: forwards;
}

@keyframes hoverEffect {
  0% {
    box-shadow: inset 0 0 0 var(--main-color-rgba);
  }
  100% {
    box-shadow: inset 0 -0.5rem 0 var(--main-color-rgba);
  }
}

.nav-icon {
  padding: 0.5rem 1rem;
  padding-right: 0;
}

.search-btn {
  background: none;
  border: none;
}

.search-input {
  background: none;
  border: none;
  margin-left: 1.25rem;
}

::placeholder {
  color: var(--medium-gray);
  font-size: 0.85rem;
  font-weight: 500;
}

.subtotal-price {
  color: var(--dark-gray);
}

.badge {
  width: 1rem;
  height: 1rem;
  background: var(--main-color);
  color: var(--dark-gray);
  font-size: 0.65rem;
  bottom: 5px;
  right: -5px;
}
</style>