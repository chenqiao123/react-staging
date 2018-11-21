import React from 'react';
import './EffectCard.css';

const EffectCard = ({img, title, value}) => <div className='effectCardItem'>
    <div className='icon'>
        <img src={img} alt={title}/>
    </div>
    <div className='content'>
        <span className='title'>{title}</span>
        <br/>
        <span className='value'>{value}</span>
    </div>
</div>

export default EffectCard;