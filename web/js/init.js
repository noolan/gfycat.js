var gfyCat = { GfyAnalytics: GfyAnalytics, gfyCollection: gfyCollection, gfyObject: gfyObject };

if (typeof exports == "object") {
    module.exports = gfyCat;

} else if (typeof define == "function" && define.amd) {
    define( [], function() { return gfyCat; } );

} else {
    if (document.addEventListener) {
        document.addEventListener("DOMContentLoaded", function() {
            gfyCollection.init();
        }, false);
    } else {
        document.attachEvent("onreadystatechange", gfyCollection.init);
    }

}
