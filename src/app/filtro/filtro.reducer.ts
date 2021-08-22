import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';
import { filtrosValidos } from './filtro.actions';
import { Todo } from '../todos/models/todo.model';
 
export const estadoInicial:filtrosValidos = "todos";
 
const _filtroReducer = createReducer<filtrosValidos>( estadoInicial,
  on( actions.setFiltro, (state, { filtro }) => filtro )

);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
  }
