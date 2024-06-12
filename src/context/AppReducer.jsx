export const AppReducer = (obleasState, action) => 
{
    switch (action.type) 
    {
      case "[ABM AltaDeOblea]":
        return{
            ...obleasState, //manteniendo todo el conjunto de obleas 
            obleas: [...obleasState.obleas, action.payload] //forma uno nuevo con los nuevos datos
        };
        case "[ABM BajaOblea]":
        return{
            obleas: obleasState.obleas.filter((oblea) => oblea.id !== action.payload)
        } 
        case "[ABM ModificarOblea]":
          const obleaModificada = action.payload
        
          const obleaActualizada = obleasState.obleas.map(obleaDeLaLista =>{
            if(obleaDeLaLista.id === obleaModificada.id)
            {
              return obleaModificada
            } 
            else
            {
              return obleaDeLaLista
            }
          });
          return {obleas :obleaActualizada}
      default:
        return obleasState;
    }
  };
  