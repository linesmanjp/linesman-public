$.getJSON("https://www.kurachic.jp/.data-api/v4/sites/84945/entries/", function (results) {
  $.each(results, function (i, item) {
    var date_data = new Date(item.date);
    var year = date_data.getFullYear();
    var month = date_data.getMonth() + 1;
    var day = date_data.getDate();
    var title = item.title.rendered;
    var link = item.link;
    var date = year + '/' + month + '/' + day + '/';
    var thum = item._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url
    $('#home-articles .articles ul').append("<li><date>" + date + "</date><a href='" + link + "'><p></p><p>" + title + "</p></a></li>");
  });
});
