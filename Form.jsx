import {useState} from 'react';
import formComments from './formComments.jsx';
export default function Form(){

  let [formData, setFormData] = useState({

  fullName: "",
  userName: "",
  passWord:"",
  });

  let handleInputChange = (event) => {

setFormData((currData) => {

return {...currData, [event.target.name]: event.target.value};
});
  };


  
let handleSubmit = (event) => {

event.preventDefault();
setFormData({

fullName:"",
userName:"",
passWord:"",
});
};
  

return(<div><form onSubmit={handleSubmit}>

  <label htmlFor="Full name">Fullname</label>
  <input
  placeholder="enter Fullname"
  type="text"
  value={formData.fullName}
  id="fullName"
  name="fullName"
  onChange={handleInputChange}
  />
  <br></br>
  <br></br>

<label htmlFor="Username">Username</label>
<input
placeholder="enter username"
type="text"
value={formData.userName}
id="userName"
name="userName"
onChange={handleInputChange}
/>
  <br></br>
  <br></br>

<label htmlFor="password">Username</label>
<input
placeholder="enter password"
type="password"
value={formData.passWord}
id="passWord"
name="passWord"
onChange={handleInputChange}
/>
  <br></br>
  <br></br>

  <formComments /> {/* Render the formComments component here */}


</form>

</div>
  
);
  
