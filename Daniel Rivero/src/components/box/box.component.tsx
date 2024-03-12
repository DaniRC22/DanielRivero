import { FunctionComponent, useState } from "react";

const Box: FunctionComponent<Props> = ({className}) => {
const [user, setUser] = useState('');
const [password, setPassword] = useState('');


    return (
    <div className={className}>
        <div className="container">
            <h2>
    Cuenta regresiva
            </h2>
        </div>
        <div className="block">
        <p id="h" >200</p><span>:</span><p id="h" >59</p><span>:</span><p id="h" >59</p>
        </div>
    <form action="" className="form">
        <ul className="list-messy">
            <li id="li-1">
                <label htmlFor="">Usuario : </label>
                <input id="input-user" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            </li>
            
            <li id="li-1">
                <label htmlFor="">Password :</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </li>
        </ul>
    <button id="button-succes" >Quiero Participar</button>
    </form>
    </div>
    )
    
}

export default Box;

interface Props {
    className?: string;
}