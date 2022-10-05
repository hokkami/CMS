import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import useInput from "../../Hooks/useInput";
import "./NewFeature.css";

export default function NewFeature() {
  const [featureTitle, featureTitleBinding, featureTitleReset] = useInput();
  const [featureRate, featureRateBinding, featureRateReset] = useInput();
  const [featureMoney, featureMoneyBinding, featureMoneyReset] = useInput();
  const [featureSub, featureSubBinding, featureSubReset] = useInput();

  const [showAddModal, setShowAddModal] = useState(false);

  const registerHandler = (event) => {
    // event.preventDefault();

    let featureInfo = {
      featureTitle,
      featureRate,
      featureMoney,
      featureSub,
    };

    fetch("https://cmsprj-5dd95-default-rtdb.firebaseio.com/features.json", {
      method: "POST",
      body: JSON.stringify(featureInfo),
    }).then((response) => console.log(response));

    featureTitleReset();
    featureRateReset();
    featureMoney();
    featureSubReset();

    // setShowAddModal(true);
  };

  return (
    <div className="newFeatureForm">
      <div className="sideFeatureRight">
        <Form className="formFeatuer" onSubmit={registerHandler}>
          <Form.Group
            className="mb-3 featureInputContainer"
            controlId="formBasicEmail"
          >
            <label>نام ویژگی:</label>
            <Form.Control
              type="text"
              // value={featureTitle}
              // onChange={(event) => setFeatureTitle(event.target.value)}
              {...featureTitleBinding}
              id="first-name"
              className="featureInputField"
              name="firstName"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 featureInputContainer"
            controlId="formBasicEmail"
          >
            <label>میزان ویژگی:</label>
            <Form.Control
              type="text"
              // value={featureRate}
              // onChange={(event) => setFeatureRate(event.target.value)}
              {...featureRateBinding}
              id="feature-rate"
              className="featureInputField"
              name="featureRate"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 featureInputContainer"
            controlId="formBasicEmail"
          >
            <label>هزینه ویژگی:</label>
            <Form.Control
              type="text"
              // value={featureMoney}
              // onChange={(event) => seFeatureMoney(event.target.value)}
              {...featureMoneyBinding}
              id="feature-money"
              className="featureInputField"
              name="featureMoney"
            />
          </Form.Group>

          <Form.Group
            className="mb-3 featureInputContainer"
            controlId="formBasicEmail"
          >
            <label>مدت زمان لازم برای ویژگی:</label>
            <Form.Control
              type="text"
              // value={featureSub}
              // onChange={(event) => setFeatureSub(event.target.value)}
              {...featureSubBinding}
              id="feature-sub"
              className="featureInputField"
              name="featureSub"
            />
          </Form.Group>

          <Button
            className="newUserAddBtn"
            variant="primary"
            type="submit"
            onClick={() => {
              setShowAddModal(true);
            }}
          >
            ثبت
          </Button>
        </Form>
      </div>
      <div className="sideFeatureLeft">
        <Image src="/Image/Features.png" className="featureAvatar"></Image>
      </div>

      <Modal
        show={showAddModal}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header /*closeButton*/>
          <Modal.Title id="contained-modal-title-vcenter">ثبت</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>کاربر با موفقیت اضافه شد</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShowAddModal(false)}>باشه</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
