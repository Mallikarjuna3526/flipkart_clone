import { useParams,useNavigate } from "react-router-dom";
import "../styles/OrderConfirmation.css";



export default function OrderConfirmation() {
  const { id } = useParams();
  const navigate = useNavigate()
  return (<div><h2 className="FinalH">Order placed successfully! Order ID: {id}</h2>
    <div  className="Return"><button className="FinalB" onClick={() => navigate("/")}>
            Return to Home
            
          </button>
          </div>
        </div>
  );
}

