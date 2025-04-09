import React from 'react';
import redstar from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/star-icon-red.svg"
import greystar from "/Users/admin/Documents/Openclassrooms/my-kasa-app/src/assets/star-icon-grey.svg"
import './Rating.scss'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];

	return (
		<div className="star__container">
			{stars.map((level) =>
				rating >= level ? (
					<img
						key={level.toString()}
						className="star__item"
						src={redstar}
						alt="Icône étoile"
					/>
				) : ( 
					<img
						key={level.toString()}
						className="star__item"
						src={greystar}
						alt="Icône étoile"
					/>
				)
			)}
		</div>
	);
};

export default Rating;



