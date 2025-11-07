module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addWatchTarget("./src/css/");
    return {
        dir: {
            input: "src",
            output: "docs"
        },
        pathPrefix: process.env.ELEVENTY_ENV === "production" ? "/11ty_iad15_base_installation/" : "/"
    };
}