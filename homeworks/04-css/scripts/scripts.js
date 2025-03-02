let toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', function () {
  console.log('');

  // var body = document.body;
  document.body.classList.toggle('dark-mode');

  const container = document.getElementById('container');
  console.log(container);

  container.classList.toggle('dark-mode');
});
