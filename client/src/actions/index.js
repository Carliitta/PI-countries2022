import axios from "axios"

export const TYPES={
   GET_COUNTRIES:"GET_COUNTRIES",
   SEARCH_COUNTRIES:"SEARCH_COUNTRIES",
   SEARCH_COUNTRIES_DETAIL :"SEARCH_COUNTRIES_DETAIL",
   ORDER_CONTINENT:"ORDER_CONTINENT",
   ORDER_BY_NAME:" ORDER_BY_NAME",
   ORDER_BY_POPULATION:"ORDER_BY_POPULATION",
   ORDER_BY_ACTIVITIES:" ORDER_BY_ACTIVITIES",
   POST_ACTIVITIES:"POST_ACTIVITIES",
   GET_ACTIVITIES:"GET_ACTIVITIES",
   CLEAR_DETAIL:"CLEAR_DETAIL",
   CLEAR_FILTERS:"CLEAR_FILTERS"

}

// export function getAllCountries(){
//   return async function(dispatch){
//     var json = await axios.get('http://localhost:3001/countries')
//     return dispatch({
//         type: GET_COUNTRIES,
//         payload: json.data

//       })
//   }
// }
export function getAllCountries(){
  return function(dispatch){
    fetch('/countries')
    .then(respuesta=>respuesta.json())
    .then(data=> {
      console.log(data)
      dispatch({
            type: TYPES.GET_COUNTRIES,
            payload: data,
           
    
          })
    })
  }
}

export function searchCountries(search) {
  return async function(dispatch){
    try {
        var json = await axios.get(`/countries?name=`+search)
        console.log(json.data)
        if(typeof json.data === 'object'){ //pregunto si lo que viene es un ojeto? sino mando el error 
            return dispatch({
               type: TYPES.SEARCH_COUNTRIES,
               payload: json.data
            }) 
        }else{
          alert(json.data)//error del back
        }
       
     } catch (error) {
      alert(error.response.data)
     
     }
 }
}

export function CountriesDetail(id) {
  return  function (dispatch) {
      try {
        fetch('/countries/' + id)
        .then(response=>response.json())
        .then(data=>{
          dispatch({
            type:TYPES.SEARCH_COUNTRIES_DETAIL,
            payload:data
          })
        })
      } catch (error) {
          console.log(error)
      }
  }
}

export  function Sort(order) { //recive una forma de ordenar
   return{
    type :TYPES.ORDER_BY_NAME ,
    payload:order
   }
};
export  function orderByContinent(order) { //recive una forma de ordenar
  return{
   type :TYPES.ORDER_CONTINENT ,
   payload:order
  }
};
export  function orderByPopulation(order) { //recive una forma de ordenar
  return{
   type :TYPES.ORDER_BY_POPULATION ,
   payload:order
  }
};
export  function orderByActivities(order) { //recive una forma de ordenar
  return{
   type :TYPES.ORDER_BY_ACTIVITIES ,
   payload:order
  }
};

export  function clearDetail() { 
  return{
   type :TYPES.CLEAR_DETAIL ,
   
  }
};
export  function clearFilters() { 
  return{
   type :TYPES.CLEAR_FILTERS ,
   
  }
};

export function postActivity(payload) {
  return async function (dispatch) {
      await axios.post('/activities', payload);
      return dispatch({
          type: TYPES.POST_ACTIVITIES,
      })
  }
}

export function getActivities() {
  return  function (dispatch) {
    fetch('/activities')
    .then(response=>response.json())
    .then(data=>{
        dispatch({
          type:TYPES.GET_ACTIVITIES,
          payload: data
      })
    })
  }
}
