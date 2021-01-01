import {NotesState,NoteActionType,ADD_NOTE,REMOVE_NOTE} from '../actions/NoteTypes'

const initialState:NotesState = {
    notes: []
}

export default (state:NotesState = initialState, action:NoteActionType) => {
    switch (action.type) {
    case ADD_NOTE:
        return { ...state, notes:[...state.notes,action.payload] }
    case REMOVE_NOTE:
        return { ...state, notes: state.notes.filter(x=>{
           return x.timestamp !== action.payload.timestamp
        }) }
    default:
        return state
    }
}
