
const ElidBlogsContainer = document.getElementById("idBlogsContainer");
const ElSideBlogsInfo = document.getElementById("SideBlogsInfo");


const AuthorFahad = "Mr.Fahad";
const AuthorFahadBhai = "Mr.Fahad Bhai";

const iLEDBlogPosts = [
  // 1st Blog
  {
    id: "idBlog-1",
    seconderyId: "1",
    blogShortHeading: "BLOG one Short Heading",
    BlogLongHeading: "BLOG one Long Heading...",
    blogPostedOnDate: "October 4, 2022",
    blogAuthor: AuthorFahad,
    blogDisplayPara:
      "Est eu in ut ea do amet ad dolor eiusmod ut proident id Lorem incididunt. Sit nulla pariatur mollit tempor. Lorem id sint eu aliquip sit exercitation labore dolore minim. Aliqua quis in deserunt labore.",
    blogPara1:
      "Nostrud consequat pariatur nulla culpa labore eu magna incididunt sint ipsum eu mollit. Eiusmod quis nostrud esse nisi consectetur qui eu enim duis reprehenderit in est laborum nostrud. Pariatur laboris laboris non culpa. Cillum occaecat et veniam Lorem voluptate in est laboris culpa tempor est esse eiusmod dolore. Aute non voluptate nostrud proident enim pariatur nostrud nostrud. Aliqua minim aliquip enim irure aute excepteur sint labore cupidatat veniam aliqua. Ad commodo officia aliquip nulla qui.",
    blogPara2:
      "Duis cupidatat ex aute aliquip reprehenderit ex do occaecat cupidatat amet fugiat. Est ea cillum tempor cupidatat eu non. Ad cillum aliquip aliqua ullamco consectetur incididunt nostrud aute duis velit incididunt. Fugiat occaecat enim irure adipisicing exercitation proident.",
    blogPara3:
      "Sunt ea veniam adipisicing reprehenderit excepteur elit sit do dolor. Cillum occaecat adipisicing proident laborum Lorem irure velit veniam proident irure ex voluptate labore. Consequat tempor cupidatat sint deserunt in. Duis sunt duis qui eiusmod dolor voluptate sint nostrud ullamco et. Cillum esse proident eu id qui aute id sit voluptate magna irure. Cillum velit dolor mollit pariatur dolor consectetur esse enim..",
    blogImg: "img/demos/industry-factory/blog/blog-11.jpg",
    blogPostBigImage: "img/demos/industry-factory/blog/blog-11.jpg",
  },
  // 2nd Blog
  {
    id: "idBlog-2",
    seconderyId: "2",
    blogShortHeading: "BLOG Two Short Heading",
    BlogLongHeading: "BLOG Two Long Heading...",
    blogPostedOnDate: "October 17, 2022",
    blogAuthor: AuthorFahadBhai,
    blogDisplayPara:
      "Exercitation est reprehenderit velit adipisicing culpa do nostrud ex non. Qui nisi nulla nisi ex veniam officia do cillum mollit. Deserunt amet do enim proident culpa minim sint ut elit. Cillum mollit sit cupidatat sunt consectetur consequat consectetur. Voluptate mollit cillum cupidatat amet culpa non id duis adipisicing amet Lorem dolor esse.",
    blogPara1:
      "Eiusmod ad sit nostrud do aliquip. Eiusmod magna consectetur amet occaecat tempor. Incididunt velit ullamco nostrud amet laboris irure exercitation dolor dolore.",
    blogPara2:
      "Ullamco id anim fugiat officia occaecat. Officia aliqua irure labore ad est reprehenderit voluptate quis enim ea commodo in consequat tempor. Enim qui et sint et. Ea reprehenderit tempor elit aliqua veniam incididunt do labore officia. Enim reprehenderit voluptate commodo non consequat aliquip eiusmod. Aliqua ipsum mollit incididunt esse do consectetur aute.",
    blogPara3:
      "Proident ad non consectetur ad ad consequat labore. Eiusmod duis qui est consectetur dolore est ullamco id occaecat ullamco adipisicing velit non. Nisi esse veniam qui velit excepteur exercitation nisi quis excepteur aliquip. Dolor ad ipsum nulla sunt mollit ea ipsum laboris est laborum. Ipsum dolor aliqua reprehenderit occaecat nisi officia amet.",

    blogImg: "img/demos/industry-factory/blog/blog-12.jpg",
    blogPostBigImage: "img/demos/industry-factory/blog/blog-12.jpg",
  },
  // 3rd Blog

  {
    id: "idBlog-3",
    seconderyId: "3",
    blogShortHeading: "BLOG Three Short Heading",
    BlogLongHeading: "BLOG Three Long Heading...",
    blogPostedOnDate: "October 17, 2022",
    blogAuthor: AuthorFahadBhai,
    blogDisplayPara:
      "Exercitation est reprehenderit velit adipisicing culpa do nostrud ex non. Qui nisi nulla nisi ex veniam officia do cillum mollit. Deserunt amet do enim proident culpa minim sint ut elit. Cillum mollit sit cupidatat sunt consectetur consequat consectetur. Voluptate mollit cillum cupidatat amet culpa non id duis adipisicing amet Lorem dolor esse.",
    blogPara1:
      "pteur proident. Aliquip ullamco do do ad. Nisi amet non ex tempor ex ullamco ea laboris aute esse ad occaecat.",
    blogPara2:
      "Ullamco id anim fugiat officia occaecat. Officia aliqua irure labore ad est reprehenderit voluptate quis enim ea commodo in consequat tempor. Enim qui et sint et. Ea reprehenderit tempor elit aliqua veniam incididunt do labore officia. Enim reprehenderit voluptate commodo non consequat aliquip eiusmod. Aliqua ipsum mollit incididunt esse do consectetur aute.",
    blogPara3:
      "Proident ad non consectetur ad ad consequat labore. Eiusmod duis qui est consectetur dolore est ullamco id occaecat ullamco adipisicing velit non. Nisi esse veniam qui velit excepteur exercitation nisi quis excepteur aliquip. Dolor ad ipsum nulla sunt mollit ea ipsum laboris est laborum. Ipsum dolor aliqua reprehenderit occaecat nisi officia amet.",

    blogImg: "img/demos/industry-factory/blog/blog-13.jpg",
    blogPostBigImage: "img/demos/industry-factory/blog/blog-13.jpg",
  },

  
  // 4th Blog

  {
    id: "idBlog-4",
    seconderyId: "4",
    blogShortHeading: "BLOG Four Short Heading",
    BlogLongHeading: "BLOG Four Long Heading...",
    blogPostedOnDate: "January 01, 2022",
    blogAuthor: AuthorFahadBhai,
    blogDisplayPara:
      "Exercitation est reprehenderit velit adipisicing culpa do nostrud ex non. Qui nisi nulla nisi ex veniam officia do cillum mollit. Deserunt amet do enim proident culpa minim sint ut elit. Cillum mollit sit cupidatat sunt consectetur consequat consectetur. Voluptate mollit cillum cupidatat amet culpa non id duis adipisicing amet Lorem dolor esse.",
    blogPara1:
      "Nulla qui consequat amet aliqua eu laborum occaecat ex aute mollit aute cillum consequat. Et pariatur laborum amet anim voluptate veniam adipisicing excepteur proident. Aliquip ullamco do do ad. Nisi amet non ex tempor ex ullamco ea laboris aute esse ad occaecat.",
    blogPara2:
      "Ullamco id anim fugiat officia occaecat. Officia aliqua irure labore ad est reprehenderit voluptate quis enim ea commodo in consequat tempor. Enim qui et sint et. Ea reprehenderit tempor elit aliqua veniam incididunt do labore officia. Enim reprehenderit voluptate commodo non consequat aliquip eiusmod. Aliqua ipsum mollit incididunt esse do consectetur aute.",
    blogPara3:
      "Proident ad non consectetur ad ad consequat labore. Eiusmod duis qui est consectetur dolore est ullamco id occaecat ullamco adipisicing velit non. Nisi esse veniam qui velit excepteur exercitation nisi quis excepteur aliquip. Dolor ad ipsum nulla sunt mollit ea ipsum laboris est laborum. Ipsum dolor aliqua reprehenderit occaecat nisi officia amet.",

    blogImg: "img/demos/industry-factory/blog/blog-11.jpg",
    blogPostBigImage: "img/demos/industry-factory/blog/blog-11.jpg",
  },

 
];

