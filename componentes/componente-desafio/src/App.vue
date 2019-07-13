<template>
    <v-app>
        <app-menu/>
        <app-toolbar/>
        <app-carousel/>
        <app-footer/>
    </v-app>
</template>

<script>
    import Footer from "@/components/template/Footer";
    import Carousel from "@/components/widgets/Carousel";
    import Toolbar from "@/components/template/Toolbar";
    import Menu from "@/components/template/Menu";

    export default {
        components: {
            appFooter: Footer,
            appCarousel: Carousel,
            appToolbar: Toolbar,
            appMenu: Menu
        }
    };
</script>
