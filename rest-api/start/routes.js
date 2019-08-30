'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('usuarios/registro', 'UserController.store');
  Route.post('usuarios/login', 'UserController.login');
  // Rutas de los proyectos
  Route.get('proyectos', 'ProyectoController.index').middleware('auth');
  Route.post('proyectos', 'ProyectoController.create').middleware('auth');
  Route.patch('proyectos/:id', 'ProyectoController.update').middleware('auth');
  Route.delete('proyectos/:id', 'ProyectoController.destroy').middleware('auth');
  // Rutas de las tareas
  Route.get('proyectos/:id/tareas', 'TareaController.index').middleware('auth');
  Route.post('proyectos/:id/tareas', 'TareaController.create').middleware('auth');
  Route.patch('tareas/:id', 'TareaController.update').middleware('auth');
  Route.delete('tareas/:id', 'TareaController.destroy').middleware('auth');
}).prefix('api/v1/');
