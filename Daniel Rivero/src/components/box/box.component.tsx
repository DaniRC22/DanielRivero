import { FunctionComponent } from "react";

const Box: FunctionComponent<Props> = ({className}) => {
    return (
    <div className={className}>
    soy un box
    <form action="" className="form">
        <ul className="list-messy">
            <li id="li-1">
                <label htmlFor="">Usuario</label>
                <input type="text" />
            </li>
            
            <li id="li-1">
                <label htmlFor="">Password</label>
                <input type="text" />
            </li>
        </ul>
    </form>
    <button>Quiero Participar</button>
    </div>
    )
    
}

export default Box;

interface Props {
    className?: string;
}