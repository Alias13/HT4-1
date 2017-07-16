class Message {
    constructor (id, senderId, receiverId, text) {
        this.sender = senderId;
        this.receiver = receiverId;
        this.text = text;
    }
}

let messages = [
    new Message(1, 2, 'Message1'),
    new Message(2, 1, 'Message2'),
    new Message(3, 2, 'Message3'),
    new Message(2, 3, 'Message4'),
    new Message(1, 3, 'Message5')
];

function findMessage(id){
    const err = null;
    if (typeof id === 'undefined'){
        err = new Error('id is undefined');
    }

    let index;
    const message = messages.find((el, ind) => {
            if (el.senderId === id){
        index = ind;
        return true;
    } else {
        return false;
    }
});
    return {message, index, err};
}

module.exports = {
        findAll: (callback) => {
        console.log(messages);
callback(null, messages);
},

findOne: (id, callback) => {
    const {err, message} = findMessage(id);
    console.log(message);
    callback(err, message);
},

add: (user, callback) => {
    if (typeof user.id !== 'undefined'){
        users.push(user);
        callback(null);
    } else {
        callback(new Error('user doesnt have id'));
    }
},

findOneAndDelete: (id, callback) => {
    let {err, message, index} = findMessage(id);
    if (typeof index !== 'undefined'){
        messages.splice(index, 1);
    } else {
        err = new Error('no users with such index');
    }
    callback(err);
},

findOneAndUpdate: (id, message, callback) => {
    const {err, index} = findMessage(id);
    messages[index] = Object.assign(messages[index], message);
    callback(err);
}
};
