<template>
 <!-- <InputText v-model="text"/>
 <Button label="Greet"></Button> -->

  <div class="header">
    <div class="header_section">
      <div class="header_item headerlogo">
        <p id="logo">iBlessme</p>
      </div>
    </div>
    <div class="header_section">
      <div class="items">
        <InputText v-model="query" placeholder="Введите название города" @keypress="fetchWeather"/>
      </div>
      <div class="items">
        <Button label="Найти" @click="fetchWeather"></Button>
      </div>
      </div>
  </div>
    


  <div id="main" class="weather-wrap" v-if="typeof weather.main !='undefined'">
    <div class="location-box">
      <div class="location">
        {{weather.name}}, {{weather.sys.country}}
      </div>
      <div class="date">{{dateBuilder()}}</div>
    </div>
    <div class="weather-box">
      <div class="temp">{{Math.round(weather.main.temp)}}°C</div>
      <div class="weather">{{weather.weather[0].main}}</div>
    </div>

  </div>

</template>



<script>

import axios from 'axios';
import {HTTP} from './http-common';


export default{
  data(){
    return{
      base_url: 'https://api.openweathermap.org/data/2.5/',
      api_key: 'c64eb2aaa11ec500a5fac588c1f8c5d7',
      weather: {},
      query: "Москва",
      errors: [],
      text: ""
    };
  },

  created(){
    axios.get(`${this.base_url}weather?q=${this.query}&appid=${this.api_key}`)
    .then(res => {
      this.weather = res.data
      console.log(res.data)
    })
    .catch(err => {
      this.errors.push(err)
    })
  },
  methods: {
		fetchWeather(e){
      if(e.key == "Enter"){
        axios.get(`${this.base_url}weather?q=${this.query}&appid=${this.api_key}`)
          .then(res => {
            this.weather = res.data
            console.log(res.data)
          })
          .catch(err => {
            this.errors.push(err)
          })
      }
     
    },
    dateBuilder(){
      let d = new Date();
    let mounths = [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Августа',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ];
    let days = [
      'Воскресение',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота',
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let mounth = mounths[d.getMonth()];
    let year = d.getFullYear();
    return `${day}, ${date} ${mounth} ${year}` 
    }


	}
  }

</script>
<style>

*{
  margin: 0;
  padding: 0;
}
#logo{
  color: white;
  font-weight: bold;
  font-size: 20px;
}
.items{
  margin: 5px;
}
.header{
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background-color: rgb(42, 42, 42);
}
.header_section{
  display: flex;
  align-items:center; 
  margin: 15px;
}
.header_item{
  padding: 10px 15px;
}
.header{
  margin: 0px;
  padding: 0px;
  width: 100%;
}

.location-box .location{
  color: #fff;
  font-size: 32px;
  font-weight: bolder;
  text-shadow: 1px 1px 2px black;
  text-align: center;
}
.location-box .date{
  color: #fff;
  font-size: 30px;
  font-weight: bolder;
  text-shadow: 1px 1px 2px black;
  text-align: center;
}
.weather-box{
  text-align: center;
}
.weather-box .temp{
  display: inline-block;
  padding: 10px 25px;
  color: aliceblue;
  font-size: 95px;
  font-weight: bolder;
  text-shadow: 1px 1px 2px black;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  margin: 30px 0px;
}
.weather-box .weather{
  color: #fff;
  font-size: 40px;
  font-weight: bolder;
  text-shadow: 1px 1px 2px black;
}
.weather-wrap{
  background-image: url('./assets/hotBack.jpg');
  background-size: cover;
  border-radius: 20px;
  padding: 90px;
  margin: 100px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
}




</style>
