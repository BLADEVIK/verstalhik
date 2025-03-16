// Инициализация начального времени: 0 часов, 10 минут, 0 секунд
let hours = 0;
let minutes = 10;
let seconds = 0;

// Функция для обновления отображаемого времени
function updateDisplay() {
    const timerElement = document.querySelector('.timer');
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerElement.textContent = formattedTime;
}

// Функция для запуска таймера
function startTimer() {
    setInterval(() => {
        // Если таймер достиг 00:00:00, сбрасываем его на 00:10:00
        if (hours === 0 && minutes === 0 && seconds === 0) {
            minutes = 10;
            seconds = 0;
        } else {
            // Уменьшаем время
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
            }
        }
        // Обновляем отображение
        updateDisplay();
    }, 1000);
}

// Устанавливаем начальное значение на экране
updateDisplay();
// Запускаем таймер при загрузке страницы
startTimer();
// Открываем sidebar при адаптиве
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('show');
  });
// Изменяем цвета карточки при наведении
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  const button = card.querySelector('.button');
  const price = card.querySelector('.card-price')
  const hiddenText = card.querySelector('.hidden-text');
  button.addEventListener('mouseover', () => {
    card.classList.add('hover-effect');
    button.classList.add('hover-effect');
    price.classList.add('hover-effect');
    hiddenText.classList.add('visible');
  });
  
  button.addEventListener('mouseout', () => {
    card.classList.remove('hover-effect');
    button.classList.remove('hover-effect');
    price.classList.remove('hover-effect');
    hiddenText.classList.remove('visible');
  });
});
