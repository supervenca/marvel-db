import { useParams, Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Helmet } from "react-helmet";

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './singleCharPage.scss';

const SingleCharPage = () => {

    const {charId} = useParams();
    const [char, setChar] = useState(null);
    const {loading, error, clearError, getCharacter} = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [charId])

    const updateChar = () => {
        clearError();
        getCharacter(charId)
        .then(onCharLoaded)
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !char) ? <View char={char}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({char}) => {
    const {name, description, thumbnail, comics} = char;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = {'objectFit' : 'contain'};
    }

    return (
        <div className="single-char">
            <Helmet>
                <meta
                    name="description"
                    content={`${name} character`}
                />
                <title>{name}</title>
            </Helmet>
            <img src={thumbnail} alt={name} className="single-char__img" style={imgStyle}/>
            <div className="single-char__info">
                <h2 className="single-char__name">{name}</h2>
                <p className="single-char__descr">{description}</p>
                <div className="single-char__comics">Comics:</div>
                <ul className="single-char__comics__list">
                    {comics.length > 0 ? null : 'There are no comics with this character'}
                    {
                        comics.map((item, i) => {
                            // eslint-disable-next-line
                            if(i > 9) return;
                            return(
                                <li key={i} className="single-char__comics__list__item">{item.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <Link to="/" className="single-char__back">Back to all</Link>
        </div>
    )
}

export default SingleCharPage;