import CategoryBooksListItem from "./CategoryBooksListItem";

const CategoryBooksList = ({ categories }) => {
    return (
        <ul className="list-group">
        {categories.map((category) => (
            <CategoryBooksListItem key={category.id} category={category} />
        ))}
        </ul>
    );
}

export default CategoryBooksList;