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
    fetch('http://localhost:3001/countries')
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
  return  function (dispatch) {
      try {
        fetch('http://localhost:3001/countries?name=' + search)
        .then(response=>response.json())
        .then(data=>{
          dispatch({
            type:TYPES.SEARCH_COUNTRIES,
            payload:data
          })
        })
      } catch (error) {
          alert('El pais no fue encontrado')
          console.log(error)
      }
  }
}

export function CountriesDetail(id) {
  return  function (dispatch) {
      try {
        fetch('http://localhost:3001/countries/' + id)
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



export function postActivity(payload) {
  return async function (dispatch) {
      await axios.post('http://localhost:3001/activities', payload);
      return dispatch({
          type: TYPES.POST_ACTIVITIES,
      })
  }
}

export function getActivities() {
  return  function (dispatch) {
    fetch('http://localhost:3001/activities')
    .then(response=>response.json())
    .then(data=>{
        dispatch({
          type:TYPES.GET_ACTIVITIES,
          payload: data
      })
    })
  }
}
export const getAct =()=>{
return async function(dispatch){
  const datos= await axios.get('http://localhost:3001/activities')
  return dispatch({
    type:TYPES.GET_ACTIVITIES,
    payload:datos.data
  })
}
}