import logo from './logo.svg';
import './App.css';
import { Card, Form, Button, Col, Row, Stack, Container, Table, Dropdown } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [searchChampion, setSearchChampion] = useState('');
  const [hisLvl, sethisLvl] = useState('');
  const [dataChampion, setdataChampion] = useState([]);
  const [dataChampionKey, setdataChampionKey] = useState([]);
  const [dataChampionKeySec, setdataChampionKeySec] = useState([]);

  let encryptedId = '';

  const apiKey = 'RGAPI-53df64e0-81ea-4284-85c2-8948b41b9678'

  // useEffect(() => {
  //   fetch('http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion.json')
  //   .then(res => {
  //     return res.json();
  //   }).then(dataChampion =>{
  //     setdataChampionKeySec(Object.keys(dataChampion.data).map(function(champName) {
  //       if(champName.key === 266){
  //         console.log(champName)
  //       }
  //   }))
  //   })
  // })

  

  function getData(event){
    var apiCall = 'https://eun1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + searchChampion + "?api_key=" + apiKey;
    axios.get(apiCall).then(function (response){
      console.log(response)
      sethisLvl(response.data.summonerLevel)
      encryptedId = response.data.id;
      console.log(encryptedId)
    axios.get('https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + encryptedId + "?api_key="  + apiKey).then(function (response){
      console.log(this.response)
    })
    }).catch(function (error){

    });
  }
  // function getMastery(event){
  //   console.log(encryptedId)
  //   var apiCallChamp = 'https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/' + encryptedId + "?api_key=" + apiKey;
  //   axios.get(apiCallChamp).then(function (response){
  //     console.log(response)
  //     encryptedId = response.data.id
  //     setdataChampion(response.data)
  //   }).catch(function (error){

  //   });
  // }

  // const champLevels = dataChampion.map((item) => {
  //   const champName = "WaitForData";
  //   setdataChampionKey(item.championId)
  //   return(
  //     console.log(dataChampionKey)
  //   )}, this);

  return (
    <div className="App">
          Champion:
          <input
                  type="text"
                  onChange={e => setSearchChampion(e.target.value)}
          />
        <button onClick={e => getData(e)}>Submit</button>
        <div>{hisLvl}</div>
    </div>
  );
}

export default App;
