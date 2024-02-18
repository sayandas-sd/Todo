import { useState } from "react";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}/> <br />
        <input id="description" type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}/> <br />
//here is fetch connect to backend
        <button onClick={function(){
            fetch("https://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("todo complete");
            })
        }}>Add a todo</button>
    </div>
}