const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav links
let navLinks = document.querySelectorAll('a');

navLinks[0].textContent =siteContent.nav["nav-item-1"];

navLinks[1].textContent = siteContent.nav["nav-item-2"];

navLinks[2].textContent = siteContent.nav["nav-item-3"];

navLinks[3].textContent = siteContent.nav["nav-item-4"];

navLinks[4].textContent = siteContent.nav["nav-item-5"];

navLinks[5].textContent = siteContent.nav["nav-item-6"];

//change nav text color
for (let i = 0; i < navLinks.length; i++){
  navLinks[i].style.color = 'green';
}

//append item
let newA = document.createElement('a');
let aText = document.createTextNode("Copyright");
newA.appendChild(aText);
newA.href = "#";
document.querySelector('nav').appendChild(newA);
newA.style.color = 'green';


//prepend item
let prependA = document.createElement('a');
let preAText= document.createTextNode("Home");
prependA.appendChild(preAText);
prependA.href = "#";
document.querySelector('nav').prepend(prependA);
prependA.style.color = 'green';



//title text
const title = document.querySelector('h1');

title.textContent = siteContent.cta.h1;


//header img
let headerImg = document.getElementById("cta-img");

headerImg.src = siteContent.cta["img-src"];



//button 
const btn = document.querySelector('button');

btn.textContent = siteContent.cta.button;




//top content titles 
const mainSubTitles = document.querySelectorAll('.top-content .text-content h4');

mainSubTitles[0].textContent = siteContent["main-content"]["features-h4"];

mainSubTitles[1].textContent = siteContent["main-content"]["about-h4"];

//top content p
const topContentP = document.querySelectorAll('.top-content .text-content p');

topContentP[0].textContent = siteContent["main-content"]["features-content"];

topContentP[1].textContent = siteContent["main-content"]["about-content"];



//main content middle img
const middleImg = document.querySelector('.middle-img');

middleImg.src = siteContent["main-content"]["middle-img-src"];



//bottom content titles
const bottomTitles = document.querySelectorAll('.bottom-content .text-content h4');

bottomTitles[0].textContent = siteContent["main-content"]["services-h4"];

bottomTitles[1].textContent = siteContent["main-content"]["product-h4"];

bottomTitles[2].textContent = siteContent["main-content"]["vision-h4"];



//bottom content p
const bottomeContentP = document.querySelectorAll('.bottom-content .text-content p');

bottomeContentP[0].textContent =siteContent["main-content"]["services-content"];

bottomeContentP[1].textContent = siteContent["main-content"]["product-content"];

bottomeContentP[2].textContent = siteContent["main-content"]["vision-content"];



//contact header
const contactHead = document.querySelector('.contact h4');

contactHead.textContent = siteContent.contact["contact-h4"];



//contact p
const contactP = document.querySelectorAll('.contact p');

contactP[0].textContent = siteContent.contact.address;

contactP[1].textContent =siteContent.contact.phone;

contactP[2].textContent = siteContent.contact.email;


//footer
const footerP = document.querySelector('footer p');

footerP.textContent = siteContent.footer.copyright;





