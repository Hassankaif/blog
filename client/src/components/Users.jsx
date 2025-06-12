import { useState , useEffect} from 'react'
import { deleteUserInfo, getAllUserInfo } from '../services/Userapi'
import Form from '../components/form'

// get and delete api is handled here




const Users = () => {
  const [user, setuser] = useState([]);
  const [updatedUser, setupdatedUser]=useState({});
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

  //put operation (passing the old data to the form for editing)
  const HandleUpdateUser= async(currentuser)=>{
    setupdatedUser(currentuser);
  }

  return <section>

    <div > 
       <Form user={user} setuser={setuser} updatedUser={updatedUser} setupdatedUser={setupdatedUser} /> {/* passing this state variable, so that the changes are reflected at both UI and api */}
    </div>


    {/* <div className='flex flex-col justify-around align-middle min-h-dvh bg-gradient-to-b from-rose-400 via-red-400 to-amber-400' > */}
      <div className='bg-white rounded-b-full'>
      </div>
          <ol>
          {user.map(user => {
            return <div key={user._id}>
              <div className=' flex flex-row justify-around align-middle m-4 p-4 h-fit w-fit  bg-gray-200 mb-2 hover:bg-gray-700'>
              <li>
              <p className='text-1xl text-gray-900'>{user.user_name}</p>
              <p className='text-1xl text-gray-900' >{user.user_email}</p>
              <p  className='text-1xl text-gray-900'>{user.user_password}</p>
              <p className='text-1xl text-gray-900'>{user.gender}</p>
              <button onClick={()=>{HandledeleteUser(user._id)}}
                className="bg-red-300 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"> DELETE</button>

                <button onClick={()=>{HandleUpdateUser(user)}}
                className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 ml-4 rounded"> EDIT </button>
              </li>
              </div>
            </div>
          })}
        </ol>
    {/* </div> */}


  </section>
}

export default Users