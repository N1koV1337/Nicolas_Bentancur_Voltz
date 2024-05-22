document.addEventListener('DOMContentLoaded', function() {
    // Función para el temporizador de cuenta regresiva
    const countdown = () => {
        const countDate = new Date('September 30, 2024 00:00:00').getTime();
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        document.getElementById('days').innerText = textDay;
        document.getElementById('hours').innerText = textHour;
        document.getElementById('minutes').innerText = textMinute;
        document.getElementById('seconds').innerText = textSecond;
    };

    setInterval(countdown, 1000);

    // Función para generar estrellas aleatorias
    const starsContainer = document.querySelector('.stars');
    const numStars = 100; // Número de estrellas que deseas mostrar

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        star.style.top = Math.random() * 100 + 'vh'; // Posición vertical aleatoria
        star.style.animationDelay = Math.random() * 5 + 's'; // Retraso de animación aleatorio
        star.style.width = Math.random() * 2 + 'px'; // Ancho aleatorio
        star.style.height = star.style.width; // Hacer que las estrellas sean círculos
        starsContainer.appendChild(star);
    }

    // Evento de clic en el botón de notificación
    document.querySelector(".cta-button").addEventListener("click", () => {
        alert("Notification functionality is not implemented yet.");
    });
});

