import {Dispatch} from "redux"
import {NoteActionType,ADD_NOTE,REMOVE_NOTE,UPDATE_NOTE,Note,meta} from './NoteTypes'

export const AddNote = (note:Note) => (dispatch:Dispatch<NoteActionType>) =>{
    // const currentDate = new Date();
    // const timestamp = currentDate.getTime();
    dispatch({
        type:ADD_NOTE,
        payload:note
    })
}
export const RemoveNote = (meta:meta) => (dispatch:Dispatch<NoteActionType>) =>{

    dispatch({
        type:REMOVE_NOTE,
        payload:meta 
    })

}