import { Routes } from '@angular/router';

export const PRIVATE_ROUTES: Routes = [
    {
        path: 'todos',
        loadComponent: () => import('./todos-list/todos-list.component').then(c => c.TodosListComponent),
    },
    {
        path: 'add-todo',
        loadComponent: () => import('./todos-list/components/create-todo/create-todo.component').then(c => c.CreateTodoComponent),
    },
    {
        path: 'edit-todo/:id',
        loadComponent: () => import('./todos-list/components/create-todo/create-todo.component').then(c => c.CreateTodoComponent),
    },
    {
        path: '**',
        redirectTo: 'todos'
    }
];

