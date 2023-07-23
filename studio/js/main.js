// Получаем элемент счётчика
      let counterElement = document.querySelector(".score--one");
      let counterElementTwo = document.querySelector(".score--two");
      let counterElementThree = document.querySelector(".score--three");
      
      // Устанавливаем начальное значение счётчика
      var count = 0;
      var countTwo = 0;
      var countThree = 0;

      let interval;
       //Функция для обновления счётчика
      function updateCounter() {
        // Увеличиваем значение счётчика
        count++;

        // Обновляем текст элемента счётчика
        counterElement.innerText = count;

        // Если значение счётчика достигло 70, останавливаем интервал
        if (count === 518) {
          clearInterval(interval);
        }
      }
      function updateCounterTwo() {
        // Увеличиваем значение счётчика
        countTwo++;

        // Обновляем текст элемента счётчика
        counterElementTwo.innerText = countTwo;

        // Если значение счётчика достигло 70, останавливаем интервал
        if (countTwo === 345) {
          clearInterval(intervalTwo);
        }
      }
      function updateCounterThree() {
        // Увеличиваем значение счётчика
        countThree++;

        // Обновляем текст элемента счётчика
        counterElementThree.innerText = countThree;

        // Если значение счётчика достигло 70, останавливаем интервал
        if (countThree === 218) {
          clearInterval(intervalThree);
        }
      }
      interval = setInterval(updateCounter, 1);
      intervalTwo = setInterval(updateCounterTwo, 1);
      intervalThree = setInterval(updateCounterThree, 1);
      