import { useEffect, useState } from 'react';
import { postUserinfo, UpdateUserInfo } from '../services/Userapi'

//post operation is handled in this component
const Form = ({user, setuser,updatedUser,setupdatedUser}) => {

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

    // adding new user in the api
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
// update using put operation 
    const empty =Object.keys(updatedUser).length === 0 ; // to check if the object is empty. object  is passed by user card when edit button is clicked
// get new data and add it into the feild
    useEffect(()=>{
                    if(!empty){setNewUser({
                        user_name:updatedUser.user_name || "",
                        user_email:updatedUser.user_email || "",
                        user_password:updatedUser.user_password || "",
                        gender:updatedUser.gender || ""
                    })}
                },[updatedUser])
    // send updated data to the api
    const UpdateUser=async(e)=>{
        e.preventDefault();
        try {
            const res= await UpdateUserInfo(updatedUser._id,updatedUser);
            console.log(res.data);
            setuser(user.map(allolduser =>{
                return allolduser._id === updatedUser._id ? res.data : allolduser  // if the id is same then replace the old-data with updated-data in the ui
            }))
            setupdatedUser({}); //lenght is zero again
            setNewUser({        //empty the form
                user_name: "",
                user_email: "",
                user_password: "",
                gender: ""
            })
        } catch (error) {
            console.log(error);
        }
        
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        const action= e.nativeEvent.submitter.value;
        if (action === 'ADD USER') {addNewUser(e);}
        else if (action === 'EDIT USER') {UpdateUser(e);}
    }

return <>
        <form onSubmit={HandleSubmit} className='flex flex-row justify-center align-middle p-8 m-4 left bg-amber-200' >
            <div className='' >
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
                <div className=' p-2 bg-green-600 text-1xl'>
                    <button type='submit' value={empty? "ADD USER": "EDIT USER"} > {empty? "ADD USER": "EDIT USER"} </button>
                </div>
            </div>
        </form>
    </>
}

export default Form;