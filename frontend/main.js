import "core-js/stable";
import "regenerator-runtime/runtime";

import Login from "./modules/Login.js";

const cadastro = new Login(".form-cadastro");
const login = new Login(".form-login");

cadastro.init();
login.init();
