const checkbox = document.getElementById('checkbox');

if (localStorage.getItem('theme') == null) {
  console.log('theme is ' + localStorage.getItem('theme'));
  localStorage.setItem('theme', 'light');
}

if (localStorage.getItem('theme') == 'light') {
  console.log('theme is ' + localStorage.getItem('theme'))
  DarkReader.disable();
} else {
  console.log('theme is ' + localStorage.getItem('theme'))
  DarkReader.enable();
  checkbox.setAttribute('checked', true);
}

function toggle() {
  if (localStorage.getItem('theme') == 'dark') {
    localStorage.setItem('theme', 'light');
    DarkReader.disable();
  } else {
    localStorage.setItem('theme', 'dark');
    DarkReader.enable();
  }
  console.log('theme is ' + localStorage.getItem('theme'))
}