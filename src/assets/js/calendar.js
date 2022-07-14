function dateToString(selectedDate) {
  const strYear = `${selectedDate.getFullYear()}`.padStart(4, "0");
  const strMonth = `${selectedDate.getMonth() + 1}`.padStart(2, "0");
  const strDay = `${selectedDate.getDate()}`.padStart(2, "0");

  return `${strYear}-${strMonth}-${strDay}`;
}

class Calendar {
  constructor({ selectedDate, maxDate, today }) {
    this.opening_days = opening_days;
    this.closing_days = closing_days;
    this.selectedDate = new Date(selectedDate);
    this.selectedDate.setDate(1);
    this.lastDay = new Date(
      this.selectedDate.getFullYear(),
      this.selectedDate.getMonth() + 1,
      0
    ).getDate();

    this.today = today || new Date();
    this.maxDate =
      maxDate ||
      new Date(this.today.getFullYear(), this.today.getMonth() + 2, 1);
    try {
      this.dateGrid = document.querySelector(".date-grid");
    } catch (error) {
      console.debug("No date grid found. Calendar will not be rendered.");
      this.dateGrid = null;
    }

    this.months = [
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
      "Décembre"
    ];

    this.monthIndicator = document.querySelector(".month-indicator");

    if (this.dateGrid) {
      this.prevButton = document.querySelector(".prev");
      this.nextButton = document.querySelector(".next");

      this.prevButton.addEventListener("click", () => {
        this.previousMonth();
      });

      this.nextButton.addEventListener("click", () => {
        this.nextMonth();
      });
    }
  }

  isFirstMonth() {
    // used to disable the previous button
    return this.today.getMonth() === this.selectedDate.getMonth();
  }

  isLastMonth() {
    // used to disable the next button
    return this.maxDate.getMonth() === this.selectedDate.getMonth();
  }

  isOpen(selectedDate) {
    const strDate = dateToString(selectedDate);

    if (this.closing_days.includes(strDate)) {
      return false;
    }

    if ([0, 1, 3, 5, 6].includes(selectedDate.getDay())) {
      return true;
    }

    if (this.opening_days.includes(strDate)) {
      return true;
    }

    return false;
  }

  render() {
    if (!this.dateGrid) {
      return null;
    }

    // update month navigation buttons
    if (this.isFirstMonth()) {
      this.prevButton.classList.add("hidden");
    } else {
      this.prevButton.classList.remove("hidden");
    }

    if (this.isLastMonth()) {
      this.nextButton.classList.add("hidden");
    } else {
      this.nextButton.classList.remove("hidden");
    }

    this.monthIndicator.innerHTML = `${
      this.months[this.selectedDate.getMonth()]
    } ${this.selectedDate.getFullYear()}`;

    let dateGridHtmlContent = "";

    for (let day = 1; day <= this.lastDay; day++) {
      const currentDate = new Date(
        this.selectedDate.getFullYear(),
        this.selectedDate.getMonth(),
        day
      );
      let dayClass = "day";

      if (
        day === this.today.getDate() &&
        currentDate.getMonth() === this.today.getMonth()
      ) {
        dayClass += " today";
      }

      if (this.isOpen(currentDate)) {
        dayClass += " open";
      }

      let styleProp = "";

      if (day === 1) {
        // getDay gives Sunday = 0, Monday = 1, ...
        let dayOfWeek = 1 + ((this.selectedDate.getDay() + 6) % 7);
        styleProp = `style="grid-column: ${dayOfWeek};"`;
      }

      const dateString = dateToString(currentDate);

      let dayHtmlContent = `<div class="${dayClass}" ${styleProp}>
          <button>
            <time datetime="${dateString}">${day}</time>
          </button>
        </div>`;

      dateGridHtmlContent += dayHtmlContent;
    }

    this.dateGrid.innerHTML = dateGridHtmlContent;
  }
  previousMonth() {
    if (this.isFirstMonth()) {
      return;
    }
    this.selectedDate.setMonth(this.selectedDate.getMonth() - 1);
    this.render();
  }

  nextMonth() {
    if (this.isLastMonth()) {
      return;
    }
    this.selectedDate.setMonth(this.selectedDate.getMonth() + 1);
    this.render();
  }
}

const main = () => {
  const selectedDate = new Date();
  const calendar = new Calendar({ selectedDate });
  calendar.render();
};

main();
