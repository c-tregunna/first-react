import reactLogo from './assets/react.svg'

export default function Header() {
    return (
        <header className='header'>
            <h1>Welcome to my first React page</h1>
            <img src={reactLogo} alt="react logo" className='react-logo'/>
        </header>
    )
}
