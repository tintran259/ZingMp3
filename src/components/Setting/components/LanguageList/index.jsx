// libs
import React, { useContext, useEffect } from "react";
import { Radio } from "antd";
// context
import { MultiLangContext } from "../../../../context/multiLang";
// orthers
import "./style.scss";

const LanguageList = () => {
  const { handleChangeVN, handleChangeEN } = useContext(MultiLangContext);
  const [value, setValue] = React.useState(1);
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
