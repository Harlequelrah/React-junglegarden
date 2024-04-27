

import "../styles/Categories.css"
import { useState } from "react"
function Categories({categories,updateCategories}) {
    const [selectedCategory, setSelectedCategory] = useState('');

    function choiceCategory(e){
        const value=e.target.value
        setSelectedCategory(value)
        updateCategories(value)

    }

    return (
        <div className="lmj-categories">

            <select className="lmj-categories-select" value={selectedCategory} onChange={choiceCategory}>
            <option value="">Sélectionnez une catégorie</option>
                {categories.map(
                    (categorie) => (
                        <option key={categorie} value={categorie}>
                            {categorie}
                        </option>
                    )
                )
                }

            </select>
            <button onClick={()=>updateCategories(categories)}>Reinitialiser</button>
        </div>


    )
}
export default Categories
