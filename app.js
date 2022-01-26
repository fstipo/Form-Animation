const addEffect = () => {
  const label = document.querySelectorAll('.form-label');

  label.forEach((label) => {
    label.innerHTML = label.innerText
      .split('')
      .map(
        (letter, ind) =>
          `<span class="form-label-span" style="transition-delay:${
            ind * 60
          }ms">${letter}</span>`
      )
      .join('');
  });
};

window.addEventListener('load', addEffect);
