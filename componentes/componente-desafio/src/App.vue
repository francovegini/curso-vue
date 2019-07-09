<template>
    <v-app>
        <app-menu/>
        <app-toolbar/>
        <app-carousel/>
        <app-footer/>
    </v-app>
</template>

<script>
    import Footer from "./Footer";
    import Carousel from "./Carousel";
    import Toolbar from "./Toolbar";
    import Menu from "./Menu";

    export default {
        components: {
            "app-footer": Footer,
            "app-carousel": Carousel,
            "app-toolbar": Toolbar,
            "app-menu": Menu
        }
    };
</script>
