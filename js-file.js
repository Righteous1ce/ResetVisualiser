const heading = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
const paragraph = document.querySelectorAll('p');
const ul = document.querySelectorAll('ul');
const ol = document.querySelectorAll('ol');
const form = document.querySelectorAll('form');
const table = document.querySelectorAll('table');
const button = document.querySelectorAll('button');


function applyBrowserStyle(browser){


}


const chromeButton = document.getElementById('chrome-btn');
  chromeButton.addEventListener('click', () => applyBrowserStyle(chrome));

const firefoxButton = document.getElementById('firefox-btn');
  firefoxButton.addEventListener('click', () => applyBrowserStyle(firefox));

const safariButton = document.getElementById('safari-btn');
  safariButton.addEventListener('click', () => applyBrowserStyle(safari));

const edgeButton = document.getElementById('edge-btn');
  edgeButton.addEventListener('click', () => applyBrowserStyle(MicrosoftEdge));


