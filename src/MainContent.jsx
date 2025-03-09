import mainImage from './assets/main-image.jpg'


export default function MainContent() {
    return (
        <main className='main'>
            <img src={mainImage} alt="cute westie nose to nose with sheep toy" className="main-image" />
            <ul className="list">
                <li>Name: Claire</li>
                <li>Location: UK</li>
                <li>Age: Older then want to be</li>
                <li>Coding: HTML, CSS, Tailwind, JaveScript, React</li>
            </ul>
        </main>
    )
}