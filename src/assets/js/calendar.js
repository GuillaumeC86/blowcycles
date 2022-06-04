const renderCalendar = ({ selectedDate, today, maxDate }) => {
  today = today || new Date();
  maxDate = maxDate || new Date(today.getFullYear(), today.getMonth() + 2, 1);
  date = new Date(selectedDate);
  date.setDate(1);

  const dateGrid = document.querySelector(".date-grid");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  document.querySelector(".month-indicator").innerHTML = `${
    months[date.getMonth()]
  } ${date.getFullYear()}`;


  dateGridHtmlContent = "";

  for (let day = 1; day <= lastDay; day++) {
    dayClass = "day";

    if (day === today.getDate() && date.getMonth() === today.getMonth()) {
      dayClass += " today";
    }

    styleProp = "";

    if (day === 1) {
      // getDay gives Sunday = 0, Monday = 1, ...
      dayOfWeek = 1 + ((date.getDay() + 6) % 7);
      styleProp = `style="grid-column: ${dayOfWeek};"`;
    }

    strYear = `${date.getFullYear()}`.padStart(4, "0");
    strMonth = `${date.getMonth()}`.padStart(2, "0");
    strDay = `${date.getDate()}`.padStart(2, "0");

    dayHtmlContent = `<div class="${dayClass}" ${styleProp}>
          <button>
            <time datetime="${strYear}-${strMonth}-${strDay}">${day}</time>
          </button>
        </div>`;

    dateGridHtmlContent += dayHtmlContent;
  }

  dateGrid.innerHTML = dateGridHtmlContent;

};

const main = () => {
  const selectedDate = new Date();

  document.querySelector(".prev").addEventListener("click", () => {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    renderCalendar(selectedDate);
  });

  document.querySelector(".next").addEventListener("click", () => {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    renderCalendar(selectedDate);
  });

  renderCalendar(selectedDate);
};

main();
