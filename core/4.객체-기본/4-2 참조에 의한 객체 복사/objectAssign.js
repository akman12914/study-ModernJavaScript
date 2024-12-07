let user = { name: "akman" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };


Object.assign(user, permissions1, permissions2);

let participant = Object.assign({}, user);

console.log(participant);

