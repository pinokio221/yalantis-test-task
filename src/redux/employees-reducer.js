const SET_EMPLOYEES = "SET-EMPLOYEES";
const TOGGLE_STATUS = "TOGGLE-STATUS";


export const setEmployeesAC = (employees) => ({
  type: SET_EMPLOYEES,
  employees
});

export const toggleEmployeeStatusAC = (id, status) => ({
  type: TOGGLE_STATUS,
  id,
  status
});


// THUNKS

export const setEmployeesThunk = (employees, activeEmployees) => {
  return(dispatch) => {
    let result = employees.map((e) => {
      let isActive = activeEmployees.find(a => a.id === e.id);
      if(isActive) {
        e.status = true
      } else {
        e.status = false
      }
      return e;
    });
    dispatch(setEmployeesAC(result));
  }
}

let initialState = {
  employees: [],
  activeEmployees: [],
};

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return {
        ...state,
        employees: action.employees
      };
    }
    case TOGGLE_STATUS: {
      let empObj = { id: action.id };
      console.log(action.id)
      state.employees.map(e => {
        if(e.id === action.id) {
          e.status = action.status
          if(action.status === true) {
              state.activeEmployees.push(empObj);
          }
           else {
              console.log('deteletd', e.id)
              let element = state.activeEmployees.find(a => a.id === e.id);
              let index = state.activeEmployees.indexOf(element);
              console.log(index)
              if (index > -1) {
                state.activeEmployees.splice(index, 1);
              }

          }
        }
      })
      return {
        ...state,
        employees: [...state.employees],
        activeEmployees: [...state.activeEmployees]
      }
      
    }
    default:
      return state;
  }
};

export default employeesReducer;
