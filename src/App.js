import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev');
  const [employees, setEmployees] = useState(
    [
      { name: 'Caleb', role: 'Developer', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { name: 'Mousse', role: 'Gate keeper', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { name: 'Mila', role: 'Hugger', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { name: 'Ashley', role: 'Manager', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { name: 'Laure', role: 'Developer', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
      { name: 'Julia', role: 'Boss', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' }
    ]
  );
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
              console.log(employee)
              return (
                <Employee key={uuidv4()} name={employee.name} role={employee.role} img={employee.img} />
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
