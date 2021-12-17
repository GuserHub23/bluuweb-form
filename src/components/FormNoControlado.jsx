import { useRef } from 'react';

const FormNoControlado = () => {

  const formulario = useRef(null)

  const handleSubmit = e => {
    e.preventDefault();
    const datos = new FormData(formulario.current);

    const objetoDatos = Object.fromEntries([...datos.entries()])
    console.log(objetoDatos)

    const {todoDescripcion,todoName} = objetoDatos
    if (!todoDescripcion.trim() || !todoName.trim()) {
      console.log("Descripcion vacia");
      return;
    }

    console.log('pasó validaciones')
  }






  return (
    <>
      <h1>No controlado</h1>
      <form onSubmit={handleSubmit}>
              
        <input 
          type="text"
          placeholder="Ingrese una tarea"
          name="todoName"
          className="form-control mb-12"
          defaultValue="Tarea #01"
        />
              
        <textarea 
          className="form-control mb-2" 
          name="todoDescripcion"
          placeholder="Ingrese descripcion de la tarea"
          defaultValue="Descripcion Tarea #01"
        />

        <select 
          name="todoEstado"
          className="form-control mb-2"
          defaultValue="pendiente"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>

        <button 
          type="submit"
          className="btn btn-primary"
        >
         Agregar tarea</button>
      </form>
    </>
  )
}

export default FormNoControlado
