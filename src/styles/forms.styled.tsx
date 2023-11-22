import styled from "styled-components";

export const FormWrapper = styled.div`
  background-color: white;
  width: 100%;
  margin-top: 30px;
  border-radius: 20px;
  padding: 30px;
  padding-bottom: 120px;
  color: #707070;
  h1 {
    color: black;
  }
  .avatar-section {
    display: flex;
    align-items: center;
    .img-wrapper {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .text-wrapper {
      margin-left: 10px;
      h1 {
        font-size: 22px;
      }
      h3 {
        font-size: 16px;
        font-weight: 400;
        margin-top: 5px;
      }
    }
  }
  .desc {
    margin-top: 20px;
    font-size: 14px;
  }
  .heading {
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .form-elements {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .error {
      color: red;
      font-size: 12px;
      font-weight: 500;
    }

    .folder-name {
      padding: 10px;
      width: 100%;
      border: none;
      font-size: 16px;
      border-bottom: 1px solid black;
    }

    .folder-name::placeholder {
      font-size: 16px;
    }
    .folder-name:focus {
      outline: none;
    }
    .primary-btn {
      margin-top: 10px;
    }
  }
`;