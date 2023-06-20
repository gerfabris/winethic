import { useRef , useEffect } from 'react'
import logoSolid from '../../../assets/logo/Logo W.png'
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
            <svg 
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
            </svg>
        </div>
    )
}