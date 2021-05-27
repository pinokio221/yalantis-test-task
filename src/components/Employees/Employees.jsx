import React, { useEffect } from "react";
import axios from "axios";
import { setEmployeesThunk, toggleEmployeeStatusAC } from "../../redux/employees-reducer";
import { connect, useDispatch, useSelector } from "react-redux";
import styles from './Employees.module.css'
import Alphabet from './Alphabet'


const Employees = (props) => {
  const dispatch = useDispatch();
  const requestURL =
    "https://yalantis-react-school-api.yalantis.com/api/task0/users";

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      if (response.status === 200) {
        props.setEmployeesThunk(response.data, props.activeEmployees);
      }
    });
  }, []);

  const toggleEmployeeStatus = (id, status) => {
      props.toggleEmployeeStatusAC(id, status)
  }

  const employees = useSelector(state => state.employeesPage.employees);

  
  return(
      <div className={styles.wrapper}>
          <Alphabet employees={employees} toggleEmployeeStatus={toggleEmployeeStatus}/>
          <div>
              <span></span>
          </div>
      </div>
  )
};

let mapStateToProps = (state) => {
    return {
        activeEmployees: state.employeesPage.activeEmployees
    }
}



export default connect(mapStateToProps, { setEmployeesThunk, toggleEmployeeStatusAC })(Employees);
