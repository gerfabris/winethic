import { useRef , useEffect } from 'react'
import logoSolid from '../../../assets/logos/WinEthic - W.png'
/* import logoSolid from '../../../assets/logo/Logo W.png' */
import { gsap } from 'gsap'
/* import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin' */
import './Logo.css'

export const Logo = () => {
    const bgRef = useRef()
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    useEffect(() =>{
        /* gsap.registerPlugin(DrawSVGPlugin) */
        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 20,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 4,
                duration: 4,
            }
        )
    }, [])

    return(
        <div className='logo-container' ref={bgRef}>
            <img src={logoSolid} alt="" className='solid-logo' ref={solidLogoRef}/>
            <svg version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="559pt" 
                height="897pt" 
                viewBox="0 0 238.000000 174.000000"
                preserveAspectRatio="xMidYMid meet"
                className='logo-svg'
            >
                
                <g transform="translate(0.000000,174.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                    <path d="M50 1663 c0 -3 206 -363 458 -799 374 -649 459 -791 469 -778 6 8 48
                    80 94 159 71 125 84 142 94 127 6 -9 44 -73 83 -142 39 -69 77 -133 84 -142
                    11 -15 70 83 468 773 250 434 457 794 458 799 3 7 -90 9 -274 8 l-278 -3 -35
                    -60 c-19 -33 -122 -211 -228 -395 l-192 -334 36 -66 c19 -36 41 -70 47 -77 8
                    -9 56 66 193 305 101 174 204 353 230 397 l48 80 93 3 c50 1 92 0 92 -3 0 -2
                    -141 -249 -313 -547 -173 -299 -318 -552 -324 -562 -9 -17 -18 -6 -68 80 -32
                    54 -75 127 -95 161 l-36 62 -83 -144 c-46 -79 -88 -151 -95 -160 -9 -12 -80
                    105 -380 625 l-369 640 -89 0 c-48 0 -88 -3 -88 -7z"/>
                    <path d="M423 1663 c10 -17 301 -521 412 -713 65 -113 123 -211 130 -218 8 -9
                    21 5 54 63 23 42 41 82 38 88 -3 7 -84 150 -181 316 -97 167 -176 307 -176
                    312 0 5 122 9 270 9 179 0 270 -3 270 -10 0 -6 -19 -44 -42 -85 l-43 -74 -86
                    -3 -87 -3 46 -79 45 -79 85 6 c52 3 89 10 97 18 9 11 146 246 262 452 2 4
                    -244 7 -547 7 -303 0 -549 -3 -547 -7z"/>
                </g>
            </svg>
            {/* <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="559pt"
                height="897pt" 
                viewBox="0 0 104.000000 88.000000"
                preserveAspectRatio="xMidYMid meet"
                className='logo-svg'
            >
                <g 
                    transform="translate(0.000000,88.000000) scale(0.100000,-0.100000)"
                    fill="none" 
                    stroke="none"
                    className="svg-container"
                >
                    <path 
                        ref={outlineLogoRef}
                        d="M68 793 c-10 -2 -18 -7 -18 -9 0 -10 47 -96 128 -234 86 -147 127
                        -218 201 -347 23 -40 46 -75 51 -78 5 -3 26 19 45 50 20 30 38 55 40 55 3 0
                        21 -25 41 -55 20 -30 40 -55 43 -55 6 0 29 38 98 160 11 19 58 100 105 180 47
                        80 104 179 127 220 23 41 49 85 58 98 l15 22 -115 0 c-136 0 -113 19 -230
                        -187 -86 -151 -92 -165 -77 -193 16 -30 26 -25 58 33 159 285 152 275 191 280
                        20 2 40 1 44 -3 9 -8 -24 -69 -166 -310 -11 -19 -33 -57 -49 -85 -15 -27 -36
                        -61 -46 -74 l-19 -23 -31 55 c-17 30 -36 58 -41 62 -6 3 -27 -19 -46 -50 -20
                        -30 -40 -53 -44 -51 -5 3 -32 47 -61 98 -211 367 -262 450 -279 447 -3 -1 -14
                        -3 -23 -6z"
                    />
                </g>
            </svg> */}
        </div>
    )
}