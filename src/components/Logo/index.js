import './style.css';
import logo from '../../assets/logo.png'
import Tilt from 'react-parallax-tilt';

function Logo () {
    return(
        <div className='logo-container'>
            <Tilt glareEnable={true} tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className='logo-container__content'>
                    <img
                        src={logo}
                        alt='Logo of Reckonface, a brain with electronic components'
                        className='logo-container__image' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;