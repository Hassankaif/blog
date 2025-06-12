import { useState , useEffect} from 'react'
import { deleteUserInfo, getAllUserInfo } from '../services/Userapi'
import Form from '../components/form'

// get and delete api is handled here




const Users = () => {
  const [user, setuser] = useState([]);

// get all user operation
  const getAllUsers = async () => {
    try {
      const res = await getAllUserInfo();
      setuser(res.data);
      console.log(res.data);
    } catch (error) { console.log(error); }
  }
  useEffect(() => {
    getAllUsers();
  }, [])

  //handle delete operation
  const HandledeleteUser = async(id)=>{
    try {
      await deleteUserInfo(id);
      getAllUsers();
    } catch (error) { console.log(error);}
  }

  return <section>
    <div> 
       <Form user={user} setuser={setuser} /> {/* passing this state variable, so that the changes are reflected at both UI and api */}
    </div>
    <ol>
      {user.map(user => {
        return <div className='flex flex-col justify-center align-middle p-4 bg-amber-200' key={user._id}>
          <li className='text-2xl text-gray-900'>{user.user_name}</li>
          <li>{user.user_email}</li>
          <li>{user.user_password}</li>
          <li>{user.gender}</li>
          <button onClick={()=>{HandledeleteUser(user._id)}}
            className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> DELETE</button>
        </div>
      })}
    </ol>

  </section>
}

export default Users