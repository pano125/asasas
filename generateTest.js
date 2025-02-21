document.getElementById("testForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let task = document.getElementById("text-input").value;
    let figmaUrl = document.getElementById("prototype-link").value;
    let formUrl = document.getElementById("other-site-link").value;
    let testId = "test_" + Date.now();  // Генерируем уникальный ID

    let testPageContent = `
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Тестирование задач</title>
        <link rel="stylesheet" href="../stylenorm.css">
    </head>
    <body>
        <div class="container">
            <h1>Тестирование прототипа</h1>
            <h2>Ваше задание</h2>
            <p>${task}</p>
            
            <h2>Прототип</h2>
            <iframe src="${figmaUrl}" width="100%" height="600px"></iframe>

            <h2>Форма для обратной связи</h2>
            <a href="${formUrl}" target="_blank">Заполнить анкету</a>
        </div>
    </body>
    </html>`;

    // Создаём Blob (файл в браузере)
    let blob = new Blob([testPageContent], { type: "text/html" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${testId}.html`;

    // Показываем ссылку пользователю сразу
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>Тест создан! <a href="${link.href}" download="${testId}.html" target="_blank">Скачать тест</a></p>`;
    link.click();
});
