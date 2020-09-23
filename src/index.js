const about = () => {
  const txtabout = document.getElementById('content')
  let some = ''

  if(document.getElementById('rest') !== null){
  some = document.getElementById('rest')
  }else{
    some = document.createElement('div');
    some.setAttribute('id', 'rest')
  }

  if(document.getElementById('pageplace') !== null){
    const somed = document.getElementById('pageplace')
    some.removeChild(somed)
  }

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
  col2.setAttribute('class', 'col-md-6 col-sm-6')
  col2.appendChild(img)

  const h1 = document.createElement('h1');
  const col12 = document.createElement('div');
  col12.setAttribute('class', 'col-lg-12 col-md-12 col-sm-12 col-xs-12')
  col12.appendChild(h1)

  const row = document.createElement('div');
  row.setAttribute('class', 'row')
  row.appendChild(col)
  row.appendChild(col2)
  row.appendChild(col12)

  const container = document.createElement('div')
  container.setAttribute('class', 'container')
  container.appendChild(row)

  const pageplace = document.createElement('section')
  pageplace.setAttribute('class', 'f-marg text-w')
  pageplace.setAttribute('id', 'pageplace')
  pageplace.appendChild(container)

  some.appendChild(pageplace)
  txtabout.appendChild(some)
}

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
  libout.addEventListener('click', () => {about()})
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
about()