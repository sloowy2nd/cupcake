let targetDate = new Date('Jan 17, 2025 00:00:00').getTime();

function mostrarPortaRetrato() {
  var portaRetrato = document.getElementById('porta-retrato');
  portaRetrato.style.display = 'grid'; // Exibe o porta-retrato
}

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

function updateCountdown() {
  let now = new Date().getTime();
  let distance = targetDate - now;

  if (distance <= 0) {
    // Quando a contagem termina:
    const container = document.getElementById('container');
    const birthdayCard = document.querySelector('.birthdayCard');
    const textfy = document.querySelector('.text-fy');
    const surpriseButton = document.getElementById('surprise-button');

    container.classList.add('hide');

    // 2. Aguarda a animação de saída antes de mostrar o cartão
    setTimeout(() => {
      container.style.display = 'none'; // Esconde o contador de vez
      birthdayCard.style.display = 'block'; // Torna o cartão visível
      birthdayCard.classList.add('show'); // Adiciona a animação de entrada
      textfy.style.display = 'block';
      // surpriseButton.style.display = 'block';
    }, 500); // Duração da animação (igual ao CSS)

    // 3. Para o intervalo
    clearInterval(interval);
    return;
  }
  let days = Math.floor(distance / day);
  let hours = Math.floor((distance % day) / hour);
  let minutes = Math.floor((distance % hour) / minute);
  let seconds = Math.floor((distance % minute) / second);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
}

// Atualiza o contador a cada segundo
let interval = setInterval(updateCountdown, 1000);

// Chamada inicial para evitar o atraso de 1 segundo
updateCountdown();
