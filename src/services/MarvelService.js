import { useHttp } from "../hooks/http.hooks";

const useMarvelService = () => {

    const {loading, error, request, clearError} = useHttp();

    const _baseOffSet = 210;

    
    const getAllCharacters = async (offset = _baseOffSet) => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset}&apikey=fb362d4261f1e307fa153563545a7b83`);
        return res.data.results.map(_transformCharacter);
    }
    const getCharacter = async (id) => {
        const res = await request(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=fb362d4261f1e307fa153563545a7b83`);
        return _transformCharacter(res.data.results[0]);
    }
    const getCharacterByName = async (name) => {
		const res = await request(`https://gateway.marvel.com:443/v1/public/characters?name=${name}&apikey=fb362d4261f1e307fa153563545a7b83`);
		return res.data.results.map(_transformCharacter);
	}

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items
        }
    }

    const getAllComics = async () => {
        const res = await request (`https://gateway.marvel.com:443/v1/public/comics?apikey=fb362d4261f1e307fa153563545a7b83
        `);
        return res.data.results.map(_transformComics);
    }

    const getComic = async (id) => {
		const res = await request(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=fb362d4261f1e307fa153563545a7b83`);
		return _transformComics(res.data.results[0]);
	};

    const _transformComics = (comics) => {
        return {
            id: comics.id,
            name: comics.title,
            img: comics.thumbnail.path + '.' + comics.thumbnail.extension,
            price: comics.prices[0].price ? `${comics.prices[0].price}$`
            : "not available",
            description: comics.description || "There is no description",
            pageCount: comics.pageCount ? `${comics.pageCount} p.` : "No information about the number of pages",
            language: comics.textObjects[0]?.language || "en-us",
        }
    }

    return {loading, error, clearError, getAllCharacters, getCharacter, getCharacterByName, getAllComics, getComic};
}

export default useMarvelService;