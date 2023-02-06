
const ElidBlogsContainer = document.getElementById("idBlogsContainer");
const ElSideBlogsInfo = document.getElementById("SideBlogsInfo");


const AuthorFahad = "Mr.Fahad";
const AuthorFahadBhai = "Mr.Fahad Bhai";

const iLEDBlogPosts = [
  // 1st Blog-- A DIGITAL SIGNAGE COMPANY BUILT FOR AIRLINES AND AIRPORTS
  {
    id: "idBlog-1",
    seconderyId: "1",
    blogShortHeading: "A DIGITAL SIGNAGE COMPANY BUILT FOR AIRLINES AND AIRPORTS",
    BlogLongHeading: "A DIGITAL SIGNAGE COMPANY BUILT FOR AIRLINES AND AIRPORTS",
    blogPostedOnDate: "February 06, 2023",
    blogAuthor: AuthorFahad,
    blogDisplayPara:
      "Airport digital signage is the use of screens and other digital displays to convey important information to travelers and sometimes employees. The aim of using screens in airports is to optimize the overall airport experience, which has great benefits in the long term. With digital airport signage, travelers will have a more pleasant experience while navigating an airport and operations will be much smoother, saving costs and many headaches.",
    blogPara1:
      "Studies have shown that employees who use digital signs are more productive than those who do not. Digital signage solutions can reduce costs by reducing staff turnover and increasing efficiency, which helps to reduce expenses associated with hiring new employees or training existing ones.",
    blogPara2:
      "You can use them in airports and airlines to provide real-time updates. Digital signage solutions enable your employees to be proactive about the upcoming events of the corporation.",
    blogPara3:
      "Airports are the critical points when dealing with customers. You deal with thousands of customers every day; Business people, tourists, domestic travelers and those who accompany them to airports. According to the International Air Transport Association (IATA), the number of air passengers passed the 4 billion mark in 2017, with a high probability of steadily increasing in the coming years. As of 2019, there was a 4.1% growth rate in air travel.Since the introduction of digital signage, airports have rapidly adopted this technology. The reason was pretty obvious. With busy schedules and crowds arriving every minute, airport digital signage solutions came to the rescue.Interactive digital signage is exactly what it sounds like: digital signage you can interact with. In case you don't know, digital signage is a type of electronic sign that displays dynamic content across multiple screens. The return on investment is not only financial, but more importantly, it makes attending the healthcare facility more satisfying for everyone.",
    blogImg: "img/demos/iLEDv3/blog/airPortLED.jpeg",
    blogPostBigImage: "img/demos/iLEDv3/blog/airPortLED.jpeg",
  },

  // 2nd Blog-- DIGITAL SIGNAGE FOR THE HOSPITALITY INDUSTRY
  {
    id: "idBlog-2",
    seconderyId: "2",
    blogShortHeading: "DIGITAL SIGNAGE FOR THE HOSPITALITY INDUSTRY",
    BlogLongHeading: "DIGITAL SIGNAGE FOR THE HOSPITALITY INDUSTRY",
    blogPostedOnDate: "February 06, 2023",
    blogAuthor: AuthorFahad,
    blogDisplayPara:
      "In hospitality, the guest experience is everything. That's why hotels and resorts work tirelessly to strengthen their reputation and provide an unmatched user experience. As a hotelier, you're probably focused on staff training, design, and amenities, but there's one thing you're probably overlooking: digital signage. ",
    blogPara1:
      "In hospitality, the guest experience is everything. That's why hotels and resorts work tirelessly to strengthen their reputation and provide an unmatched user experience. As a hotelier, you're probably focused on staff training, design, and amenities, but there's one thing you're probably overlooking: digital signage.Technology and hospitality are two sectors that have seen steady growth in recent years. As a hotelier or manager, you're probably looking for ways to create exceptional guest experiences.",
    blogPara2:
      "Studies have shown that employees who use digital signs are more productive than those who do not. Digital signage solutions can reduce costs by reducing staff turnover and increasing efficiency, which helps to reduce expenses associated with hiring new employees or training existing ones. You can use them in meetings and conferences to provide real-time updates without interrupting the meeting. Digital signage solutions enable your employees to be proactive about the upcoming events of the corporation",
    blogPara3:
      "Information can be displayed in real time to facilitate communication with patients, visitors and staff. Digital signage also allows for quick and easy content modification to ensure messages are delivered effectively. Digital signage is signage that works electronically. It typically uses LED lights, LCD screens, or plasma screens to target consumers with changing text and graphic messages. It also has a computer component or player that decodes signage content and displays it visually on the screen. Interactive digital signage is exactly what it sounds like: digital signage you can interact with. In case you don't know, digital signage is a type of electronic sign that displays dynamic content across multiple screens. The return on investment is not only financial, but more importantly, it makes attending the healthcare facility more satisfying for everyone.",

    blogImg: "img/demos/iLEDv3/blog/Restaurant.jpg",
    blogPostBigImage: "img/demos/iLEDv3/blog/Restaurant.jpg",
  },


  // 3rd Blog-- DIGITAL SIGNAGE SOLUTIONS FOR COLLEGES AND UNIVERSITIES
  {
    id: "idBlog-3",
    seconderyId: "3",
    blogShortHeading: "DIGITAL SIGNAGE SOLUTIONS FOR COLLEGES AND UNIVERSITIES",
    BlogLongHeading: "DIGITAL SIGNAGE SOLUTIONS FOR COLLEGES AND UNIVERSITIES",
    blogPostedOnDate: "February 06, 2023",
    blogAuthor: AuthorFahadBhai,
    blogDisplayPara:
      "Whether you are a private university, government school, community college, or technical institute, you know the importance of engaging students, faculty, staff, and visitors on a daily basis. Displaying timely and relevant visual messages is  key to promoting a safe and inclusive campus and building community. School digital signage can help.",
    blogPara1:
      "Whether you are a private university, government school, community college, or technical institute, you know the importance of engaging students, faculty, staff, and visitors on a daily basis. Displaying timely and relevant visual messages is  key to promoting a safe and inclusive campus and building community. School digital signage can help.",
    blogPara2:
      "Studies have shown that employees who use digital signs are more productive than those who do not.  Digital signage solutions can reduce costs by reducing staff turnover and increasing efficiency, which helps to reduce expenses associated with hiring new employees or training existing ones. You can use them in colleges and universities to provide real-time updates. Digital signage solutions enable your employees to be proactive about the upcoming events of the corporation.",
    blogPara3:
      "Publish news and announcements, promote events, promote the bookstore, view social media feeds and keep everyone updated on your athletic results, all from one centralized app. Use digital signage to welcome guests and visitors and offer campus orientation at interactive kiosks to help them navigate your facility. We can also create custom information boards, donor boards, menu boards and more. Our digital room signs are perfect solutions for your conference or training center. Our interactive signs allow you to schedule meetings at the door, and our electronic paper signs are an affordable wireless option for shared spaces. Let Visix build an enterprise campus solution that helps you engage students, improve employee satisfaction, and increase efficiency.",

    blogImg: "img/demos/iLEDv3/blog/schools.jpg",
    blogPostBigImage: "img/demos/iLEDv3/blog/schools.jpg",
  },

  
  // 4th Blog-- DIGITAL SIGNAGE SOLUTIONS FOR STADIUM AND ARENAS

  {
    id: "idBlog-4",
    seconderyId: "4",
    blogShortHeading: "DIGITAL SIGNAGE SOLUTIONS FOR STADIUM AND ARENAS",
    BlogLongHeading: "DIGITAL SIGNAGE SOLUTIONS FOR STADIUM AND ARENAS",
    blogPostedOnDate: "January 01, 2022",
    blogAuthor: AuthorFahad,
    blogDisplayPara:
      "There's no question that in today's fast-paced world, advertisers need to stay  ahead of the game and their competitors. Reaching a mass audience, both in person and on live television at large commercial events such as concerts and sports tournaments, is an effective solution. In fact, the business benefits of digital signage in multi-faceted stadiums with thousands of spectators are limitless.",
    blogPara1:
      "There's no question that in today's fast-paced world, advertisers need to stay  ahead of the game and their competitors. Reaching a mass audience, both in person and on live television at large commercial events such as concerts and sports tournaments, is an effective solution. In fact, the business benefits of digital signage in multi-faceted stadiums with thousands of spectators are limitless. Stadiums are perfectly equipped to help you get your brand messages across to as many people as possible without incurring a huge loss in revenue. Read on to learn more about the benefits of using digital signage in stadiums and arenas.",
    blogPara2:
      ": Studies have shown that employees who use digital signs are more productive than those who do not.  Digital signage solutions can reduce costs by reducing staff turnover and increasing efficiency, which helps to reduce expenses associated with hiring new employees or training existing ones. You can use them in stadiums and arenas to provide real-time updates. Digital signage solutions enable your employees to be proactive about the upcoming events of the corporation.",
    blogPara3:
      "Digital signage is one of the fastest and most efficient ways to reach  a wide audience. And unlike online marketing, which uses content  targeted to specific demographics, digital signage in stadiums and arenas allows you to drive brand awareness on a more universal level. Here are some of the ways  companies can and do use digital signage in stadiums to their advantage. Advertising always moves much faster than the market can predict. New products and services are introduced even before you  learn how to use their predecessors! This is why advertising is so effective. Digital signage is signage that works electronically. It typically uses LED lights, LCD screens, or plasma screens to target consumers with changing text and graphic messages. It also has a computer component or player that decodes signage content and displays it visually on the screen. Interactive digital signage is exactly what it sounds like: digital signage you can interact with. In case you don't know, digital signage is a type of electronic sign that displays dynamic content across multiple screens. The return on investment is not only financial, but more importantly, it makes attending the healthcare facility more satisfying for everyone.",

    blogImg: "img/demos/iLEDv3/blog/Sports.jpg",
    blogPostBigImage: "img/demos/iLEDv3/blog/Sports.jpg",
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
  }
}


