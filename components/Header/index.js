// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


const container = document.querySelector('.header-container');

function header() {

    const head = document.createElement('div');
    head.classList.add('header');

    let date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'September 14, 2019';

    const headText = document.createElement('h1');
    headText.textContent = 'Lambda Times';

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';

    head.append(date); 
    head.append(headText);
    head.append(temp);

    return head; 
}

container.append(header()); 
