import React from "react";
import styles from "./Birthday.module.css";

const getBirthdays = (items) => {
  return items.map((i) => {
    let date = new Date(i.dob);
    let result = {
      firstName: i.firstName,
      lastName: i.lastName,
      day: date.getUTCDate(),
      month: date.getUTCMonth(),
      year: date.getFullYear(),
    };
    return result;
  });
};

const displayBirthdays = (activeEmployees) => {
  const monthNames = [
    { id: 0, month: "January" },
    { id: 1, month: "February" },
    { id: 2, month: "March" },
    { id: 3, month: "April" },
    { id: 4, month: "May" },
    { id: 5, month: "June" },
    { id: 6, month: "July" },
    { id: 7, month: "August" },
    { id: 8, month: "September" },
    { id: 9, month: "October" },
    { id: 10, month: "November" },
    { id: 11, month: "December" },
  ];

  let items = activeEmployees.slice();
  let birthdays = getBirthdays(items);
  let currentMonth = new Date().getMonth();
  let actualMonths = monthNames
    .slice(currentMonth)
    .concat(monthNames.slice(0, currentMonth));
  return actualMonths.map((m) => {
    let foundBirthdays = 0;
    let found = birthdays.map((b) => {
      if (b.month === m.id) {
        foundBirthdays += 1;
        let resultString = b.lastName + " " + b.firstName + " — " + m.month + " " + b.day + ", " + b.year;
        return <span>{resultString}</span>;
      }
    });
    if (foundBirthdays > 0) {
      return (
        <div className={styles.monthCard}>
          <label className={styles.monthTitle}>{m.month}</label>
          <div className={styles.birthdaysItems}>{found}</div>
        </div>
      );
    }
  });
};

const Birthday = (props) => {
  props.sortByLastName(props.activeEmployees);
  return (
    <div className={styles.wrapper}>
      {props.activeEmployees.length <= 0 ? (
        <div className={styles.emptyMsg}>
          <label>Employees List is empty</label>
        </div>
      ) : (
        <div>
          <label className={styles.birthTitle}>
            COMING EMPLOYEES BIRTHDAYS
          </label>
          {displayBirthdays(props.activeEmployees)}
        </div>
      )}
    </div>
  );
};

export default Birthday;
