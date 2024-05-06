import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({removeCard, removeLikes, addLikes, ...rest}) => {
    const {category} = useParams();

    const categoryItems = rest[category];
    
    return (
        <>
        <h2>{category}</h2>
        {categoryItems.map((item) => {
            return (
            <Card 
                key={item.name} 
                name={item.name} 
                likes={item.likes}
                addLikes={()=>addLikes(item.name, category, 'add')} 
                removeLikes={()=>removeLikes(item.name, category, 'remove')} removeCard={()=>removeCard(item.name, category)}
            />
            );
        })}
        </>
    );
}
export default CategoryPage;