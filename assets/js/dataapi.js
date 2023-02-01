var request = new XMLHttpRequest();
 
request.open('GET', 'https://www.kurachic.jp/.data-api/v4/sites/84945/entries/', true);
request.responseType = 'json';

request.onload = function () {
  var data = this.response;
  console.log(data);
};

request.send();