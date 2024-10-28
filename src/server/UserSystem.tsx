import User from '../model/User';

const UserSystem = new User("","","","","","","","","","");

export const getUserSystems = ()=>{
    console.log(" entrou na funão de callback")
    return UserSystem;
}