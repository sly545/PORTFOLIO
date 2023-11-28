document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.querySelector('.video-preview').play();
    });
    card.addEventListener('mouseleave', function() {
        this.querySelector('.video-preview').pause();
    });
});

document.querySelector(".rectangle").addEventListener("click", function() {
    document.querySelector("#introVideo").hidden = false;
    document.querySelector("#introVideo").play();
    document.querySelector("footer").classList.add('hidden'); // Masque le footer
});

document.querySelector("#introVideo").addEventListener("ended", function() {
    document.querySelector("#intro").style.opacity = 0;
    setTimeout(function() {
        document.querySelector("#intro").style.display = "none";
        document.querySelector("#main").style.display = "flex";
        document.querySelector("#main").style.opacity = 1;
        document.querySelector("footer").classList.remove('hidden'); // Réaffiche le footer
    }, 2000); // Correspond à la durée de la transition CSS
});

document.querySelector("#replayLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector("#main").style.opacity = 0;
    setTimeout(function() {
        document.querySelector("#main").style.display = "none";
        document.querySelector("#intro").style.display = "flex";
        document.querySelector("#intro").style.opacity = 1;
        document.querySelector("#introVideo").currentTime = 0;
        document.querySelector("#introVideo").hidden = false;
        document.querySelector("#introVideo").play();
        document.querySelector("footer").classList.add('hidden'); // Masque à nouveau le footer lors du replay
    }, 2000); // Correspond à la durée de la transition CSS
});
document.querySelector("#skipVideo").addEventListener("click", function() {
    document.querySelector("#introVideo").pause();
    document.querySelector("#introVideo").currentTime = 0; // Réinitialise la vidéo
    document.querySelector("#intro").style.opacity = 0;
    setTimeout(function() {
        document.querySelector("#intro").style.display = "none";
        document.querySelector("#main").style.display = "flex";
        document.querySelector("#main").style.opacity = 1;
        document.querySelector("footer").classList.remove('hidden'); // Réaffiche le footer si nécessaire
    }, 2000); // Correspond à la durée de la transition CSS
});
