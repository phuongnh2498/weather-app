export const ADD_NOTE = "ADD_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const UPDATE_NOTE = "ADD_NOTE";

export interface Note{
    text:string|undefined
    timestamp:number
}
export interface meta{
    timestamp:number
    desciption?:string
}
export interface NotesState {
    notes: Note[]
}

interface AddNoteAction {
    type: typeof ADD_NOTE
    payload: Note
}
  
interface RemoveNoteAction {
    type: typeof REMOVE_NOTE
    payload: meta
}
  
  export type NoteActionType = AddNoteAction | RemoveNoteAction