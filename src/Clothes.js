import { Link } from "react-router-dom";

const Clothes = ({itemsForSale}) => {
    return (<div>
        <div className="products">
            {itemsForSale.map((element => {
                const { id, name, price, image } = element;
                return (<div key={id} className="product-card">
                    <div className="cont">
                        <Link to={`/about/${element.title}`}>
                        <img className="cloth" src={image} width={250} height={380} alt="cloth"/>
                        </Link>
                    </div>
                    <div className="cont">
                        <h3> {name} </h3>
                    </div>
                    <div className="cont">
                        <h4>$ {price} </h4>
                    </div>
                </div>)
            }))}
        </div>
    </div>)
}

export default Clothes;