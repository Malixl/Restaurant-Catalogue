import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
<div class="list-item" tabindex="0">
  <div class="rating" style="display: flex; flex-direction: row-reverse;"> 
    <i class="fa-solid fa-star" style="color: #fff700;"></i> ${restaurant.rating}/5
  </div>
  <div class="restaurant">
    <a class="restaurant-name" href="/#/detail/${restaurant.id}">${restaurant.name}</a>
  </div>
  <div class="list-city">
    ${restaurant.city}
  </div>
  <img class="list-thumb" src="${restaurant.pictureId ? API_ENDPOINT.IMG.S + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous" loading="lazy">
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-card" tabindex="0">
  <div class="detail-card1">
    <h1 class="detail-name">${restaurant.name}</h1>
    <h2 class="detail-rating"> <i class="fa-solid fa-star" style="color: #fff700;"></i> ${restaurant.rating}/5 </h2>
    <h2 class="detail-categories">Kategori: ${restaurant.categories[0].name}</h2>
  </div>
  <div class="detail-container">
    <div class="detail-image" tabindex="0">
      <img class="detail-thumb" src="${restaurant.pictureId ? API_ENDPOINT.IMG.M + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}" crossorigin="anonymous">
    </div>
    <div class="detail-card2" tabindex="0">
      <h3 class="detail-city">Kota: ${restaurant.city}</h3>
      <h4 class="detail-address">Alamat: ${restaurant.address}</h4>
    </div>
  </div>
  <p class="detail-desc">${restaurant.description}</p>
    <div class="detail-menus">
      <div class="detail-foods">
        <h5>Menu Makanan</h5>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </div>
      <div class="detail-drinks">
        <h5>Menu Minuman</h5>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </div>
    </div>
  <div class="detail-review">
    <h6>Hasil Review</h6>
    <p>"${restaurant.customerReviews[0].review}"</p>
    <p>Oleh: ${restaurant.customerReviews[0].name} (${restaurant.customerReviews[0].date})</p>
  </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-heart"></i> 
  </button>
`;

const createUnlikeRestauarntButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate, createUnlikeRestauarntButtonTemplate,
};
