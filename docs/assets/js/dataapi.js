document.addEventListener("DOMContentLoaded", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://www.kurachic.jp/.data-api/v1/sites/84945/entries/?limit=5", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var results = JSON.parse(xhr.responseText);
      var items = results.items;
      items.forEach(function(item) {
        var date = new Date(item.date);
        var formattedDate = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);
        var entryHtml = '<li><date>' + formattedDate + '</date><div class="category">' + item.categories[0].label + '</div><div class="entry"><a href="' + item.permalink + '" target="_blank">' + item.title + '</a></div></li>';
        document.getElementById('home-articles').innerHTML += entryHtml;
      });
    }
  };
  xhr.send();
});
