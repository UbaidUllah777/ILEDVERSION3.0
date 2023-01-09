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
  // 3D Hologram
  {
    id: "3DHOLOGRAM",
    productName: "3D Hologram",
    productHeadingLine:
      "for 3D HOLOGRAM...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of 3D HOLOGRAM When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage: "img/demos/iLEDv3/products/3DHOLOGRAM.jpg",
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

  // Outdoor Fixed Series
  {
    id: "OutDoorFixedSeries",
    productName: "Outdoor Fixed Series",
    productHeadingLine:
      "Outdoor Fixed Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of Outdoor Fixed Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage:
      "img/demos/iLEDv3/products/OutdoorFixedSeries.jpg",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/outDoorFixedLED/outDoorFixedLED-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/outDoorFixedLED/outDoorFixedLED-2.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/outDoorFixedLED/outDoorFixedLED-3.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/outDoorFixedLED/outDoorFixedLED-4.png",
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

  // UL TRANSPARENT LED DISPLAY
  {
    id: "UlTransparentLedDisplay",
    productName: "UL Transparent LED Display",
    productHeadingLine:
      "UL TRANSPARENT LED DISPLAY...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain ",
    productDetail:
      "Detail of UL TRANSPARENT LED DISPLAY When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage:
      "img/demos/iLEDv3/products/ULTransparentDisplay.png",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-2.png.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-3.png",
      },
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-4.png",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-5.png",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-6.png",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-7.jpg",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-8.jpg",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-9.png",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/ULTransparentLedDisplay/UL-transparent-led-display-10.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [
          { value: "P3.91" },
          { value: "P3.91" },
          { value: "P7.82" },
          { value: "P7.82" },
        ],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "2500nits" },
          { value: "1200nits" },
          { value: "4500nits" },
          { value: "2500nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: "1920Hz, 3840Hz" },
          { value: " 1920Hz, 3840Hz" },
          { value: " 1920Hz, 3840Hz" },
          { value: " 1920Hz, 3840Hz" },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
          { value: NotAvailable },
        ],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [
          { value: "14bit" },
          { value: "14bit" },
          { value: "14bit" },
          { value: "14bit" },
        ],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "160/120" },
          { value: "160/120" },
          { value: "160/120" },
          { value: "160/120" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [
          { value: "SMD" },
          { value: "SMD" },
          { value: "SMD" },
          { value: "SMD" },
        ],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [
          { value: "Indoor" },
          { value: "Indoor" },
          { value: "Indoor" },
          { value: "Indoor" },
        ],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [
          { value: "-10 ~ 100  F" },
          { value: "-10 ~ 100  F" },
          { value: "-10 ~ 100  F" },
          { value: "-10 ~ 100  F" },
        ],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "40%" },
          { value: "40%" },
          { value: "40%" },
          { value: "40%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [
          { value: "Ip45" },
          { value: "Ip45" },
          { value: "Ip45" },
          { value: "Ip45" },
        ],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
        ],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [
          { value: "13Kg" },
          { value: "13Kg" },
          { value: "13Kg" },
          { value: "13Kg" },
        ],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.64ft*1.64ft" },
          { value: "1.64ft*1.64ft" },
          { value: "1.64ft*1.64ft" },
          { value: "1.64ft*1.64ft" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
        ],
      },

      //  Panel Power
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [
          { value: "800/250" },
          { value: "800/250" },
          { value: "800/250" },
          { value: "800/250" },
        ],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back Side" },
          { value: "Back Side" },
          { value: "Back Side" },
          { value: "Back Side" },
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
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [
          { value: "CE" },
          { value: "CE" },
          { value: "CE" },
          { value: "CE" },
        ],
      },
    ],
  },

  // ILED SPECIALL TILE SERIES
  {
    id: "IledSpecialTileSeries",
    productName: "ILED Special Tile Series",
    productHeadingLine:
      "ILED SPECIAL TILE Series...Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of ILED SPECIAL TILE Series When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage:
      "img/demos/iLEDv3/products/IledSpecialTileSeries.jpg",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/IledSpecialTileSeries/ILED_Special_Tile_Series-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/IledSpecialTileSeries/ILED_Special_Tile_Series-2.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/IledSpecialTileSeries/ILED_Special_Tile_Series-3.jpg",
      },
      
      {
        image: "img/demos/iLEDv3/product-details/IledSpecialTileSeries/ILED_Special_Tile_Series-4.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "P1.95" }, { value: "P2.5" }, { value: "P2.6" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [{ value: "65746" }, { value: "32873" }, { value: "100800" }],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "800nits" },
          { value: "800nits" },
          { value: "800nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: "1920Hz, 3840Hz" },
          { value: "1920Hz, 3840Hz" },
          { value: "1920Hz, 3840Hz" },
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
        Values: [{ value: "16bit" }, { value: "16bit" }, { value: "16bit" }],
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
        Values: [
          { value: "-10 ~ 80 F" },
          { value: "-10 ~ 80 F" },
          { value: "-10 ~ 80 F" },
        ],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [{ value: "40%" }, { value: "40%" }, { value: "40%" }],
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
        Values: [
          { value: "8.8/6.61/7.7Ib" },
          { value: "8.8/6.61/7.7Ib" },
          { value: "8.8/6.61/7.7Ib" },
        ],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [
          { value: "4/3/3.5Kg" },
          { value: "4/3/3.5Kg" },
          { value: "4/3/3.5Kg" },
        ],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "28”x2.36”x1.18” " },
          { value: "28”x2.36”x1.18” " },
          { value: "28”x2.36”x1.18” " },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [
          { value: "1000/500/750" },
          { value: "1000/500/750" },
          { value: "1000/500/750" },
        ],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [
          { value: "100/80/90" },
          { value: "100/80/90" },
          { value: "100/80/90" },
        ],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
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

  // IB SERIES (BLACK LED)
  {
    id: "IbSeriesBlackLed",
    productName: "IB Series (BLACK LED)",
    productHeadingLine:
      "IB SERIES  Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of IB SERIES When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage:
      "img/demos/iLEDv3/products/IbSeriesBlackLed.png",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/IbSeriesBlackLed/iledscreen - black led (1).png",
      },
      {
        image: "img/demos/iLEDv3/product-details/IbSeriesBlackLed/iledscreen - black led (2).png",
      },
      {
        image: "img/demos/iLEDv3/product-details/IbSeriesBlackLed/iledscreen - black led (3).png",
      },
      {
        image: "img/demos/iLEDv3/product-details/IbSeriesBlackLed/iledscreen - black led (4).png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [
          { value: "P1.25" },
          { value: "P1.56" },
          { value: "P1.66" },
          { value: "P2.5" },
        ],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "160×120" },
          { value: "128×96" },
          { value: "120×90" },
          { value: "104×78" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "800nits" },
          { value: "800nits" },
          { value: "800nits" },
          { value: "800nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: "3840Hz" },
          { value: "3840Hz" },
          { value: "3840Hz" },
          { value: "3840Hz" },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [
          { value: "5000:1" },
          { value: "5000:1" },
          { value: "5000:1" },
          { value: "5000:1" },
        ],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [
          { value: "14bit" },
          { value: "14bit" },
          { value: "14bit" },
          { value: "14bit" },
        ],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "160/160" },
          { value: "160/160" },
          { value: "160/160" },
          { value: "160/160" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [
          { value: "SMD" },
          { value: "SMD" },
          { value: "SMD" },
          { value: "SMD" },
        ],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [
          { value: "Indoor" },
          { value: "Indoor" },
          { value: "Indoor" },
          { value: "Indoor" },
        ],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [
          { value: "-10 ~ 80 F " },
          { value: "-10 ~ 80 F " },
          { value: "-10 ~ 80 F " },
          { value: "-10 ~ 80 F " },
        ],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "40%" },
          { value: "40%" },
          { value: "40%" },
          { value: "40%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [
          { value: "Ip45" },
          { value: "Ip45" },
          { value: "Ip45" },
          { value: "Ip45" },
        ],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
        ],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [
          { value: "32Kg" },
          { value: "32Kg" },
          { value: "32Kg" },
          { value: "32Kg" },
        ],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
        ],
      },

      // power panel
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [
          { value: "1600" },
          { value: "1600" },
          { value: "1600" },
          { value: "1600" },
        ],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
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

  // TAXI TOP
  {
    id: "TaxiTop",
    productName: "Taxi Top",
    productHeadingLine:
      "TAXI TOP Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "detail of TAXI TOP When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage: "img/demos/iLEDv3/products/TaxiTop.jpg",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/TaxiTop/TaxiTopLed-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/TaxiTop/TaxiTopLed-2.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/TaxiTop/TaxiTopLed-3.jpg",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "P2.5" }, { value: "P3" }, { value: "P4" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "160x160" },
          { value: "128x96" },
          { value: "120x90" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "1500nits" },
          { value: "800nits" },
          { value: "800nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [{ value: "1920Hz" }, { value: "1920Hz" }, { value: "1920Hz" }],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [{ value: "3000:1" }, { value: "3000:1" }, { value: "3000:1" }],
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
        Values: [
          { value: "Outdoor" },
          { value: "Outdoor" },
          { value: "Outdoor" },
          { value: "Outdoor" },
        ],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [
          { value: "-10 ~ 100 F" },
          { value: "-10 ~ 100 F" },
          { value: "-10 ~ 100 F" },
          { value: "-10 ~ 100 F" },
        ],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "100%" },
          { value: "100%" },
          { value: "100%" },
          { value: "100%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [
          { value: "Ip65" },
          { value: "Ip65" },
          { value: "Ip65" },
          { value: "Ip65" },
        ],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
        ],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [
          { value: "32Kg" },
          { value: "32Kg" },
          { value: "32Kg" },
          { value: "32Kg" },
        ],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
        ],
      },

      // Power panel
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [
          { value: "1600" },
          { value: "1600" },
          { value: "1600" },
          { value: "1600" },
        ],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
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
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [
          { value: "CE" },
          { value: "CE" },
          { value: "CE" },
          { value: "CE" },
        ],
      },
    ],
  },

  // STREET POLE
  {
    id: "StreetPole",
    productName: "Street Pole",
    productHeadingLine:
      "STREET POLE Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage: "img/demos/iLEDv3/products/StreetPole.jpg",
    productImages: [
      {
        image: "img/demos/iLEDv3/product-details/StreetPole/streetPoleLed-1.png",
      },
      {
        image: "img/demos/iLEDv3/product-details/StreetPole/streetPoleLed-2.png",
      },
      {
        image: "img/demos/iLEDv3/product-details/StreetPole/streetPoleLed-3.png",
      },
      {
        image: "img/demos/iLEDv3/product-details/StreetPole/streetPoleLed-4.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [{ value: "P3" }, { value: "P4" }, { value: "P5" }],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [{ value: "64x63 " }, { value: "80x40" }, { value: "64x32" }],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "4200nits" },
          { value: "5000nits" },
          { value: "5500nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [{ value: "1920Hz" }, { value: "1920Hz" }, { value: "1920Hz" }],
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
        Values: [{ value: "16bit" }, { value: "16bit" }, { value: "16bit" }],
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
        Values: [
          { value: "Outdoor" },
          { value: "Outdoor" },
          { value: "Outdoor" },
        ],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [
          { value: "-10 ~ 100 F" },
          { value: "-10 ~ 100 F" },
          { value: "-10 ~ 100 F" },
        ],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [{ value: "100%" }, { value: "100%" }, { value: "100%" }],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [{ value: "Ip65" }, { value: "Ip65" }, { value: "Ip65" }],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [{ value: "99Ib" }, { value: "99Ib" }, { value: "99Ib" }],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [{ value: "45Kg" }, { value: "45Kg" }, { value: "45Kg" }],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "2.2ft*4.4ft" },
          { value: "1.96*3.9ft" },
          { value: "2.8*4.85ft" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [
          { value: "676*1352mm" },
          { value: "600*1200mm" },
          { value: "868*1480mm" },
        ],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [
          { value: "400W-1200W" },
          { value: "400W-1200W" },
          { value: "400W-1200W" },
        ],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
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

  // ILEX SERIES
  {
    id: "IlexSeries",
    productName: "ILEX Series",
    productHeadingLine:
      "ILEX SERIES Slim, Ultra-thin frame touch structure set weight 32KG Easy to handle and maintain .",
    productDetail:
      "Detail of ILEX SERIES When you’re ready to invest in a fic install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Alraeady familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.",
    tagLine_one: "Slim",
    tagLine_two: "Ultra-thin",
    tagLine_three: "Easy to Handle",
    imageForProductPage: "img/demos/iLEDv3/products/IlexSeries.jpg",
    productImages: [
      {
        image:
          "img/demos/iLEDv3/product-details/IlexSeries/led-ilex-series-1.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/IlexSeries/led-ilex-series-2.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/IlexSeries/led-ilex-series-3.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/IlexSeries/led-ilex-series-4.jpg",
      },
      {
        image: "img/demos/iLEDv3/product-details/IlexSeries/led-ilex-series-5.png",
      },
    ],
    DisplayProperties: [
      // Pixel Pitch
      {
        id: "pixelPitch",
        name: "Pixel Pitch",
        Values: [
          { value: "P2.6" },
          { value: "2.97" },
          { value: "3.91" },
          { value: "3.91" },
        ],
      },

      // Resolution
      {
        id: "resolution",
        name: "Resolution",
        Values: [
          { value: "160×120" },
          { value: "128x96" },
          { value: "120x90" },
          { value: "104x78" },
        ],
      },

      // Brightness
      {
        id: "brightness",
        name: "Brightness",
        Values: [
          { value: "800nits" },
          { value: "800nits" },
          { value: "800nits" },
          { value: "1000nits" },
        ],
      },

      // Refresh Rate
      {
        id: "refreshRate",
        name: "Refresh Rate",
        Values: [
          { value: "3840Hz" },
          { value: "3840Hz" },
          { value: "3840Hz" },
          { value: "3840Hz" },
        ],
      },

      // Contrast 5000
      {
        id: "contrast5000",
        name: "Contrast_5000",
        Values: [
          { value: "5000:1" },
          { value: "5000:1" },
          { value: "5000:1" },
          { value: "5000:1" },
        ],
      },

      // Color Depth
      {
        id: "colorDepth",
        name: "Color Depth",
        Values: [
          { value: "14bit" },
          { value: "14bit" },
          { value: "14bit" },
          { value: "14bit" },
        ],
      },

      // Viewing Angle
      {
        id: "viewingAngle",
        name: "Viewing Angle",
        Values: [
          { value: "160/160" },
          { value: "160/160" },
          { value: "160/160" },
          { value: "160/160" },
        ],
      },

      // Diode Type
      {
        id: "diodeType",
        name: "Diode Type",
        Values: [
          { value: "SMD" },
          { value: "SMD" },
          { value: "SMD" },
          { value: "SMD" },
        ],
      },

      //    ************ENGINEERING TABLE*************

      // Indoor/Outdoor
      {
        id: "indoorOutdoor",
        name: "Indoor/Outdoor",
        Values: [{ value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }, { value: "Indoor" }],
      },

      // Operating Temprature
      {
        id: "operatingTemprature",
        name: "Operating Temprature",
        Values: [
          { value: "-10 ~ 800 F" },
          { value: "-10 ~ 800 F" },
          { value: "-10 ~ 800 F" },
          { value: "-10 ~ 800 F" },
        ],
      },

      // Operating Humidity
      {
        id: "operatingHumidity",
        name: "Operating Humidity",
        Values: [
          { value: "40%" },
          { value: "40%" },
          { value: "40%" },
          { value: "40%" },
        ],
      },

      // Enviroment Rating
      {
        id: "enviromentRating",
        name: "Enviroment Rating",
        Values: [
          { value: "Ip45" },
          { value: "Ip45" },
          { value: "Ip45" },
          { value: "Ip45" },
        ],
      },

      // Weight
      {
        id: "weight",
        name: "Weight",
        Values: [
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
          { value: "70.5Ib" },
        ],
      },

      // Weight Metric
      {
        id: "weightMetric",
        name: "Weight Metric",
        Values: [
          { value: "32Kg" },
          { value: "32Kg" },
          { value: "32Kg" },
          { value: "32Kg" },
        ],
      },

      // Dimensions
      {
        id: "dimensions",
        name: "Dimensions",
        Values: [
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
          { value: "1.31ft*1.00ft" },
        ],
      },

      // Dimensions Metric
      {
        id: "dimensionsMetric",
        name: "Dimensions Metric",
        Values: [
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
          { value: "OEM" },
        ],
      },

      // Dimensions Metric
      {
        id: "panelPower",
        name: "Panel Power",
        Values: [
          { value: "1600" },
          { value: "1600" },
          { value: "1600" },
          { value: "1600" },
        ],
      },

      //    ************Manufacturing AND BUILD TABLE*************

      // Dimensions Metric
      {
        id: "installation",
        name: "Installation",
        Values: [
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
          { value: "Back side" },
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
          { value: "AC 100 – 240V" },
        ],
      },

      // Certifiations
      {
        id: "certifiations",
        name: "Certifiations",
        Values: [
          { value: "CE" },
          { value: "CE" },
          { value: "CE" },
          { value: "CE" },
        ],
      },
    ],
  },
];


//  ************* ALL PRODUCTS DATA OF ILED: END  **************




for (const singleProduct of ourProducts) {
  if (ElpixelPitch) {
    if (singleProduct.id === clickedProduct) {
      var i = 1;
      for (const singleProperty of singleProduct.DisplayProperties) {
        if (singleProperty.id == "pixelPitch") {
          for (singleValue of singleProperty.Values) {
            ElidDisplaySpecs.innerHTML += `<th>
         
        </th>`;
       
         
            i = i + 1;
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


//  ********** Product Container **********
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
