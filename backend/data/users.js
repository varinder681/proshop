import bcrypt from 'bcryptjs';

const users = [
    {
        name : 'Admin User',
        email : 'admin@example.com',
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : 'Iron Man',
        email : 'iron@example.com',
        password : bcrypt.hashSync('123456', 10)
    },
    {
        name : 'James Bond',
        email : 'james@example.com',
        password : bcrypt.hashSync('123456', 10)
    },
    {
        name : 'Varinder',
        email : 'varinder@gmail.com',
        password : bcrypt.hashSync('varinder', 10)
    }
]

export default users;