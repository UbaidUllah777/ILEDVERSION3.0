const ElidHeaderSales = document.getElementById("idHeaderSales");
const ElidHeaderService = document.getElementById("idHeaderService");
const ElidHeaderFacebook = document.getElementById("idHeaderFacebook");
const ElidHeaderTwitter = document.getElementById("idHeaderTwitter");
const ElidHeaderInstagram = document.getElementById("idHeaderInstagram");
const ElidHeaderGetQuote = document.getElementById("idHeaderGetQuote");
const ElidHeaderGetQuote2 = document.getElementById("idHeaderGetQuote2");
const ElidHeaderLogo = document.getElementById("idHeaderLogo");
const ElidHeaderLinkHome = document.getElementById("idHeaderLinkHome");
const ElidHeaderLinkAboutUs = document.getElementById("idHeaderLinkAboutUs");
const ElidHeaderlinkProducts = document.getElementById("idHeaderlinkProducts");
const ElidHeaderLinkMarkets = document.getElementById("idHeaderLinkMarkets");
const ElidHeaderLinkSupport = document.getElementById("idHeaderLinkSupport");
const ElidHeaderLinkContactUs = document.getElementById(
  "idHeaderLinkContactUs"
);



var product_3DHOLOGRAM = "3D HOLOGRAM"
var product_Outdoor_Fixed_Series = "Outdoor Fixed Series"
var product_UL_TRANSPARENT_LED_DISPLAY = "UL TRANSPARENT LED DISPLAY"
var product_ILED_SPECIAL_TILE_Series="ILED SPECIAL TILE Series"
var product_IB_SERIES="IB SERIES (BLACK LED)"
var product_TAXI_TOP="TAXI TOP"
var product_STREET_POLE="STREET POLE"
var product_ILEX_SERIES="ILEX SERIES"
// Rendering Header Elements
ElidHeaderSales.innerHTML = `
Sales:
<a
  href="tel:+8613556848438"
  class="text-color-dark text-color-hover-primary text-decoration-none"
  ><strong>+8613556848438</strong></a
>
`;

ElidHeaderService.innerHTML = ``;
ElidHeaderFacebook.innerHTML = ` <a
href="https://www.facebook.com/iledscreen"
target="_blank"
title="Facebook"
><i class="fab fa-facebook-f"></i
></a>`;
ElidHeaderTwitter.innerHTML = ` <a
href="https://twitter.com/NickHan09748088"
target="_blank"
title="Twitter"
><i class="fab fa-twitter"></i
></a>`;

ElidHeaderInstagram.innerHTML = ` <a
href="https://www.instagram.com/iledscreen/"
target="_blank"
title="Instagram"
><i class="fab fa-instagram"></i
></a>`;

ElidHeaderGetQuote.innerHTML = `GET A QUOTE <i class="fas fa-arrow-right ms-2"></i>`;
if(ElidHeaderGetQuote2){
  ElidHeaderGetQuote2.innerHTML = `GET A QUOTE <i class="fas fa-arrow-right ms-2"></i>`;}

ElidHeaderLogo.src = `img/demos/iLEDv3/logo.png`;
// ElidHeaderLogo.style.width = `123`;
// ElidHeaderLogo.style.height = `23`;

ElidHeaderLinkHome.textContent = `Home`;
ElidHeaderLinkHome.href = `index.html`;

ElidHeaderLinkAboutUs.textContent = `About Us`;
ElidHeaderLinkAboutUs.href = `about-us.html`;

ElidHeaderlinkProducts.textContent = `Products`;
ElidHeaderlinkProducts.href = `products.html`;

ElidHeaderLinkMarkets.textContent = `Markets`;
ElidHeaderLinkMarkets.href = `market.html`;

ElidHeaderLinkSupport.textContent = `Support`;
ElidHeaderLinkSupport.href = `support.html`;

ElidHeaderLinkContactUs.textContent = `Contact`;
ElidHeaderLinkContactUs.href = `contact.html`;

const FnCLickedProduct = (CLickedProductId) => {
  clikedProduct = sessionStorage.setItem("productId", CLickedProductId);
};

const ElidIdexFormProductHeading=document.getElementById('idIdexFormProductHeading');
const ElidIdexFormProductdetail=document.getElementById('idIdexFormProductdetail');
const ElidIdexFormProductImage=document.getElementById('idIdexFormProductImage');

