import { TYPES } from "../actions"
const initialState={
  countries:[],
  detail:[],
  activities:[],
  countriesFilt:[]

}
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_COUNTRIES:
    return{
       ...state,
       countries: action.payload,
       countriesFilt:action.payload
    }

    case TYPES.SEARCH_COUNTRIES:
    return{
    ...state,
    countriesFilt: action.payload
    }
    case TYPES.CLEAR_DETAIL:
      return{
      ...state,
      detail: []
      }

    case TYPES.SEARCH_COUNTRIES_DETAIL:
      return{
      ...state,
      detail: action.payload[0]
      }

    case TYPES.POST_ACTIVITIES:
          return{
          ...state,
        
        }
   case TYPES.GET_ACTIVITIES :
       return {
       ...state,
        activities: action.payload
   }
  //metodos de ordenamientos/filtros

   case TYPES.ORDER_BY_NAME:
    if(action.payload==="ASCENDENTE"){
       return {
         ...state,
         countriesFilt: state.countriesFilt.sort((a, b) => {
           if (a.name < b.name) {
             return -1;
         }
         if (a.name > b.name) {
             return 1;
         }
         return 0;
       }) 
     }
    }else{
       return {
         ...state,
         countriesFilt: state.countriesFilt.sort((a, b) => {
           if (a.name < b.name) {
             return 1;
         }
         if (a.name > b.name) {
             return -1;
         }
         return 0;
       }) 
     }
    }
    case TYPES.ORDER_CONTINENT :
        //si la selecciona all nos trae todos los paises    
       const continentFiltered = action.payload === 'All' ? state.countries 
       // al contrario filtra si el contiente es igual al seleccionado 
       : state.countries.filter(el => el.continent === action.payload)
       return {
           ...state,
           countriesFilt: continentFiltered
       }

       case TYPES.ORDER_BY_POPULATION:
        if(action.payload==="MAX"){
          return {
            ...state,
            countriesFilt: state.countriesFilt.sort((a, b) => {
              if (a.population < b.population) {
                return -1;
            }
            if (a.population > b.population) {
                return 1;
            }
            return 0;
          }) 
        }
       }else{
          return {
            ...state,
            countriesFilt: state.countriesFilt.sort((a, b) => {
              if (a.population < b.population) {
                return 1;
            }
            if (a.population > b.population) {
                return -1;
            }
            return 0;
          }) 
        }
       }
       case TYPES.ORDER_BY_ACTIVITIES:
      
       return {
           ...state,  //filtro los paises    retorno donde el nombre sea igual al payload 
           countriesFilt:state.countries.filter((c) => { return c.activities.find((c) => { return c.name === action.payload})})
       }
       case TYPES.CLEAR_FILTERS:
        return{
        ...state,
        countriesFilt:state.countries
        }
    default:
    return state;
  }

}

