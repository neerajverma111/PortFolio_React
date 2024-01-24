import './index.scss'

//we are using the below funtion to return the animated Letters
// letter class, Array of characters , index that will be the starting point

const AnimatedLetters = ({ letterClass, strArray, idx}) => {
    return(
        <span>
            {
                strArray.map((char, i) =>(
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                        </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters;