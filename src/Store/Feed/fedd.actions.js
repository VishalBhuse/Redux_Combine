import { addTodo, editTodo, rmTodo, toggleTodo } from "./feed.types";



export const ADDTODO = (value) => ({type:addTodo, payload:value});
export const REMOVETODO = (id) => ({type:rmTodo, payload:id});
export const EDITTODO = (id) => ({type:editTodo, payload:id});
export const TOOGLETODO = (value) => ({type:toggleTodo, payload:value});