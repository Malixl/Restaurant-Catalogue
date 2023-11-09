const assert = require('assert');

Feature('Liking Restaurants');

Scenario('Check if favorite page is empty', async ({ I }) => {
  I.amOnPage('/#/favorite');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.no-favorite-message');
  I.see('Belum ada restaurant favorite', '.no-favorite-message');
});

Scenario('add and delete resto', async ({ I }) => {
  I.amOnPage('/');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.restaurant-name');
  const listCity = locate('.restaurant-name').first();
  I.click(listCity);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.amOnPage('/#/favorite');
  await new Promise((resolve) => setTimeout(resolve, 4000));
  I.seeElement('.restaurant-name');
  const listCityFavorite = locate('.restaurant-name').first();
  I.click(listCityFavorite);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.amOnPage('/#/favorite');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  I.seeElement('.no-favorite-message');
  I.see('Belum ada restaurant favorite', '.no-favorite-message');
});
