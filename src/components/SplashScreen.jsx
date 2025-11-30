import { useEffect } from "react";
import "./../styles/splash.css";

export default function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // durasi 2.5 detik

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <img
        src="/assets/download.png"
        alt="NBA Pedia Logo"
        className="splash-logo"
      />
      <h1 className="splash-title">NBA Pedia</h1>
    </div>
  );
}
