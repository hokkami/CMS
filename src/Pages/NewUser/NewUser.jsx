import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import "./NewUser.css";

export default function NewUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, seJobTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const registerHandler = (event) => {
    event.preventDefault();

    let userInfo = {
      firstName,
      lastName,
      jobTitle,
      phone,
      email,
    };

    fetch("https://cmsprj-5dd95-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      body: JSON.stringify(userInfo),
    }).then((response) => console.log(response));
  };

  return (
    <div className='mainContainer'>
      <h2 className='newUserTitle'> ایجاد کاربر جدید</h2>
      <div className="newUserForm">
        <div className="sideRight">
          <Form
            style={{
              padding: "20px",
            }}
            onSubmit={registerHandler}
          >
            <Form.Group
              className="mb-3 userInputContainer"
              controlId="formBasicEmail"
            >
              <label>نام:</label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                id="first-name"
                className="inputField"
                name="firstName"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 userInputContainer"
              controlId="formBasicEmail"
            >
              <label>نام خانوادگی:</label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                id="last-name"
                className="inputField"
                name="lastName"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 userInputContainer"
              controlId="formBasicEmail"
            >
              <label>عنوان شغلی</label>
              <Form.Control
                type="text"
                value={jobTitle}
                onChange={(event) => seJobTitle(event.target.value)}
                id="job-title"
                className="inputField"
                name="jobTitle"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 userInputContainer"
              controlId="formBasicEmail"
            >
              <label>تلفن تماس:</label>
              <Form.Control
                type="text"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                id="phone"
                className="inputField"
                name="phone"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 userInputContainer"
              controlId="formBasicEmail"
            >
              <label>ایمیل:</label>
              <Form.Control
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="email"
                className="inputField"
                name="email"
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
        <div className="sideLeft">
          <Image src="/Image/register.jpg" className="avatar"></Image>
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
