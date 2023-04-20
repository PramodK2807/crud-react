import { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewStudent = () => {

    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [fatherName, setFatherName] = useState('')
    let [contact_number, setCNumber] = useState('')
    let [age, setAge] = useState('')

    const navigate = useNavigate()


    const handleSubmit = async(e) => {

        e.preventDefault()
       
        if(!email || !fatherName || !contact_number || !age || !name) {
            alert("Please fill all required fields")
            return false
          }
          
          let emailVer = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

          if(contact_number.length !== 10 ){
            alert("Enter Correct Mobile Number");
            return false;
          }
          if(!email.match(emailVer)){
            alert('Please enter valid email')
            return false
        }
      
          try {
            let response = await fetch(`https://crud-8t5x.onrender.com/student`, {method:"post",
            body:JSON.stringify({name, email, contact_number, age, fatherName}),
            headers: { "Content-Type" : "application/json" },
          })
      
          let data = await response.json();
            if (data.success) {
              alert(data.message);
              // navigate('/')
            }
            else{
              alert(data.message);
            }
          } 
          catch (error) {
            alert("Something went wrong")
          }
    }



  return (
    <div className="container ">
        <div className="center-div">
            <h1 className="text-center heading">New Student Registration</h1>
            <hr />
            
            <div>
                <label htmlFor="name">Name : <br /><input type="text" id="name" placeholder="Enter Your Name..." value={name} onChange={(e) => setName(e.target.value)} /></label>
            </div>
            

            <div>
                <label htmlFor="fname">Father's Name : <br /><input type="text" id="fname" placeholder="Enter Father's Name..." value={fatherName} onChange={(e) => setFatherName(e.target.value)} /></label>
            </div>

            <div>
                <label htmlFor="email">Email : <br /><input type="email" id="email" placeholder="Enter Your Email..." value={email} onChange={(e) => setEmail(e.target.value)} /></label>
            </div>
            
            <div>
                <label htmlFor="num">Contact No. : <br /><input type="number" id="num" placeholder="Enter Your Contact..." value={contact_number} onChange={(e) => setCNumber(e.target.value)} /></label>
            </div>
            
           
            <div>
                <label htmlFor="age">Age : <br /><input type="number" id="age" placeholder="Enter Your Age..." value={age} onChange={(e) => setAge(e.target.value)} /></label>
            </div>

            <button className="btn btn-success" onClick={(e) => handleSubmit(e)} style={{width:"100%"}}>Submit</button>
            
        </div>
    </div>
  )
}
export default NewStudent