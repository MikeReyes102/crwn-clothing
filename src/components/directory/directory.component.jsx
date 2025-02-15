import CategoriesData from '../categories/categories.json';
import CategoryItem from '../category-item/category-item.component';
import './directory.styles.scss';

const Directory = () => {
    const categories = CategoriesData;
    return (
        <div className="directory-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    )
}

export default Directory;