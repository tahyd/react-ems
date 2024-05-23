import React, { useEffect, useState } from 'react'
import '../App.css'
export default function Employee() {

  const [employees,setEmployees]= useState([])
  const [error,setError] = useState(null);


  useEffect(()=>{
   

         fetch('http://localhost:3001/employees')
         .then(response => response.json())
         .then(data=>{
        
             setEmployees(data)
            

         }).catch(error=>{
          setError(error);
         })
         console.log(employees)
  
  },[employees]);

   
  if(error) return <p> Error : {error.message}</p>
  return (
    <div className='employee-list'>Employee

      <table border={1}>

<thead>
           <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Salary</td>
            <td>Department ID</td>
            <td>Department Name</td>
            <td>Department Location</td>

           </tr>
           </thead>
           <tbody>      
            {
            employees.map((employee)=>{
              return <tr key={employee.id}>

                   <td>{employee.id}</td>
                   <td>{employee.name}</td>
                   <td>{employee.salary}</td>
                   <td>{employee.department.id}</td>
                   <td>{employee.department.name}</td>
                   <td>{employee.department.location}</td>

              </tr>
            })
          
            }
               
</tbody>

         </table>

         

    </div>
  )
}
