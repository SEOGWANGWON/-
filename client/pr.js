import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
//import css명.css

const App = () => {
    const [messages, setMessages] = useState([
        { id: 1, writer: '1', message: 'm1', write_date: '2023-01-02' },
        { id: 1, writer: '2', message: 'm3', write_date: '2023-01-03' },
        { id: 1, writer: '3', message: 'm2', write_date: '2023-01-04' },
    ]);

    const [newMessage, setNewMessage] = useState({
        id: '',
        writer:'',
        messages:'',
        write_date: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setNewMessage({...newMessage, [name]: value});
    };

    const handleAddMessage = () => {
        if (
            !newMessage.id ||
            !newMessage.writer ||
            !newMessage.messages ||
            !newMessage.write_date
        ) {
            alert('모든 항목을 작성해주세요');
            return;
        }

    const isDuplicate = messages.some(
        messages => String(messages.id) === newMessage.id
    );
    //중복 아디시 방지
    if (isDuplicate) {
        alert('이미 존재하는 아이디 입니다.');
        setNewMessage({...newMessage, ['id']: ''});
        return;
    }
    setMessages([...messages, newMessage]);
    setNewMessage({ id:'', writer: '', message:'', write_date: ''});
    };

    const handleDeleteMessage = (id) => {
        const updatedMessages = messages.filter((messages) => messages.id !== id)
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
    const {message, onDeleteMessage} = props;
    return (
        <div>
            <h2>메세지 리스트</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>writer</th>
                        <th>Message</th>
                        <th>Write_date</th>
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
                                    삭제
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
    const {newMessage, onInputChange, onAddMessage} = props;
    return(
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
            </form>
            <button onClick={onAddMessage}>메세지 추가하기</button>
        </div>
    );
};