import React, { useState } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker } from 'react-mapbox-gl';
import style from './googlemap.module.css'
import markker from './marker.png'
const  SimpleMap=()=>   {
    
    const marker = Marker({longitude:"36.76296",latitude:"10.246057"});

    const Map = ReactMapboxGl({
        accessToken:
          'pk.eyJ1IjoiYXppemphcnJhciIsImEiOiJja2RqYmVjcjgwY3NzMnNyb3AwNGtuYnNyIn0.SWWkneFrqv-nwCJIHEDIpg'
      });
    return (
            <Map
            center={[10.245808,36.763248]}
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '100%',
    width: '100%'
  }}
>

<Marker
  coordinates={[10.245808,36.763248]}
  anchor="bottom">
  <img src={markker} className={style.hwpointer}/>
</Marker>
</Map>
    );
  
}

export default SimpleMap;

