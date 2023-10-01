let timer;

function start() {
  timer = setInterval(addOne, 100);
  document.getElementById('start-button').disabled = true;
  document.getElementById('stop-button').disabled = false;
  document.getElementById('reset-button').disabled = false;
}

function addOne() {
  let digit;
  if (Number(document.getElementById('one-digit').textContent) < 9) {
    digit = document.getElementById('one-digit');
  }
  else {
    if (Number(document.getElementById('two-digit').textContent) < 9) {
      digit = document.getElementById('two-digit');
      document.getElementById('one-digit').textContent = 0;
    }
    else {
      if (Number(document.getElementById('three-digit').textContent) < 9) {
        digit = document.getElementById('three-digit');
        document.getElementById('one-digit').textContent = 0;
        document.getElementById('two-digit').textContent = 0;
      }
      else {
        if (Number(document.getElementById('four-digit').textContent) < 9) {
          digit = document.getElementById('four-digit');
          document.getElementById('one-digit').textContent = 0;
          document.getElementById('two-digit').textContent = 0;
          document.getElementById('three-digit').textContent = 0;
        }
        else {
          reset();
        }
      }
    }
  }
  digit.textContent = Number(digit.textContent) + 1;
}

function stop() {
  clearInterval(timer);
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
}

function reset() {
  clearInterval(timer);
  document.getElementById('one-digit').textContent = 0;
  document.getElementById('two-digit').textContent = 0;
  document.getElementById('three-digit').textContent = 0;
  document.getElementById('four-digit').textContent = 0;
  document.getElementById('start-button').disabled = false;
  document.getElementById('stop-button').disabled = true;
  document.getElementById('reset-button').disabled = true;
}
