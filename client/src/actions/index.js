import axios from "axios"
import swal from 'sweetalert';
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

export function getAllCountries(){
  return async function(dispatch){
    var json = await axios.get('/countries')
    console.log(json.data)
    return dispatch({
        type:TYPES.GET_COUNTRIES,
        payload: json.data

      })
  }
}

export function searchCountries(search) {
  return async function(dispatch){
    try {
        var json = await axios.get(`/countries?name=`+search)
       
            return dispatch({
               type: TYPES.SEARCH_COUNTRIES,
               payload: json.data
            }) 
      
       
     } catch (error) {
     
      swal({
        title: "Message",
        text: error.response.data,
        icon: "error",
        buttons: "Ok",
      })
    
     }
 }
}

export function CountriesDetail(id) {
  return  function (dispatch) {
      try {
        axios.get('/countries/' + id)
        .then(data=>{
          dispatch({
            type:TYPES.SEARCH_COUNTRIES_DETAIL,
            payload:data.data
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
    axios.get('/activities')
    .then(data=>{
        dispatch({
          type:TYPES.GET_ACTIVITIES,
          payload: data.data
      })
    })
  }
}
