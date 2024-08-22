import React, { useEffect } from 'react';
import { Point } from '../types/type';


interface NaverMapProps {
  point: Point; 
}

const apiKey = process.env.REACT_APP_NAVER_API;

const NaverMap: React.FC<NaverMapProps> = ({ point }) => {

  const option = {
    center: new window.naver.maps.LatLng(point.lat, point.lng),
    zoom: 16,

  }

  

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${apiKey}`;
    script.onload = () => {
      const map = new window.naver.maps.Map('map', option);

      new window.naver.maps.Marker({
        position: new window.naver.maps.LatLng(point.lat, point.lng),
        map: map,
      });
    };
    document.head.appendChild(script);
  }, [point]);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default NaverMap;