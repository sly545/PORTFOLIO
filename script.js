    document.querySelector(".circle").addEventListener("click", function() {
        document.querySelector("#introVideo").hidden = false;
        document.querySelector("#introVideo").play();
    });

    document.querySelector("#introVideo").addEventListener("ended", function() {
        document.querySelector("#intro").style.opacity = 0;
        setTimeout(function() {
            document.querySelector("#intro").style.display = "none";
            document.querySelector("#main").style.display = "flex";
            document.querySelector("#main").style.opacity = 1;
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
        }, 2000); // Correspond à la durée de la transition CSS
    });
