const button = document.getElementById('but');

if (localStorage.getItem('theme') == null) {
  console.log('theme is null')
  localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') == 'light') {
  console.log('theme is ' + localStorage.getItem('theme'))
  DarkReader.disable();
  button.innerHTML = 'MAKE DARK';
} else {
  console.log('theme is ' + localStorage.getItem('theme'))
  DarkReader.enable();
  button.innerHTML = 'MAKE LIGHT';
}

function buttonClick() {
  if (button.innerHTML == 'MAKE LIGHT') {
    localStorage.setItem('theme', 'light');
    DarkReader.disable();
    button.innerHTML = 'MAKE DARK';
  } else {
    localStorage.setItem('theme', 'dark');
    DarkReader.enable();
    button.innerHTML = 'MAKE LIGHT';
  }
}