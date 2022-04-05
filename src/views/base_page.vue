<template>
    <div>
        <navbarAL></navbarAL>
        <menuNavbar></menuNavbar>
        <categories></categories>
    </div>
</template>

<script>
import navbarAL from '../components/navbar_AL.vue';
import menuNavbar from '../components/menuNavbar.vue';
import categories from '../components/categoriesProducts.vue';
export default {
    components: {
        navbarAL,
        menuNavbar,
        categories
    }
}
</script>

<style>

</style>