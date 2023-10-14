import '../style/Tarea.css'
import { BsEraserFill} from "react-icons/bs";

export function Tarea({ id, texto,completada, completarTarea, elimitarTarea}){
    return(
        <div className={completada ? 'tarea-contenedor completada': 'tarea-contenedor'}>
            <div className="tarea-texto" 
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
            onClick={() => elimitarTarea(id)}>
                <BsEraserFill className='tarea-icono"'/>
            </div>
        </div>
    );
}