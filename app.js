var http = new easyhttp();

// http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// })
var data = {
  title: 'custom post',
  body: 'This is a custom post'
}


// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, response) {
//   if (error) {
//         console.log(error);
//       } else {
//         console.log(response);
//       }
// })

http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
})

http.delete('https://jsonplaceholder.typicode.com/posts/5', data, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
})