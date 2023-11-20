/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'
import logo from './../../assets/sirius.png'
import live from './../../assets/live.png'
import video from './../../assets/video.png'
import message from './../../assets/message.png'
import notification from './../../assets/notification.png'
import users from './../../assets/users.png'
import setting from './../../assets/setting.png'
import search from './../../assets/search.png'
import menu from './../../assets/menu.png'
import hostimg from './../../assets/image.png'
import user1 from './../../assets/user-1.png'
import user2 from './../../assets/user-2.png'
import user3 from './../../assets/user-3.png'
import user4 from './../../assets/user-4.png'
import people1 from './../../assets/people-1.png'
import people2 from './../../assets/people-2.png'
import people3 from './../../assets/people-3.png'
import people4 from './../../assets/people-4.png'
import people5 from './../../assets/people-5.png'
import chat from './../../assets/chat.png'
import disconnect from './../../assets/disconnect.png'
import call from './../../assets/call.png'
import mic from './../../assets/mic.png'
import cast from './../../assets/cast.png'

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
            <img src={live} class="active" />
          </li>
          <li>
            <img src={video} />
          </li>
          <li>
            <img src={message} />
          </li>
          <li>
            <img src={notification} />
          </li>
          <li>
            <img src={users} />
          </li>
          <li>
            <img src={setting} />
          </li>
        </RoomSubNav>
      </RoomNav>

      <RoomContainer>
        <div class="top-icons">
          <img src={search} />
          <img src={menu} />
        </div>

        <div class="row">
          <div class="col-">
            <img src={hostimg} class="host-img" />
            <div class="controls">
              <img src={chat} />
              <img src={disconnect} />
              <img src={call} class="call-icon" />
              <img src={mic} />
              <img src={cast} />
            </div>
          </div>
          <div class="col-2">
            <div class="joined">
              <p>Ayant rejoint</p>
              <div>
                <img src={people1} />
                <img src={people2} />
                <img src={people3} />
                <img src={people4} />
                <img src={people5} />
              </div>
            </div>
            <div class="invite">
              <p>Inviter plus de personnes</p>
              <div>
                <img src={user1} />
                <img src={user2} />
                <img src={user3} />
                <img src={user4} />
              </div>
            </div>
          </div>
        </div>
      </RoomContainer>
    </RoomHeader>
  )
}

export default Room
