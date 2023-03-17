import { CATEGORIES_ACTION_TYPE } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async (dispacth) => {
  dispacth(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispacth(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispacth(fetchCategoriesFailed(error));
  }
};
