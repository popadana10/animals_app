import { Link } from "react-router-dom";

const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {
    const isLiked = likes >= 5;

    return (
        <div className="card">
            <h2>{name}</h2>
            <img
                src={`https://source.unsplash.com/400x400/?${name}`}
                alt={`Photo of ${name}`}
                className="card-image"
            />

            <div className="likesDisplay">
                <button onClick={addLikes} className="likeButton">
                    <span className="material-symbols-outlined">heart_plus</span>
                </button>
                <div className="likesMiddle">
                    <span className={`material-symbols-outlined ${isLiked && "likesRed"}`}>
                        {likes >= 0 ? "favorite" : "heart_broken"}
                    </span>{" "}
                    {likes}
                </div>
                <button onClick={removeLikes} className="likeButton">
                    <span className="material-symbols-outlined">heart_minus</span>
                </button>
            </div>

            <button onClick={removeCard} className="removeButton">
                <span className="material-symbols-outlined">close</span>
            </button>

            <Link to={name} className="seeMoreLink">See More</Link>
        </div>
    );
};

export default Card;
