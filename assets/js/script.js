$("li").click(function () {
  $("li").removeClass("active");
  $(this).addClass("active");
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

if (typeof Dropzone != "undefined")
  new Dropzone(document.querySelector("[data-dropzone]"));

$(".old-file-remove-btn").click(function () {
  $(".old-file-item").remove();
});

$(".showMoreBtn").click(function () {
  $(".notification-item").removeClass("d-none");
  $(this).hide();
});

$(".ShowGradeBtn").click(function () {
  $(".pyro").removeClass("d-none");
});
$(".ShowGradeBtnNotPass").click(function () {
  $(".pyroNotPass").removeClass("d-none");
});
$(".youNeedToMakeForm").click(function () {
  $(".Modal").removeClass("d-none");
});
$(".ModalOkBtn").click(function () {
  $(".Modal").addClass("d-none");
});

$(".okBtn").click(function () {
  $(".pyro").addClass("d-none");
});

$(".okBtnNotPass").click(function () {
  $(".pyroNotPass").addClass("d-none");
});
