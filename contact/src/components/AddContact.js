import React,{useState} from 'react'

export default function AddContact({addContact}) {
    const [contactData,setContactData] = useState({name:"",email:""})

    const handleChange = (e)=>{
        if(e.target.name === "name"){
            setContactData({...contactData,name:e.target.value})
        }
        else{
            setContactData({...contactData,email:e.target.value})
        }

    }
    const handleAdd = (e)=>{
        if(contactData.name===""||contactData.email===""){

            alert("Please enter details");
            return
        }
        addContact(contactData);
        setContactData({name:"",email:""});
    }
  return (
    <div>
    <div>Add contact</div><br/>
    <form>
    <label>Name:</label><br/>
    <input type="text" placeholder=' Enter Name' name='name' value={contactData.name} onChange={handleChange}/><br/>
    <label>Email:</label><br/>
    <input type="text" placeholder=' Enter Email' name='email' value={contactData.email} onChange={handleChange}/><br/>
    </form> 
    <button onClick={handleAdd}>Add contact</button> 
    </div>
  ) 
}
