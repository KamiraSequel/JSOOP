import { User } from "../modules/User.js";
// Modificam nume, email, varsa
let user = new User('1','ion','ion@ion.com',22);
user.doarme(7);
user.mananca(300);
console.log(user);
user.nume = 'Morgul';
user.varsta = -25;
user.email = 'morgul@morgul.ro';
console.log(user);