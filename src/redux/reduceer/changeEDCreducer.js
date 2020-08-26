const changeEDCreducer=(state='Extrusion',action)=>{
    switch(action.type){
      case 'changeEDC':
          return action.data;
      break;
      default : return state;
      
    }
  }
export default changeEDCreducer