import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./NewProduct.css";

export default function NewProduct() {
  const [code, setCode] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [productModel, setProductModel] = useState("");
  const [hasStorage, setHasStorage] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const registerHandler = (event) => {
    event.preventDefault();

    let productInfo = {
        code,
        productTitle,
        productModel,
        hasStorage,
    };

    fetch("https://cmsprj-5dd95-default-rtdb.firebaseio.com/product.json", {
      method: "POST",
      body: JSON.stringify(productInfo),
    }).then((response) => console.log(response));
  };

  return (
    <div className='mainContainer'>
      <h2 className='newProductTitle'> ایجاد کالای جدید</h2>
      <div className="newProductForm">
        <div className="sideRightProduct">
          <Form
            style={{
              padding: "20px",
            }}
            onSubmit={registerHandler}
          >
            <Form.Group
              className="mb-3 productInputContainer"
              controlId="formBasicEmail"
            >
              <label>کد:</label>
              <Form.Control
                type="text"
                value={code}
                onChange={(event) => setCode(event.target.value)}
                id="code"
                className="inputFieldProduct"
                name="code"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 productInputContainer"
              controlId="formBasicEmail"
            >
              <label>نام محصول:</label>
              <Form.Control
                type="text"
                value={productTitle}
                onChange={(event) => setProductTitle(event.target.value)}
                id="product-Title"
                className="inputFieldProduct"
                name="productTitle"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 productInputContainer"
              controlId="formBasicEmail"
            >
              <label>مدل:</label>
              <Form.Control
                type="text"
                value={productModel}
                onChange={(event) => setProductModel(event.target.value)}
                id="product-Model"
                className="inputFieldProduct"
                name="productModel"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 productInputContainer"
              controlId="formBasicEmail"
            >
              <label> موجود در انبار:</label>
              <Form.Control
                type="text"
                value={hasStorage}
                onChange={(event) => setHasStorage(event.target.value)}
                id="has-Storage"
                className="inputFieldProduct"
                name="hasStorage"
              />
            </Form.Group>

            <Button
              className="newProductAddBtn"
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
        <div className="sideLeft">
          <Image src="/Image/New-Product.jpg" className="avatarProduct"></Image>
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
    </div>
  );
}
