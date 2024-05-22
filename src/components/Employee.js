import React, { useEffect, useState } from 'react'
import '../App.css'
export default function Employee() {

  const [employees,setEmployees]= useState([])


  useEffect(()=>{
    console.log('x')

         fetch('http://localhost:3001/employees')
         .then(response => response.json())
         .then(data=>{
            // const emplist = data 
             //console.log(emplist)
             setEmployees(data)
            

         })
         console.log(employees)
  
  },[]);

   
  return (
    <div className='employee-list'>Employee


         <table border={1}>

<thead>
           <tr>
            <td>Id</td>
            <td>Name</td>
           </tr>
           </thead>
           <tbody>      
            {
            employees.map((employee)=>{
              return <tr key={employee.id}>

                   <td>{employee.id}</td>
                   <td>{employee.name}</td>
              </tr>
            })
          
            }
               
</tbody>

         </table>

         

    </div>
  )
}
