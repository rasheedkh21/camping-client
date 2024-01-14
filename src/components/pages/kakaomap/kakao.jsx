import { useEffect } from "react";

function KakaoMap() {
  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=4cf1fa15c5287e73ad745387a9cdf484"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(36.3667, 127.35),
          level: 12,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [
          new kakao.maps.LatLng(35.601, 126.9206),
        ];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <div id="map" />
    </div>
  );
}

export default KakaoMap;