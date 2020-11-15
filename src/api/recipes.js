
const allRecipes = [
    {id:1, image: '/images/pancake.jfif', linkname: 'Pancake', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 6, sitename:'Myself', sitelink:'', category:'Cakes', description:'Steps to prepare pancakes'},
    {id:2,image: '/images/shakshuka.jfif', linkname: 'Shakshuka', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 9, sitename:'Myself', sitelink:'', category:'Breakfasts', description:'Steps to prepare shakshuka'},
    {id:3,image: '/images/noodlesoup.jfif', linkname: 'Noodles Soup', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 4, sitename:'Myself', sitelink:'', category:'Soups', description:'Steps to prepare Noodle Soup'},
    {id:4,image: '/images/tomatosoup.jfif', linkname: 'Tomato Soup', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 0, sitename:'Myself', sitelink:'', category:'Soups', description:'Steps to prepare Tomato Soup'},
    {id:5,image: '/images/pizza.jfif', linkname: 'Pizza', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 2, sitename:'Myself', sitelink:'', category:'Kids', description:'Steps to prepare pizza'},
    {id:6,image: '/images/spaghettiBolognese.jfif', linkname: 'Spaghetti Bolognese', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 2, sitename:'Myself', sitelink:'', category:'Kids', description:'Steps to prepare Spagetti Bolognese'},
    {id:7,image: '/images/icecream.jfif', linkname: 'Ice Cream', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 2, sitename:'Myself', sitelink:'', category:'Kids', description:'Steps to prepare ice cream'},
    {id:8,image: '/images/bread.jfif', linkname: 'Bread', uploadedtime: new Date().toLocaleString(), lastviewedtime: new Date().toLocaleTimeString(), views: 2, sitename:'Myself', sitelink:'', category:'Cakes', description:'Steps to prepare bread'}
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
