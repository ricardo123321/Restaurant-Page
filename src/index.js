const navbar = () => {
  const navtop = document.getElementById('content')

  const acont = document.createElement('a');
  acont.textContent = 'CONTACT'
  const licont = document.createElement('li');
  licont.setAttribute('class', 'contact');
  licont.appendChild(acont);

  const amenu = document.createElement('a');
  amenu.textContent = 'MENU'
  const limenu = document.createElement('li');
  limenu.setAttribute('class', 'menu');
  limenu.appendChild(amenu);

  const aabout = document.createElement('a');
  aabout.textContent = 'ABOUT'
  const libout = document.createElement('li');
  libout.setAttribute('class', 'about');
  libout.appendChild(aabout)

  const ulm = document.createElement('ul');
  ulm.setAttribute('class', 'nav navbar-nav navbar-right');
  ulm.appendChild(libout);
  ulm.appendChild(limenu);
  ulm.appendChild(licont);

  const collac = document.createElement('div');
  collac.setAttribute('class', 'collapse navbar-collapse');
  collac.appendChild(ulm)

  const brand = document.createElement('a');
  brand.setAttribute('class', 'navbar-brand')
  brand.textContent = 'HAPPY SUSHI'
  const navhead = document.createElement('div');
  navhead.setAttribute('class', 'navbar-header');
  navhead.appendChild(brand)

  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  container.appendChild(navhead)
  container.appendChild(collac)

  const navbin = document.createElement('div');
  navbin.setAttribute('class', 'navbar navbar-default navbar-fixed-top');
  navbin.setAttribute('id', 'navbin');
  navbin.appendChild(container)

  navtop.appendChild(navbin)
}

navbar()

const about = () => {
  const txtabout = document.getElementById('content')

  const txt1 = document.createElement('p');
  txt1.textContent = 'Home of the most delicious sushi you can find here on earth'
  const txt2 = document.createElement('p');
  txt2.textContent = 'try it, love it, come back again, become a regular client, keep coming, lets become friends and you wont regret it'
  const txt3 = document.createElement('p');
  txt3.textContent = 'we have it all. and the thing we dont have we find, dont be afraid to ask for your favorite dish.'
  const h3 = document.createElement('h3');
  h3.textContent = 'DELICIOUS AND AFFORDABLE'

  const col = document.createElement('div');
  col.setAttribute('class', 'col-md-6 col-sm-6')
  col.appendChild(h3)
  col.appendChild(txt1)
  col.appendChild(txt2)
  col.appendChild(txt3)

  const img = document.createElement('img');
  img.setAttribute('src', '/src/assets/imgs/sushi.jpg')
  img.setAttribute('class', 'img-responsive img-bordered img-about')
  img.setAttribute('alt', 'about img')

  const col2 = document.createElement('div');
  col.setAttribute('class', 'col-md-6 col-sm-6')
  col.appendChild(img)
}