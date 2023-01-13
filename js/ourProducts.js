// ********** VENDERING FROM PAGE PRODUCT DETAILS : START *************

const ElidProductName = document.getElementById("idProductName");
const ElidProductHeadingLine = document.getElementById("idProductHeadingLine");
const ElidProductDetail_one = document.getElementById("idProductDetail_one");
const ElidProductDetail_two = document.getElementById("idProductDetail_two");
const ElidtagLine_one = document.getElementById("idtagLine_one");
const ElidtagLine_two = document.getElementById("idtagLine_two");
const ElidtagLine_three = document.getElementById("idtagLine_three");
const ElproductDetailImages=document.getElementById("productDetailImages");

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

  // iHD Series
  {
    id: "iHDSeries",
    productName: "iHD Series",
    productHeadingLine:
      "for iHD Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of iHD Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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

  // Shelf Led Ribbon
  {
    id: "ShelfLedRibbon",
    productName: "Shelf Led Ribbon",
    productHeadingLine:
      "for Shelf Led Ribbon...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Shelf Led Ribbon When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/inDoorLedDisplay/SHELFRIBBONDISPLAY/ShelfLedDisplayForIndex.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/inDoorLedDisplay/SHELFRIBBONDISPLAY/ShelfLedDisplay-1.png",
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
  
  // Indoor Fixed Led Display
  {
    id: "IndoorFixedLedDisplay",
    productName: "Indoor Fixed Led Display",
    productHeadingLine:
      "for Indoor Fixed Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Indoor Fixed Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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
  
  // Indoor Flexible Series
  {
    id: "IndoorFlexibleSeries",
    productName: "Indoor Flexible Series",
    productHeadingLine:
      "for Indoor Flexible Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Indoor Flexible Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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
  
  // Indoor Floor Standing
  {
    id: "IndoorFloorStanding",
    productName: "Indoor Floor Standing",
    productHeadingLine:
      "for Indoor Floor Standing...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Indoor Floor Standing When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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

  // OUTDOOR LED DISPLAY - PRODUCTS : START

  
  //Outdoor Fixed Led Display
  {
    id: "OutdoorFixedLedDisplay",
    productName: "Outdoor Fixed Led Display",
    productHeadingLine:
      "for Outdoor Fixed Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Outdoor Fixed Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/OutdoorFixedLedDisplay/outDoorFixedLEDOnIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/OutdoorFixedLedDisplay/outDoorFixedLED-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/OutdoorFixedLedDisplay/outDoorFixedLED-2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/OutdoorFixedLedDisplay/outDoorFixedLED-3.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/OutdoorFixedLedDisplay/outDoorFixedLED-4.png",
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
  

  // Outdoor Diecast Videowall
  {
    id: "OutdoorDiecastVideowall",
    productName: "Outdoor Diecast Videowall",
    productHeadingLine:
      "for Outdoor Diecast Videowall...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Outdoor Diecast Videowall When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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
  

  // Outdoor Floor Standing
  {
    id: "OutdoorFloorStanding",
    productName: "Outdoor Floor Standing",
    productHeadingLine:
      "for Outdoor Floor Standing...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Outdoor Floor Standing When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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
    

  //Outdoor Taxitop Display
  {
    id: "OutdoorTaxitopDisplay",
    productName: "Outdoor Taxitop Display",
    productHeadingLine:
      "for Outdoor Taxitop Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Outdoor Taxitop Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/Taxitop/TaxiTopForIndex.jpg",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/Taxitop/TaxiTop-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/Taxitop/TaxiTop-2.jpg",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/Taxitop/TaxiTop-3.jpg",
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
    

  // Perimeter Led Display
  {
    id: "PerimeterLedDisplay",
    productName: "Perimeter Led Display",
    productHeadingLine:
      "for Perimeter Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Perimeter Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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
    

  //Scoreboard Led Display
  {
    id: "ScoreboardLedDisplay",
    productName: "Scoreboard Led Display",
    productHeadingLine:
      "for Scoreboard Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Scoreboard Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
// this is also for showing product on indexPage
    imageForProductPage: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/SCOREBOARDLEDDISPLAY/SCOREBOARDLEDDISPLAYForIndex.png",
    pixelPitch:"1-2",
    aspectRatio:"0.93 - 3.1 mm ",
    installAndService:"Front",
    productImages: [
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/SCOREBOARDLEDDISPLAY/SCOREBOARDLEDDISPLAY-1.png",
      },
      {
        image: "img/demos/iLEDv3/AllProducts/OutDoorLedDisplay/SCOREBOARDLEDDISPLAY/SCOREBOARDLEDDISPLAY-2.png",
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


  // CREATIVE iLED SERIES:START

    

  // Sperical Led Ball
  {
    id: "SpericalLedBall",
    productName: "Sperical Led Ball",
    productHeadingLine:
      "for Sperical Led Ball...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Sperical Led Ball When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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


  // Square Led Display
  {
    id: "SquareLedDisplay",
    productName: "Square Led Display",
    productHeadingLine:
      "for Square Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Square Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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


  // Round Led Display
  {
    id: "RoundLedDisplay",
    productName: "Round Led Display",
    productHeadingLine:
      "for Round Led Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Round Led Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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


  // Street Pole Display
  {
    id: "StreetPoleDisplay",
    productName: "Street Pole Display",
    productHeadingLine:
      "for Street Pole Display...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Street Pole Display When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
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





for (const singleProductDetail of ourProducts){
  if(ElproductDetailImages){
    if(singleProductDetail.id==clickedProduct){
      for(const singleProductImage of singleProductDetail.productImages){
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
            <p class="card-text mb-0">
              ${singleProduct.productHeadingLine}
            </p>
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


















