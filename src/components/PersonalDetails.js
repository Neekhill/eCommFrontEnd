import {
  CalendarToday,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const UserMainContainer = styled.div``;

const UserContainer = styled.div`
  margin: 50px;
  display: flex;
`;
const UserShow = styled.div`
  flex: 1;
  padding: 20px;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const UserShowTopTile = styled.div`
  display: flex;
  flex-direction: column;
`;
const UserShowTopUsername = styled.span`
  font-weight: 600;
`;
const UserShowTopUserTitle = styled.span`
  font-weight: 300;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowBottomTitle = styled.span`
  font-size: 14px;
  color: rgb(175, 170, 170);
  font-weight: 600;
`;
const UserShowBottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
`;
const UserShowBottomInfoIcon = styled.span`
  font-size: 16px !important;
`;
const UserShowBottomInfoTitle = styled.span`
  margin-left: 10px;
  cursor: pointer;
`;
const Button = styled.div`
  background-color: black;
  color: white;
  padding: 15px 10px;
  width: 150px;
  text-align: center;
`;

const PersonalDetails = () => {
  const user = useSelector((state) => state.user);
  return (
    <UserMainContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowTopTile>
              <UserShowTopUsername>
                {user.currentUser.username.toUpperCase()}
              </UserShowTopUsername>
            </UserShowTopTile>
          </UserShowTop>

          <UserShowBottom>
            <UserShowBottomTitle>Account Details</UserShowBottomTitle>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <PermIdentity />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>neek_hill</UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <CalendarToday />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.birthday
                  ? user.currentUser.birthday
                  : " Add birthday"}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomTitle>Contact Details</UserShowBottomTitle>
            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <PhoneAndroid />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.phoneNumber
                  ? user.currentUser.phoneNumber
                  : " Add phone number"}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <MailOutlined />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.email}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <LocationSearching />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.address
                  ? user.currentUser.address
                  : " Add address"}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>
          </UserShowBottom>
          <Button>Update</Button>
        </UserShow>
      </UserContainer>
    </UserMainContainer>
  );
};

export default PersonalDetails;
