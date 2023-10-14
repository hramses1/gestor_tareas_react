import { TareaFormulario } from "./TareaFormulario";
import {Tarea} from './Tarea'
import '../style/ListaDeTareas.css'
import {useState} from 'react'

export function ListaDeTareas(){

    const [ tareas, setTareas ] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()){
            tarea.texto= tarea.texto.trim();
            const tareasActualizadas = [tarea,...tareas]
            setTareas(tareasActualizadas)
        }
    }
    const eliminarTarea = id =>{
        const tareaActualizadas = tareas.filter(tarea => tarea.id !== id ); /* Filtra las tareas por id, solo mostara la tareas que no este ese id seleccionado, es decir se eliminara de cierta manera.*/
        setTareas(tareaActualizadas);/* */
    }
    
    const completarTarea = id =>{
        const tareasActualizadas = tareas.map(tarea =>{
            if (tarea.id === id){
                tarea.completada = true;
            }
            return tarea;
        });
        setTareas(tareasActualizadas)
    }

    return(
        <>
        <TareaFormulario onSubmit={agregarTarea}/>
        <div className="tarea-lista-contenedor">
            {
                tareas.map((tarea) =>
                <Tarea
                key={tarea.id}
                id={tarea.id}
                texto = {tarea.texto}
                completada={tarea.completada}
                elimitarTarea={eliminarTarea}
                completarTarea={completarTarea}
                />)
            }
        </div>
        </>
    );
}