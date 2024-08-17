import {useState} from 'react';

export default function Comments(){

let [formData, setformData]= useState({
  
remark: "",
rating: "5",
});


let handleInputChange = (event) => {
setformData((currData) => {
return {...currData, [event.target.name]: event.target.value };

});
};

let handleSubmit = (event) => {

console.log(formData); 
event.preventDefault();
useState({
remark: "",
rating: "",
});
};

  
return (

<div>
<h4>Give a comment!</h4>

<form onSubmit={handleSubmit}>
  
  <label htmlFor="remark">Remarks</label>
  <textarea
  value={formData.remark}
  placeholder="add few remarks"
  onChange={handleInputChange}
  id="remark"
  name="remark"
  />
  <br></br> <br></br>

  <label htmlfor="rating">Rating</label>
  <input
    type="number"
    value={formData.rating}
    placeholder="rate from 1 to 5"
    min="1"
    max="5"
    onChange={handleInputChange}
    id="rating"
    name="rating"/>
  <br></br> <br></br>
  <button>Submit</button>



</form>
</div>
);

  











