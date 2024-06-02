import { useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";
import { useState, useEffect } from "react";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {
    const { category } = useParams();
    const location = useLocation();
    const [search, setSearch] = useState("");

    useEffect(() => {
        setSearch("");
    }, [location]);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const categoryItems = rest[category];

    return (
        <>
            <h2>{category}</h2>
            <div className="searcharea">
                <input
                    type="text"
                    onChange={searchHandler}
                    placeholder="Search"
                    value={search}
                />
                <button onClick={() => setSearch("")}>Clear</button>
            </div>
            {categoryItems
                .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
                .map((item) => (
                    <Card
                        key={item.name}
                        name={item.name}
                        likes={item.likes}
                        addLikes={() => addLikes(item.name, category, "add")}
                        removeLikes={() => removeLikes(item.name, category, "remove")}
                        removeCard={() => removeCard(item.name, category)}
                    />
                ))}
        </>
    );
};

export default CategoryPage;
