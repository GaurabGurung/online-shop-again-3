

import "./directory-item-item.styles.scss";
import { Link, useNavigate } from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {title, imageUrl, id, route} = category;

    const navigate= useNavigate()

    const navigateHandler = () => navigate(route);

    return (
        <div className="directory-item-container large"> 
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="directory-body-container">
                <h2 onClick={navigateHandler}> {title.toUpperCase()}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}

export default DirectoryItem;