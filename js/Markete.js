const ourMarkets=[

// Restaurant
{
        id:'idRestaurant',
        marketeHeading:'Restaurant',
        marketePara:'ILED screens increase a restaurant’s visibility in a saturated marketplace.  Full and quick service establishments see reduced labor costs and improved image quality with their marketing messaging with the use of digital compared to static letter change reader boards.  Immediate messaging can maximize restaurant owner’s profits with real time specials and impulse purchases from effective advertising content on their digital display.  NEXT software allows for flexible messaging based on the hour, day, week, or month of the year.',
        marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Restaurant.jpg',
        marketeImagesForMarketePage:[
            {Image:''},{Image:''},{Image:''},
        ]

},

// Medical
{
    id:'idMedical',
    marketeHeading:'Medical',
    marketePara:'The healthcare industry benefits from clear communication.  Patients and staff can stay up to date with important information that can lead to expedited and improved care.  Marketing services, products, and wait times engages patients in a positive way, that results in improved outcomes and quality of life.  LED Displays allow for facilities to stand out among the clutter and reach customers more effectively.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Medical.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},


// Automotive
{
    id:'idAutomotive',
    marketeHeading:'Automotive',
    marketePara:'The idea of your own marketing billboard outside of your automotive establishment is amazing.  And it has never been more affordable.  The CPM (cost per thousand impressions) with digital signs is the lowest available form of advertising available to business owners.  Paired with the flexibility of messaging options, LED displays provide quick service tools to promote all campaigns as well as specific product and services.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Automative.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},

// Banking
{
    id:'idBanking',
    marketeHeading:'Banking',
    marketePara:'Banks and credit unions can leverage LED display technology to maximize communication with their current and potential clients.  NEXT displays can dynamically update interest rates, commodities, and stock market indices in a way that will make your institution stand out and rise above the crowd.  Increase foot traffic and boost profit with easy to use software and an exceptional warranty.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Banking.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},

// Retail
{
    id:'idRetail',
    marketeHeading:'Retail',
    marketePara:'The retail industry has seen significant change over the past decade.  The increased purchasing options and marketing channels has made the effectiveness and cost difficult to digest.  On premise LED digital displays provide an increased opportunity, at a more affordable price, to reach customers with a high frequency tool designed to promote impulse stops and important product and price advantages.  Increase foot traffic with engaging content and up to date specials and offers.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Retail.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},

// Religious
{
    id:'idReligious',
    marketeHeading:'Religious',
    marketePara:'Exterior and interior LED Displays are a great way for religious organizations to raise awareness in the community and increase membership.  An outdoor monument sign provides high frequency communication; Service times, special events, weddings, community events, welcoming, volunteer recognition.  Easy to use software and content creation tools make it easy for anyone on the staff to develop and deploy quick important messaging.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Religious.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},

// Legal
{
    id:'idLegal',
    marketeHeading:'Legal',
    marketePara:'85% of customers live within a five-mile radius of your business.  LED displays provide a high-frequency tool that promotes your services to the community.  Legal providers find huge success with top of mind awareness communication.  When potential clients find a need for your service, the work of Digital displays brand awareness over time can drive profitability.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Legal.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},

// Entertainment
{
    id:'idEntertainment',
    marketeHeading:'Entertainment',
    marketePara:'Interior and exterior digital signs can bring any venue into the 21st century.  On premise outdoor, outdoor wall signs, interior LED and LCD displays, lobby spectaculars, and digital scoreboards and information displays provide guests, clients, fans, and staff opportunities to engage with the complete experience.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Entertainment.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},

// Sports
{
    id:'idSports',
    marketeHeading:'Sports',
    marketePara:'Interior and exterior digital signs can bring any sporting venue into the 21st century.  On-premise outdoor, outdoor wall signs, interior LED and LCD displays, lobby spectaculars, and digital scoreboards and information displays provide guests, clients, fans, and staff opportunities to engage with the complete experience.',
    marketeImgForIndex:'img/demos/iLEDv3/marketes/for index/Sports.jpg',
    marketeImagesForMarketePage:[
        {Image:''},{Image:''},{Image:''},
    ]

},



]
  
  

// Loading Markete Data in Index Page : START
let i = 0;
const printMarkets = setInterval(() => {
    const ELidIndexIndustryHeading =document.getElementById("idIndexIndustryHeading");
                    if(ELidIndexIndustryHeading){
                     ELidIndexIndustryHeading.textContent = ourMarkets[i].marketeHeading;
                    }
                     const ElidInexindustryImage=document.getElementById("idInexindustryImage");
                     if(ElidInexindustryImage){
                         ElidInexindustryImage.src = ourMarkets[i].marketeImgForIndex;
                     }
                     const ElidIndexIndustryPara=document.getElementById("idIndexIndustryPara");
                     if(ElidIndexIndustryPara){
                         ElidIndexIndustryPara.textContent = ourMarkets[i].marketePara;
                     }
    i++;
    if (i === ourMarkets.length) {
        i = 0;
    }
}, 5000);


// Loading Markete Data in Index Page : END



 

