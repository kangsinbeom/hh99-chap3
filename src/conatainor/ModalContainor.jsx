import { useState } from "react";
import { ModalOne, ModalTwo } from "../components/Modal";
import UiBox from "../components/common/UiBox";
const ModalContainor = () => {
  const [modalChecked, setModalChecked] = useState(false);

  const onClickModalHandler = () => {
    let checked = !modalChecked;
    setModalChecked(checked);
  };

  return (
    <>
      <UiBox title="modalOne">
        <ModalOne onClick={onClickModalHandler} modalChecked={modalChecked} />
      </UiBox>
      <UiBox title="modalTwo">
        <ModalTwo onClick={onClickModalHandler} modalChecked={modalChecked} />
      </UiBox>
    </>
  );
};

export default ModalContainor;
