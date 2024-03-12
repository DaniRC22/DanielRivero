import styled from "styled-components";
import Box from "./box.component";

export default styled (Box) `
border: solid 1px;
border-radius: 10px ;
padding: 15px 37px 22px;

.container{
    display: flex;
    justify-content:center;
}

.block{
    display: flex;
    justify-content: space-around;
}
.block span{
    font-size: 50px;
}
.block #h {
    border: solid 1px;
    border-radius: 10px;
    padding: 15px;
    margin-top: 10px
}

.form{
    display: grid;
    flex-direction:center;
    justify-content:center;
}

.list-messy { 
    display: grid;
    justify-content: center
    list-style-type: none;
    margin: 1rem;
    padding: 1rem;
};

#li-1 {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center
}
#li-1 input {
    background-color: black;
    color: white;
    font-size:20px;
    border-radius: 10px;
}
#button-succes{
    font-size:20px;
    border-radius:10px;
    background-color: green;
}

`