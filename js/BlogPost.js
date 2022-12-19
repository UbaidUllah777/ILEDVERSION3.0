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
}