for  (const singleRecentBlogs of iLEDBlogPosts.slice(-4)){
  if(ElSideBlogsInfo){
    
  ElSideBlogsInfo.innerHTML += `
  <p
  
  class="text-color-default text-uppercase text-1 mb-0 d-block text-decoration-none"
>
 ${singleRecentBlogs.blogAuthor}
</p>
<a  id="${singleRecentBlogs.id}" onclick="FnClickedBlog('${singleRecentBlogs.id}')"
href="blog-post.html" 
  class="text-color-dark text-hover-primary font-weight-bold text-3 d-block pb-3 line-height-4"
  >${singleRecentBlogs.blogShortHeading}</a
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
       

          ELidindexBlogsSection.innerHTML+=`
          <div class="col-md-4">
										<article class="post post-medium border-0 pb-0 mb-5">
											<div class="post-image">
												<a href="blog-post.html" onclick="FnClickedBlog('${singleLatestBlog.id}')" >
													<img  src="${singleLatestBlog.blogImg}" class="img-fluid img-thumbnail img-thumbnail-no-borders rounded-0" alt="">
												</a>
											</div>

											<div class="post-content">

												<h2 class="font-weight-semibold text-5 line-height-6 mt-3 mb-2"><a href="blog-post.html">${singleLatestBlog.blogShortHeading}</a></h2>
												<p ><span id="indexBlogContent">${singleLatestBlog.blogPara1}</span><a id="${singleLatestBlog.id}" onclick="FnClickedBlog('${singleLatestBlog.id}')"  href="blog-post.html" class="text-color-primary font-weight-bold text-decoration-underline custom-text-size-1">Read More...</a>
                        </p>
                        

											</div>
										</article>
									</div>
          
          `;
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