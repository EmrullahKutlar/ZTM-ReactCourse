import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect, Fragment } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap, selectIsCategoriesLoading } from "../../store/categories/category.selector";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";

const Category = () => {
  const categories = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categories[category]);
  const isLoading = useSelector(selectIsCategoriesLoading);
  useEffect(() => {
    const products = categories[category];
    setProducts(products);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title"> {category.toUpperCase()} </h2>
      {
        isLoading === true ? <Spinner/> : 
         <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      }

     
    </Fragment>
  );
};

export default Category;
