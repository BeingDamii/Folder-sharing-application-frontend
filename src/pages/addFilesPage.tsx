import styled from "styled-components";
import PropTypes from "prop-types";
import Logo from "../assets/Logo";
import AddForm from "../assets/addForm";

const propTypes = {};

const AddFilesPage = () => {
  return (
    <PageStyles>
      <Logo />
      <AddForm />
    </PageStyles>
  );
};

AddFilesPage.propTypes = propTypes;
// #endregion

const PageStyles = styled.div`
  padding: 50px 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default AddFilesPage;
