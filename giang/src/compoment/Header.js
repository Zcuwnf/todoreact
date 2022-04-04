import React, {memo, useState} from "react"

const Header = memo (props =>{
    const [text, setText] = useState('')
    const {addTodo} = props
    const onAddTodo = (e = {} ) => {
        if (e.key === 'Enter' && text) {
        
            addTodo({
                id: new Date().valueOf(),
                text,
                checked: false
            })
            setText('')
        }
    }
    return (
        <header className="header">
            <h1>Todo List</h1>
            <input 
                className="new-todo" 
                placeholder="Enter your todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => onAddTodo(e)}
            />
        </header>
    )
})

export default Header