// ********** VENDERING FROM PAGE PRODUCT DETAILS : START *************

const ElidProductName = document.getElementById("idProductName");
const ElidProductHeadingLine = document.getElementById("idProductHeadingLine");
const ElidProductDetail_one = document.getElementById("idProductDetail_one");
const ElidProductDetail_two = document.getElementById("idProductDetail_two");
const ElidtagLine_one = document.getElementById("idtagLine_one");
const ElidtagLine_two = document.getElementById("idtagLine_two");
const ElidtagLine_three = document.getElementById("idtagLine_three");
// const ElproductDetailImages=document.getElementById("productDetailImages");

//  ********* VENDERING ALL PRPERTY NAMES OF THE THREE TABLES ********

//  ********* TABLE's Heading: START ********
const ElidDisplaySpecs = document.getElementById("idDisplaySpecs");
const ElidEngineeringSpecs = document.getElementById("idEngineeringSpecs");
const ElidManufacSpecs = document.getElementById("idManufacSpecs");
//  ********* TABLE's Heading: END ********

const ElpixelPitch = document.getElementById("pixelPitch");
const Elresolution = document.getElementById("resolution");
const Elbrightness = document.getElementById("brightness");
const ElrefreshRate = document.getElementById("refreshRate");
const Elcontrast5000 = document.getElementById("contrast5000");
const ElcolorDepth = document.getElementById("colorDepth");
const ElviewingAngle = document.getElementById("viewingAngle");
const EldiodeType = document.getElementById("diodeType");
const ElindoorOutdoor = document.getElementById("indoorOutdoor");
const EloperatingTemprature = document.getElementById("operatingTemprature");
const EloperatingHumidity = document.getElementById("operatingHumidity");
const ElenviromentRating = document.getElementById("enviromentRating");
const Elweight = document.getElementById("weight");
const ElweightMetric = document.getElementById("weightMetric");
const Eldimensions = document.getElementById("dimensions");
const EldimensionsMetric = document.getElementById("dimensionsMetric");
const ElpanelPower = document.getElementById("panelPower");
const Elinstallation = document.getElementById("installation");
const EloperatingVoltageAC = document.getElementById("operatingVoltageAC");
const Elcertifiations = document.getElementById("certifiations");

// ********** VENDERING FROM PAGE PRODUCT DETAILS : END *************
//
//
// ********** VEDERING FROM PAGE PRODUCTS :START
const ElidAllProductsContainer = document.getElementById(
  "idAllProductsContainer"
);
// ********** VEDERING FROM PAGE PRODUCTS :END
//
// if some column data is Not available the we wil use this variable
const NotAvailable = "N/A";
const clickedProduct = sessionStorage.getItem("productId");



