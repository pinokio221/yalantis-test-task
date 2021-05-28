import React, { useEffect } from "react";
import axios from "axios";
import {
  setEmployeesThunk,
  toggleEmployeeStatusAC,
} from "../../redux/employees-reducer";
import { connect, useSelector } from "react-redux";
import styles from "./Employees.module.css";
import Alphabet from "./Alphabet";
import Birthday from "./Birthday";

const Employees = (props) => {
  const requestURL =
    "https://yalantis-react-school-api.yalantis.com/api/task0/users";

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      if (response.status === 200) {
        props.setEmployeesThunk(response.data, props.activeEmployees);
      }
    });
  }, []);

  const toggleEmployeeStatus = (item, status) => {
    props.toggleEmployeeStatusAC(item, status);
  };

  const sortByLastName = (arr) => {
    arr.sort(function (a, b) {
      if (a.lastName < b.lastName) {
        return -1;
      }
      if (a.lastName > b.lastName) {
        return 1;
      }
    });
  };

  const employees = useSelector((state) => state.employeesPage.employees);

  return (
    <div className={styles.wrapper}>
      <Alphabet
        sortByLastName={sortByLastName}
        employees={employees}
        toggleEmployeeStatus={toggleEmployeeStatus}
      />
      <Birthday
        sortByLastName={sortByLastName}
        activeEmployees={props.activeEmployees}
      />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    activeEmployees: state.employeesPage.activeEmployees,
  };
};

export default connect(mapStateToProps, {
  setEmployeesThunk,
  toggleEmployeeStatusAC,
})(Employees);
