import React from "react";
import styles from "./Birthday.module.css";

const getBirthdays = (items) => {
  return items.map((i) => {
    let date = new Date(i.dob);
    let result = {
      firstName: i.firstName,
      lastName: i.lastName,
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };
    return result;
  });
};

const displayBirthdays = (activeEmployees) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let items = activeEmployees.slice();
  let birthdays = getBirthdays(items);
  return monthNames.map((m) => {
    let foundBirthdays = 0;
    let found = birthdays.map(b => {
        if(b.month == monthNames.indexOf(m)) {
            foundBirthdays+=1;
            let resultString = b.lastName + " " + b.firstName + " — " + m + " " + b.day + ", " + b.year;
            return (
                <span>{resultString}</span>
            )
        }
    })
    if(foundBirthdays > 0) {
      return (
        <div className={styles.monthCard}>
          <b>{m}</b>
          <div className={styles.birthdaysItems}>
              {found}
          </div>
        </div>
      );
    }
  });
};

const Birthday = (props) => {
  props.sortByLastName(props.activeEmployees);
  return (
    <div className={styles.wrapper}>
      {props.activeEmployees.length <= 0 && <span>empty</span>}
      {displayBirthdays(props.activeEmployees)}
    </div>
  );
};

export default Birthday;
