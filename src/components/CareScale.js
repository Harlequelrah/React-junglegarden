import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
function Care(value,type){
    const carevalue= (value===1)?"peu":(value===2)?"modérement":"beaucoup";
    const caretype=(type==='light')?"de lumière":"d'arrosage";
    alert(`Cette plante requiert ${carevalue} ${caretype} `);

}
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType =
		careType === 'light' ? (
			<img src={Sun} alt='sun-icon' />
		) : (
			<img src={Water} alt='water-icon' />
		)

	return (
		<div onClick={()=>Care(scaleValue, careType)}>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale
