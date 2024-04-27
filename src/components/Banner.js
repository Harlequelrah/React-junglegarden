import '../styles/Banner.css'

function Banner({children}) {
	return (
	// <div style={{
	// 	color:'green',
	// 	'text-align':'center',
	// 	'text-decoration':'underline'

	// }} >
	<div className='lmj-banner'>
            {children}
    </div>
	)
}

export default Banner;
