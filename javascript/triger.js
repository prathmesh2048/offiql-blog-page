let success = (response)=>{
  console.log("succc")
  console.log(response)



for (var k = 0; k <= 3; k++){
  if (response[k].title) {
      document.getElementsByClassName('top_title')[k].innerHTML = response[k].title.substring(0,100)
      document.getElementsByClassName('blog_title_side')[k].innerHTML = response[k].title.substring(0,100)

  }
  if (response[k].content){
  document.getElementsByClassName('top_content')[k].innerHTML = response[k].content.substring(0,100)
  }


}



  // list creation
  // this list will contain 2,5,8..... etc
  // this list is basically an arithmetic progression of differnce of 3
  list= []
  for (var j = 1; j < response.length; j++) {
    term = 2 + (j-1)*(3)
    list.push(term);
  }
  console.log(list);
  console.log(response.length);


  let target = document.getElementsByClassName('blog_left_sidebar')[0]

  for (var i = 0; i < response.length; i++) {

        if (list.includes(i) && ((response.length - i) >= 2)) {
          target.innerHTML +=`
          <div class="row">
            <div class="col-md-6">
              <article class="blog_style1 small">
                <div class="blog_img text-center">
                  <img class="img-fluid" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
                <div class="blog_text">
                  <div class="blog_text_inner">
                    <a class="cat" href="#">Know More.</a>
                    <a href="single-blog.html"><h4>${response[i].title}</h4></a>
                    <p>${response[i].content.substring(0,220)+ ' ....'}</p>
                    <div class="date">
                      <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> March 14, 2018</a>
                      <a href="#"><i class="fa fa-comments-o" aria-hidden="true"></i> 05</a>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <div class="col-md-6">
              <article class="blog_style1 small">
                  <div class="blog_img text-center">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="">
                  </div>
                  <div class="blog_text">
                    <div class="blog_text_inner">
                      <a class="cat" href="#">Know More.</a>
                      <a href="single-blog.html"><h4>${response[i+1].title}</h4></a>
                      <p>${response[i+1].content.substring(0,220)+ ' ....'}</p>
                      <div class="date">
                        <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> March 14, 2018</a>

                      </div>
                    </div>
                  </div>
                </article>
            </div>
          </div>
          `

        }else {
          target.innerHTML += `  <!-- article -->

            <article class="blog_style1">
                <div class="blog_img text-center">
                  <img class="img-fluid" src="blog-1.jpg" alt="">
                </div>
                <div class="blog_text">
                  <div class="blog_text_inner">
                    <a class="cat" href="#">Know More.</a>
                    <a href="single-blog.html"><h4>${response[i].title}</h4></a>
                    <p>${response[i].content.substring(0,220)+ ' ....'}</p>
                    <div class="date">
                      <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> March 14, 2018</a>

                    </div>
                  </div>
                </div>
              </article>

              <!-- article ends here ! -->`
        }
  }



}


$.ajax({
    type: "GET",
    dataType: "json",
    crossDomain: true,
    url: "http://app.offiql.com/api/v1/blogs",
    success: success,
    failure: function(response){
      console.log("fail")
      console.log(response)

    }
  });
