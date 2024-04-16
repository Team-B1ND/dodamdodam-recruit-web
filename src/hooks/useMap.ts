import { useState } from "react";

export const useMap = () => {
  const [state, setState] = useState({
    center: { lat: 35.6632508239323, lng: 128.413618885714 },
  });
  const [searchAddress, SetSearchAddress] = useState<string>();
  const SearchMap = () => {
    const geocoder = new kakao.maps.services.Geocoder();
    let callback = function (result: any, status: any) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = result[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
      }
    };
    geocoder.addressSearch(`${searchAddress}`, callback);
  };
  return { SetSearchAddress, searchAddress, SearchMap, state };
};
