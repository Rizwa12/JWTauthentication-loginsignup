import { useContext } from "react";
import { GlobalContext } from '../../context';



let About = ()=> {
  let { state, dispatch } = useContext(GlobalContext);
    return (
     <div>
      i am About componet - {state.mynum}
      <button onClick={()=>{
        dispatch({
          type:"ADD",
        })
      }}>add</button>
     </div>
    );
  }
  export default About;
