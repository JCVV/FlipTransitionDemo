window.addEventListener('load', start);

function start() {
    animateElement2();
    animateElement();
    expensiveTask();
}

const element = document.querySelector(".compositionSquare");
const element2 = document.querySelector(".layoutSquare");

function animateElement() {
    const initial = element.getBoundingClientRect();

    console.log(initial);

    element.classList.add("final-position");

    const final = element.getBoundingClientRect();

    console.log(final);

    const leftDiff = initial.left - final.left;
    const topDiff = initial.top - final.top;
    const widthDiff = initial.width / final.width;
    const heightDiff = initial.height / final.height;

    element.style.transformOrigin = 'top left';
    element.style.transform = 'translate(' + leftDiff + 'px, ' + topDiff + 'px) scale(' + widthDiff + ', ' + heightDiff + ')';

    window.requestAnimationFrame(() => {
        element.classList.add("animated");

        element.style.transform = '';
    });
};

function animateElement2() {
    element2.classList.add("final-position");
}

function expensiveTask() {
    for (let i = 0; i < 500; i++) {
        setTimeout(function() {
            console.log(i);
        }, 0);
    }
}