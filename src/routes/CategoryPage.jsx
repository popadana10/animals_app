import { useLocation, useParams } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const CategoryPage = ({ removeCard, removeLikes, addLikes, ...rest }) => {

    const { category } = useParams();

    const categoryItems = rest[category];
    const location = useLocation();
    const [search, setSearch] = useState('');

    const searchHandler = (event)
    return (
        <>
            <h2>{category}</h2>
            <input
                type='text'
                onChange={searchHandler}
                placeholder="Search"
                value={search}
            />
            {categoryItems
                .filter((el) => el.name.toLowerCase().includes(search.toLowerCase())).map((item) => {
                    return (
                        <Card
                            key={item.name}
                            name={item.name}
                            likes={item.likes}
                            addLikes={() => addLikes(item.name, category, 'add')}
                            removeLikes={() => removeLikes(item.name, category, 'remove')} removeCard={() => removeCard(item.name, category)}
                        />
                    );
                })}
        </>
    );
}
export default CategoryPage;