//  ************* ALL PRODUCTS DATA OF ILED: START  **************
//  ************* NEW PRODUCT CAN BE ADDED HERE   **************
const ourProducts = [

//Indoor Led Display-PRODUCTS : START

  // COB LED Series
  {
    id: "COBLEDSeries",
    productName: "COB LED Series",
    productHeadingLine:
      "for COB LED Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of COB LED Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
     // this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/COBLEDSERIES/IndoorFixeddieCast.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Back",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/COBLEDSERIES/IndoorFixedDieCast2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/COBLEDSERIES/IndoorFixeddieCast.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // COB LED Shelf Ribbon Display
  {
    id: "COBLEDShelfRibbonDisplay",
    productName: "COB LED Shelf Ribbon Display",
    productHeadingLine:
      "for COB LED Shelf Ribbon Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain for COB LED Shelf Ribbon Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of COB LED Shelf Ribbon Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/COBLEDSHELFRIBBONDISPLAY/Front/iledscreenShelfLedRibbonsFront.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/COBLEDSHELFRIBBONDISPLAY/Image1.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/COBLEDSHELFRIBBONDISPLAY/Image2.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  
  // FI Series
  {
    id: "FISeries",
    productName: "FI Series",
    productHeadingLine:
      "for FI Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of FI Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/FISERIES/FrontImage/iledscreenIndoorFIxedLedDisplayFront.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/FISERIES/iledscreenIndoorFIxedeDisplay.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/FISERIES/iledscreenIndoorFIxedLeddisplay1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/FISERIES/iledscreenIndoorFIxedLedDisplay2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/FISERIES/iledscreenIndoorFIxedLedDisplay3.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  
  // iLEX Series
  {
    id: "iLEXSeries",
    productName: "iLEX Series",
    productHeadingLine:
      "for iLEX Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of iLEX Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/iLEXSeries/iLexSeriesII/Front/iledscreenrentalLedDisplay.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  
  // UHD iPoster Series
  {
    id: "UHDiPosterSeries",
    productName: "UHD iPoster Series",
    productHeadingLine:
      "for UHD iPoster Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of UHD iPoster Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDiPOSTERSERIES/Front/iledscreenFloorStandingLedDisplay.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDiPOSTERSERIES/iledscreenFloorStandingLedDisplay1.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDiPOSTERSERIES/iledscreenFloorStandingLedDisplay2.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDiPOSTERSERIES/iledscreenFloorStandingLedDisplay3.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDiPOSTERSERIES/iledscreenFloorStandingLedDisplay4.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDiPOSTERSERIES/iledscreenFloorStandingLedDisplay5.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  // UHD Ultra Series
  {
    id: "UHDUltraSeries",
    productName: "UHD Ultra Series",
    productHeadingLine:
      "for UHD Ultra Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of UHD Ultra Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/Front/iledscreenULTRALEDSERIEScabinetFront.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/iledscreenULTRALEDSERIEScabinet1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/iledscreenULTRALEDSERIEScabinet2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/iledscreenULTRALEDSERIEScabinet3.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/iledscreenULTRALEDSERIEScabinet4.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/iledscreenULTRALEDSERIEScabinet5.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/UHDULTRASERIES/iledscreenULTRALEDSERIEScabinet6.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  
  // UL TransparentLED Display
  {
    id: "ULTransparentLEDDisplay",
    productName: "UL TransparentLED Display",
    productHeadingLine:
      "for UL TransparentLED Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of UL TransparentLED Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/ULTRANSPARENTLEDDISPLAY/FrontImage/iledscreenTransparentLedDisplayFront.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/ULTRANSPARENTLEDDISPLAY/iledscreenTransparentLedDisplay1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/ULTRANSPARENTLEDDISPLAY/iledscreenTransparentLedDisplay2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/ULTRANSPARENTLEDDISPLAY/iledscreenTransparentLedDisplay3.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/ULTRANSPARENTLEDDISPLAY/iledscreenTransparentLedDisplay4.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/INDOORLEDDISPLAY/INDOORLEDDISPLAY/ULTRANSPARENTLEDDISPLAY/iledscreenTransparentLedDisplay5.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // OUTDOOR LED DISPLAY - PRODUCTS : START

  
  //Outdoor Fixed LED Display
  {
    id: "OutdoorFixedLEDDisplay",
    productName: "Outdoor Fixed LED Display",
    productHeadingLine:
      "for Outdoor Fixed LED Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Outdoor Fixed LED Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/OutdoorFixedLedDisplay/FrontImage/iledscreenOutdorFixedLedDisplayFront.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/OutdoorFixedLedDisplay/iledscreenOutdoorFixedLedDisplay1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/OutdoorFixedLedDisplay/iledscreenOutdoorFixedLedDisplay2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/OutdoorFixedLedDisplay/iledscreenOutdoorFixedLedDisplay3.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/OutdoorFixedLedDisplay/iledscreenOutdoorFixedLedDisplay4.jpg",
      },
      
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  

  // Parameter LED Display
  {
    id: "ParameterLEDDisplay",
    productName: "Parameter LED Display",
    productHeadingLine:
      "for Parameter LED Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Parameter LED Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/Frontimag/iledscreenParameterLedDisplayFront.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/iledscreenParameterLedDisplay1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/iledscreenParameterLedDisplay2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/iledscreenParameterLedDisplay3.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/iledscreenParameterLedDisplay4.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/iledscreenParameterLedDisplay5.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/ParameterLedDisplay/iledscreenParameterLedDisplay6.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
  

  // Street Pole
  {
    id: "StreetPole",
    productName: "Street Pole",
    productHeadingLine:
      "for Street Pole...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Street Pole When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/StreetPole/FrontImage/lampPosterLedDisplayFront.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/StreetPole/lampPosterLedDisplay1.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
    

  //Taxi Top
  {
    id: "TaxiTop",
    productName: "Taxi Top",
    productHeadingLine:
      "for Taxi Top...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Taxi Top When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    // this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/Taxitop/FrontImage/iledscreenTaxitopNewFront.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/Taxitop/iledscreenTaxitopNew1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OUTDOORLEDDISPLAY/OUTDOORLEDDISPLAY/Taxitop/iledscreenTaxitopNew2.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },
    

  

  // STAGING iLED SOLUTION:START

  


  // iLex Series I
  {
    id: "iLexSeriesI",
    productName: "iLex Series I",
    productHeadingLine:
      "for iLex Series I...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of iLex Series I When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/STAGING Solutions/iLex series I/Front Image/iledscreen - iLEX SERIES - indoor&Outdoor rental led display.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // iLex Series II
  {
    id: "iLexSeriesII",
    productName: "iLex Series II",
    productHeadingLine:
      "for iLex Series II...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of iLex Series II When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // iOmni Series I
  {
    id: "iOmniSeriesI",
    productName: "iOmni Series I",
    productHeadingLine:
      "for iOmni Series I...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of iOmni Series I When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // iOmni Series II
  {
    id: "iOmniSeriesII",
    productName: "iOmni Series II",
    productHeadingLine:
      "for iOmni Series II...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of iOmni Series II When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // CUSTOMIZED iLED SOLUTION:START



  // Mobile Digital Signage
  {
    id: "MobileDigitalSignage",
    productName: "Mobile Digital Signage",
    productHeadingLine:
      "for Mobile Digital Signage...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Mobile Digital Signage When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // Gas Petrol Led Display
  {
    id: "GasPetrolLedDisplay",
    productName: "Gas Petrol Led Display",
    productHeadingLine:
      "for Gas Petrol Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Gas Petrol Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // Single Line Led Display
  {
    id: "SingleLineLedDisplay",
    productName: "Single Line Led Display",
    productHeadingLine:
      "for Single Line Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Single Line Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },

  // Bespoke Led Display
  {
    id: "BespokeLedDisplay",
    productName: "Bespoke Led Display",
    productHeadingLine:
      "for Bespoke Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Bespoke Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/product-details/3dHologram/3dhologramOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - 3d hologram.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/3dHologram/iledscreen - HD 3d Hologram iFan 500mm.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "50A" }, { value: "70A" }, { value: "43A" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "500000" },
          { value: "1200000" },
          { value: "100800" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1600nits" },
          { value: "1600nits" },
          { value: "1600nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "5000:1" }, { value: "5000:1" }, { value: "5000:1" }],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [{ value: "14bit" }, { value: "14bit" }, { value: "14bit" }],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "140/140" },
          { value: "140/140" },
          { value: "140/140" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [{ value: "SMD" }, { value: "SMD" }, { value: "SMD" }],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [{ value: "10/35" }, { value: "-20/60" }, { value: "-20/60" }],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "0 to 70%" },
          { value: "0 to 70%" },
          { value: "0 to 70%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip45" }, { value: "Ip45" }, { value: "Ip45" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "3.6Lb" }, { value: "2.5LB" }, { value: "2.4LB" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "1.65Kg" }, { value: "1.7KG" }, { value: "1.6KG" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.6ft*1.6ft*0.3FT" },
          { value: "2.29*2.29*0.32FT" },
          { value: "1.41*0.43*0.36FT" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [{ value: "OEM" }, { value: "OEM" }, { value: "OEM" }],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [{ value: "550" }, { value: "550" }, { value: "550" }],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
          { value: "Back Maintenance" },
        ],
      },

      // Operating VoltageAC
      {
        id: "operatingVoltageAC",
        name: "Operating VoltageAC",
        Values: [
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [{ value: "CE" }, { value: "CE" }, { value: "CE" }],
      },
    ],
  },




];


//  ************* ALL PRODUCTS DATA OF ILED: END  **************


const stage = document.getElementById("owlStage");

for (const product of ourProducts) {
  if(stage){
  let item = document.createElement("div");
  item.classList.add("owl-item", "active");
  item.style.cssText = "width: 410.5px; padding-left: 5px;";

  item.innerHTML = `
    <div>
      <a id="${product.id}" onclick="FnCLickedProduct('${product.id}')" href="products-detail.html">
        <span class="thumb-info thumb-info-centered-info thumb-info-no-borders">
          <span class="thumb-info-wrapper">
            <img src="${product.imageForProductPage}" class="img-fluid" alt="">
            <span class="thumb-info-title">
              <span class="thumb-info-inner">${product.productName}</span>
              <span class="thumb-info-type">${product.id}</span>
            </span>
            <span class="thumb-info-action">
              <span class="thumb-info-action-icon"><i class="fas fa-plus"></i></span>
            </span>
          </span>
        </span>
      </a>
    </div>
  `;
  stage.appendChild(item);
}}




for (const singleProduct of ourProducts) {
  if (ElpixelPitch) {
    if (singleProduct.id === clickedProduct) {
      var TableHeadCounts = 1;
      for (const singleProperty of singleProduct.DisplayProperties) {
        if (singleProperty.id == "pixelPitch") {
          for (singleValue of singleProperty.Values) {
            ElidDisplaySpecs.innerHTML += `<th>
         
        </th>`;
       
         
        TableHeadCounts = TableHeadCounts + 1;
          }
        }
      }
    }
  }
}

const ElidProductDetailImagesContainer=document.getElementById("idProductDetailImagesContainer");
if(ElidProductDetailImagesContainer)
{
ElidProductDetailImagesContainer.innerHTML=`  
<div id="productDetailImages"
class="productImagesDetail owl-carousel stage-margin stage-margin-sm nav-primary nav-svg-arrows-1 nav-dark custom-stage-outer-box-shadow"
data-plugin-options=""
>

</div>`
const ElproductDetailImages=document.getElementById("productDetailImages");
for (const singleProductDetail of ourProducts)
 {
  if (singleProductDetail.id == clickedProduct)
   {
    for (const singleProductImage of singleProductDetail.productImages) 
    {
      ElproductDetailImages.innerHTML+=`
      <div>
      <img
        src="${singleProductImage.image}"
        class="img-fluid"
        alt="${singleProductDetail.productName}"
      />
    </div>
      `;
    
    }
  }
}

$('.productImagesDetail').owlCarousel({

  responsive: {
      0:{items: 1},
       476: {items: 1},
        768: {items: 1},
         992: {items: 1}, 
         1200: {items: 1}
  },
  autoplay: false,
  autoplayTimeout: 1000,
  autoplayHoverPause: false,
  dots: false,
  nav: true,
  loop: true,
  margin: 20,
  stagePadding: 50,
  // height:20,

  // loop:true,
  // margin:10,
  // nav:true,
  // responsive:{
  //     0:{
  //         items:1
  //     },
  //     600:{
  //         items:1
  //     },
  //     1000:{
  //         items:1
  //     }
  // }
});


}










//  ********** RENDERING DATA ON THE 3 TABLES(SPACIFICATIONS)  **********
for (const singleProduct of ourProducts) {
  if (ElpixelPitch) {
    if (singleProduct.id === clickedProduct) {
      ElidProductName.textContent = `${singleProduct.productName}`;
      ElidProductHeadingLine.textContent = `${singleProduct.productHeadingLine}`;
      ElidProductDetail_one.textContent = `${singleProduct.productDetail}`;
    
      ElidtagLine_one.textContent = `${singleProduct.tagLine_one}`;
      ElidtagLine_two.textContent = `${singleProduct.tagLine_two}`;
      ElidtagLine_three.textContent = `${singleProduct.tagLine_three}`;

      for (const singleProperty of singleProduct.DisplayProperties) {
        if (singleProperty.id == "pixelPitch") {
          for (singleValue of singleProperty.Values) {
            ElpixelPitch.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "resolution") {
          for (singleValue of singleProperty.Values) {
            Elresolution.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "brightness") {
          for (singleValue of singleProperty.Values) {
            Elbrightness.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "refreshRate") {
          for (singleValue of singleProperty.Values) {
            ElrefreshRate.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "contrast5000") {
          for (singleValue of singleProperty.Values) {
            Elcontrast5000.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "colorDepth") {
          for (singleValue of singleProperty.Values) {
            ElcolorDepth.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "viewingAngle") {
          for (singleValue of singleProperty.Values) {
            ElviewingAngle.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "diodeType") {
          for (singleValue of singleProperty.Values) {
            EldiodeType.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }

        // ENGINEERING Table

        if (singleProperty.id == "indoorOutdoor") {
          for (singleValue of singleProperty.Values) {
            ElindoorOutdoor.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "operatingTemprature") {
          for (singleValue of singleProperty.Values) {
            EloperatingTemprature.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "operatingHumidity") {
          for (singleValue of singleProperty.Values) {
            EloperatingHumidity.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "enviromentRating") {
          for (singleValue of singleProperty.Values) {
            ElenviromentRating.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "weight") {
          for (singleValue of singleProperty.Values) {
            Elweight.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "weightMetric") {
          for (singleValue of singleProperty.Values) {
            ElweightMetric.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "dimensions") {
          for (singleValue of singleProperty.Values) {
            Eldimensions.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "dimensionsMetric") {
          for (singleValue of singleProperty.Values) {
            EldimensionsMetric.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "panelPower") {
          for (singleValue of singleProperty.Values) {
            ElpanelPower.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }

        // Manufacturing Table

        if (singleProperty.id == "installation") {
          for (singleValue of singleProperty.Values) {
            Elinstallation.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "operatingVoltageAC") {
          for (singleValue of singleProperty.Values) {
            EloperatingVoltageAC.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
        if (singleProperty.id == "certifiations") {
          for (singleValue of singleProperty.Values) {
            Elcertifiations.innerHTML += `<td>${singleValue.value}</td>`;
          }
        }
      }
    }
  }
}


//  ********** Product Container:START **********
for (const singleProduct of ourProducts) {
  if (ElidAllProductsContainer) {
    ElidAllProductsContainer.innerHTML += `
    
    <div class="col-md-6 col-lg-4 mb-4">
    <article>
      <div class="card border-0 border-radius-0 box-shadow-1">
        <div class="card-body p-4 z-index-1">
          <a  id="${singleProduct.id}" onclick="FnCLickedProduct('${singleProduct.id}') "href="products-detail.html">
            <img
              class="card-img-top border-radius-0 mb-4"
              src="${singleProduct.imageForProductPage}"
              alt="${singleProduct.productName}"
            />
          </a>
          <div class="card-body p-0">
            <h4 class="card-title mb-3 text-5 font-weight-semibold">
              <a
                class="text-color-dark text-color-hover-primary text-decoration-none"
                id="${singleProduct.id}" onclick="FnCLickedProduct('${singleProduct.id}') "href="products-detail.html"
                >${singleProduct.productName}</a
              >
            </h4>
            <p class="card-text ProdSectionProdPara  mb-0">
              ${singleProduct.productHeadingLine}
            </p>
            <div class="row pt-2 pb-0">
            <div class="col pb-0">
              <p class="pb-0 text-3 text-color-primary text-4" style="margin-bottom: 0px;">Specifications</p>
            </div>
          </div>
          <!-- Hr -->
            <div class="container-fluid pt-0">
              <div class="row">
                <div class="col" style="padding-left: 0; padding-right: 0;">
                  <hr class="mt-2 mb-2 ">
                </div>
              </div>
            </div>
              
            <div class="row pt-2">
              <div class="col-6">
                <p class="text-color-dark text-3" style="font-weight: bolder;">Pixel Pitch :  </p>
              </div>
              <div class="col-6">
                <p id="ProdSectionProdPixelPitch1" class="text-color-dark text-3" style="font-weight: bolder;">${singleProduct.pixelPitch}  </p>
              
              </div>
            </div>
            
            <div class="row">
              <div class="col-6">
                <p class="text-color-dark text-3 pb-0" style="font-weight: bolder; margin-bottom: 0px;">Aspect Ratio :  </p>
              </div>
              <div class="col-6">
                <p  id="ProdSectionProdPixelAspRatio1" class="text-color-dark text-3" style="font-weight: bolder;">${singleProduct.aspectRatio}</p>
              
              </div>
            </div>
            
            <div class="row">
              <div class="col-6">
                <p class="text-color-dark text-3" style="font-weight: bolder;">Install & Service :  </p>
              </div>
              <div class="col-6">
                <p  id="ProdSectionProdInstallService1" class="text-color-dark text-3" style="font-weight: bolder;">${singleProduct.installAndService}</p>
              
              </div>
            </div>
            <a  id="${singleProduct.id}" onclick="FnCLickedProduct('${singleProduct.id}') "href="products-detail.html" class="custom-read-more btn btn-link d-inline-flex align-items-center font-weight-semibold text-decoration-none ps-0"
            >
              VIEW MORE
              <svg
                class="ms-2"
                version="1.1"
                viewBox="0 0 15.698 8.706"
                width="17"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <polygon
                  stroke="#FFF"
                  stroke-width="0.1"
                  fill="#FFF"
                  points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </article>
  </div>`;
  }
}

//  ********** Product Container:END **********




// Two Products On Index Page:START
function printProducts() {
  const ElProdSectionProdImage1=document.getElementById("ProdSectionProdImage1");
  const ElProdSectionProdImage2=document.getElementById("ProdSectionProdImage2");

  const ElProdSectionProdHeading1=document.getElementById("ProdSectionProdHeading1") 
  const ElProdSectionProdHeading2=document.getElementById("ProdSectionProdHeading2")

  const ElProdSectionProdPara1=document.getElementById("ProdSectionProdPara1");
  const ElProdSectionProdPara2=document.getElementById("ProdSectionProdPara2");

  const ElProdSectionProdPixelPitch1=document.getElementById("ProdSectionProdPixelPitch1");
  const ElProdSectionProdPixelPitch2=document.getElementById("ProdSectionProdPixelPitch2");

  const ElProdSectionProdPixelAspRatio1=document.getElementById("ProdSectionProdPixelAspRatio1");
  const ElProdSectionProdPixelAspRatio2=document.getElementById("ProdSectionProdPixelAspRatio2");
  
  const ElProdSectionProdInstallService1=document.getElementById("ProdSectionProdInstallService1");
  const ElProdSectionProdInstallService2=document.getElementById("ProdSectionProdInstallService2");

  const ElProdSectionProdReadMore1=document.getElementById("ProdSectionProdReadMore1");
  const ElProdSectionProdReadMore2=document.getElementById("ProdSectionProdReadMore2");

  if(ElProdSectionProdHeading1){
    let productsCounter = 0;
    const intervalId = setInterval(function() {
      // exit the interval if all products have been printed
      if (productsCounter >= ourProducts.length) {
        clearInterval(intervalId);
        productsCounter = 0;
        printProducts();
        return;
      }
      // print the current product name and the next product name

      ElProdSectionProdImage1.style=`background-image: url(${ourProducts[productsCounter].imageForProductPage}); padding-right: 0;`;
      ElProdSectionProdHeading1.textContent=`${ourProducts[productsCounter].productName}`
      ElProdSectionProdPara1.textContent=`${ourProducts[productsCounter].productDetail}`
      ElProdSectionProdPixelPitch1.textContent=`${ourProducts[productsCounter].pixelPitch}`;
      ElProdSectionProdPixelAspRatio1.textContent=`${ourProducts[productsCounter].aspectRatio}`;
      ElProdSectionProdInstallService1.textContent=`${ourProducts[productsCounter].installAndService}`;
      ElProdSectionProdReadMore1.setAttribute("onclick", `FnCLickedProduct('${ourProducts[productsCounter].id}')`);

      if(productsCounter+1< ourProducts.length)
      {
        ElProdSectionProdImage2.style=`background-image: url(${ourProducts[productsCounter+1].imageForProductPage}); padding-right: 0;`;
        ElProdSectionProdHeading2.textContent=`${ ourProducts[productsCounter+1].productName}`
        ElProdSectionProdPara2.textContent=`${ ourProducts[productsCounter+1].productDetail}`
        ElProdSectionProdPixelPitch2.textContent=`${ourProducts[productsCounter+1].pixelPitch}`;
        ElProdSectionProdInstallService2.textContent=`${ourProducts[productsCounter+1].installAndService}`;
        ElProdSectionProdPixelAspRatio2.textContent=`${ourProducts[productsCounter+1].aspectRatio}`;
        ElProdSectionProdReadMore2.setAttribute("onclick", `FnCLickedProduct('${ourProducts[productsCounter+1].id}')`);
       
      }


      // increment the counter by 2
     let UpdatedNumner= productsCounter += 2;
    }, 5000);

  }
}
printProducts();
// Two Products On Index Page:END


















