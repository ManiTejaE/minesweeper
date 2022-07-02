var a;
var b;
var c;
var d;
var logFunction = function (data) {
    var data2 = data;
    console.log(data);
    console.log(data2);
    throw new Error('Bad!');
};
var perm = ['admin', 'manager'];
var DepsForPerms = {
    admin: {
        depName: 'security',
        lvl: 10
    },
    user: {
        depName: 'sales',
        lvl: 5
    },
    manager: {
        depName: 'sales',
        lvl: 10
    }
};
var user = {
    name: 'ManiTeja',
    surname: 'Emmadi',
    age: 24,
    isAdmin: false,
    accounts: 1
};
// user.name = 'shitbag'
var newUser = {
    name: '',
    surname: '',
    age: 0,
    isAdmin: 1,
    permissions: ['admin', 'manager'],
    accounts: 2
};
var usersArray = [user, user];
function getFirst(arr) {
    return arr[0];
}
getFirst(usersArray);
var multiply = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };
