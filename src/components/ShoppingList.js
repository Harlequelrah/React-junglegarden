import { plantList } from "../datas/plantList"
import '../styles/ShoppingList.css'
import PlantItem from "./PlantItem"
import { useState } from "react"
import Categories from "./Categories.js"

function ShoppingList({ cart, updateCart }) {
    const CAtegories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ?
            acc : acc.concat(plant.category), []
    )
    const [categories,updateCategories]=useState(CAtegories)


    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant, { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        }
        else {
            updateCart([...cart, { name, price, amount: 1 }])
        }

    }

    function removeToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved && currentPlantSaved.amount >0) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            if(currentPlantSaved.amount-1===0)
            {
                updateCart([...cartFilteredCurrentPlant])
            }
            else
            {
                updateCart([
                    ...cartFilteredCurrentPlant, { name, price, amount: currentPlantSaved.amount - 1 }
                ])
            }

        }
    }
    return (
        <div>
            {/* <ul>
                {categories.map(
                    (cat) => (
                        <li key={cat}>
                            {cat}
                        </li>
                    )
                )}
            </ul> */}
            <Categories categories={CAtegories} updateCategories={updateCategories} />
            <ul className='lmj-plant-list'>
                {plantList.map(
                    ({ id, cover, name, water, light, price,category }) => categories.includes(category)?(
                        <div key={id}>
                            <PlantItem
                                id={id}
                                cover={cover}
                                name={name}
                                water={water}
                                light={light}
                                price={price}
                            />
                            <div style={{ margin: '20px' }}>
                                <button style={{ marginRight: '20px' }} onClick={() => addToCart(name, price)}>Ajouter</button>
                                <button style={{ marginLeft: '100px' }} onClick={() => removeToCart(name, price)}>Retirer</button>
                            </div>

                        </div>


                    ):(<div></div>)
                )}
            </ul>
        </div>
    )

}
export default ShoppingList
