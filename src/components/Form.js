import React from "react";

function Form(props) {



  // function Form(props) {
    return (
      <form>
        <input
          type="text"
          onChange={props.handleFirstNameChange}
          value={props.firstName}
        />
        <input
          type="text"
          onChange={props.handleLastNameChange}
          value={props.lastName}
        />
        <button type="submit">Submit</button>
      </form>
    );
  // const [newsetter, setNewsetter] = useState(false);

  // function handleNewsletterChange(event) {
  //   // .checked, not .value!
  //   setNewsetter(event.target.checked);
  // }

  // return (
  //   <form>
  //     <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
  //     <input
  //       type="checkbox"
  //       id="newsletter"
  //       onChange={handleNewsletterChange}
  //       checked={newsetter}
  //     />
  //     <button type="submit">Submit</button>
  //   </form>
  // );



  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(event) {
  //   setFirstName(event.target.value);
  // }
  
  // function handleLastNameChange(event) {
  //   setLastName(event.target.value);
  // } 

  // return (
  //   <form>
  //     <input type="text" onChange={handleFirstNameChange} value={firstName} />
  //     <input type="text" onChange={handleLastNameChange} value={lastName} /> 
  //     <button type="submit">Submit</button>
  //   </form>
  // );
}

export default Form;
