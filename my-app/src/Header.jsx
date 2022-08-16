import React from 'react';
import {useState,useEffect} from 'react';
import Ticker, { FinancialTicker} from 'nice-react-ticker';
import './Header.css'
function Header() {
  var pkrval,goldval,kseval,oilval,askval,engroval,arifval;
  var goldch,ksech,oilch,pkrch,askch,engroch,arifch;
  var goldprevval,kseprevval,oilprevval,pkrprevval,askprevval,engroprevval,arifprevval;
  let apikey = "a7cfe2ba4emshfc4d09d7ee33ce1p111f5ajsnfe5e001f292d"
  const [pkrvalue, Setpkrvalue] = useState(0);
  const [pkrchange, Setpkrchange] = useState(0);
  const [pkrprev,Setpkrprev] = useState(0)

  const [goldvalue, Setgoldvalue] = useState(0);
  const [goldchange, Setgoldchange] = useState(0);
  const [goldprev, Setgoldprev] = useState(0);

  const [KSEvalue, SetKSEvalue] = useState(0);
  const [KSEchange, SetKSEchange] = useState(0);
  const [KSEprev, SetKSEprev] = useState(0);

  const [Oilvalue, SetOilvalue] = useState(0);
  const [Oilchange, SetOilchange] = useState(0);
  const [Oilprev, SetOilprev] = useState(0);

  const [askvalue, Setaskvalue] = useState(0);
  const [askchange, Setaskchange] = useState(0);
  const [askprev, Setaskprev] = useState(0);

  const [engrovalue, Setengrovalue] = useState(0);
  const [engrochange, Setengrochange] = useState(0);
  const [engroprev, Setengroprev] = useState(0);

  const [arifvalue, Setarifvalue] = useState(0);
  const [arifchange, Setarifchange] = useState(0);
  const [arifprev, Setarifprev] = useState(0);
  const getPkr = async () => {
    const options = {
      method: "GET",
      headers: {
      'X-RapidAPI-Key': '7112f3057amsh5a555c6f097f2aep1dcc1djsn4c2b6295ec5e',
      'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
    }
    };
    fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/USD', options)
    .then(response => response.json())
    .then(response => pkr(response))
    .catch(err => console.error(err));
  };

  const getGold = async () => {
    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "goldapi-xejtrtl64sdmdj-io");
    myHeaders.append("Content-Type", "application/json");
  
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch("https://www.goldapi.io/api/XAU/USD", requestOptions)
      .then((response) => response.json())
      .then((result) => gold(result))
      .catch((error) => console.log("error", error));
  }
  const getKSE = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": apikey,
        "X-RapidAPI-Host": "investing-financial-stocks.p.rapidapi.com"
      }
    };
  
    fetch(
      "https://investing-financial-stocks.p.rapidapi.com/stock/indices/overview/karachi-100?lang=en",
      options
    )
      .then((response) => response.json())
      .then((response) => KSE(response))
      .catch((err) => console.error(err));

  }
  const getOil = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'investing-financial-stocks.p.rapidapi.com'
      }
    };
    fetch('https://investing-financial-stocks.p.rapidapi.com/stock/equities/overview/pak-state-oil?lang=en', options)
      .then(response => response.json())
      .then(response => Oil(response))
      .catch(err => console.error(err));
  }
  const getpkrchange = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'investing-financial-stocks.p.rapidapi.com'
      }
    };
    
    fetch('https://investing-financial-stocks.p.rapidapi.com/forex/usd-pkr', options)
      .then(response => response.json())
      .then(response => getpkrchangeval(response))
      .catch(err => console.error(err));
  }
  const getask = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'investing-financial-stocks.p.rapidapi.com'
      }
    };
    
    fetch('https://investing-financial-stocks.p.rapidapi.com/stock/equities/overview/askari-bank?lang=en', options)
      .then(response => response.json())
      .then(response => ask(response))
      .catch(err => console.error(err));
  }
  const getengro = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'investing-financial-stocks.p.rapidapi.com'
      }
    };
    
    fetch('https://investing-financial-stocks.p.rapidapi.com/stock/equities/overview/engro-powergen-qadirpur-ltd?lang=en', options)
      .then(response => response.json())
      .then(response => engro(response))
      .catch(err => console.error(err));
  }
  const getarif = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apikey,
        'X-RapidAPI-Host': 'investing-financial-stocks.p.rapidapi.com'
      }
    };
    
    fetch('https://investing-financial-stocks.p.rapidapi.com/stock/equities/overview/arif-habib-ltd?lang=en', options)
      .then(response => response.json())
      .then(response => arif(response))
      .catch(err => console.error(err));
  }


  useEffect(() => {
    // getPkr();
    //  getpkrchange();
    // getGold();
    // getKSE();
    // getOil();
    // getask();
    // getengro();
    // getarif();
  }, []);
  const pkr = (response) =>{
    pkrval= response.rates.PKR;
    pkrval = pkrval.toFixed(2);
    pkrval = JSON.stringify(pkrval);
    pkrval = pkrval.substring(1,pkrval.length-1)
    Setpkrvalue(pkrval)
  }
  const getpkrchangeval = (response) =>{
    pkrprevval = response.data.prev_close;
    Setpkrprev(pkrprevval);
    pkrch = response.data.change;
    Setpkrchange(pkrch)
  }
  const KSE = (response) =>{
    kseval= response.data.info_box[3].value;
    kseval = kseval.substring(0,kseval.length-3)
    SetKSEvalue(kseval)


    ksech = response.data.info_box[6].value;
    SetKSEchange(ksech)

    kseprevval = response.data.info_box[0].value;
    SetKSEprev(kseprevval)
    
  }
  const ask = (response) =>{
    askval= response.data.info_box[3].value;
    askval = askval.substring(0,askval.length-1)
    Setaskvalue(askval)


    askch = response.data.info_box[12].value;
    Setaskchange(askch)

    askprevval = response.data.info_box[0].value;
    Setaskprev(askprevval)
    
  }
  const engro = (response) =>{
    engroval= response.data.info_box[3].value;
    Setengrovalue(engroval)

    engroch = response.data.info_box[12].value;
    Setengrochange(engroch)

    engroprevval = response.data.info_box[0].value;
    Setengroprev(engroprevval)
    
  }
  const arif = (response) =>{
    arifval= response.data.info_box[3].value;
    Setarifvalue(arifval)

    arifch = response.data.info_box[12].value;
    Setarifchange(arifch)

    arifprevval = response.data.info_box[0].value;
    Setarifprev(arifprevval)
    
  }
  const Oil = (response) =>{
    oilval = response.data.info_box[3].value;
    SetOilvalue(oilval)

    oilch = response.data.info_box[12].value;
    SetOilchange(oilch)

    oilprevval = response.data.info_box[0].value;
    SetOilprev(oilprevval)
  }
  const gold = (result) => {
    goldval = result.price
    goldval = goldval * pkrval
    goldval = goldval.toFixed(1)
    goldval = JSON.stringify(goldval)
    goldval = goldval.substring(1,goldval.length-1)
    Setgoldvalue(goldval)

    goldch = result.ch
    goldch = JSON.stringify(goldch)
    goldch = goldch.concat('%')
    Setgoldchange(goldch)
    
    goldprevval = result.prev_close_price
    goldprevval = goldprevval * pkrval
    goldprevval = goldprevval.toFixed(1)
    goldprevval = JSON.stringify(goldprevval)
    goldprevval = goldprevval.substring(1,goldprevval.length-1)
    Setgoldprev(goldprevval)
  }
  return (
    
    <div className='tick'>
        <Ticker show={true} speed = {600}>
          <FinancialTicker id="1" change={false} symbol="KSE-100" lastPrice={KSEprev} percentage={KSEchange} currentPrice={KSEvalue} />
          <FinancialTicker id="2" change={false} symbol="Oil-PSO" lastPrice={Oilprev} percentage={Oilchange} currentPrice={Oilvalue} />
          <FinancialTicker id="3" change={true} symbol="Interest" lastPrice="13.75%" percentage="1.25%" currentPrice="15%" />
          <FinancialTicker id="4" change={false} symbol="Gold Price" lastPrice={goldprev} percentage={goldchange} currentPrice={goldvalue} />
          <FinancialTicker id="5" change={false} symbol="Askari Bank" lastPrice={askprev} percentage={askchange} currentPrice={askvalue} />
          <FinancialTicker id="6" change={true} symbol="Engro-Pwr" lastPrice={engroprev} percentage={engrochange} currentPrice={engrovalue} />
          <FinancialTicker id="7" change={false} symbol="Arif Habib" lastPrice={arifprev} percentage={arifchange} currentPrice={arifvalue} />
          <FinancialTicker id="8" change={false} symbol="PKR-USD" lastPrice={pkrprev} percentage={pkrchange} currentPrice={pkrvalue}/>
        </Ticker>
      </div>
  )
}
export default Header