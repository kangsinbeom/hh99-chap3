import React from "react";
import Input from "../components/Input";
import UiBox from "../components/common/UiBox";
import Modal from "../components/Modal";
function Right(props) {
  return (
    <div>
      <UiBox>
        <Input />
        <Input />
      </UiBox>
      <UiBox>
        <Modal />
      </UiBox>
    </div>
  );
}

export default Right;
