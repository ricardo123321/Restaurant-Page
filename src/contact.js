const contact = () => {
  const txtcont = document.getElementById('content');
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
  h2.setAttribute('class', 'align-center pb-3');
  h2.textContent = 'Contact Us';

  const div1 = document.createElement('div');
  div1.appendChild(h2);

  const row1 = document.createElement('div');
  row1.setAttribute('class', 'row');
  row1.appendChild(div1);

  const cont1 = document.createElement('div');
  cont1.setAttribute('class', 'container text-center');
  cont1.appendChild(row1);

  const input1 = document.createElement('input');
  input1.setAttribute('class', 'form-control');
  input1.setAttribute('id', 'name-form1-4');
  input1.setAttribute('type', 'text');
  input1.setAttribute('name', 'name');
  input1.setAttribute('data-form-field', 'Name');
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'name-form1-4');
  label1.textContent = 'Name';
  const formg1 = document.createElement('div');
  formg1.setAttribute('class', 'form-group');
  formg1.appendChild(label1);
  formg1.appendChild(input1);
  const col1 = document.createElement('div');
  col1.setAttribute('class', 'col-md-4');
  col1.appendChild(formg1);

  const input2 = document.createElement('input');
  input2.setAttribute('class', 'form-control');
  input2.setAttribute('id', 'email-form1-4');
  input2.setAttribute('type', 'text');
  input2.setAttribute('name', 'email');
  input2.setAttribute('data-form-field', 'Email');
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'email-form1-4');
  label2.textContent = 'Email';
  const formg2 = document.createElement('div');
  formg2.setAttribute('class', 'form-group');
  formg2.appendChild(label2);
  formg2.appendChild(input2);
  const col2 = document.createElement('div');
  col2.setAttribute('class', 'col-md-4');
  col2.appendChild(formg2);

  const input3 = document.createElement('input');
  input3.setAttribute('class', 'form-control');
  input3.setAttribute('id', 'phone-form1-4');
  input3.setAttribute('type', 'text');
  input3.setAttribute('name', 'phone');
  input3.setAttribute('data-form-field', 'Phone');
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'phone-form1-4');
  label3.textContent = 'Phone';
  const formg3 = document.createElement('div');
  formg3.setAttribute('class', 'form-group');
  formg3.appendChild(label3);
  formg3.appendChild(input3);
  const col3 = document.createElement('div');
  col3.setAttribute('class', 'col-md-4');
  col3.appendChild(formg3);

  const row2 = document.createElement('div');
  row2.setAttribute('class', 'row row-sm-offset');
  row2.appendChild(col1);
  row2.appendChild(col2);
  row2.appendChild(col3);
  const input = document.createElement('input');
  input.setAttribute('type', 'hidden');
  const textarea = document.createElement('textarea');
  textarea.setAttribute('id', 'message-form1-4');
  textarea.setAttribute('class', 'form-control');
  textarea.setAttribute('type', 'text');
  textarea.setAttribute('name', 'message');
  textarea.setAttribute('rows', '7');
  textarea.setAttribute('data-form-field', 'Message');
  const labelsmg = document.createElement('label');
  labelsmg.textContent = 'Message';
  labelsmg.setAttribute('for', 'message-form1-4');
  const txtbox = document.createElement('div');
  txtbox.setAttribute('class', 'form-group');
  txtbox.setAttribute('data-for', 'message');
  txtbox.appendChild(labelsmg);
  txtbox.appendChild(textarea);
  const btn = document.createElement('button');
  btn.setAttribute('class', 'btn');
  btn.textContent = 'SUBMIT FORM';
  const span = document.createElement('span');
  span.setAttribute('class', 'input-group-btn text-dark');
  span.setAttribute('href', '#');
  span.appendChild(btn);
  const divinp = document.createElement('div');
  divinp.appendChild(input);
  divinp.appendChild(row2);
  divinp.appendChild(txtbox);
  divinp.appendChild(span);
  const div2 = document.createElement('div');
  div2.appendChild(divinp);
  const rowco = document.createElement('div');
  rowco.setAttribute('class', 'row');
  rowco.appendChild(div2);

  const contt1 = document.createElement('div');
  contt1.setAttribute('class', 'container text-center');
  contt1.appendChild(rowco);

  const pageplace = document.createElement('section');
  pageplace.setAttribute('class', 'f-margc text-w text-center');
  pageplace.setAttribute('id', 'pageplace');
  pageplace.appendChild(cont1);
  pageplace.appendChild(contt1);
  some.appendChild(pageplace);
  txtcont.appendChild(some);
};

export default contact;
