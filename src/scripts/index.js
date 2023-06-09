import 'regenerator-runtime';
import '../styles/main.css';
import AppBar from './components/appbar';
import HeroApp from './components/hero';
import ExploreApp from './components/explore';
import footers from './components/footer';
import Typed from 'typed.js'
import jsonData from '../public/data/DATA.json';
const datas = jsonData.restaurants;
const dataList = datas.map(data => `
  <div class="col"> 
    <div class="card">
      <div class="card-image">
        <img src="${data.pictureId}" alt="${data.name}"/>
      </div>
      <div class="card-content">
        <div class="card-category">${data.city}</div>
        <div class="card-rating"><a href="">Rating: &#x2b50;</a>${data.rating}</div>
        <div class="card-title">${data.name}</div>
        <div class="card-description">
          <p>${data.description.slice(0, 100)}...</p>
        </div>
      </div>
    </div>
  </div>
`).join('');
document.querySelector('#list').innerHTML = dataList;

// Typing Automation
var typed = new Typed('#typing', {
    strings: ['<b>Cicipi Kreativitas</b>', '<b>Sentuhan Rasa Lokal</b>', '<b>Ruang Rasa Yang Aman</b>', '<b>Gaya Hidup Kuliner</b>', '<b>Makanan Sehat Senyum Bahagia</b>'],
    typeSpeed: 100,
    loop: true,
  });