import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import '만들어준 css 파일명.css';
const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, writer: '1', message: 'm1', write_date: '2023-01-02' },
    { id: 1, writer: '2', message: 'm2', write_date: '2023-01-03' },
    { id: 1, writer: '3', message: 'm3', write_date: '2023-01-04' },
  ]);

  const [newMessage, setNewMessage] = useState({
    id: '',
    writer: '',
    messages: '',
    write_date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMessage({ ...newMessage, [name]: value });
  };

  //만약에 값이 채워지지 않았을 때 값을 채워주기 위해서
  //값이 없음을 나타내주는 함수를 생성
  const handleAddMessage = () => {
    if (
      !newMessage.id ||
      !newMessage.writer ||
      !newMessage.messages ||
      !newMessage.write_date
    ) {
      alert('모든 값을 입력해주세요.');
      return;
    }
    const isDuplicate = messages.some(
      (messages) => String(messages.id) === newMessage.id
    );
    //만약 존재하는 아이디가 있을 경우 등록 방지 함수
    if (isDuplicate) {
      alert('이미 존재하는 아이디 입니다.');
      setNewMessage({ ...newMessage, ['id']: '' });
      return;
    }
    setMessages([...messages, newMessage]);
    setNewMessage({ id: '', writer: '', message: '', write_date: '' });
  };

  const handleDeleteMessage = (id) => {
    const updatedMessages = messages.filter((messages) => messages.id !== id);
    setMessages(updatedMessages);
  };
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">메세지 추가하기</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <Home message={messages} onDeleteMessage={handleDeleteMessage} />
            }
          />
          <Route
            path="/create"
            element={
              <CreateMessage
                newMessage={newMessage}
                onInputChange={handleInputChange}
                onAddMessage={handleAddMessage}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

const Home = (props) => {
  const { messages, onDeleteMessage } = props;
  return (
    <div>
      <h2>메세지 리스트</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>writer</th>
            <th>Message</th>
            <th>Write Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.id}</td>
              <td>{message.writer}</td>
              <td>{message.message}</td>
              <td>{message.write_date}</td>
              <td>
                <button onClick={() => onDeleteMessage(message.id)}>
                  삭제하기
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CreateMessage = (props) => {
  const { newMessage, onInputChange, onAddMessage } = props;
  return (
    <div>
      <h2>메세지 작성하기</h2>
      <form>
        <input
          type="number"
          name="id"
          value={newMessage.id}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="message"
          value={newMessage.message}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="write_date"
          value={newMessage.write_date}
          onChange={onInputChange}
        />

        <br />
      </form>
      <button onClick={onAddMessage}>Add Message</button>
    </div>
  );
};
