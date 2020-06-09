class FoodRecipe
{
  String imageUrl;
  String title;
  String ingredients;
  String prep;

  FoodRecipe({
    	this.imageUrl,
    	this.title,
    	this.ingredients,
	this.prep,

  });

}

final List<FoodRecipe> foodRecipe = [
  FoodRecipe(
      title: 'Egusi Soup',
      ingredients: '2 Cups of egusi(melon seeds) blended or milled, 2 bulbs of onions, blended crayfish, 2 cups of chopped pumpkin leaves, about 5 fruits of pepper blended, a pinch of Salt, 2 cubes of Maggi',
  ),
];