$(function() {

var fadeTime = 500;

    var newHash      = "",
        $mainContent = $("#ajax-container");

    $("#nav-list li").delegate("a", "click", function() {
        window.location.hash = $(this).attr("href");
        console.log('meow');
        return false;
    });

    $mainContent.delegate("a.project-link", "click", function() {
        window.location.hash = $(this).attr("href");
        return false;
    });

    $(window).bind('hashchange', function(){

        newHash = window.location.hash.substring(1);

        if (newHash) {
            $mainContent.css('opacity', 0);
            setTimeout(function(){
                $mainContent.load(newHash + " #content", function(){
                    setTimeout(function(){
                        $mainContent.css('opacity', 1);
                    },100);
                });
            },fadeTime);
            

            // adjust link styles
            $("nav a").removeClass("active-nav-link");
            $("nav a[href="+newHash+"]").addClass("active-nav-link");
        }
    });

    $(window).trigger('hashchange');
    //console.log(window.location.href);
    // if (window.location.href === "http://localhost:4000/" || window.location.href === "http://mattwujek.com/_ajax/"){
    //     window.location.hash = "index.html";
    // }

});