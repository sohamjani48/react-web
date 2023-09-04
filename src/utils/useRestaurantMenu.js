import { useEffect, useState } from "react";
import { SWIGGY_MENU_URL } from "./consts";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_MENU_URL + resId);
    const jsonResponse = await response.json();
    setResInfo(jsonResponse.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
