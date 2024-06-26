import { useRef , useEffect } from 'react'
import logoSolid from '../../../assets/logos/WinEthic_logoOK_BlancoLila-w.png'
/* import logoSolid from '../../../assets/logos/WinEthic_logoOK_BlancoLila-w.png' */
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
                width="300" /* 559 */  /* 300 */
                height="240" /* 897 */ /* 240 */
                viewBox="0 0 237.000000 180.000000" /* "0 0 235.000000 170.000000" */ /* "-8 0 250.000000 180.000000" */
                preserveAspectRatio="xMidYMid meet"
                className='logo-svg disappear'
            >
                
                <g transform="translate(0.000000,177.000000) scale(0.100000,-0.100000)"
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
        </div>
    )
}