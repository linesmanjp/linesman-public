var api = new MT.DataAPI({
baseUrl:  "https://www.kurachic.jp/.data-api/",
clientId: "api10entries"
});


var html = '';
var siteId = 84945;

api.listEntries(siteId, function(response) {
if (response.error) {
html += "<p>データ取得エラーです。</p>";
return;
}

html += '<div class="articles"><ul>';

for (var i = 0; i < 5; i++) {
var entry = response.items[i];
html += '<li><date>' + moment(entry.date).format('YYYY/MM/DD') + '</date><div class="category">' + entry.categories[0] + '</div><div class="entry"><a target="_blank" href="' + entry.permalink + '">' + entry.title + '</a></div></li>';
}

html += "</ul></div>";

var entries = document.getElementById("home-articles");
entries.innerHTML = html;

});
