import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { id:1, name: 'Caleb', role: 'Developer', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { id:2 ,name: 'Mousse', role: 'Gate keeper', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { id:3, name: 'Mila', role: 'Hugger', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { id:5, name: 'Ashley', role: 'Manager', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { id:5, name: 'Laure', role: 'Developer', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { id:6, name: 'Julia', role: 'Boss', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' }
    ]
  );

  function updateEmployee(id, newName, newRole){
    const updatedEmployee = employees.map((employee) =>{
      if(employee.id === id){
        return{...employee, name: newName, role: newRole};
      } return employee;
    });
    setEmployees(updatedEmployee);
  }
  const showEmployees = true;
  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type='text'
            onChange={(e) => {
              console.log(e.target.value)
              setRole(e.target.value);
            }} />
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              /* console.log(employee) */
              return (
                <Employee 
                /* key={uuidv4()} */
                id={employee.id}  
                name={employee.name} 
                role={employee.role} 
                img={employee.img} 
                updateEmployee={updateEmployee}
                />
              );
            })}
          </div>
        </>

      ) : (<p>You are not authorized</p>
      )}
    </div>
  );
}

export default App;
