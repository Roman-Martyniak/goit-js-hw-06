const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGallery = document.querySelector('.gallery');
const el = images
  .map(img => `<li><img src = "${img.url}" alt = "${img.alt}"  width = "1260" /></li>`)
  .join('');
ulGallery.insertAdjacentHTML('beforeend', el);
ulGallery.setAttribute(
  'style',
  'list-style-type:none; display: flex; flex-direction: column; gap: 10px; justify-content: center; align-items: center;'
);
console.log(ulGallery);
