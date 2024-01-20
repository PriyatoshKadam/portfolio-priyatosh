// script.js

document.getElementById('loveSlider').addEventListener('input', function () {
  updateLoveValue(this.value);
});

function updateLoveValue(value) {
  document.getElementById('loveValue').textContent = value;
}

document.getElementById('loveSlider').addEventListener('change', function () {
  var loveValue = parseInt(this.value);

  if (loveValue === 100) {
      window.location.href = 'love-max.html';
  } else if (loveValue >= 50 && loveValue <= 99) {
      window.location.href = 'love-high.html';
  } else {
      window.location.href = 'love-low.html';
  }
});
