// generate events
const eventDates = {};

let day3 = formatDate(new Date(new Date().setDate(new Date().getDate() + 0)));
eventDates[day3] = ["Annual Training Camp-II has been conducted in the campus"];
let day2 = formatDate(new Date(new Date().setDate(new Date().getDate() + 10)));
eventDates[day2] = ["End of Annual Training Camp-II"];

// responsive settings with multiple max dates
const maxDate = new Date(new Date().setMonth(new Date().getMonth() + 5))

const getShowMonths = (width) => {
  let showMonths = 3

  if (width < 992 && width >= 768) {
    showMonths = 2;

  }
  if (width < 768) {
    showMonths = 1;
  }

  return showMonths;
};

const defaultCalendarProps = {showMonths: getShowMonths(window.innerWidth),
  maxDate: maxDate,
  inline: true,
  minDate: "today",
  enable: Object.keys(eventDates),
  disableMobile: "true",
  onChange: (date, str, inst) => {
    let contents = "";
    if (date.length) {
      for (i = 0; i < eventDates[str].length; i++) {
        contents +=
          '<div class="event"><div class="date">' +
          calendar_obj.formatDate(date[0], "l J F") +
          '</div><div class="location">' +
          eventDates[str][i] +
          "</div></div>";
      }
    }
    document.querySelector("#calendar .calendar-events").innerHTML =contents;
  },
  locale: 'fr'
}

const calendar_obj = flatpickr("#calendar .placeholder", defaultCalendarProps);

const eventCalendarResize = () => {
  const width = window.innerWidth;
  const showMonths = getShowMonths(width);

  if (calendar_obj.selectedDates.length) {
    calendar_obj.clear();
  }

  if (calendar_obj.config.showMonths !== showMonths) {
    calendar_obj.set('showMonths', showMonths);
  }
};

window.addEventListener('resize', eventCalendarResize);

function formatDate(date) {
  let d = date.getDate();
  let m = date.getMonth() + 1; //Month from 0 to 11
  let y = date.getFullYear();
  return "" + y + "-" + (m <= 9 ? "0" + m : m) + "-" + (d <= 9 ? "0" + d : d);
}
