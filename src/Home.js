import { useState } from 'react';
import './App.css';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function Home() {
    
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm.includes(searchTerm));
    setClothes(newClothes);
    }

    return (
    <div>
    <div className='cont'>
        <h1 className='back'>Free Standard Shipping</h1>
    </div>
    <Buttons 
    filteredClothes={chosenClothes}
    setClothes={setClothes}
    />
    <Clothes itemsForSale={clothes}/>
    </div>
);
}

export default Home;