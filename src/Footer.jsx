import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>This page is built with react and I set it up using Vite</p>
            <div >
                <img src={reactLogo} alt="react logo" className="footer-image" />
                <img src={viteLogo} alt="vite logo" className="footer-image" />
            </div>
        </footer>
        
    )
}