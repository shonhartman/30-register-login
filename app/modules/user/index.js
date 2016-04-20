/* You'll need to import all 3 controllers and the service */

import angular from 'angular';

import profileController from './controller/profile';
import loginController from './controller/login';
import registerController from './controller/register';

let user = angular.module('tiy.user', []);

user.config(config);
user.controller('ProfileController', profileController);
user.controller('LoginController', loginController);
user.controller('RegisterController', registerController);
user.service('UserService', service);

export default user
