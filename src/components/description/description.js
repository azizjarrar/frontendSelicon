import React, { useState, useEffect } from "react";
import {useSelector} from 'react-redux'
import {differntlang} from '../globalVar/var'
import style from "./description.module.css";
import p1 from './image/development.png'
import p2 from './image/greeting.png'
import p3 from './image/coworking.png'
import p4 from './image/direction.png'
import p5 from './image/meeting.png'
import p6 from './image/innovation.png'
function Description() {
  const [one, setONe] = useState(false);
  const [two, setTow] = useState(false);
  const [three, setThre] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [testpos, setpos] = useState(false);
  const lang= useSelector((state)=>state.reducerlang.lang)
  var langauge={
    header:differntlang.ourValues.Header.fr,
    valuesH1:differntlang.ourValues.ourValues1.title.fr,
    valuesH2:differntlang.ourValues.ourValues2.title.fr,
    valuesH3:differntlang.ourValues.ourValues3.title.fr,
    valuesH4:differntlang.ourValues.ourValues4.title.fr,
    valuesH5:differntlang.ourValues.ourValues5.title.fr,
    valuesH6:differntlang.ourValues.ourValues6.title.fr,
    values1:differntlang.ourValues.ourValues1.fr,
    values2:differntlang.ourValues.ourValues2.fr,
    values3:differntlang.ourValues.ourValues3.fr,
    values4:differntlang.ourValues.ourValues4.fr,
    values5:differntlang.ourValues.ourValues5.fr,
    values6:differntlang.ourValues.ourValues6.fr,
  } 
  if(lang==='ang'){
    langauge={
      header:differntlang.ourValues.Header.eng,
      valuesH1:differntlang.ourValues.ourValues1.title.eng,
      valuesH2:differntlang.ourValues.ourValues2.title.eng,
      valuesH3:differntlang.ourValues.ourValues3.title.eng,
      valuesH4:differntlang.ourValues.ourValues4.title.eng,
      valuesH5:differntlang.ourValues.ourValues5.title.eng,
      valuesH6:differntlang.ourValues.ourValues6.title.eng,
      values1:differntlang.ourValues.ourValues1.eng,
      values2:differntlang.ourValues.ourValues2.eng,
      values3:differntlang.ourValues.ourValues3.eng,
      values4:differntlang.ourValues.ourValues4.eng,
      values5:differntlang.ourValues.ourValues5.eng,
      values6:differntlang.ourValues.ourValues6.eng,
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
      <div id="outValuesContainer1" className={`${style.outValuesContainer} ${testpos && style.slideleftDescription}`}>
        {/* <div>{one?<h1>true</h1>:<h1>false</h1>}</div>*/}
        <div
          className={style.boxValues}
          name="QUALITY"
          onMouseEnter={(e) => displayDescription("one")}
          onMouseLeave={(e) => removeDescription("one")}
        >
          {!one&&<img className={style.imageposetion} src={p1}/>}
          <div
            className={`${style.clipath} ${one && style.hiddenmothaleth}`}
          ></div>
          <div className={style.valuesHeader}>
            <p className={one?style.valusHover:style.valus}   >{langauge.valuesH1}</p>
          </div>
          <div
            className={`${style.valuesDescriptionContainer} ${one ? style.display : style.hiden}`}>
            <p className={style.valuesDescription}>
              {langauge.values1}
            </p>
          </div>
        </div>

        <div
          className={style.boxValues}
          name="OPENNESS"
          onMouseLeave={(e) => removeDescription("two")}
          onMouseEnter={(e) => displayDescription("two")}
        >
                    {!two&&<img className={style.imageposetion} src={p2}/>}

          <div
            className={`${style.clipath} ${two && style.hiddenmothaleth}`}
          ></div>
          <div className={style.valuesHeader}>
            <p className={two?style.valusHover:style.valus}>{langauge.valuesH2}</p>
          </div>{" "}
          <div
            className={`${style.valuesDescriptionContainer} ${
              two ? style.display : style.hiden
            }`}
          >
            <p className={style.valuesDescription}>
            {langauge.values2}
            </p>
          </div>
        </div>

        <div
          className={style.boxValues}
          name="TEAMWORK"
          onMouseLeave={(e) => removeDescription("three")}
          onMouseEnter={(e) => displayDescription("three")}
        >
                     {!three&&<img className={style.imageposetion} src={p3}/>}

          <div
            className={`${style.clipath} ${three && style.hiddenmothaleth}`}
          ></div>
          <div className={style.valuesHeader}>
            <p className={three?style.valusHover:style.valus}>{langauge.valuesH3}</p>
          </div>{" "}
          <div
            className={`${style.valuesDescriptionContainer} ${
              three ? style.display : style.hiden
            }`}
          >
            <p className={style.valuesDescription}>
            {langauge.values3}
            </p>
          </div>
        </div>

        <div
          className={style.boxValues}
          name="FLEXIBILITY"
          onMouseLeave={(e) => removeDescription("four")}
          onMouseEnter={(e) => displayDescription("four")}
        >
                     {!four&&<img className={style.imageposetion} src={p4}/>}

          <div
            className={`${style.clipath} ${four && style.hiddenmothaleth}`}
          ></div>
          <div className={style.valuesHeader}>
            <p className={four?style.valusHover:style.valus}>{langauge.valuesH4}</p>
          </div>{" "}
          <div
            className={`${style.valuesDescriptionContainer} ${
              four ? style.display : style.hiden
            }`}
          >
            <p className={style.valuesDescription}>
            {langauge.values4}
            </p>
          </div>
        </div>

        <div
          className={style.boxValues}
          name="PASSION"
          onMouseLeave={(e) => removeDescription("five")}
          onMouseEnter={(e) => displayDescription("five")}
        >
                     {!five&&<img className={style.imageposetion} src={p5}/>}

          <div
            className={`${style.clipath} ${five && style.hiddenmothaleth}`}
          ></div>
          <div className={style.valuesHeader}>
            <p className={five?style.valusHover:style.valus}>{langauge.valuesH5}</p>
          </div>{" "}
          <div
            className={`${style.valuesDescriptionContainer} ${
              five ? style.display : style.hiden
            }`}
          >
            <p className={style.valuesDescription}>
            {langauge.values5}
            </p>
          </div>
        </div>

        <div
          className={style.boxValues}
          name="INTEGRITY"
          onMouseLeave={(e) => removeDescription("six")}
          onMouseEnter={(e) => displayDescription("six")}
        >
                     {!six&&<img className={style.imageposetion} src={p6}/>}

          <div
            className={`${style.clipath} ${six && style.hiddenmothaleth}`}
          ></div>
          <div className={style.valuesHeader}>
            <p className={six?style.valusHover:style.valus}>{langauge.valuesH6}</p>
          </div>{" "}
          <div
            className={`${style.valuesDescriptionContainer} ${
              six ? style.display : style.hiden
            }`}
          >
            <p className={style.valuesDescription}>
            {langauge.values6}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Description;
