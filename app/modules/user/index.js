/* You'll need to import all 3 controllers and the service */

import angular from 'angular';

import config from './config';
import profileController from './controllers/profile';
import loginController from './controllers/login';
import registerController from './controllers/register';
import service from './service';

let user = angular.module('tiy.user', []);

user.config(config);
user.controller('ProfileController', profileController);
user.controller('LoginController', loginController);
user.controller('RegisterController', registerController);
user.service('UserService', service);

export default user
