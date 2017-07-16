class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

let users = [
    new User(1, 'IvavIvanov', 'IvavIvanov@gmail.com'),
    new User(2, 'PetrPetrov', 'PetrPetrov@gmail.com'),
    new User(3, 'AnnaAkhmatova', 'AnnaAkhmatova@gmail.com'),
    new User(4, 'BorisPasternak', 'BorisPasternak@gmail.com'),
    new User(5, 'VasilijVasiljev', 'VasilijVasiljev@gmail.com')
];

function findUser(id){
    const err = null;
    if (typeof id === 'undefined'){
        err = new Error('id is undefined');
    }

    let index;
    const user = users.find((el, ind) => {
            if (el.id === id){
        index = ind;
        return true;
    } else {
        return false;
    }
});
    return {user, index, err};
}

module.exports = {
        findAll: (callback) => {
        callback(null, users);
},

findOne: (id, callback) => {
    const {err, user} = findUser(id);
    callback(err, user);
},

getAllInterlocutors: (id, callback) => {
    let interlocutors = [];
    for (var i = 0; i < messages.length; i++) {
        if (id == messages[i].senderId) {
            for (var j = 0; j < users.length; j++) {
                if (messages[i].receiverId == users[j].id) {
                    interlocutors.push(users[j]);
                }
            }
        }
    }
    console.log(interlocutors);
    callback(null, interlocutors);
},

add: (user, callback) => {
    if (typeof user.id !== 'undefined'){

        users.push(user);
        callback(users);
    } else {
        callback(new Error('user doesnt have id'));
    }
},

findOneAndDelete: (id, callback) => {
    let {err, user, index} = findUser(id);
    if (typeof index !== 'undefined'){
        users.splice(index, 1);
    } else {
        err = new Error('no users with such index');
    }
    callback(err);
},

findOneAndUpdate: (id, user, callback) => {
    const {err, index} = findUser(id);
    users[index] = Object.assign(users[index], user);
    callback(err);
}
};
