import { useState,useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, planType) => acc + planType.amount * planType.price, 0
	)

        useEffect(() => {
			if (total >0 )alert(`J'aurai ${total}€ à payer 💸`)
			document.title = `LMJ: ${total}€ d'achats`
			// alert(`J'aurai ${total}€ à payer 💸`)
}	,[total])
    // useEffect(()=>{
	// return()=> alert("Le panié a été fermé")
	// })


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer le panier
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(
							({ name, price, amount }, index) => (
								<div key={`${name}-${index}`}>
									{name} {price}€ x {amount}
								</div>
							)
						)}

					</ul>
					<h3>Total : {total}€ </h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (<div> Votre panier est vide </div>

			)}
		</div>


	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart
