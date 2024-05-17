import './SearchBox.css'


export default function SearchBox({getInfo, city, cityN}){
    return(
        <div className="searchbox">
        <input placeholder="Search for city" type="text" value={cityN} name="searchbox" id="" onChange={city} />
        <button onClick={getInfo} className="btn"><i class="fa-solid fa-magnifying-glass"></i></button>

        </div>
    )
}