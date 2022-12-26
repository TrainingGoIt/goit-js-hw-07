import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryArr = document.querySelector(".gallery");


const images = galleryItems.map(({ preview, original, description }) =>
`<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`).join("")

galleryArr.insertAdjacentHTML('beforeend', images)

lightboxFunction()

function handleClick(event) {
    //прибираємо дію браузера за замовчуванням
    event.preventDefault();
}

function lightboxFunction() {

  let gallery = new SimpleLightbox('.gallery a', {fadeSpeed: 250});
    gallery.on('show.simplelightbox', function () {
    });
   
}

galleryArr.addEventListener("click", handleClick);

// Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс
// cdnjs.Необхідно додати посилання на два файли:
// simple - lightbox.min.js і simple - lightbox.min.css.

// Ініціалізація бібліотеки після створення і додання елементів
//  галереї у div.gallery.Для цього ознайомся з документацією
// SimpleLightbox - насамперед секції «Usage» і «Markup».

// Подивися в документації секцію «Options» і додай відображення
//  підписів до зображень з атрибута alt.Нехай підпис буде знизу
//   і з'являється через 250 мілісекунд після відкриття зображення.