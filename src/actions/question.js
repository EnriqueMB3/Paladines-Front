import { types } from "../types/types";
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";



export const heroesStartLoading = () => {
    return async(dispatch) => {
        try {
            
            const resp = await fetchConToken('heroes');
            const body = await resp.json();
            dispatch(heroesLoaded(body.heroes))
           
        } catch (error) {
            console.log(error)
        }
    }
}

export const categoryStartLoading = (categoryId, userId) => {
    return async(dispatch) => {
        
        try {
            // const userId ={
            //     userId: uid
            // }
            const resp = await fetchConToken(`categories/${categoryId}`, {userId}, 'POST' );
            const body = await resp.json();

            if (body.ok) {
                dispatch(categoryLoaded(body.category))
                dispatch(setActiveHero(body.hero))

            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}


export const voteStartVoting = (vote) => {
    return async(dispatch) => {
        try {
            const resp = await fetchConToken(`votes/Vote`, vote, 'POST');
            const body = await resp.json();

            if (body.ok) {
                dispatch(setActiveHero(body.hero))
            } else {
                Swal.fire('Error', body.msg, 'error');
            }
        } catch (error) {
            console.log(error)
        }
    }
}


const categoryLoaded = (category) => ({
    type: types.categoryLoaded,
    payload:category
})




const heroesLoaded = (heroes) => ({
    type: types.heroesLoaded,
    payload:heroes
})

export const setActiveHero = (hero) => ({
    type: types.setActiveHero,
    payload:hero
})

