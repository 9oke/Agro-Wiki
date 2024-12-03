document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loading-screen");

    // Показать загрузчик перед переходом на новую страницу
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", event => {
            if (link.href && link.href !== window.location.href) {
                event.preventDefault();
                loader.classList.add("active");
                setTimeout(() => {
                    window.location.href = link.href;
                }, 1000); // Добавьте небольшую задержку для эффекта
            }
        });
    });

    // Убедиться, что загрузчик скрыт после загрузки страницы
    window.addEventListener("load", () => {
        loader.classList.remove("active");
    });
});
