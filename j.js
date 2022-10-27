//  Dùng hàm fetch gọi API từ web( fetch là hàm xd sẵn)
// Hàm fetch trả về một promise

fetch('https://gnews.io/api/v4/top-headlines?&token=383d5e1a2efe6ebdbc086693786e1f09')

  .then(function (response) {
    // Dùng Phương thức then() thứ nhất để nhận kết quả trả về là một promise và chuyển đổi
    // chuỗi json sang một mảng Js, tiếp tục trả về một promise
    return response.json();

  })
  // Phương thức then() thứ 2 nhận kết quả trả về của then() thứ nhất là một promise
  .then(function (datas) {
    // Dùng hàm map duyệt qua mảng API (datas) và trả về những nội dung chính trong API từng phần tử
    // data là các phần tử của mảng datas
    let htmls = datas.articles.map(function (data) {
      //   
      return `<ul>
       <li>
          <img src = '${data.image}'>
          <div>
          <a href = '${data.url}'> 
          <b> '${data.title}'</b></a>
          <p>'${data.title}'</p>
         
           </div>
          </li>
          </ul>`;
    })
    //   Dùng hàm join chuyển mảng js thành chuỗi để xuất ra màn hình 
    let html = htmls.join(' ');
    console.log(html);

    document.getElementById('container').innerHTML = html;
  });


function mySearch() {
  // Lấy giá trị được nhập vào ô input
  var input = document.getElementById('search1').value;
  // Gán vào fetch để tìm kiếm nội dung liên quan  
  fetch('https://gnews.io/api/v4/search?q=' + input + '&token=383d5e1a2efe6ebdbc086693786e1f09')
    .then(function (response) {
      return response.json();

    })
    .then(function (datas) {
      let htmls = datas.articles.map(function (data) {
        return `<ul> <li>
              <img src = '${data.image}'>
              <div>
              <a href = '${data.url}'> 
              <b> '${data.title}'</b></a>
              <p>'${data.title}'</p>
             
               </div>
              </li>
              </ul>`;
      })
      let html = htmls.join('');

      document.getElementById('container').innerHTML = html;

    });
  document.getElementById('modelId, search1, nut').style.display = 'none';

}
