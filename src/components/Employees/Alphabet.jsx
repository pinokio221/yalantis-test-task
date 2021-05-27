import React from "react";
import styles from "./Employees.module.css";

const Alphabet = (props) => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let employeeArr = props.employees.slice();
  return (
    <div className={styles.alphabet}>
      {alphabet.map((a) => {
        let foundItems = 0;
        let sorted = employeeArr.map((e) => {
          if (a.toLowerCase() === e.lastName[0].toLowerCase()) {
            foundItems += 1;
            return (
              <div className={styles.employeeCard}>
                <span className={e.status && styles.activeEmployee}>
                  {e.lastName} {e.firstName}
                </span>
                <div>
                  <input
                    type="radio"
                    value="active"
                    checked={e.status === true}
                    onChange={() => { props.toggleEmployeeStatus(e.id, true) }}
                  />
                  <label for="active">Active</label>
                  <input
                    type="radio"
                    value="not-active"
                    checked={e.status === false}
                    onChange={() => { props.toggleEmployeeStatus(e.id, false) }}
                  />
                  <label for="not-active">Not Active</label>
                </div>
              </div>
            );
          }
        });
        return (
          <div className={styles.letter}>
            <b>{a}</b>
            <div>{foundItems <= 0 ? <span>----</span> : sorted}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Alphabet;
