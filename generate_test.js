document.getElementById("testForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    let task = document.getElementById("text-input").value;
    let figmaUrl = document.getElementById("prototype-link").value;
    let formUrl = document.getElementById("other-site-link").value;
    let testId = "test_" + Date.now();

    // Загружаем шаблон testTemplate.html
    let templateResponse = await fetch("testTemplate.html");
    let templateText = await templateResponse.text();

    // Подставляем данные
    let testPageContent = templateText
        .replace("{{TASK}}", task)
        .replace("{{FIGMA_URL}}", figmaUrl);

    // Сохраняем файл
    saveTestFile(testId, testPageContent);
});

function saveTestFile(fileName, content) {
    let blob = new Blob([content], { type: "text/html" });
    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.html`;

    document.getElementById("result").innerHTML = 
        `<p>Тест создан! <a href="${link.href}" download="${fileName}.html" target="_blank">Скачать тест</a></p>`;
    link.click();
}
