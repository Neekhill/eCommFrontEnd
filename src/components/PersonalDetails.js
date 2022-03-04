import {
  CalendarToday,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import CompleteRegistrationForm from "./CompleteRegistrationForm";
import CustomizedDialogs from "./ModalRegistration";

const UserMainContainer = styled.div``;

const UserContainer = styled.div`
  margin: 0 20px;
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
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
`;
const UserShowTopUsername = styled.span`
  font-weight: 600;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;
const UserShowBottomTitle = styled.span`
  font-size: 20px;
  color: rgb(175, 170, 170);
  font-weight: 700;
`;
const UserShowBottomInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
  font-size: 16px;
  font-weight: 400;
`;
const UserShowBottomInfoIcon = styled.span`
  font-size: 16px !important;
`;
const UserShowBottomInfoTitle = styled.span`
  margin-left: 10px;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
`;

const PersonalDetails = () => {
  const user = useSelector((state) => state.user);
  /* const billingAddress = user.currentUser.billingaddress
    ? JSON.parse(user.currentUser.billingaddress))
        .address
    : false; */
  return (
    <UserMainContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowTopTile>
              <UserShowTopUsername>
                {`${user.currentUser.firstname} ${user.currentUser.lastname}`}
              </UserShowTopUsername>
            </UserShowTopTile>
          </UserShowTop>

          <UserShowBottom>
            <UserShowBottomTitle>Account Details</UserShowBottomTitle>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <PermIdentity style={{ color: "#444" }} />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.username}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <CalendarToday style={{ color: "#444" }} />
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
                <PhoneAndroid style={{ color: "#444" }} />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.phone
                  ? user.currentUser.phone
                  : " Add phone number"}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <MailOutlined
                  style={{
                    color: "#444",
                  }}
                />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.email}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>

            <UserShowBottomInfo>
              <UserShowBottomInfoIcon>
                <LocationSearching style={{ color: "#444" }} />
              </UserShowBottomInfoIcon>
              <UserShowBottomInfoTitle>
                {user.currentUser.billingaddress
                  ? JSON.parse(user.currentUser.billingaddress).address
                  : " Add address"}
              </UserShowBottomInfoTitle>
            </UserShowBottomInfo>
          </UserShowBottom>

          <CustomizedDialogs>
            <CompleteRegistrationForm />
          </CustomizedDialogs>
        </UserShow>
      </UserContainer>
    </UserMainContainer>
  );
};

export default PersonalDetails;
