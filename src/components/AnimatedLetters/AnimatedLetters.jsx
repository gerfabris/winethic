import './AnimatedLetters.css'

export const AnimatedLetters = ( {letterClass , strArray , idx} ) => {
    return(
        <span className='home-title-span'>
            {strArray.map((char, i) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </span>
    )
}