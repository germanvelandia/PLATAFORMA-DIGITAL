function cambiarPestaña(pestaña) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active-tab');
  });

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  if (pestaña === 'rpg') {
    document.getElementById('sec-rpg').classList.add('active-tab');
    event.target.classList.add('active');
  } else if (pestaña === 'observador') {
    document.getElementById('sec-observador').classList.add('active-tab');
    event.target.classList.add('active');
  }
}
