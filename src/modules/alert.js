import React from "react";
// import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
// import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

// const element1 = (
//   <FontAwesomeIcon
//     icon={faCircleXmark}
//     style={{ color: "#ff0000" }}
//     size="xl"
//   />
// );
const element = (
  <FontAwesomeIcon
    icon={faCircleCheck}
    style={{ color: "#00ff4c" }}
    size="xl"
  />
);

//

function Alert(props) {
//   const [seticon, changeicon] = useState(element);
//   useEffect(()=>{
//     if(!props.alert){
//       return;
//     }
// if(props.alert.ty==="UnSuccessfull"){
//    changeicon(element1)
// }
// else{
//     changeicon(element)
// }
//   },[props.alert])

  return (
    <div style={{height:"35px"}}>
      {props.alert && <div className="alert alert-primary d-flex align-items-center" role="alert" style={{height:"45px"}}>
          <svg style={{ height: "30px", width: "50px", marginRight: "10px" }}>
            {element}
          </svg>

          <strong>{props.alert.ty} </strong>
          : {props.alert.msg}
        </div>}
      
    </div>
  );
}

export default Alert;
