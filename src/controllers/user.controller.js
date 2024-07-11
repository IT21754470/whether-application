import User from '../models/user.model';


export const createUser = async (req, res) => {

    try{
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    }catch(error){
        console.log('error fetching users: ', error);
        res.status(500).json({message: 'Error while creating user', error: error.message})
    }

    
}