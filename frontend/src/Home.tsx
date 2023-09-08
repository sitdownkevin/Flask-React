import { useState } from 'react'
import './Home.css'

function fetchText(url: string): Promise<string> {
    return fetch(url, {
        headers: {
            'Accept': 'plain/text'
        }
    }).then(res => res.text());
}


function Home() {
    const [msg, setMsg] = useState<string>('')

    const handleClick = () => {
        fetchText('http://localhost:3001/api/hello')
            .then(res => setMsg(res))
            .catch(console.log)
    }


    return <>
        <div className='box'>
            <span><b>{ msg? msg: 'Not received' }</b></span>
            <button onClick={handleClick} style={{ marginTop: 20, cursor: 'pointer' }}>Click</button>
            <span style={{ marginTop: 20 }}>This is frontend powered by React</span>
        </div>
    </>
}

export default Home