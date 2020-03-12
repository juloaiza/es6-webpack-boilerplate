import "../css/style.scss";
import User, { printName as printUserName, printAge } from "./user.js";
import $ from "../../vendors/jquery/jquery-3.4.1.min.js";
const user = new User("Peter", 10);

console.log(user);
printUserName(user);
printAge(user);

$("div").click(function() {
  $(this).hide();
});
