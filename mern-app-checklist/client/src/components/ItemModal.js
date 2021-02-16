import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
const ItemModal = ({ addItem }) => {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log('deb 1')
    e.preventDefault();
    const newItem = {
      name,
    };
    addItem(newItem);
    console.log('deb 2')
    setModal(!modal);
  };
  return (
    <div>
      <Button
        color="dark"
        style={{
          marginBottom: "2rem",
        }}
        onClick={() => setModal(!modal)}
      >
        Add Item
      </Button>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>
          Add To Shopping List
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={(e)=>handleSubmit(e)}>
            <FormGroup>
              <Label for="item">Item</Label>
              <Input
                type="text"
                name="name"
                id="item"
                placeholder="add shopping item"
                onChange={(e)=>handleChange(e)}
              />
              <Button
                color="dark"
                style={{
                  marginTop: "2rem",
                }}
                block
              >
                Add Item
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

const mapStateToProps=state=>({
  item: state.items
})

export default connect(mapStateToProps,{addItem})(ItemModal);
