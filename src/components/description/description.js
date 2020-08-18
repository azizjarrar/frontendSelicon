import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { differntlang } from "../globalVar/var";
import style from "./description.module.scss";

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
    header:differntlang.NOSVALEURS.header.fr,
    header1:differntlang.NOSVALEURS.header1.fr,
    header2:differntlang.NOSVALEURS.header2.fr,
    header3:differntlang.NOSVALEURS.header3.fr,
    header4:differntlang.NOSVALEURS.header4.fr,
    disc1:differntlang.NOSVALEURS.disc1.fr,
    disc2:differntlang.NOSVALEURS.disc2.fr,
    disc3:differntlang.NOSVALEURS.disc3.fr,
    disc4:differntlang.NOSVALEURS.disc4.fr,
    }

  
  if (lang === "ang") {
    langauge = {
      header:differntlang.NOSVALEURS.header.eng,
      header1:differntlang.NOSVALEURS.header1.eng,
      header2:differntlang.NOSVALEURS.header2.eng,
      header3:differntlang.NOSVALEURS.header3.eng,
      header4:differntlang.NOSVALEURS.header4.eng,
      disc1:differntlang.NOSVALEURS.disc1.eng,
      disc2:differntlang.NOSVALEURS.disc2.eng,
      disc3:differntlang.NOSVALEURS.disc3.eng,
      disc4:differntlang.NOSVALEURS.disc4.eng,
      }
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
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>{langauge.header1}</h2></div><div className={style.pcontainerB}><p>{langauge.disc1}</p></div></div>
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
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>{langauge.header2}</h2></div><div className={style.pcontainerB}><p>{langauge.disc2}</p></div></div>
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
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>{langauge.header3}</h2></div><div className={style.pcontainerB}><p>{langauge.disc3}</p></div></div>
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
          <div className={style.textContainer}><div className={style.h2Containerb}><h2>{langauge.header4}</h2></div><div className={style.pcontainerB}><p>{langauge.disc4}</p></div></div>
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
