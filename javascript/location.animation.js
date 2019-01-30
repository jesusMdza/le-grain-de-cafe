function moveLeftOne() {
  const blockOne = document.getElementsByClassName('block-one')[0];
  blockOne.classList.add('left');
  blockOne.classList.remove('right');

}

function moveRightOne() {
  const blockOne = document.getElementsByClassName('block-one')[0];
  blockOne.classList.add('right');
  blockOne.classList.remove('left');

}

function moveLeftTwo() {
  const blockTwo = document.getElementsByClassName('block-two')[0];
  blockTwo.classList.add('left');
  blockTwo.classList.remove('right');
}

function moveRightTwo() {
  const blockTwo = document.getElementsByClassName('block-two')[0];
  blockTwo.classList.add('right');
  blockTwo.classList.remove('left');
}

function moveLeftThree() {
  const blockThree = document.getElementsByClassName('block-three')[0];
  blockThree.classList.add('left');
  blockThree.classList.remove('right');
}

function moveRightThree() {
  const blockThree = document.getElementsByClassName('block-three')[0];
  blockThree.classList.add('right');
  blockThree.classList.remove('left');
}

function moveLeftFour() {
  const blockFour = document.getElementsByClassName('block-four')[0];
  blockFour.classList.add('left');
  blockFour.classList.remove('right');
}

function moveRightFour() {
  const blockFour = document.getElementsByClassName('block-four')[0];
  blockFour.classList.add('right');
  blockFour.classList.remove('left');
}
