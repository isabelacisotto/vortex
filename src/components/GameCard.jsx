import './GameCard.css';
import { Play, Heart } from 'lucide-react';

export function GameCard({ title, category, banner, index, isFavorite, onFavorites, onPlay }) {
    return (
        <div className="vortex-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}>

            <img src={banner} alt={title} className='card-img' />

            <div className="card-info">
                <h4>{title}</h4>
                <p>{category}</p>
                <button className="play-btn" onClick={onPlay}>
                    <Play size={14} fill="white" /> Jogar </button>
            </div>

            <button className={`favorite-btn ${isFavorite ? 'active' : ''}`} onClick={onFavorites}>
                <Heart size={22} fill={isFavorite ? '#f41971' : 'transparent'} stroke={isFavorite ? "#f41971" : "white"}/>
            </button>

        </div>
    )
}