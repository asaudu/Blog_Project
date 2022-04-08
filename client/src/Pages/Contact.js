import { useState} from 'react';

const Contact = () => {

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

	const handleSubmit = (e) => {
        e.preventDefault();
        //newSignup(signup);
        
    };

return (
	<div>
	<h1>Thinking of contacting your favorite Wanderer?</h1>
	{/* <form onSubmit={handleSubmit}>
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
	</form> */}
	</div>
);
};

export default Contact;
