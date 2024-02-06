import '../css/task.css';
import { AiTwotoneCloseCircle } from "react-icons/ai";

function Task({id, text, completed, eventComplete, eventDelete}) {
    return (
        <div id={id} className={'task-container'+(completed?' completed':'')}>
            <div className="text" onClick={() => eventComplete(id)}>
                {text}
            </div>
            <div className="icons-container" onClick={() => eventDelete(id)}>
                <AiTwotoneCloseCircle className="icon-delete"/>
            </div>
        </div>
    );
}

export default Task;