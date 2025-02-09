import "./index.css";

// import { useState } from "react";
// import unoLogo from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaCPlr3sgFnQx1DEBrYHppQCUV2Tmtk7ZZg&s";

export default function Component({}) {
  const text = "UnoGame";
  const color = ["blue", "red", "green", "yellow", "purple"];
  //   const [number, setNumber] = useState(0);
  let number = 0;
  const nextColor = () => {
    if (number <= color.length) number += 1;
    if (number > color.length) number = 0;
  };

  return (
    <div class="home__page">
      <div className="logo__block">
        <div>
          <img
            alt=""
            style={{ borderRadius: "10px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaCPlr3sgFnQx1DEBrYHppQCUV2Tmtk7ZZg&s"
            height={60}
          />
          {text.split("").map((i) => {
            nextColor();
            return <div style={{ color: `${color[number]}` }}>{i}</div>;
          })}
        </div>
      </div>
      <div className="nav">
        <div className="nav__btn">Play</div>
        <div className="nav__btn">Info</div>
        <div className="nav__btn">Settings</div>
      </div>
    </div>
  );
}
