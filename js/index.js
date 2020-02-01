window.addEventListener('load', start);

function start() {
    setListeners();

    animateCompositionSquare();
    animateLayoutSquare();

    expensiveTask();
}

function setListeners() {
    compositionSquare.addEventListener("transitionend", function() {
        window.requestAnimationFrame(() => {
            animateCompositionSquare();
            expensiveTask();
        });
    });

    layoutSquare.addEventListener("transitionend", function(transition) {
        if (transition.propertyName === "top") {
            window.requestAnimationFrame(() => {
                animateLayoutSquare();
            });
        }
    })
}

const compositionSquare = document.querySelector(".compositionSquare");
const layoutSquare = document.querySelector(".layoutSquare");

function animateCompositionSquare() {
    compositionSquare.classList.remove("animated");
    const initial = compositionSquare.getBoundingClientRect();

    if (compositionSquare.classList.contains("final-position")) {
        compositionSquare.classList.remove("final-position");
    } else {
        compositionSquare.classList.add("final-position");
    }

    const final = compositionSquare.getBoundingClientRect();

    const leftDiff = initial.left - final.left;
    const topDiff = initial.top - final.top;
    const widthDiff = initial.width / final.width;
    const heightDiff = initial.height / final.height;

    compositionSquare.style.transformOrigin = 'top left';
    compositionSquare.style.transform = 'translate(' + leftDiff + 'px, '
        + topDiff + 'px) scale(' + widthDiff + ', ' + heightDiff + ')';

    window.requestAnimationFrame(() => {
        compositionSquare.classList.add("animated");

        compositionSquare.style.transform = '';
    });
};

function animateLayoutSquare() {
    if (layoutSquare.classList.contains("final-position")) {
        layoutSquare.classList.remove("final-position");
    } else {
        layoutSquare.classList.add("final-position");
    }
}

function expensiveTask() {
    for (let i = 0; i < 500; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
    }
}