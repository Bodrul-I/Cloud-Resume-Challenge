// CUSTOM JS

var btn = document.querySelector("button");
btn.onclick = () => {
 window.print()
}

// COUNTER CSS

function websiteVisits(response) {
 document.querySelector("#visits").textContent = response.value;
}

// FONTAWESOME CHECK JS

//  window.onload = function () {
//   var span = document.createElement('span');

//   span.className = 'fa';
//   span.style.display = 'none';
//   document.body.insertBefore(span, document.body.firstChild);

//   alert(window.getComputedStyle(span, null).getPropertyValue('font-family'));

//   document.body.removeChild(span);
//  };


