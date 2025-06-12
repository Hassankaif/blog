import { useState } from 'react';
import { postUserinfo } from '../services/Userapi'

//post operation is handled in this component
const Form = ({user, setuser}) => {

    // new users
    const [newUser, setNewUser] = useState({
        user_name: "",
        user_email: "",
        user_password: "",
        gender: ""
    });

    const Handlechange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        return setNewUser({ ...newUser, [name]: value });
    }

    // updating new user in the api
    const addNewUser = async (e) => {
        e.preventDefault();
        try {
            const res = await postUserinfo(newUser); // pass new userinfo data from variable to api and then db
            console.log(res.data);
            if (res.status === 201) {
                setuser([...user, res.data]); // adding new user to the frontend variable if true 
                setNewUser({        //clear the form
                    user_name: "",
                    user_email: "",
                    user_password: "",
                    gender: ""
                    });
}
        } catch (error) {console.log(error);}

    }

return <>
        <form onSubmit={addNewUser} >
            <div className='flex flex-col justify-center items-center py-2 px-2 bg-gray-300 border-2'>
                <div >
                    <label htmlFor="">Enter Name: </label>
                    <input type="text"
                        autoComplete='off'
                        id='user_name'
                        name='user_name'
                        placeholder='Enter your name... '
                        value={newUser.user_name}
                        onChange={Handlechange}
                    />

                </div>
                <div>
                    <label htmlFor="">Enter email: </label>
                    <input type="text"
                        autoComplete='off'
                        id='user_email'
                        name='user_email'
                        placeholder='Enter your name... '
                        value={newUser.user_email}
                        onChange={Handlechange}
                    />
                </div>
                <div>
                    <label htmlFor="">Enter password: </label>
                    <input type="password"
                        autoComplete='off'
                        id='user_password'
                        name='user_password'
                        placeholder='Enter your name... '
                        value={newUser.user_password}
                        onChange={Handlechange}
                    />

                </div>
                <div>
                    <select name="gender" id="gender" value={newUser.gender} onChange={Handlechange} >
                        <option value="">Gender</option>
                        <option value="male">MALE</option>
                        <option value="female"> FEMALE </option>
                    </select>
                </div>
                <div>
                    <button type='submit' > ADD USER</button>
                </div>
            </div>
        </form>
    </>
}

export default Form;