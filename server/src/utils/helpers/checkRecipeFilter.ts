import { Recipe } from '../../entity/Recipe/Recipe';
import { DietFoodFilter } from '../../entity/Diet'; 

export const checkFilter = (recipe: Recipe, filters: DietFoodFilter[]) => {
  for (let filter of filters) {
    for (let hl of recipe.healthlabel) {
      if (filter.healthlabel.id === hl.id) return true;
    }
  }
  return false;
};
