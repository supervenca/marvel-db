import { Formik, Field, Form, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';
import {Link} from 'react-router-dom';
import useMarvelService from '../../services/MarvelService';

import './searchBar.scss';

const SearchBar = () => {

    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded);
    }

    const errorMessage = error ? <ErrorMessage/> : null;

    const result = !char ? null : char.length > 0 ? 
        <div className='search-wrapper search-wrapper__result'>
            <p className='search__success'>The character was found! Visit {char[0].name} page?</p>
            <Link to={`/characters/${char[0].id}`} className='button button__secondary'>
                <div className='inner'>TO PAGE</div>
            </Link>
        </div> : 
        <div className='search-wrapper search-wrapper__result'>
            <p className='search__error'>The character was not found. Check the name and try again</p>
        </div>;
    
    return (
        <div className='search'>
            <Formik 
            initialValues={{
                charName: ''
            }}
            validationSchema = {Yup.object({
                charName: Yup.string()
                        .min(2, 'Minimum 2 symbols required')
                        .required('This field is required')
            })}
            onSubmit={ ({charName}) => {
                updateChar(charName);
            }}
        >
            <Form>
                <div className='search__heading'>Or find a character by name:</div>
                <div className='search-wrapper'>
                    <Field 
                        className='search__input' 
                        type='text' 
                        name='charName'
                        id='charName'
                        placeholder='Enter name'/>
                    <button 
                        type='submit' 
                        className='button button__main'
                        disabled={loading}>
                        <div className='inner'>find</div>
                    </button>
                </div>
                <div className='search-wrapper search-wrapper__result'>
                    <FormikErrorMessage component="div" className="search__error" name="charName" />
                </div>
            </Form>
            </Formik>
            {result}
            {errorMessage}
        </div>
        


        // <div className='search'>
        //     <div className='search__heading'>Or find a character by name:</div>
        //     <div className='search-wrapper'>
        //         <input className='search__input' type='text' placeholder='Enter name'></input>
        //         <a href="#" className='button button__main'><div className='inner'>find</div></a>
        //     </div>
        //     {/* <div className='search-wrapper search-wrapper__result'>
        //         <p className='search__success'>The character was found! Visit name page?</p>
        //         <a href="#" className='button button__secondary'><div className='inner'>TO PAGE</div></a>
        //     </div> */}
        //     {/* <div className='search-wrapper search-wrapper__result'>
        //         <p className='search__error'>The character was not found. Check the name and try again</p>
        //     </div> */}

            
        // </div>
    )
}

export default SearchBar;