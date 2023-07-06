import React from "react";
import Input from "../components/Input";
import UiBox from "../components/common/UiBox";
import Modal from "../components/Modal";
import { useState } from "react";
import Button from "../components/Button";
import Icon from "../assets/icons";
import styled from "styled-components";
import ModalTwo from "../components/ModalTwo";
function Right(props) {
  const [input, setInput] = useState({
    title: "",
    price: "",
  });

  const onChnageHandler = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "price") {
      newValue = value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    console.log(newValue);
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
      alert(input.title + ", " + input.price);
      setInput({
        title: "",
        price: "",
      });
    }
    e.preventDefault();
  };

  return (
    <div>
      <UiBox title="input">
        <StyledForm onSubmit={onSubmitHandler}>
          <Input value={input.title} name="title" onChange={onChnageHandler} />
          <Input value={input.price} name="price" onChange={onChnageHandler} />
          <Button.Primary>
            send
            <Icon.Heart />
          </Button.Primary>
        </StyledForm>
      </UiBox>
      <UiBox title="modal">
        <Modal />
      </UiBox>
      <UiBox title="modalTwo">
        <ModalTwo />
      </UiBox>
    </div>
  );
}

export default Right;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

// 폰트 적용하는 거 앞에서부터 찾는데 먼저 영문쓰고 한글 쓰면 된다

//정규표현식을 찾을때는 AI를 이용하자
