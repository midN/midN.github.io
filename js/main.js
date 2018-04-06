jQuery(document).ready(function($) {

  /*======= Skillset *=======*/
  $('.level-bar-inner').css('width', '0');
  $(window).on('load', function() {
    $('.level-bar-inner').each(function() {
      var itemWidth = $(this).data('level');
      $(this).animate({
        width: itemWidth
      }, 800);
    });
  });

  /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
  GitHubActivity.feed({ username: "midN", selector: "#ghfeed" });

  $(window).scroll(function() {
    if ($(this).scrollTop()>=10)
    {$('#hideme').fadeOut();}
    else
    {$('#hideme').fadeIn();}
  });

  $("#nav-link, a.navbar-brand").on('click', function(e) {
    e.preventDefault();
    return $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500), !1
  });

  $('#navcollapse1 li a').click(function() {
    /* always close responsive nav after click */
    $('.navbar-toggler:visible').click();
  });

  $("#info-link").on('click', function(e) {
    $("#info-response").html(
        "<img class='img-fluid img-circle' src='images/doge.jpg'>\
        <h2 class='response'>Such wow, much scroll</h2>"
        ).addClass("success").fadeIn("fast").delay(3000).fadeOut("fast");
  });

  $('#sa_assoc').popover({
    html: true,
    content: function () {
      return '<img class="img-fluid" src="images/sa_associate.jpg" />';
    }
  });
});
