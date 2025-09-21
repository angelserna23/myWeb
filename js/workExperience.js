const cards = document.querySelectorAll(".experience__cards-info");

cards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = "awards.html"
    })
});