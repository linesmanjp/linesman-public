$.getJSON("https://www.kurachic.jp/.data-api/v1/sites/84945/entries/?limit=5", function (results) {
  $.each(results, function (i, item) {
    var date_data = new Date(item.date);
    var year = date_data.getFullYear();
    var month = date_data.getMonth() + 1;
    var day = date_data.getDate();
    var title = item.title;
    var link = item.permalink;
    var date = year + '/' + month + '/' + day + '/';
    var category = item.entry.categories[0];
    $('#home-articles .articles ul').append('<li><date>' + date + '</date><div class="category">'  + category +  '</div><div class="entry"><a href="' + link + '">' + title + '</a></div></li>');
  });
});
