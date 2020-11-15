
const allRecipes = [
    {id:1, image: './images/shakshuka.jfif', linkname: 'Shakshuka', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 6},
    {id:2,image: './images/shakshuka.jfif', linkname: 'Shakshuka1', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 9},
    {id:3,image: './images/shakshuka.jfif', linkname: 'Shakshuka2', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 4},
    {id:4,image: './images/shakshuka.jfif', linkname: 'Shakshuka3', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 0},
    {id:5,image: './images/shakshuka.jfif', linkname: 'Shakshuka4', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 2}
  ].sort((card1, card2) => card2.views - card1.views);

const getAllRecipes = () => {
    return allRecipes;
}

const getRecipe = id => {
    return allRecipes.find(recipe => recipe.id == id);
}

export {
    getAllRecipes,
    getRecipe
};
