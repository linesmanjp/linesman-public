$(document).ready(function(){
  $.getJSON("https://www.kurachic.jp/.data-api/v1/sites/84945/entries/?limit=5", function (results) {
    $.each(results, function (i, item) {
      var date_data = new Date(item.items.date);
      var year = date_data.getFullYear();
      var month = date_data.getMonth() + 1;
      var day = date_data.getDate();
      var title = item.items.title;
      var link = item.items.permalink;
      var date = year + '/' + month + '/' + day + '/';
      //var category = item.item[categories][0];
      $('#home-articles').append('<li><date>' + date + '</date><div class="entry"><a href="' + link + '">' + title + '</a></div></li>');
    });
  });
});
