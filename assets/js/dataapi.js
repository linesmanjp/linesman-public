$(document).ready(function(){
  $.getJSON("https://www.kurachic.jp/.data-api/v1/sites/84945/entries/?limit=5", function (results) {
    $.each(results, function (i, item) {
      if (i === 'items') {
        var date_data0 = new Date(item[0].date);
        var year = date_data0.getFullYear();
        var month = ("0" + (date_data0.getMonth()+1)).slice(-2);
        var day = ("0" + date_data0.getDate()).slice(-2);
        var date0 = year + '/' + month + '/' + day;
        var date_data1 = new Date(item[1].date);
        var year = date_data1.getFullYear();
        var month = ("0" + (date_data1.getMonth()+1)).slice(-2);
        var day = ("0" + date_data1.getDate()).slice(-2);
        var date1 = year + '/' + month + '/' + day;
        var date_data2 = new Date(item[2].date);
        var year = date_data2.getFullYear();
        var month = ("0" + (date_data2.getMonth()+1)).slice(-2);
        var day = ("0" + date_data2.getDate()).slice(-2);
        var date2 = year + '/' + month + '/' + day;
        var date_data3 = new Date(item[3].date);
        var year = date_data3.getFullYear();
        var month = ("0" + (date_data3.getMonth()+1)).slice(-2);
        var day = ("0" + date_data3.getDate()).slice(-2);
        var date3 = year + '/' + month + '/' + day;
        var date_data4 = new Date(item[4].date);
        var year = date_data4.getFullYear();
        var month = ("0" + (date_data4.getMonth()+1)).slice(-2);
        var day = ("0" + date_data4.getDate()).slice(-2);
        var date4 = year + '/' + month + '/' + day;
        $('#home-articles').append('\
          <li><date>' + date0 + '</date><div class="category">' + item[0].categories[0].label + '</div><div class="entry"><a href="' + item[0].permalink + '" target="_blank">' + item[0].title + '</a></div></li>\
          <li><date>' + date1 + '</date><div class="category">' + item[1].categories[0].label + '</div><div class="entry"><a href="' + item[1].permalink + '" target="_blank">' + item[1].title + '</a></div></li>\
          <li><date>' + date2 + '</date><div class="category">' + item[2].categories[0].label + '</div><div class="entry"><a href="' + item[2].permalink + '" target="_blank">' + item[2].title + '</a></div></li>\
          <li><date>' + date3 + '</date><div class="category">' + item[3].categories[0].label + '</div><div class="entry"><a href="' + item[3].permalink + '" target="_blank">' + item[3].title + '</a></div></li>\
          <li><date>' + date4 + '</date><div class="category">' + item[4].categories[0].label + '</div><div class="entry"><a href="' + item[4].permalink + '" target="_blank">' + item[4].title + '</a></div></li>\
        ');
      }
    });
  });
});
