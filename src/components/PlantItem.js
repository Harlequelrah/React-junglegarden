import CareScale from "./CareScale"
import '../styles/PlantItem.css'
function PlantItem({ id, name, cover, water, light }) {
    return (
        <li key={id} className="lmj-plant-item">
            {/* {plant.isBestSale && <span>🔥</span>} */}
            {/* {isSpecialOffer && <div className="lmj-sales">Soldes</div>} */}
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType="water" scaleValue={water} />
                <CareScale careType="light" scaleValue={light} />
            </div>

        </li>
    );
}
export default PlantItem;
