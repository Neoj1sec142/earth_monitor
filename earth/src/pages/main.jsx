import { useModal } from '../context/modal-context'
const Main = () => {
    const {setModal} = useModal()
    return(
        <div onClick={() => setModal(<h1>Hola!</h1>)}>
            Start a dialogue
        </div>
    )
}
export default Main