const Elaccordion100=document.getElementById("accordion100");


const allSoftwares=[
    // Category-One
   {
    softwareCategory:"categ1",
    categoryName:"First Category",
    categorizedSoftwares:[

        //1st Software in categ1
        {
            softwareId:"softwareOne",
            softwareName:"software One",
           
                day:"03",
                month:"JAN",
                year:"2022",

           
            softwareDescription:"Minim in esse tempor labore cupidatat tempor Tempor tempor reprehenderit ex labore irure adipisicing. Ullamco nulla fugiat reprehenderit adipisicing irure fugiat consequat minim officia incididunt sit esse minim. Ex nulla quis sint eiusmod commodo mollit tempor aute culpa magna sunt occaecat. Irure cupidatat consectetur incididunt deserunt. Enim fugiat ipsum in consequat nostrud proident. Labore commodo proident ullamco sint aliqua reprehenderit nulla minim consequat consectetur anim mollit et laborum.nisi. Et aliqua cupidatat sit ad tempor duis sit. Minim exercitation id excepteur exercitation cupidatat officia ipsum reprehenderit proident ipsum ex quis officia laboris. Officia irure est laborum elit reprehenderit ut amet minim duis ad aliqua laboris officia elit.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },

        //2nd Software in categ1
        {
            softwareId:"softwareTwo",
            softwareName:"software Two",
           
                day:"04",
                month:"JAN",
                year:"2022",

            
            softwareDescription:"Ullamco elit sunt dolore minim id officia incididunt commodo id sint ullamco ipsum.Minim in esse tempor labore cupidatat tempor nisi.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },
        //3rd Software in categ1
        {
            softwareId:"softwarethree",
            softwareName:"software three",
           
                day:"05",
                month:"FEB",
                year:"2021",

           
            softwareDescription:"Minim in esse tempor labore cupidatat tempor nisi.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },
    ]
   } ,

   // Category-Two
   {
    softwareCategory:"categ2",
    categoryName:"Second Category",
    categorizedSoftwares:[

        //1st Software in categ2
        {
            softwareId:"softwareOne",
            softwareName:"software One",
           
                day:"13",
                month:"MAR",
                year:"2020",

            
            softwareDescription:"Minim in esse tempor labore cupidatat tempor nisi.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },

    ]
   },
   
   // Category-Three
   {
    softwareCategory:"categ3",
    categoryName:"Third Category",
    categorizedSoftwares:[

       //1st Software in categ3
       {
        softwareId:"softwareOne",
        softwareName:"software One",
       
            day:"23",
            month:"MAR",
            year:"2010",

       
        softwareDescription:"Minim in esse tempor labore cupidatat tempor Tempor tempor reprehenderit ex labore irure adipisicing. Ullamco nulla fugiat reprehenderit adipisicing irure fugiat consequat minim officia incididunt sit esse minim. Ex nulla quis sint eiusmod commodo mollit tempor aute culpa magna sunt occaecat. Irure cupidatat consectetur incididunt deserunt. Enim fugiat ipsum in consequat nostrud proident. Labore commodo proident ullamco sint aliqua reprehenderit nulla minim consequat consectetur anim mollit et laborum.nisi. Et aliqua cupidatat sit ad tempor duis sit. Minim exercitation id excepteur exercitation cupidatat officia ipsum reprehenderit proident ipsum ex quis officia laboris. Officia irure est laborum elit reprehenderit ut amet minim duis ad aliqua laboris officia elit.",
        softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
    },

    //2nd Software in categ3
    {
        softwareId:"softwareTwo",
        softwareName:"software Two",
       
            day:"04",
            month:"APR",
            year:"2011",

        
        softwareDescription:"Ullamco elit sunt dolore minim id officia incididunt commodo id sint ullamco ipsum.Minim in esse tempor labore cupidatat tempor nisi.",
        softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
    },
       
    ]
   },
   
   // Category-Four
   {
    softwareCategory:"categ4",
    categoryName:"Fourth Category",
    categorizedSoftwares:[

         //1st Software in categ4
         {
            softwareId:"softwareOne",
            softwareName:"software One",
           
                day:"23",
                month:"MAR",
                year:"2010",

           
            softwareDescription:"Minim in esse tempor labore cupidatat tempor Tempor tempor reprehenderit ex labore irure adipisicing. Ullamco nulla fugiat reprehenderit adipisicing irure fugiat consequat minim officia incididunt sit esse minim. Ex nulla quis sint eiusmod commodo mollit tempor aute culpa magna sunt occaecat. Irure cupidatat consectetur incididunt deserunt. Enim fugiat ipsum in consequat nostrud proident. Labore commodo proident ullamco sint aliqua reprehenderit nulla minim consequat consectetur anim mollit et laborum.nisi. Et aliqua cupidatat sit ad tempor duis sit. Minim exercitation id excepteur exercitation cupidatat officia ipsum reprehenderit proident ipsum ex quis officia laboris. Officia irure est laborum elit reprehenderit ut amet minim duis ad aliqua laboris officia elit.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },

        //2nd Software in categ4
        {
            softwareId:"softwareTwo",
            softwareName:"software Two",
           
                day:"04",
                month:"APR",
                year:"2011",

            
            softwareDescription:"Ullamco elit sunt dolore minim id officia incididunt commodo id sint ullamco ipsum.Minim in esse tempor labore cupidatat tempor nisi.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },
        //3rd Software in categ4
        {
            softwareId:"softwarethree",
            softwareName:"software three",
           
                day:"10",
                month:"JAN",
                year:"2023",

           
            softwareDescription:"Minim in esse tempor labore cupidatat tempor nisi.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },
        //4th Software in categ4
        {
            softwareId:"softwarefour",
            softwareName:"software four",
           
                day:"10",
                month:"JAN",
                year:"1990",

           
            softwareDescription:"Minim in esse tempor labore cupidatat tempor nisi.",
            softwareDownloadPath:"DATA_A4_V4.6.1.0.zip"
        },
    ]
   }
]


for(const singleCategory of allSoftwares){
    Elaccordion100.innerHTML+=
    `
    <div class="card card-default">
    <div class="card-header" id="collapseHeading${singleCategory.softwareCategory}">
      <h4 class="card-title m-0">
        <a class="accordion-toggle text-color-dark font-weight-bold collapsed" data-bs-toggle="collapse" data-bs-target="#${singleCategory.softwareCategory}" aria-expanded="false" aria-controls="${singleCategory.softwareCategory}">
          ${singleCategory.categoryName}
        </a>
      </h4>
    </div>
    <div id="${singleCategory.softwareCategory}" class="collapse" aria-labelledby="collapseHeading${singleCategory.softwareCategory}" data-bs-parent="#accordion100" style="">
      <div id="${singleCategory.softwareCategory}CardBody" class="card-body">
        </div>
    </div>
  </div>
    
    `;

   
}

for(const singleSoftwareCateg of allSoftwares){
    if(document.getElementById(`${singleSoftwareCateg.softwareCategory}CardBody`).id==singleSoftwareCateg.softwareCategory+'CardBody')
    {
       
       for(singleSoftware of singleSoftwareCateg.categorizedSoftwares){
        document.getElementById(`${singleSoftwareCateg.softwareCategory}CardBody`).innerHTML+=`
        <div class="row">
        <div class="col-lg-8">
        <article
          class="custom-post-event bg-color-light custom-sm-margin-bottom-2 mb-5"
          style="position: relative"
        >
          <div class="post-event-date bg-color-primary text-center">
            <span
              class="month text-uppercase custom-secondary-font text-color-light"
              >${singleSoftware.month}</span
            >
            <span class="day font-weight-bold text-color-light"
              >${singleSoftware.day}</span
            >
            <span class="year text-color-light">${singleSoftware.year}</span>
          </div>
          <div class="post-event-content custom-margin-1">
            <h4 class="font-weight-bold text-color-dark">
              <a
                href="${singleSoftware.softwareDownloadPath}"
                class="text-decoration-none custom-secondary-font text-color-dark"
              >
              ${singleSoftware.softwareName}
              </a>
            </h4>
            <p class="softwareDescription">
             ${singleSoftware.softwareDescription}
            </p>
           
          </div>
          
        </article>
      </div>
      <div class="col-lg-4">
      <ul style="list-style: none" class="mt-5">
      <li>
        <a
          href="${singleSoftware.softwareDownloadPath}"
          class="btn btn-outline btn-primary btn-with-arrow mb-2"
          >Download<span><i class="fas fa-download"></i></span
        ></a>
      </li>
    </ul>
      </div>
      </div>
      <hr class="solid" />
        `; 
       }
         
    }
}

