import { useState } from "react"

const Formulario = () => {

    const [todo,setTodo] = useState({
        todoName: "",
        todoDescripcion: "",
        todoEstado: 'pendiente',
        todoCheck: false,
    })

    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();

        const {todoDescripcion,todoName} = todo
        if (!todoDescripcion.trim() || !todoName.trim()) {
            setError(true);
            return
        }
        setError(false)

        setTodo({
            todoName: "",
            todoDescripcion: "",
            todoEstado: 'pendiente',
            todoCheck: false,
        })
    }

    const handleChange = e => {
        const {name, value, checked, type} = e.target;
        setTodo({
            ...todo,
            [name]: 
            type === "checkbox" ? checked : value
        })
    }

    const PintarError = () => (
        <div className="alert alert-danger">Campos obligatorios</div>
    )

    return (
        <>
            <h2>Formulario controlado</h2>
            {
                error ? <PintarError /> : null
            }
            <form onSubmit={handleSubmit}>
              
              <input 
                type="text"
                placeholder="Ingrese una tarea"
                name="todoName"
                className="form-control mb-12"
                onChange={handleChange}
                value={todo.todoName}
              />
                    
              <textarea 
                className="form-control mb-2" 
                name="todoDescripcion"
                placeholder="Ingrese descripcion de la tarea"
                onChange={handleChange}
                value={todo.todoDescripcion}
              />
      
              <select 
                name="todoEstado"
                className="form-control mb-2"
                onChange={handleChange}
                value={todo.todoEstado}
              >
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
              </select>
      
              <div className="form-check">
                  <input 
                    name="todoCheck"
                    className="form-check-input" 
                    type="checkbox"
                    checked={todo.todoCheck}
                    onChange={handleChange}
                    id="flexCheckDefault"
                  />
                  <label 
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Dar prioridad
                  </label>
              </div>

              <button 
                type="submit"
                className="btn btn-primary"
              >
               Agregar tarea</button>
            </form>        
        </>
    )
}

export default Formulario
