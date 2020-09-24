const menu = () => {
  const txtmenu = document.getElementById('content');
  let some = '';

  if (document.getElementById('rest') !== null) {
    some = document.getElementById('rest');
  } else {
    some = document.createElement('div');
    some.setAttribute('id', 'rest');
  }

  if (document.getElementById('pageplace') !== null) {
    const somed = document.getElementById('pageplace');
    some.removeChild(somed);
  }
  const h2 = document.createElement('h2');
  h2.setAttribute('class', 'text-center');
  h2.textContent = 'Take a look at our delicious menu';
  const row1 = document.createElement('div');
  row1.setAttribute('class', 'row');
  row1.appendChild(h2);

  const h31 = document.createElement('h3');
  h31.textContent = 'Mexican Eggrolls';
  const span1 = document.createElement('span');
  span1.setAttribute('class', 'text-success');
  span1.textContent = '$14.50';
  const divjust1 = document.createElement('div');
  divjust1.setAttribute('class', 'd-flex justify-content-between');
  divjust1.appendChild(h31);
  divjust1.appendChild(span1);
  const p1 = document.createElement('p');
  p1.setAttribute('class', 'pt-3');
  p1.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, incidunt.';
  const foodc1 = document.createElement('div');
  foodc1.setAttribute('class', 'food-content');
  foodc1.appendChild(divjust1);
  foodc1.appendChild(p1);

  const img1 = document.createElement('img');
  img1.setAttribute('class', 'img-100 cush');
  img1.setAttribute('src', '/src/assets/imgs/food1.jpg');
  const foodimg1 = document.createElement('div');
  foodimg1.setAttribute('class', 'food-img');
  foodimg1.appendChild(img1);
  const sngfood1 = document.createElement('div');
  sngfood1.setAttribute('class', 'single-food');
  sngfood1.appendChild(foodimg1);
  sngfood1.appendChild(foodc1);
  const col1 = document.createElement('div');
  col1.setAttribute('class', 'col-md-4 col-sm-6 col-sm-12');
  col1.appendChild(sngfood1);

  const h32 = document.createElement('h3');
  h32.textContent = 'Takoyaki';
  const span2 = document.createElement('span');
  span2.setAttribute('class', 'text-success');
  span2.textContent = '$9.50';
  const divjust2 = document.createElement('div');
  divjust2.setAttribute('class', 'd-flex justify-content-between');
  divjust2.appendChild(h32);
  divjust2.appendChild(span2);
  const p2 = document.createElement('p');
  p2.setAttribute('class', 'pt-3');
  p2.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, incidunt.';
  const foodc2 = document.createElement('div');
  foodc2.setAttribute('class', 'food-content');
  foodc2.appendChild(divjust2);
  foodc2.appendChild(p2);

  const img2 = document.createElement('img');
  img2.setAttribute('class', 'img-100 cush');
  img2.setAttribute('src', '/src/assets/imgs/food2.jpg');
  const foodimg2 = document.createElement('div');
  foodimg2.setAttribute('class', 'food-img');
  foodimg2.appendChild(img2);
  const sngfood2 = document.createElement('div');
  sngfood2.setAttribute('class', 'single-food');
  sngfood2.appendChild(foodimg2);
  sngfood2.appendChild(foodc2);
  const col2 = document.createElement('div');
  col2.setAttribute('class', 'col-md-4 col-sm-6 col-sm-12');
  col2.appendChild(sngfood2);

  const h33 = document.createElement('h3');
  h33.textContent = 'Tempura';
  const span3 = document.createElement('span');
  span3.setAttribute('class', 'text-success');
  span3.textContent = '$12.50';
  const divjust3 = document.createElement('div');
  divjust3.setAttribute('class', 'd-flex justify-content-between');
  divjust3.appendChild(h33);
  divjust3.appendChild(span3);
  const p3 = document.createElement('p');
  p3.setAttribute('class', 'pt-3');
  p3.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, incidunt.';
  const foodc3 = document.createElement('div');
  foodc3.setAttribute('class', 'food-content');
  foodc3.appendChild(divjust3);
  foodc3.appendChild(p3);

  const img3 = document.createElement('img');
  img3.setAttribute('class', 'img-100 cush');
  img3.setAttribute('src', '/src/assets/imgs/food3.jpg');
  const foodimg3 = document.createElement('div');
  foodimg3.setAttribute('class', 'food-img');
  foodimg3.appendChild(img3);
  const sngfood3 = document.createElement('div');
  sngfood3.setAttribute('class', 'single-food');
  sngfood3.appendChild(foodimg3);
  sngfood3.appendChild(foodc3);
  const col3 = document.createElement('div');
  col3.setAttribute('class', 'col-md-4 col-sm-6 col-sm-12');
  col3.appendChild(sngfood3);

  const h34 = document.createElement('h3');
  h34.textContent = 'Sashimi';
  const span4 = document.createElement('span');
  span4.setAttribute('class', 'text-success');
  span4.textContent = '$14.50';
  const divjust4 = document.createElement('div');
  divjust4.setAttribute('class', 'd-flex justify-content-between');
  divjust4.appendChild(h34);
  divjust4.appendChild(span4);
  const p4 = document.createElement('p');
  p4.setAttribute('class', 'pt-3');
  p4.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, incidunt.';
  const foodc4 = document.createElement('div');
  foodc4.setAttribute('class', 'food-content');
  foodc4.appendChild(divjust4);
  foodc4.appendChild(p4);

  const img4 = document.createElement('img');
  img4.setAttribute('class', 'img-100 cush');
  img4.setAttribute('src', '/src/assets/imgs/food4.jpg');
  const foodimg4 = document.createElement('div');
  foodimg4.setAttribute('class', 'food-img');
  foodimg4.appendChild(img4);
  const sngfood4 = document.createElement('div');
  sngfood4.setAttribute('class', 'single-food');
  sngfood4.appendChild(foodimg4);
  sngfood4.appendChild(foodc4);
  const col4 = document.createElement('div');
  col4.setAttribute('class', 'col-md-4 col-sm-6 col-sm-14');
  col4.appendChild(sngfood4);

  const h35 = document.createElement('h3');
  h35.textContent = 'California Rolls';
  const span5 = document.createElement('span');
  span5.setAttribute('class', 'text-success');
  span5.textContent = '$8.50';
  const divjust5 = document.createElement('div');
  divjust5.setAttribute('class', 'd-flex justify-content-between');
  divjust5.appendChild(h35);
  divjust5.appendChild(span5);
  const p5 = document.createElement('p');
  p5.setAttribute('class', 'pt-3');
  p5.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, incidunt.';
  const foodc5 = document.createElement('div');
  foodc5.setAttribute('class', 'food-content');
  foodc5.appendChild(divjust5);
  foodc5.appendChild(p5);

  const img5 = document.createElement('img');
  img5.setAttribute('class', 'img-100 cush');
  img5.setAttribute('src', '/src/assets/imgs/food5.jpg');
  const foodimg5 = document.createElement('div');
  foodimg5.setAttribute('class', 'food-img');
  foodimg5.appendChild(img5);
  const sngfood5 = document.createElement('div');
  sngfood5.setAttribute('class', 'single-food');
  sngfood5.appendChild(foodimg5);
  sngfood5.appendChild(foodc5);
  const col5 = document.createElement('div');
  col5.setAttribute('class', 'col-md-4 col-sm-6 col-sm-12');
  col5.appendChild(sngfood5);

  const h36 = document.createElement('h3');
  h36.textContent = 'Fried Calamari';
  const span6 = document.createElement('span');
  span6.setAttribute('class', 'text-success');
  span6.textContent = '$11.50';
  const divjust6 = document.createElement('div');
  divjust6.setAttribute('class', 'd-flex justify-content-between');
  divjust6.appendChild(h36);
  divjust6.appendChild(span6);
  const p6 = document.createElement('p');
  p6.setAttribute('class', 'pt-3');
  p6.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, incidunt.';
  const foodc6 = document.createElement('div');
  foodc6.setAttribute('class', 'food-content');
  foodc6.appendChild(divjust6);
  foodc6.appendChild(p6);

  const img6 = document.createElement('img');
  img6.setAttribute('class', 'img-100 cush');
  img6.setAttribute('src', '/src/assets/imgs/food6.jpg');
  const foodimg6 = document.createElement('div');
  foodimg6.setAttribute('class', 'food-img');
  foodimg6.appendChild(img6);
  const sngfood6 = document.createElement('div');
  sngfood6.setAttribute('class', 'single-food');
  sngfood6.appendChild(foodimg6);
  sngfood6.appendChild(foodc6);
  const col6 = document.createElement('div');
  col6.setAttribute('class', 'col-md-4 col-sm-6 col-sm-12');
  col6.appendChild(sngfood6);

  const row2 = document.createElement('div');
  row2.setAttribute('class', 'row');
  row2.appendChild(col1);
  row2.appendChild(col2);
  row2.appendChild(col3);
  row2.appendChild(col4);
  row2.appendChild(col5);
  row2.appendChild(col6);

  const pageplace = document.createElement('section');
  pageplace.setAttribute('class', 'container f-margm text-w');
  pageplace.setAttribute('id', 'pageplace');
  pageplace.appendChild(row1);
  pageplace.appendChild(row2);

  some.appendChild(pageplace);
  txtmenu.appendChild(some);
};

export { menu };