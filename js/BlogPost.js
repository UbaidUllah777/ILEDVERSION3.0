const clickedBlog = sessionStorage.getItem("ClickedBlogPost");
const ElidBlogBannerHeading = document.getElementById("idBlogBannerHeading");
const ElBlogPostBigImage = document.getElementById("BlogPostBigImage");
const ElidBlogPostDate = document.getElementById("idBlogPostDate");
const ElidBlogAuthor = document.getElementById("idBlogAuthor");
const ElSideBlogsInfo2 = document.getElementById("SideBlogsInfo");
const ElidBlogPara1 = document.getElementById("idBlogPara1");
const ElidBlogPara2 = document.getElementById("idBlogPara2");
const ElidBlogPara3 = document.getElementById("idBlogPara3");

for (const singleBlogPost of iLEDBlogPosts) {
  if (singleBlogPost.id === clickedBlog) {
    if(ElidBlogBannerHeading){
      ElidBlogBannerHeading.textContent = `${singleBlogPost.BlogLongHeading}`;}
    ElBlogPostBigImage.src = `${singleBlogPost.blogPostBigImage}`;
    ElidBlogPostDate.textContent = `${singleBlogPost.blogPostedOnDate}`;
    ElidBlogAuthor.textContent = `${singleBlogPost.blogAuthor}`;
    ElidBlogPara1.textContent = `${singleBlogPost.blogPara1}`;
    ElidBlogPara2.textContent = `${singleBlogPost.blogPara2}`;
    ElidBlogPara3.textContent = `${singleBlogPost.blogPara3}`;
  }
  ElSideBlogsInfo2.innerHTML += `
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
