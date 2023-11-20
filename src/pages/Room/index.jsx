/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'
import logo from './../../assets/sirius.png'

const RoomHeader = styled.div`
  width: 100%;
  height: 100vh;
  background: #00122e;
  position: relative;
  overflow: hidden;
`

const RoomNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: #182842;
  width: 120px;
  padding: 10px 0px;
`

const AppLogo = styled.img`
  width: 56px;
  display: block;
  margin: auto;
  cursor: pointer;
`

const RoomSubNav = styled.ul`
  margin-top: 160px;
  li {
    list-style: none;
  }
  li img {
    width: 50px;
    display: block;
    margin: 10px auto;
    padding: 10px;
    cursor: pointer;
    opacity: 0.5;
    border-radius: 10px;
    transition:
      opacity 0.5s,
      background 0.5s;
  }
  li img:hover {
    opacity: 1;
    background: #4d6181;
  }
  .active {
    opacity: 1;
    background: #4d6181;
  }
`

const RoomContainer = styled.div`
  margin-left: 120px;
  padding: 0 2.5%;
  .top-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 25px 0;
  }

  .top-icons img {
    width: 25px;
    margin-left: 40px;
    cursor: pointer;
  }

  .row {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
  }

  .col-1 {
    flex-basis: 65%;
  }

  .col-2 {
    flex-basis: 33%;
  }

  .host-img {
    width: 100%;
    height: 450px;
    border-radius: 50px;
  }

  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .controls img {
    width: 40px;
    margin: 20px 10px;
    cursor: pointer;
    transition: transform 0.5s;
  }

  .controls .call-icon {
    width: 70px;
  }

  .controls img:hover {
    transform: translateY(-10px);
  }

  .joined {
    background: #182842;
    border-radius: 15px;
    padding: 30px 40px 50px;
    color: #fff;
  }

  .joined div {
    margin-top: 20px;
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
  }

  .joined img {
    width: 100%;
    cursor: pointer;
    border-radius: 10px;
  }

  .invite {
    background: #182842;
    border-radius: 15px;
    padding: 30px 40px 50px;
    color: #fff;
    margin-top: 20px;
  }

  .invite img {
    margin-top: 20px;
    width: 50px;
    margin-left: 5px;
    border-radius: 50%;
    cursor: pointer;
  }
`

function Room() {
  return (
    <RoomHeader>
      <RoomNav>
        <AppLogo src={logo} />
        <RoomSubNav>
          <li>
            <img src="./images/live.png" class="active" />
          </li>
          <li>
            <img src="./images/video.png" />
          </li>
          <li>
            <img src="./images/message.png" />
          </li>
          <li>
            <img src="./images/notification.png" />
          </li>
          <li>
            <img src="./images/users.png" />
          </li>
          <li>
            <img src="./images/setting.png" />
          </li>
        </RoomSubNav>
      </RoomNav>

      <RoomContainer>
        <div class="top-icons">
          <img src="./images/search.png" />
          <img src="./images/menu.png" />
        </div>

        <div class="row">
          <div class="col-">
            <img src="./images/image.png" class="host-img" />
            <div class="controls">
              <img src="./images/chat.png" />
              <img src="./images/disconnect.png" />
              <img src="./images/call.png" class="call-icon" />
              <img src="./images/mic.png" />
              <img src="./images/cast.png" />
            </div>
          </div>
          <div class="col-2">
            <div class="joined">
              <p>Ayant rejoint</p>
              <div>
                <img src="./images/people-1.png" />
                <img src="./images/people-2.png" />
                <img src="./images/people-3.png" />
                <img src="./images/people-4.png" />
                <img src="./images/people-5.png" />
              </div>
            </div>
            <div class="invite">
              <p>Inviter plus de personnes</p>
              <div>
                <img src="./images/user-1.png" />
                <img src="./images/user-2.png" />
                <img src="./images/user-3.png" />
                <img src="./images/user-4.png" />
              </div>
            </div>
          </div>
        </div>
      </RoomContainer>
    </RoomHeader>
  )
}

export default Room
