// JavaScript Document
$(document).ready(function(){
$("#accordian a").click(function() {
    var link = $(this);
    var closest_ul = link.closest("ul");
    var parallel_active_links = closest_ul.find(".active")
    var closest_li = link.closest("li");
    var link_status = closest_li.hasClass("active");
    var count = 0;

    closest_ul.find("ul").slideUp(function() {
        if (++count == closest_ul.find("ul").length)
            parallel_active_links.removeClass("active");
    });

    if (!link_status) {
        closest_li.children("ul").slideDown();
        closest_li.addClass("active");
    }
});

$(function() {
    $("#profile_click").on("click", function(e) {
      $(".dropdown_profile").addClass("open");
      e.stopPropagation()
    });
    $(document).on("click", function(e) {
      if ($(e.target).is(".dropdown_profile") === false) {
        $(".dropdown_profile").removeClass("open");
      }
    });
  });
  $(function() {
    $("#notification_pop").on("click", function(e) {
      $(".notification_bx").addClass("open");
      e.stopPropagation()
    });
    $(document).on("click", function(e) {
      if ($(e.target).is(".notification_bx") === false) {
        $(".notification_bx").removeClass("open");
      }
    });
  });

$(".collapse_nav").click(function() {
    $('.menubar').addClass('open');
    $('.backdrop-layout').addClass('open');
});
$(".backdrop-layout").click(function() {
    $('.menubar').removeClass('open');
    $(this).removeClass('open');
});
$('.datatable').dataTable();

$('.allbtndatatable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'excel',
        'csv',
        'pdf',
        'print'
    ]
} );

$('.exclbtndatatable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'excel',
        'csv',
    ]
} );
$('.pdfbtndatatable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'pdf'
    ]
} );
$('.printbtndatatable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'print'
    ]
} );
$('.excpet_printbtndatatable').DataTable( {
    dom: 'Bfrtip',
    buttons: [
        'excel',
        'csv',
        'pdf'
    ]
} );
});

