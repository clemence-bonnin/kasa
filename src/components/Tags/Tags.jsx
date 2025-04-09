import React from "react";
import './Tags.scss';

const Tag = ({ tags }) => {
    return (
        <ul className="tag__container">
            {tags.map(tag => (
                <li className="tag__item" key={tag}>{tag}</li> 
            ))}
        </ul>
    );
};

export default Tag;
