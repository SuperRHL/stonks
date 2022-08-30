import React, { useState } from "react";
import axios from "axios";
import SearchCard from '../components/SearchCard'

const Search = () => {
    const [search, setSearch] = useState("");
    const [searchData, setSearchData] = useState();
    const [loading, setLoading] = useState(false);
    const getData = () => {
        setLoading(true);
        axios
            .get(
                `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${search}&apikey=5NY8APHIDHCOG8RT`
            )
            .then(response => {

                setSearchData(response.data.bestMatches.filter(item => !item['1. symbol'].includes('.')));
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                console.log("error", error);
            });
    };
    return (
        <div style={{ 'minHeight': '100vh' }}>

            <div style={{
                display: "flex", flexDirection: "column",
                alignItems: 'center',
                justifyContent: "center",
                'textAlign': 'center',
            }}>
                <div className="bar" width="1vw">
                    <input className="searchbar" type="text" title="Search" onBlur={e => setSearch(e.target.value)}
                        placeholder="search products" width="1vw"></input></div>
                {/* <input
                    border='4px solid #ccecce'
                    width='575px'
                    height='30px'
                    margin='25px'
                    className="form-control w-50"
                    type="text"
                    onBlur={e => setSearch(e.target.value)}
                    placeholder="search products"
                /> */}

                <button className="searchButton" onClick={getData}>Search</button>
            </div>

            <div>{searchData ? (

                searchData.map((item, i) => {
                    return (<SearchCard item={item} key={i}></SearchCard>)
                })
            ) : null}</div>
        </div>
    );
}

export default Search
