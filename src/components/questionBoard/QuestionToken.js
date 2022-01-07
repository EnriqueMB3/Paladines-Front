import React from 'react'
import Paladin from '../../assets/Paladin.png';
import { voteStartVoting } from '../../actions/question';
import { useDispatch, useSelector } from 'react-redux';

export const QuestionToken = ({heroe, active}) => {
    const {name, color} =   heroe;

    const dispatch = useDispatch();


    const { category } = useSelector(state => state.question);
    const { uid } = useSelector(state => state.auth);

    const handleSelectHero = () =>{
        const vote = {
            category: category._id,
            hero: heroe._id,
            user: uid
        }

        
        dispatch(voteStartVoting(vote));
    }


    return (
        <div className={'__token_structure ' + `${(!active&& ' opacity')}`} onClick={handleSelectHero}>
                    <div className={`token-${color} ` + (active&& ' selected')}>
                        <img  src={`${process.env.PUBLIC_URL}/assets/${name}_.png`} alt={name} title={name} height="120px"  />
                        {
                            active&&
                        <img src={Paladin} height='115px' className='paladin_figure' alt="paladin"></img>
                        }                        
                    </div>
                    <div className="token_name mt-20">
                        <h3>{name}</h3>
                    </div>
        </div>
    )
}
