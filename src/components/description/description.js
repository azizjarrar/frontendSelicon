import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { differntlang } from "../globalVar/var";
import style from "./description.module.css";

import p1 from "./image/5.jpg";
import p2 from "./image/2.jpg";
import p3 from "./image/4.jpg";
import p4 from "./image/8.jpg";

function Description() {
  const [one, setONe] = useState(false);
  const [two, setTow] = useState(false);
  const [three, setThre] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [testpos, setpos] = useState(false);
  const lang = useSelector((state) => state.reducerlang.lang);
  var langauge = {
    header: differntlang.ourValues.Header.fr,
    valuesH1: differntlang.ourValues.ourValues1.title.fr,
    valuesH2: differntlang.ourValues.ourValues2.title.fr,
    valuesH3: differntlang.ourValues.ourValues3.title.fr,
    valuesH4: differntlang.ourValues.ourValues4.title.fr,
    valuesH5: differntlang.ourValues.ourValues5.title.fr,
    valuesH6: differntlang.ourValues.ourValues6.title.fr,
    values1: differntlang.ourValues.ourValues1.fr,
    values2: differntlang.ourValues.ourValues2.fr,
    values3: differntlang.ourValues.ourValues3.fr,
    values4: differntlang.ourValues.ourValues4.fr,
    values5: differntlang.ourValues.ourValues5.fr,
    values6: differntlang.ourValues.ourValues6.fr,
  };
  if (lang === "ang") {
    langauge = {
      header: differntlang.ourValues.Header.eng,
      valuesH1: differntlang.ourValues.ourValues1.title.eng,
      valuesH2: differntlang.ourValues.ourValues2.title.eng,
      valuesH3: differntlang.ourValues.ourValues3.title.eng,
      valuesH4: differntlang.ourValues.ourValues4.title.eng,
      valuesH5: differntlang.ourValues.ourValues5.title.eng,
      valuesH6: differntlang.ourValues.ourValues6.title.eng,
      values1: differntlang.ourValues.ourValues1.eng,
      values2: differntlang.ourValues.ourValues2.eng,
      values3: differntlang.ourValues.ourValues3.eng,
      values4: differntlang.ourValues.ourValues4.eng,
      values5: differntlang.ourValues.ourValues5.eng,
      values6: differntlang.ourValues.ourValues6.eng,
    };
  }
  useEffect(() => {
    const b1 = document.getElementById("homeContainer");
    b1.addEventListener("scroll", () => {
      if (
        document.getElementById("homeContainer").scrollTop >=
        document.getElementById("description").offsetTop / 2
      ) {
        setpos(true);
      }
    });
  }, []);
  function displayDescription(e) {
    switch (e) {
      case "one":
        setONe(!one);
        break;
      case "two":
        setTow(!two);
        break;
      case "three":
        setThre(!three);
        break;
      case "four":
        setFour(!four);
        break;
      case "five":
        setFive(!five);
        break;
      case "six":
        setSix(!six);
        break;
      default:
    }
  }
  function removeDescription(e) {
    switch (e) {
      case "one":
        setONe(!one);
        break;
      case "two":
        setTow(!two);
        break;
      case "three":
        setThre(!three);
        break;
      case "four":
        setFour(!four);
        break;
      case "five":
        setFive(!five);
        break;
      case "six":
        setSix(!six);
        break;
      default:
    }
  }
  return (
    <div id="description" className={style.description}>
      <div className={style.titleContainer}>
        <h2>{langauge.header}</h2>
      </div>
      <hr className={style.bar}></hr>
      <div
        id="outValuesContainer1"
        className={`${style.outValuesContainer} ${
          testpos && style.slideleftDescription
        }`}
      >
        {/* <div>{one?<h1>true</h1>:<h1>false</h1>}</div>*/}
        <div
          className={style.boxValues}
          name="QUALITY"
          onMouseEnter={(e) => displayDescription("one")}
          onMouseLeave={(e) => removeDescription("one")}
        >
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>Clientéle</h2></div><div className={style.pcontainerB}><p>Accroitre la satisfaction, la fidélisation de nos clients en étant à leur écoute</p></div></div>
          <div className={style.backimage}>
            <div className={style.filterFlou}></div>
            <img src={p1} className={style.imagecssbackground} />

          </div>
        </div>
        <div
          className={style.boxValues}
          name="OPENNESS"
          onMouseLeave={(e) => removeDescription("two")}
          onMouseEnter={(e) => displayDescription("two")}
        >
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>Qualite</h2></div><div className={style.pcontainerB}><p>Accroitre la satisfaction, la fidélisation de nos clients en étant à leur écoute</p></div></div>
          <div className={style.backimage}>
            <div className={style.filterFlou}></div>
            <img src={p2} className={style.imagecssbackground} />

          </div>
        </div>

        <div
          className={style.boxValues}
          name="TEAMWORK"
          onMouseLeave={(e) => removeDescription("three")}
          onMouseEnter={(e) => displayDescription("three")}
        >
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>Progres</h2></div><div className={style.pcontainerB}><p>Améliorer la performance de l’entreprise</p></div></div>
          <div className={style.backimage}>
            <div className={style.filterFlou}></div>
            <img src={p3} className={style.imagecssbackground} />

          </div>
        </div>

        <div
          className={style.boxValues}
          name="FLEXIBILITY"
          onMouseLeave={(e) => removeDescription("four")}
          onMouseEnter={(e) => displayDescription("four")}
        >
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>Performance</h2></div><div className={style.pcontainerB}><p>Assurer une amélioration continue de notre SMQ</p></div></div>
          <div className={style.backimage}>
            <div className={style.filterFlou}></div>
            <img src={p4} className={style.imagecssbackground} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
