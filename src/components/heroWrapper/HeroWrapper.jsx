import { contextInput } from 'components/App';
import React, { useContext, useState } from 'react';
import s from "./HeroWrapper.module.scss";
import Container from 'components/Container/Container';
import search from "img/search.svg"

const HeroWrapper = () => {
    const [inputValue, setInputValue] = useState("");
    const { plusInputValue } = useContext(contextInput);

    const input = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        plusInputValue(inputValue);
        
        // window.localstorage.setItem('inputValue', inputValue)
        // setInputValue("");
    }

    return (
        <>
            <section className={s.heroWrapper}>
            <Container>
                    <div className={s.h1}><h1>Weather dashboard</h1></div>
                    <div className={s.plus}>
                           <div className={s.first}> <p>Create your personal list of favorite cities and always be aware of the weather.</p></div>
                            <div className={s.second}><p>October 2023Friday, 13th</p></div>
                    </div>
                    <form className={s.form} onSubmit={onSubmit}>
                        <input type="text" className={s.textinput} onChange={input} placeholder='Search location...'/>
                        <button type='submit' className={s.button}><img className={s.svg} src={search} alt="" /></button>
                    </form>
               </Container>
            </section>
        </>
    );
}

export default HeroWrapper;