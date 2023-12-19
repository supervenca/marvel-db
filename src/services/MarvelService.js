class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    }
    getAllCharacters = async () => {
        const res = await this.getResource('https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=200&apikey=fb362d4261f1e307fa153563545a7b83');
        return res.data.results.map(this._transformCharacter);
    }
    getCharacter = async (id) => {
        const res = await this.getResource(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=fb362d4261f1e307fa153563545a7b83`);
        return this._transformCharacter(res.data.results[0]);
    }
    _transformCharacter = (char) => {
        return {
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url
        }
    }
}

export default MarvelService;