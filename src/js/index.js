import '../css/style.scss';
import User, {printName as printUserName, printAge} from './user.js';

const user = new User('Peter', 50);

console.log(user);
printUserName(user);
printAge(user);

