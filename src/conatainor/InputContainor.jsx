import React from "react";
import Input from "../components/Input";
import UiBox from "../components/common/UiBox";
import { useState } from "react";
import Button from "../components/Button";
import Icon from "../assets/icons/icons";
import styled from "styled-components";

const InputContainor = () => {
  const [input, setInput] = useState({
    title: "",
    price: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === "price") {
      let isNanPrice = isNaN(newValue.replace(/,/g, ""));
      isNanPrice === true && alert("숫자만 입력해주세요");
      newValue = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const newInput = {
      ...input,
      [name]: newValue,
    };
    setInput(newInput);
  };

  const onSubmitHandler = (e) => {
    if (input.title === "" || input.price === "") {
      alert("똑바로 입력좀요");
    } else {
      const notCommaPrice = input.price.split(",").join("");
      alert(`{name: ${input.title}, price: ${notCommaPrice}}`);
      setInput({
        title: "",
        price: "",
      });
    }
    e.preventDefault();
  };

  return (
    <UiBox title="input">
      <StyledForm onSubmit={onSubmitHandler}>
        <Input value={input.title} name="title" onChange={onChangeHandler} />
        <Input value={input.price} name="price" onChange={onChangeHandler} />
        <Button $btn_style={"primary"}>
          send
          <Icon.Heart />
        </Button>
      </StyledForm>
    </UiBox>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export default InputContainor;
