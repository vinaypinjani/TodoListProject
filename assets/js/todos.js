$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
    // if ($(this).css("color") === "rgb(0, 0, 0)") {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // } else {
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     })
    // };
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})

