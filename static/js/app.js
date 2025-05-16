"use strict";

$(document).ready(function () {
    $(document).mousemove(function () {
        $("h2").delay(3000).queue(function (){
            $(this).css({"color": "red", "transition": "all linear .3s"});
        });

    });
});
