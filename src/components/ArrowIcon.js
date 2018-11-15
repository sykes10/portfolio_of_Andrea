import React from 'react';
                
const ArrowIcon = ({size = 28, color = '#b0667d'}) => (
    <svg viewBox="0 0.3104064166545868 30.707712173461914 9.378934860229492" xmlns="http://www.w3.org/2000/svg" data-type="color" role="img" preserveAspectRatio="xMidYMid meet" style={{width: size, heigth: size}}>
        <g>
            <path fill={color} d="M30.318 5.05a.75.75 0 0 1-.75.75H.75a.75.75 0 1 1 0-1.5h28.818a.75.75 0 0 1 .75.75z" data-color="1"></path>
            <path fill={color} d="M30.469 5.48a.75.75 0 0 1-1.06 0l-3.89-3.888A.75.75 0 1 1 26.58.53l3.89 3.89a.75.75 0 0 1 0 1.06z" data-color="1"></path>
            <path fill={color} d="M25.52 9.469a.75.75 0 0 1 0-1.06l3.889-3.89a.75.75 0 1 1 1.06 1.06L26.58 9.47a.75.75 0 0 1-1.06 0z" data-color="1"></path>
        </g>
    </svg>    
)

export default ArrowIcon;