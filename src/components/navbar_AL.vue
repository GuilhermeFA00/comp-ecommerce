<template>
    <header class="header-container bg-light w-100 border-bottom-light">
        <nav class="navbar container-full d-flex align-items-center mx-auto">
            <a class="navbar-logo d-flex align-items-center mr-auto" href="#">
                <h2>FA Ecommerce</h2>
            </a>
            <li class="nav-item d-flex mr-auto">
                <a class="nav-link" >HOME</a>
            </li>
            <ul class="navbar-nav d-flex mr-auto">
                <li class="nav-item">
                    <a class="nav-link" ><i class="fas fa-cart-arrow-down"></i></a>
                </li>
            </ul>
            <form class="search-form d-flex align-items-center">
                <button class="search-btn nav-icon" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </button>
                <input class="search-input" type="search" placeholder="Search " />
            </form>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>

<style>
</style>