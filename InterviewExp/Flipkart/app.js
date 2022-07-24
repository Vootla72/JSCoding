var nameValue = document.getElementById('Field Name').value;
console.log(nameValue);

const btn = document.getElementById('submitButton');

btn.addEventListener('click', function handleClick(event) {
  // 👇️ if you are submitting a form (prevents page reload)
  event.preventDefault();

  const fieldName = document.getElementById('Field Name').value;

  const fieldType = document.getElementById('Field-Type').value;
  const fieldPlaceHolder = document.getElementById('Field Place Holder').value;
  const fieldDefault = document.getElementById('Field default value').value;
  if (fieldName && fieldType) {
    const ele = document.getElementById('newForm');
    const f = document.createElement('form');
    var labelName = document.createElement('label');
    labelName.innerHTML = fieldName;
    const i = document.createElement('input');
    i.setAttribute('type', fieldType);
    i.setAttribute('name', fieldName);
    i.setAttribute('value', fieldDefault);
    i.setAttribute('placeholder', fieldPlaceHolder);
    f.appendChild(labelName);
    f.appendChild(i);
    ele.append(f);
  }

  document.getElementById('myForm').reset();
});
