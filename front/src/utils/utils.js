import { useNavigate } from "react-router-dom"

export const trplus = () => {}
export const trsubtract = () => {}

export const NavigateTimer = (time, path) => {
    let session;
    const navigate = useNavigate()
    session = setInterval(() => {
        session = (prevTime) => prevTime + 10;
    }, 10);
    const seconds = Math.floor((session / 1000) % 60).slice(-2)
    if(seconds >= parseInt(time)){
        navigate(`/${path}`)
    }
}