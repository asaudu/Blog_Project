import { useState } from 'react';

const Home = (props) => {

	const [signup, setSignup] = useState({
		username: "",
        email: ""
	})

    const handleUsernameChange = (event) => {
        const username = event.target.value;
        setSignup((signup) => ({ ...signup, username }));

    }

	const handleEmailChange = (event) => {
        const email = event.target.value;
        setSignup((signup) => ({ ...signup, email }));

    }

    //A function to handle the post request
    const newSignup = (newwSignup) => {
        return fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newwSignup)
      }).then((response) => {
          return response.json()
      }).then((data) => {
        console.log("From the post ", data);
        props.addSignup(data);
      
    });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newSignup(signup);
        
    };
return (
	<div>
	<h1>May need to be retitled Landing page or straight up Home.js</h1>
	<form onSubmit={handleSubmit}>
		<fieldset>
		<label>Username</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Username Here"
                    required
                    value={signup.username}
                    onChange={handleUsernameChange}

                /> <br/>
                <label>Email</label>
                <input
                    type="text"
                    id="add-email"
                    placeholder="Email Here"
                    required
                    value={signup.email}
                    onChange={handleEmailChange}

                /> <br/>
                <button type="submit">Signup</button>
		</fieldset>
	</form>
	</div>
);
};

export default Home;
