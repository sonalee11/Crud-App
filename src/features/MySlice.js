import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../data/Data";

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.push(action.payload)
            console.log(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email, job, salary} = action.payload
            // destructuring
            const updatingUser = state.find(user => user.id == id);
            if(updatingUser){
                updatingUser.name = name;
                updatingUser.email = email;
                updatingUser.job = job;
                updatingUser.salary = salary;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const existingUser = state.find(user => user.id == id);
            if(existingUser){
                return state.filter(singleUser => singleUser.id !== id);
            }
        }

    }
})

export const {addUser, updateUser, deleteUser} = userSlice.actions  

export default userSlice.reducer;


