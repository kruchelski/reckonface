import './style.css';
import logo from '../../assets/logo.png'

function Logo () {
	return(
		<div className='logo-container'>
			<div className='logo-container__content'>
				<img
					src={logo}
					alt='Logo of Reckonface, a brain with electronic components'
					className='logo-container__image'
				/>
			</div>
		</div>
		)
	}
	
	export default Logo;