document.getElementById("chooseGiftBtn").addEventListener("click", function () {
    document.querySelectorAll(".gift").forEach(gift => {
        gift.style.opacity = "1";
    });

    document.querySelectorAll(".select-btn").forEach(button => {
        button.style.display = "inline-block";
        button.href = "https://t.me/YOUR_CHANNEL"; // Замени на свою ссылку
    });

    this.style.display = "none"; // Скрываем кнопку после нажатия
});
