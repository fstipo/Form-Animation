const label = document.querySelectorAll('.form-label');
console.log(label);

label.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map((letter, ind) => `<span>${letter}</span>`)
    .join('');
});
