import state from "./state";
import axiosClient from '../axiosClient'

export function setSearchedMeals(state, meals){
    state.searchedMeals = meals
}