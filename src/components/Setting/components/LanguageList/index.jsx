// libs
import React, { useState, useEffect } from "react";
import { Radio } from "antd";
// hooks
import { useMultiLang } from "../../../../hooks";
// orthers
import "./style.scss";

const LanguageList = () => {
  const { handleChangeVN, handleChangeEN } = useMultiLang();
  const [value, setValue] = useState(1);
  useEffect(() => {
    if (value === 1) {
      handleChangeVN();
    } else if (value === 2) {
      handleChangeEN();
    }
  }, [value, handleChangeVN, handleChangeEN]);
  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group className="radio-wapper" onChange={onChangeRadio} value={value}>
      <Radio className="ant-radio-wrapper text-language" value={1}>
        VietNamese
      </Radio>
      <Radio className="ant-radio-wrapper text-language" value={2}>
        English
      </Radio>
    </Radio.Group>
  );
};

export default LanguageList;
