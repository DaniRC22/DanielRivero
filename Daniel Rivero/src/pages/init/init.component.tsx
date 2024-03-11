import { FunctionComponent } from "react"
import Box from "../../components/box"

const Init: FunctionComponent<Props> = ({className})=> {
    return (
    <div className={className}>
       <h1>La voz del hincha</h1>
    <Box />
    </div>
    )
}

export default Init

interface Props {
    className?: string
}