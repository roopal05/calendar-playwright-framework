const monthYear = document.getElementById("monthYear");
const calendarDays = document.getElementById("calendarDays");

let currentDate = new Date();

function renderCalendar() {

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthName = currentDate.toLocaleString("default", {
        month: "long"
    });

    monthYear.textContent = `${monthName} ${year}`;

    calendarDays.innerHTML = "";

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDay = firstDay.getDay();

    if (startDay === 0) {
        startDay = 7;
    }

    for (let i = 1; i < startDay; i++) {

        const emptyCell = document.createElement("div");

        emptyCell.classList.add("empty");

        calendarDays.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {

        const dayElement = document.createElement("button");

        dayElement.textContent = day;

        dayElement.classList.add("day");

        calendarDays.appendChild(dayElement);
    }
}

renderCalendar();
document.getElementById("previous").addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById("next").addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});