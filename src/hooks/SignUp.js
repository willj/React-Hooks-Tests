import React, {useState} from 'react';

const SignUp = () => {
    const [member, setMember] = useState({
        email: '',
        name: ''
    });

    /*
        You can use objects but not recommended to do it if you don't need to, 
        use multiple useStates instead.
    */

    function updateState(event){
        let {name, value} = event.target;
        
        setMember(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div>
            <label>
                Email
                <input type="text" name="email" value={member.email} onChange={updateState} />
            </label>

            <label>
                Name
                <input type="text" name="name" value={member.name} onChange={updateState} />
            </label>

            <p>Sign up as <b>{member.name}</b> at <b>{member.email}</b></p>
        </div>
    );

};

export default SignUp;