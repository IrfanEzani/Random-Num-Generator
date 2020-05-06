function generate() {
  const max = document.getElementById('max').value;
  const min = document.getElementById('min').value;

  function randomNum(number) {
    return (Math.random() * number);
  }

  const maxNumber = randomNum(max);
  const minNumber = randomNum(min);

  const result =  Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  document.getElementById('answer').value = Math.floor(result);
  return ;
}