for (const singleBlogPost of iLEDBlogPosts) {
  if (ElidBlogsContainer) {
    ElidBlogsContainer.innerHTML += ` <div class="pt-5 BxBlogPost col-lg-6 isotope-item text-start">
  <article class="card custom-post-style-1 border-0">
    <header class="overlay overlay-show">
      <img
        id="blogImg"
        class="img-fluid"
        src="${singleBlogPost.blogImg}"
        alt="Blog Post Thumbnail 1"
      />
      <h4
        class="font-weight-bold text-6 position-absolute bottom-0 left-0 z-index-2 ms-4 mb-4 pb-2 ps-2 pe-5 me-5"
      >
        <a
          id="${singleBlogPost.id}" onclick="FnClickedBlog('${singleBlogPost.id}')"
          href="blog-post.html"
          class="text-color-light text-decoration-none"
          >${singleBlogPost.BlogLongHeading}</a
        >
      </h4>
    </header>
    <div class="card-body">
      <ul
        class="list list-unstyled custom-font-secondary pb-1 mb-2"
      >
        <li
          class="list-inline-item line-height-1 me-1 mb-0"
        >
          ${singleBlogPost.blogPostedOnDate}
        </li>
        <li
          class="d-inline-block list-inline-item vertical-divider border-color-dark px-2 line-height-1 me-1"
        >
          ${singleBlogPost.blogAuthor}
        </li>
      </ul>
      <p class="custom-text-size-1 mb-2">
        ${singleBlogPost.blogDisplayPara}
      </p>
      <a
        id="${singleBlogPost.id}"
        onclick="FnClickedBlog('${singleBlogPost.id}')"
        href="blog-post.html"
        class="text-color-primary font-weight-bold text-decoration-underline custom-text-size-1"
        >Read More...</a
      >
    </div>
  </article>
</div>`;
    ElSideBlogsInfo.innerHTML += `
  <p
  
  class="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none"
>
 ${singleBlogPost.blogAuthor}
</p>
<a  id="${singleBlogPost.id}" onclick="FnClickedBlog('${singleBlogPost.id}')"
href="blog-post.html" 
  class="text-color-dark text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4"
  >${singleBlogPost.blogShortHeading}</a
>`;
  }
}


