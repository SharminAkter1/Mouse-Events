const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// DoublClick
// clearBtn.addEventListener('dbclick', runEvent);
// MouseOver
// clearBtn.addEventListener('mouseover', runEvent);
// MouseDown
// clearBtn.addEventListener('mousedown', runEvent);
// MouseUp
// clearBtn.addEventListener('mouseup', runEvent);
// MouseLeave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// MouseOut
// card.addEventListener('mouseout', runEvent);
// MouseMove
card.addEventListener('mousemove', runEvent);

//Event Headler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}

