import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    const handleOffline = () => {
      setOnlineStatus(false);
      console.log("offline event added");
    };

    const handleOnline = () => {
      setOnlineStatus(true);
      console.log("online event added");
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
