//jsonholder site

function easyhttp() {
  this.http = new XMLHttpRequest();
}
//get method Get user data
easyhttp.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  var self = this;
  this.http.onload = function () {
    if (self.http.status == 200) {
      callback(null, self.http.responseText)
    } else {
      callback("error" + self.http.status);
    }
  }
  this.http.send();
}
//post method Add user data
easyhttp.prototype.post = function (url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  var self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//put method updata user data
easyhttp.prototype.put = function (url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  var self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//delete method delete user data
easyhttp.prototype.delete = function (url, data, callback) {
  this.http.open('DELETE', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  var self = this;
  this.http.onload = function () {
    callback(null, 'post deleted');
  }
  this.http.send(JSON.stringify(data));
}