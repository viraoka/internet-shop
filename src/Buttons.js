import { data } from "./data";

const Buttons = ({filteredClothes, setClothes}) => {
    return (<div>
        <div  className="products">
            <div className="product-card">
            <div className="btn">
            <button onClick={() => filteredClothes('woman')} className="change woman">Women</button>
            <button onClick={() => filteredClothes('man')} className="change man">Man</button>
            </div>
            <div className="btn">
            <button onClick={() => filteredClothes('dress')} className="change">Dresses</button>
            <button onClick={() => filteredClothes('skirt')} className="change">Skirts</button>
            <button onClick={() => filteredClothes('pants')} className="change">Pants</button>
            <button onClick={() => filteredClothes('shoes')} className="change">Shoes</button>
            <button onClick={() => filteredClothes('shirt')} className="change">Shirts</button>
            {/* <div className="btn"> */}
            <button onClick={() => setClothes(data)} className="change">All Items</button>
            {/* </div> */}
            </div>
        </div>
        </div>
    </div>)
}

export default Buttons;