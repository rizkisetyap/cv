import "./style.css";
const skills = ["Javascript", "next js", "react", "php", "python"];
const values = ["88", "66", "70", "40", "50"];
const colors = ["orange", "gray", "cyan", "indigo", "teal"];

// window.addEventListener("DOMContentLoaded", function () {
//     showSkill();
// });

// function showSkill() {
const container = document.querySelector("#progress");

skills.forEach((item, idx) => {
    const progress_container = document.createElement("div");
    const progress__header = document.createElement("div");
    const progress__title = document.createElement("span");
    const progress__title__wrapper = document.createElement("div");
    const text_right = document.createElement("div");
    const progress__indicator = document.createElement("span");
    const progress__bar = document.createElement("div");
    const progress__value = document.createElement("div");
    const progress__value_container = document.createElement("div");

    progress_container.classList.add("progress");
    progress__header.classList.add("progress__header");
    progress__title.classList.add(
        "progress__title",
        `text-${colors[idx]}-800`,
        `bg-${colors[idx]}-300`
    );
    text_right.classList.add("text_right");
    progress__bar.classList.add("progress__bar", `bg-${colors[idx]}-300`);
    progress__value.classList.add(
        "animate-myanimation",
        "progress__value",
        `bg-${colors[idx]}-800`,
        "h-full"
    );
    progress__indicator.classList.add("progress__indicator", `text-${colors[idx]}-800`);

    progress_container.appendChild(progress__header);
    text_right.appendChild(progress__indicator);
    progress_container.appendChild(progress__bar);
    progress__header.appendChild(progress__title__wrapper);
    progress__header.appendChild(progress__indicator);
    progress__title__wrapper.appendChild(progress__title);
    progress__value_container.appendChild(progress__value);
    progress__bar.appendChild(progress__value_container);

    progress__title.innerHTML = item;
    // progress__indicator.innerHTML = values[idx] + "%";
    progress__value_container.style.width = values[idx] + "%";
    container.appendChild(progress_container);
    const updateCount = () => {
        const target = +values[idx];
        const count = +progress__indicator.innerText.replace("%", "");
        const speed = 10000; // change animation speed here
        const inc = target / speed;
        if (count < target) {
            progress__indicator.innerText = Math.ceil(count + inc) + "%";
            setTimeout(updateCount, 10);
        } else {
            progress__indicator.innerText = target + "%";
        }
    };
    updateCount();
});
// }
