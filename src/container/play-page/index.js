import "./index.css";

import { useState } from "react";
// import unoLogo from "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFaCPlr3sgFnQx1DEBrYHppQCUV2Tmtk7ZZg&s";

export default function Component({}) {
  const [visiblyColoda, setVisiblyColoda] = useState({
    color: "red",
    number: 7,
  });

  const hiddenColoda = [];
  const [whoCourse, setCourse] = useState("you");

  const [youColoda, setYouColoda] = useState([
    { color: "red", number: 7 },
    { color: "green", number: 7 },
    { color: "red", number: 0 },
    { color: "blue", number: 7 },
    { color: "yellow", number: 4 },
    { color: "red", number: 1 },
    { color: "green", number: 4 },
  ]);
  const [botColoda, setBotColoda] = useState([
    { color: "red", number: 7 },
    { color: "green", number: 7 },
    { color: "red", number: 0 },
    { color: "blue", number: 7 },
    { color: "yellow", number: 4 },
    { color: "red", number: 1 },
    { color: "green", number: 4 },
  ]);

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "red",
    "blue",
    "green",
    "yellow",
    "black",
    "red",
    "blue",
    "green",
    "yellow",
  ];

  const addYouColoda = () => {
    const colorMath = Math.ceil(Math.random() * 10);
    if (colors[colorMath] !== "black") {
      const numberMath = Math.ceil(Math.random() * 10);
      setYouColoda([
        ...youColoda,
        { color: colors[colorMath], number: numberMath },
      ]);
    } else {
      const arrNum = ["+4", "color"];
      const numberMath = Math.round(Math.random());
      setYouColoda([
        ...youColoda,
        { color: colors[colorMath], number: arrNum[numberMath] },
      ]);
    }
    for (let el of youColoda) {
      // if(el)
    }
  };

  const addBotColoda = () => {
    const colorMath = Math.ceil(Math.random() * 10);
    if (colors[colorMath] !== "black") {
      const numberMath = Math.ceil(Math.random() * 10);
      setBotColoda([
        ...botColoda,
        { color: colors[colorMath], number: numberMath },
      ]);
    } else {
      const arrNum = ["+4", "color"];
      const numberMath = Math.round(Math.random());
      setBotColoda([
        ...botColoda,
        { color: colors[colorMath], number: arrNum[numberMath] },
      ]);
    }
  };

  const course = (color, number) => {
    if (whoCourse === "you")
      if (
        visiblyColoda.color === color ||
        visiblyColoda.number === number ||
        "black" === color ||
        visiblyColoda.color === "black"
      ) {
        setCourse("bot");
        setVisiblyColoda({ color: color, number: number });
        const newArr = [];
        for (const el of youColoda) {
          if (color === el.color && number === el.number) {
          } else {
            newArr.push({ color: el.color, number: el.number });
          }

          setYouColoda(newArr);
        }
      }
  };
  // let value = false;
  const courseBot = (color, number) => {
    if (whoCourse === "bot")
      if (
        visiblyColoda.color === color ||
        visiblyColoda.number === number ||
        color === "black" ||
        (visiblyColoda.color === "black" && visiblyColoda.number === "color")
      ) {
        // value = true;
        setCourse("you");
        setVisiblyColoda({ color: color, number: number });
        const newArr = [];
        for (const el of botColoda) {
          if (color === el.color && number === el.number) {
          } else {
            newArr.push({ color: el.color, number: el.number });
          }

          setBotColoda(newArr);
        }
      } else if (
        visiblyColoda.color !== color &&
        visiblyColoda.number !== number &&
        "black" !== color &&
        visiblyColoda.color !== "black"
      ) {
        return addBotColoda();
      } else if (
        visiblyColoda.color === "black" &&
        visiblyColoda.number === "+4"
      ) {
      }
  };

  if (whoCourse === "bot") {
    // while (value !== true) {
    for (const i of botColoda) {
      courseBot(i.color, i.number);
    }
    // }
  }

  if (botColoda.length === 0) {
    return alert("бот виграв");
  }
  if (youColoda.length === 0) {
    return alert("Ви виграли");
  }
  return (
    <div class="home__page">
      <div>
        <div className="block__head">
          <div
            className="uno__card"
            style={{ backgroundColor: visiblyColoda.color }}
          >
            <div>{visiblyColoda.number}</div>
            <h1 className="uno__card--center">{visiblyColoda.number}</h1>

            <div>{visiblyColoda.number}</div>
          </div>
          <div
            onClick={() => addYouColoda()}
            className="uno__card"
            style={{
              background: "linear-gradient(red, blue)",

              transform: "rotate(-90deg)",
            }}
          >
            <h1
              className="uno__card--center"
              style={{
                fontSize: "50px",

                // backgroundColor: visiblyColoda.color,
                transform: "rotate(90deg)",
              }}
            >
              UnoGame
            </h1>
          </div>
        </div>
        <div className="bot__coloda">
          {botColoda.map((i) => {
            return (
              // <div
              //   className="uno__card--bot"
              //   // style={{ backgroundColor: i.color }}
              // >
              //   <div>{i.number}</div>
              //   <h1 className="uno__card--center">{i.number}</h1>
              // </div>
              <div
                className="uno__card--bot"
                style={{
                  background: "linear-gradient(red, blue)",

                  // transform: "rotate(-90deg)",
                }}
              >
                <h1
                  className="uno__card--center"
                  style={{
                    fontSize: "30px",

                    // backgroundColor: visiblyColoda.color,
                    // transform: "rotate(90deg)",
                  }}
                >
                  UnoGame
                </h1>
              </div>
            );
          })}
        </div>
        <div className="you__coloda">
          {youColoda.map((i) => {
            return (
              <div
                className="uno__card"
                onClick={() => course(i.color, i.number)}
                style={{ backgroundColor: i.color }}
              >
                <div>{i.number}</div>
                <h1 className="uno__card--center">{i.number}</h1>
                <div>{i.number}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
