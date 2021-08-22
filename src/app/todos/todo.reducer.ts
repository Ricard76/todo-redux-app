import { createReducer, on } from '@ngrx/store';
import * as actions from './todo.actions';
import { Todo } from './models/todo.model';
 
export const estadoInicial:Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a Thanos'),
  new Todo('Comprar traje de Ironman'),
  new Todo('Robar escudo a Capitán américa'),
];
 
const _todoReducer = createReducer( estadoInicial,
  on( actions.crear, (state, { texto }) =>  [...state, new Todo( texto )]), // crea un nuevo array a partir del array state y le añado un nuevo item.
  on( actions.borrar, (state, { id }) => state.filter( todo => todo.id !== id )),
  on( actions.toggle, (state, { id }) => {
    return state.map( todo => {
      if (todo.id === id ){
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on( actions.editar, (state, { id, texto }) => {
    return state.map( todo => {
      if (todo.id === id ){
        return {
          ...todo,
          texto: texto
        }
      } else {
        return todo;
      }
    });
  }), 
  on( actions.toggleAll, (state, { completado }) => {
    return state.map( todo => {
        return {
          ...todo,
          completado: completado
        }
    });
  }), 
  on( actions.limpiarTodos, (state) => state.filter( todo => !todo.completado )),  

);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}