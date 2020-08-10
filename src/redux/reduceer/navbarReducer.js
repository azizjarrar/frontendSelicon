const reducerProduct=(state={navbar:'Silicone'},action)=>{

    switch(action.type){
      case 'changeProduct':
          return {navbar:action.data} 
      break;
      default : return state;
    }
  }
export default reducerProduct