const changeSelect=()=>{
  if(ElidIdexFormProductHeading){
    var e = document.getElementById("idProductDropDown");
    var ProductValue = e.value;
    var selectedProductHeading = e.options[e.selectedIndex].text;
    ElidIdexFormProductHeading.textContent=selectedProductHeading;

    if(ProductValue== product_3DHOLOGRAM)
    {

      ElidIdexFormProductdetail.textContent=`When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.`;
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/3dHologram.png';
    }
  

    if(ProductValue==product_Outdoor_Fixed_Series)
    {

      ElidIdexFormProductdetail.textContent=`Eiusmod ad culpa reprehenderit sint cillum voluptate amet mollit. Ad qui est aute duis. Veniam do ex nisi mollit proident. Laboris Lorem incididunt do ex. Incididunt proident nisi culpa fugiat Lorem ad non labore reprehenderit. Deserunt ullamco occaecat laborum esse sint duis et commodo adipisicing aute ad anim incididunt incididunt. Ex veniam veniam aute incididunt tempor aliquip dolore ex proident in consequat., Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.`;
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/outDoorFixedSeries.png';
    }
  

    if(ProductValue==product_UL_TRANSPARENT_LED_DISPLAY)
    {

      ElidIdexFormProductdetail.textContent=`Veniam ut dolor excepteur ullamco proident aliqua aliquip magna duis enim. Commodo officia mollit eiusmod magna voluptate non deserunt sint enim. Et mollit qui ut duis quis voluptate incididunt cupidatat est nisi adipisicing. Voluptate non laboris quis ea dolore irure dolor occaecat nulla tempor irure. Est sint culpa ullamco minim. you just aren’t sure, give us a call.`;
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/UL-transparent-led-display.png';
    }
  

    if(ProductValue==product_ILED_SPECIAL_TILE_Series)
    {

      ElidIdexFormProductdetail.textContent=`Laborum veniam elit proident aute sunt non quis non anim. Mollit sunt aliqua consequat in ipsum culpa consectetur veniam irure. Officia in sunt eiusmod mollit. Consequat et cupidatat exercitation duis exercitation reprehenderit do adipisicing non consequat. Et incididunt ullamco ex qui fugiat do adipisicing dolore magna nostrud ut proident commodo quis. Est dolor aliqua laboris et sit minim sunt laboris.`;
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/ILED_Special_Tile_Series.png';
    }
  

    if(ProductValue==product_IB_SERIES)
    {

      ElidIdexFormProductdetail.textContent=`Nostrud et laboris exercitation in veniam eiusmod anim non. Nulla cupidatat et deserunt duis et tempor tempor enim minim. Voluptate nulla pariatur in velit esse. Minim nostrud occaecat ipsum elit fugiat qui veniam minim consequat esse ea. Nisi eu duis veniam aute tempor amet dolore ex labore. Ipsum do cupidatat consequat et. Velit nulla aute esse do fugiat.`;
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/iledscreen-black-led-2.png';
    }
  

    if(ProductValue==product_TAXI_TOP)
    {

      ElidIdexFormProductdetail.textContent=`asdasdasd Eiusmod id sint dolor in ullamco magna consectetur exercitation dolore non fugiat incididunt. Cupidatat irure dolore sint aliquip occaecat excepteur deserunt et laborum anim excepteur. Deserunt incididunt ea magna ad velit sint ullamco adipisicing aliqua. Amet minim duis occaecat in id amet ex magna aliqua ipsum. Exercitation amet aliquip aliqua dolore eiusmod Lorem aute. Id sint incididunt tempor proident irure aliquip.`;      
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/TaxiTopLed.jpg';
    }
  

    if(ProductValue==product_STREET_POLE)
    {

      ElidIdexFormProductdetail.textContent=`Proident dolor minim duis proident ad non dolore do ut sint qui velit esse cupidatat. Incididunt laborum aute laborum cupidatat ad aliqua id. Culpa nostrud dolor Lorem consequat sunt. Ut nostrud cupidatat amet ea Lorem. Ea commodo labore veniam nisi elit non occaecat eiusmod labore. Velit est veniam esse aute amet dolore sit non excepteur. Eiusmod veniam Lorem ad anim ullamco ullamco quis irure sit ipsum.`;      
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/streetPoleLed.jpg';
    }
  

    if(ProductValue==product_ILEX_SERIES)
    {

      ElidIdexFormProductdetail.textContent=`Consequat elit fugiat eu ex minim exercitation elit eu. Ad quis do excepteur sit Lorem ea ullamco magna laborum proident fugiat amet. Nostrud consectetur est sit commodo id officia amet qui. Laborum esse incididunt sit aliqua Lorem ea. Velit consequat culpa incididunt duis enim aute elit est exercitation consequat aliquip exercitation reprehenderit. Mollit ut eu adipisicing sunt excepteur culpa proident excepteur. Ut esse deserunt elit do esse commodo mollit ea adipisicing esse sint culpa.`;      
      ElidIdexFormProductImage.src='img/demos/iLEDv3/products1/led-ilex-series.jpg';
    }
  
  
  }
}





