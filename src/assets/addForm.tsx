import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FormWrapper } from "./Form";
import { PrimaryBtn } from "./Button";

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const AddForm = () => {
  return (
    <AddFormWrapper>
      <svg
        width="20"
        height="16"
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="folder-svg"
      >
        <path
          d="M8 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V4C20 2.9 19.1 2 18 2H10L8 0Z"
          fill="black"
        />
      </svg>
      <h3>My pictures folder</h3>
      <h1>Add files to folder</h1>
      <p className="desc">
        File size must not exceed 2MB, only PNG, JPEG, or GIF formats are
        allowed.
      </p>
      <PrimaryBtn className="primary-btn">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 9L12 4M12 4L17 9M12 4V16"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Upload image
      </PrimaryBtn>
    </AddFormWrapper>
  );
};

AddForm.propTypes = propTypes;
AddForm.defaultProps = defaultProps;
// #endregion

const AddFormWrapper = styled(FormWrapper)`
  width: 35%;
  .primary-btn {
    margin-top: 20px;
  }
  h3 {
    font-size: 16px;
    font-weight: 400;
    margin-top: 10px;
  }
  h1 {
    font-size: 22px;
  }
  p {
  }
`;

export default AddForm;
