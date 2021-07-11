$(document).ready(function () {
    $(".gallery").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true,
        },
    });
});
