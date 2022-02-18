<template>
    <div>
        <aprNavbar></aprNavbar>
        <aprMain></aprMain>
        <aprFooter></aprFooter>
    </div>
</template>

<script>
import aprNavbar from '../components/apr_navbar.vue';
import aprMain from '../components/apr_main.vue';
import aprFooter from '../components/apr_footer.vue';
export default {
    components: {
        aprNavbar,
        aprMain,
        aprFooter 
    }
}
</script>

<style>

</style>