$(function () {
    // $("#loader").remove();
    $("#Contact").on("click", function (e) {
        e.preventDefault();
        $("aside").toggleClass("active");
    });
    $("#contactFooter").on("click", function (e) {
        e.preventDefault();
        $("aside").toggleClass("active");
    });
    $("#showSearch").on("click", function (e) {
        e.preventDefault();
        $("#searchForm").toggle("slow");
    });
    $("#sideClose").on("click", function (e) {
        e.preventDefault();
        $("aside").toggleClass("active");
    });
    $("#banamak").on("click", function (e) {
        e.preventDefault();
        $(".box4-repeat").addClass("active");
    });
    $("#banamak").on("click", function (e) {
        e.preventDefault();
        $(".box4-repeat").addClass("active");
        $("#banamak").removeClass("active");
    });
});