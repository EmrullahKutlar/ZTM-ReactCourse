import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components.jsx";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";
import { useSelector } from "react-redux";
import Spinner from "../../components/spinner/spinner.component.jsx";
import { selectIsCategoriesLoading } from "../../store/categories/category.selector.js";

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesLoading);

  return (
    <Fragment>
      {isLoading === true ? (
        <Spinner />
      ) : (
        Object.keys(categories).map((title) => {
          const products = categories[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
