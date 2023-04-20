import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

const Homepage = () => {

  const [student, setStudent ] = useState('')

  const getStudentData = async() => {
    let res = await fetch(`https://crud-8t5x.onrender.com/student`)
    let student = await res.json()
    setStudent(student.student)
  }

  const handleDelete = async(id) => {
    
    let res = await fetch(`https://crud-8t5x.onrender.com/student/${id}`, {method: 'DELETE'})
    let student = await res.json()
    setStudent(student.student)
  }
  useEffect(() => {
    getStudentData()
  }, [student])

  return (
    <div className="container">
      <div className="profile row g-5 mt-1">

        {
          student.length  > 0 ? (
            student.map((items, i) => {
              return (

                <div className="cardd col-md-6 col-lg-3 col-sm-6 col-12" key={i}>
          <div className="img">
            <img style={{width:"100%"}} src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="logo" />
          </div>
          <div className="content">
            <h1>{items.name}</h1>
            <p>Father's Name : {items.fatherName}</p>
            <p>Email Id : {items.email}</p>
            <p>Contact : +91 {items.contact_number}</p>
            <div className="ageNroll row">
              <p className="col-6">Age : {items.age}</p>
              <p className="col-6">Roll No. : {items._id.slice(0,6)}</p>
            </div>
          </div>

          <div className=" row justify-content-between m-1">
            <button className="update button col-5"><NavLink to={`/update/${items._id}`}>Update</NavLink></button>
            <button className="delete button col-5" onClick={() => handleDelete(items._id)}>Delete</button>
          </div>
        </div>

              )
            })
            
          ) 
          : 
          (
            <h1 className="text-center">No data found</h1>
          )
        }
        

        

      </div>
      
    </div>
  )
}
export default Homepage