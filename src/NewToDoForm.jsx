import { useState} from "react"
export default function NewToDoForm( { addToDo } ) {
    const [newToDo, setNewToDo] = useState('');

    function handleAddTodo(evt) {
        evt.preventDefault();
        // alert(newToDo);
        addToDo(newToDo)
        setNewToDo({
            text: '',
            completed: false
        })
    }


    return(
        <>
            <h2>New To-Do</h2>
            <form onSubmit={handleAddTodo}>
                <input 
                value={newToDo}
                placeholder="New To-Do" 
                onChange={(evt) => setNewToDo(evt.target.value)}
                required
                pattern=".{4,}"
                />
                <button>ADD TO-DO</button>
            </form>
        </>
    )

}