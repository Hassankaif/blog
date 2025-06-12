import axios from "axios";

const api=axios.create({baseURL:'http://localhost:8000/api/user'}); //create instance of base url

//fetch all users
export const getAllUserInfo= async()=>{
        return await api.get('/viewusers');
    }

//delete user
export const deleteUserInfo= async(id)=>{
    return await api.delete('/delete/'+id);
}

//post new user
export const postUserinfo=async(newdata)=>{
    return api.post('/adduser', newdata);
}

export const UpdateUserInfo =async(id,updateData)=>{
    return api.put('/update/'+id, updateData);
}