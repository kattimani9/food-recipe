import React,{useEffect,useState} from "react";
import './App.css';
import Recipe from "./Recipe";

const App=() => {

  const APP_ID ="e29a3d3f";
  const APP_KEY="8be5cd059ee1d27d90880a1275db7931";

  // Below for Testing 
 // const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const[recipes,setRecipes] =useState([]);
  const[search,setSearch]= useState(' ');

  const [query,setQuery] =useState('cake');


  useEffect(() => {
    getRecipes();
    console.log('Effect has been run');
    
    
  },[query]);

  const getRecipes =async () =>{

    const response =await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data=await response.json();
    console.log(data);
    setRecipes(data.hits);

  }
  //please add Below code in between  between </form> and </div> tag to check counter ++ is working 
  //<h1 onClick ={() => setCounter(counter + 1)}>{counter}</h1>

  const updateSearch= e => {
    setSearch(e.target.value);

  }

  const getSearch= e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }


  return (

    <div className="App" >
      <form  onSubmit={getSearch} className="search-form">
        <h1 className="heading">Please Enter you Favourite Food.</h1>
        <input className ="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
        
      </form>
      <div className="recepies">
      {recipes.map(recipe =>(

        <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}

        />
      ))}
      </div>
    </div>
  );
};

export default App;
