import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Out() {
  const location = useLocation();

  const [out, setOut] = useState("");

  useEffect(() => {
    setOut(location.state);
  }, []);

  return (
    <>
      <div className="out">
        <pre>
          <p>{out}</p>
        </pre>
      </div>
    </>
  );
}
