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
// Rendering Header Elements
ElidHeaderSales.innerHTML = `
Sales:
<a
  href="tel:+1234567890"
  class="text-color-dark text-color-hover-primary text-decoration-none"
  ><strong>123-456-789</strong></a
>
`;

ElidHeaderService.innerHTML = `
Services:
<a
  href="tel:+1234567890"
  class="text-color-dark text-color-hover-primary text-decoration-none"
  ><strong>123-456-789</strong></a
>`;
ElidHeaderFacebook.innerHTML = ` <a
href="http://www.facebook.com/"
target="_blank"
title="Facebook"
><i class="fab fa-facebook-f"></i
></a>`;
ElidHeaderTwitter.innerHTML = ` <a
href="http://www.twitter.com/"
target="_blank"
title="Twitter"
><i class="fab fa-twitter"></i
></a>`;

ElidHeaderInstagram.innerHTML = ` <a
href="http://www.instagram.com/"
target="_blank"
title="Instagram"
><i class="fab fa-instagram"></i
></a>`;

ElidHeaderGetQuote.innerHTML = `GET A QUOTE <i class="fas fa-arrow-right ms-2"></i>`;
if(ElidHeaderGetQuote2){
  ElidHeaderGetQuote2.innerHTML = `GET A QUOTE <i class="fas fa-arrow-right ms-2"></i>`;}

ElidHeaderLogo.src = `img/demos/industry-factory/logo.png`;
// ElidHeaderLogo.style.width = `123`;
// ElidHeaderLogo.style.height = `23`;

ElidHeaderLinkHome.textContent = `Home`;
ElidHeaderLinkHome.href = `index.html`;

ElidHeaderLinkAboutUs.textContent = `About Us`;
ElidHeaderLinkAboutUs.href = `about-us.html`;

ElidHeaderlinkProducts.textContent = `Products`;
ElidHeaderlinkProducts.href = `products.html`;

ElidHeaderLinkMarkets.textContent = `Markets`;
ElidHeaderLinkMarkets.href = `#`;

ElidHeaderLinkSupport.textContent = `Support`;
ElidHeaderLinkSupport.href = `services.html`;

ElidHeaderLinkContactUs.textContent = `Contact`;
ElidHeaderLinkContactUs.href = `contact.html`;

const FnCLickedProduct = (CLickedProductId) => {
  clikedProduct = sessionStorage.setItem("productId", CLickedProductId);
};
