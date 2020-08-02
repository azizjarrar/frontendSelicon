const reducerLang=(state={lang:'fr'},action)=>{
    switch(action.type){
      case 'changeLang':
          return {lang:action.data} 
      break;
      default : return state;
      
    }
  }
export default reducerLang