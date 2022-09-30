import { useContext } from "react";
import { GlobalContext } from '../../context';


let Gallery = ()=>{

    let { state, dispatch } = useContext(GlobalContext);
    return (
        <div>
           I am a gallery component - {state.mynum}
           <button onClick={()=>{
        dispatch({
          type:"SUB",
        })
      }}>Minus</button>
        </div>
       );
}
export default Gallery;