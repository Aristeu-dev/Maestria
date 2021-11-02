import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation ($data: ICreateUserDTO!) {
    signUp(data: $data) {
      id
      email
      name
    }
  }
`;
export default CREATE_USER;
