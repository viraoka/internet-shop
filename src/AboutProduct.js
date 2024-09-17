import { useNavigate, useParams } from "react-router";
import { data } from "./data";

const AboutProduct = () => {

    const navigate = useNavigate();
    const { title } = useParams();

    return(
        <div>
            {data.filter((element) => element.title === title)
            .map((elem, index) => {
                return(
                    <div className="about-product" key={index}>
                        <div  className="btn">
                        <h3 className="elemname">{elem.name}</h3>
                        </div>
                        <div className="btn">
                        <img className="cloth" src={elem.image} width={300} height={430} alt=""/>
                        </div>
                        <div className="btn">
                        <button className="change btn" onClick={() => navigate(-1)}>
                            GO BACK
                        </button>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default AboutProduct;