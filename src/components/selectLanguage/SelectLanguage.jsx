import React, { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import { images } from "../../assets/images/images";
import language from "../../assets/data/language";

const SelectLanguage = ({src}) => {
  const [translatedFrom, setTranslatedFrom] = useState(language[0]);
  const [switchHelper, setSwitchHelper] = useState(language[0]);
  const [translatedTo, setTranslatedTo] = useState(language[1]);

  const handelLangSwitch = () => {
    setSwitchHelper(translatedFrom);
    setTranslatedFrom(translatedTo);
    setTranslatedTo(switchHelper);
  };
  useEffect(() => {
    setSwitchHelper(translatedFrom);
  }, [translatedFrom]);

  return (
    <>
      <div className="mt-5 content">
      <div className="d-flex align-items-center gap-2">
        <SelectInput
          setValue={setTranslatedFrom}
          defaultValue={translatedFrom}
          options={language}
          floatingLabels={"Translate From"}
        />

        <img
          className="pointer-event"
          onClick={handelLangSwitch}
          src={images.arrow}
          alt="switch language"
        />
        <SelectInput
          setValue={setTranslatedTo}
          defaultValue={translatedTo}
          options={language}
          floatingLabels={"Translate To"}
        />
      </div>
    </div>
    {
      src[0] ? <div className="mt-5 content text-center"><button className="default-btn">Translate</button></div> : ''
    }
    </>
  );
};

export default SelectLanguage;
