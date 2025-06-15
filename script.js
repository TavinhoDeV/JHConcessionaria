document.querySelectorAll('.botao').forEach(botao => {
  botao.addEventListener('click', () => {
    console.log("Botão clicado!");
  });
});

const filtro = document.getElementById('filtro');
    const carros = document.querySelectorAll('.carro');

    filtro.addEventListener('change', () => {
      const valor = filtro.value;

      carros.forEach(carro => {
        const marca = carro.getAttribute('data-marca');

        if (valor === 'todos' || marca === valor) {
          carro.style.display = 'block';
        } else {
          carro.style.display = 'none';
        }
      });
    });