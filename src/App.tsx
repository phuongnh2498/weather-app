import React,{useEffect,useRef,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {Note} from './actions/NoteTypes'
import { AddNote, RemoveNote } from './actions/NoteActions';
import {RootStore} from './store'
function App() {
  const [input,setInput] = useState<string|undefined>("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useDispatch()
  const noteState =  useSelector((state:RootStore) => state.note)
  const {notes} = noteState 

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInput(inputRef.current?.value);
  }
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const currentDate = new Date();
    const timestamp = currentDate.getTime();

    dispatch(AddNote({text:input,timestamp:timestamp}));
  }
  const handleRemove = (timestamp:number)=>{
    dispatch(RemoveNote({timestamp:timestamp,desciption:"hello"}))
  }
  return (
    <div className="App">
      <ul>
         {notes.map(x=><li>{x.text} <button onClick={()=>handleRemove(x.timestamp)}>X</button></li>)}
      </ul>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} onChange={handleInputChange} type="text"/>
       <button type="submit">Add text</button>
      </form>
    </div>
  );
}

export default App;
