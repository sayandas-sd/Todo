
export function Todos({todos}) {
    return <div>
        {todos.map(function(todos){
            return <div>
                <h1>{todos.title}</h1>
                <h2>{todos.description}</h2>
                <button>{todos.complete === true ? "Complete" : "Todo Complete"}</button>
            </div>
        })}
    </div>
}