const loadIndexBlogs=()=>{
const ELidindexBlogsSection=document.getElementById('idindexBlogsSection');
// const ElidIndex1stBlogImg=document.getElementById('idIndex1stBlogImg');

    if (ELidindexBlogsSection){
        ELidindexBlogsSection.innerHTML=``;
        const lastThreeBlogs = iLEDBlogPosts.slice(-3);
        for (const singleLatestBlog of lastThreeBlogs){
            ELidindexBlogsSection.innerHTML+=`<div class="col-md-7 col-lg-4 pe-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="450" style="animation-delay: 450ms;">
            <article class="card custom-post-style-1 border-color-grey-1 pt-2">
              <header class="overlay overlay-show">
                <img class="img-fluid" src="${singleLatestBlog.blogImg}" alt="Agile-Methodology">
                <h4 class="font-weight-bold text-6 position-absolute bottom-0 left-0 z-index-2 ms-4 mb-4 pb-2 ps-2 pe-5 me-5">
                  <a id="${singleLatestBlog.id}" onclick="FnClickedBlog('${singleLatestBlog.id}')" href="blog-post.html" class="text-color-light text-decoration-none">${singleLatestBlog.blogShortHeading}</a>
                </h4>
              </header>
              <div class="card-body">
                <ul class="list list-unstyled custom-font-secondary pb-1 mb-2">
                  <li class="list-inline-item line-height-1 me-1 mb-0">${singleLatestBlog.blogPostedOnDate}</li>
                  <li class="d-inline-block list-inline-item vertical-divider border-color-dark px-2 line-height-1 me-1">${singleLatestBlog.blogAuthor}</li>
                </ul>
                <p class="custom-text-size-1 mb-2">${singleLatestBlog.blogPara1}</p>
                <a id="${singleLatestBlog.id}" onclick="FnClickedBlog('${singleLatestBlog.id}')"  href="blog-post.html" class="text-color-primary font-weight-bold text-decoration-underline custom-text-size-1">Read More...</a>
              </div>
            </article>
          </div>`
        }

    }
}
// Loading latest Blogs on index Page
for (const singleblogPostForIndex of iLEDBlogPosts){
    

}

const FnClickedBlog = (ClickedBlog) => {
  sessionStorage.setItem("ClickedBlogPost", ClickedBlog);
};
loadIndexBlogs()