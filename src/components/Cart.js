import '../styles/Cart.css'
function Cart() {
	const monsteraPrice = 8
	const ivyPrice = 10
	const flowerPrice = 15
	return (
		<div className="lmj-cart">
			<h2>Panier</h2>
			<ul>
				<li>Monstera : {monsteraPrice}€</li>
				<li>Lierre : {ivyPrice}€</li>
				<li>Fleurs : {flowerPrice}€</li>
			</ul>
			Total : {monsteraPrice + ivyPrice + flowerPrice}€
		</div>
	)
}

export default Cart
// for (var cle in tab_price) {
//     somme += tab_price[cle];
// }
// var valeurs = Object.values(tab_price);
// var somme = valeurs.reduce((acc, valeurs) => acc + valeurs, 0);
// const tab_price = {
//     Monstera: 8,
//     Lierre: 20,
//     Bouquet_de_fleur: 30,
// };
// return (
//     <div>
//         <ul>
//             <li>Monstera - {tab_price["Monstera"]}€ </li>
//             <li>Lierre - {tab_price["Lierre"]}€ </li>
//             <li>Bouquet de Fleur - {tab_price["Bouquet_de_fleur"]}€ </li>
//         </ul>

//         <span>Total du panier: {somme}</span>
//     </div>
// );
// const list=(
// <ul>
//   for(var cle in tab_price){
//     <li> {cle} - {tab_price[{cle}]} </li>
//   }
// </ul>);
// const liste =
// <ul>
