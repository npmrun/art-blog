import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
    placeholder: "blurred",
    preload: "webp",
    layout: "fixed",
    fadeInTransition: {
        delay: "0.2s",
        duration: "0.5s",
        timingFunction: "linear",
    },
});