const modalChangeSelect=()=>{
  
const ElidModalFormProductHeading=document.getElementById('idModalFormProductHeading');
const ElidModalFormProductdetail=document.getElementById('idModalFormProductdetail');
const ElidModalFormProductImage=document.getElementById('idModalFormProductImage');
  if(ElidModalFormProductHeading){
    var modalDropDown = document.getElementById("idModalProductDropDown");
    var modalProductValue = modalDropDown.value;
    var selectedProductHeading = modalDropDown.options[modalDropDown.selectedIndex].text;
    ElidModalFormProductHeading.textContent=selectedProductHeading;

    if(modalProductValue== product_3DHOLOGRAM)
    {

      ElidModalFormProductdetail.textContent=`When you’re ready to invest in a fiX install display, or add more products to your rental inventory, we invite you to rely on our many years of LED Display technology experience and our broad range of products, Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.`;
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/3dHologram.png';
    }
  

    if(modalProductValue==product_Outdoor_Fixed_Series)
    {

      ElidModalFormProductdetail.textContent=`Eiusmod ad culpa reprehenderit sint cillum voluptate amet mollit. Ad qui est aute duis. Veniam do ex nisi mollit proident. Laboris Lorem incididunt do ex. Incididunt proident nisi culpa fugiat Lorem ad non labore reprehenderit. Deserunt ullamco occaecat laborum esse sint duis et commodo adipisicing aute ad anim incididunt incididunt. Ex veniam veniam aute incididunt tempor aliquip dolore ex proident in consequat., Already familiar with ILed Screen Product Series, feel free to browse below, if you just aren’t sure, give us a call.`;
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/outDoorFixedSeries.png';
    }
  

    if(modalProductValue==product_UL_TRANSPARENT_LED_DISPLAY)
    {

      ElidModalFormProductdetail.textContent=`Veniam ut dolor excepteur ullamco proident aliqua aliquip magna duis enim. Commodo officia mollit eiusmod magna voluptate non deserunt sint enim. Et mollit qui ut duis quis voluptate incididunt cupidatat est nisi adipisicing. Voluptate non laboris quis ea dolore irure dolor occaecat nulla tempor irure. Est sint culpa ullamco minim. you just aren’t sure, give us a call.`;
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/UL-transparent-led-display.png';
    }
  

    if(modalProductValue==product_ILED_SPECIAL_TILE_Series)
    {

      ElidModalFormProductdetail.textContent=`Laborum veniam elit proident aute sunt non quis non anim. Mollit sunt aliqua consequat in ipsum culpa consectetur veniam irure. Officia in sunt eiusmod mollit. Consequat et cupidatat exercitation duis exercitation reprehenderit do adipisicing non consequat. Et incididunt ullamco ex qui fugiat do adipisicing dolore magna nostrud ut proident commodo quis. Est dolor aliqua laboris et sit minim sunt laboris.`;
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/ILED_Special_Tile_Series.png';
    }
  

    if(modalProductValue==product_IB_SERIES)
    {

      ElidModalFormProductdetail.textContent=`Nostrud et laboris exercitation in veniam eiusmod anim non. Nulla cupidatat et deserunt duis et tempor tempor enim minim. Voluptate nulla pariatur in velit esse. Minim nostrud occaecat ipsum elit fugiat qui veniam minim consequat esse ea. Nisi eu duis veniam aute tempor amet dolore ex labore. Ipsum do cupidatat consequat et. Velit nulla aute esse do fugiat.`;
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/iledscreen-black-led-2.png';
    }
  

    if(modalProductValue==product_TAXI_TOP)
    {

      ElidModalFormProductdetail.textContent=`asdasdasd Eiusmod id sint dolor in ullamco magna consectetur exercitation dolore non fugiat incididunt. Cupidatat irure dolore sint aliquip occaecat excepteur deserunt et laborum anim excepteur. Deserunt incididunt ea magna ad velit sint ullamco adipisicing aliqua. Amet minim duis occaecat in id amet ex magna aliqua ipsum. Exercitation amet aliquip aliqua dolore eiusmod Lorem aute. Id sint incididunt tempor proident irure aliquip.`;      
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/TaxiTopLed.jpg';
    }
  

    if(modalProductValue==product_STREET_POLE)
    {

      ElidModalFormProductdetail.textContent=`Proident dolor minim duis proident ad non dolore do ut sint qui velit esse cupidatat. Incididunt laborum aute laborum cupidatat ad aliqua id. Culpa nostrud dolor Lorem consequat sunt. Ut nostrud cupidatat amet ea Lorem. Ea commodo labore veniam nisi elit non occaecat eiusmod labore. Velit est veniam esse aute amet dolore sit non excepteur. Eiusmod veniam Lorem ad anim ullamco ullamco quis irure sit ipsum.`;      
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/streetPoleLed.jpg';
    }
  

    if(modalProductValue==product_ILEX_SERIES)
    {

      ElidModalFormProductdetail.textContent=`Consequat elit fugiat eu ex minim exercitation elit eu. Ad quis do excepteur sit Lorem ea ullamco magna laborum proident fugiat amet. Nostrud consectetur est sit commodo id officia amet qui. Laborum esse incididunt sit aliqua Lorem ea. Velit consequat culpa incididunt duis enim aute elit est exercitation consequat aliquip exercitation reprehenderit. Mollit ut eu adipisicing sunt excepteur culpa proident excepteur. Ut esse deserunt elit do esse commodo mollit ea adipisicing esse sint culpa.`;      
      ElidModalFormProductImage.src='img/demos/iLEDv3/products1/led-ilex-series.jpg';
    }
  
  
  }
}
