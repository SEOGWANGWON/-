import React ,{useState} from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const App = () => {
    const {Messages, setMessages} = useState ([
        {id:"1", writer:"Writer1", Message:"Message1", write_date:"2022-01-01"},
        {id:"2", writer:"Writer2", Message:"Message2", write_date:"2022-01-02"},
        {id:"3", writer:"Writer3", Message:"Message3", write_date:"2022-01-03"},
    ]);

    const [NewMessage,setNewMessage] = useState ({
        id:"", writer:"", Message:"", write_date:""
    });

    const handleInputChange = (e) => {
        const {id, value} = e.target
    };

    const handleDeleteMessage = 
    }
}

    const handleAddMessage = () => {
        if(!NewMessage.id ||
           !NewMessage.writer ||
           !NewMessage.Message ||
           !NewMessage.write_date
        )
        alert("값을 모두 입력해주세요");

    
    }

return(
    <Router>
        <div>
            <ul>
                <li>
            <Routes>
                <Route></Route>
            </Routes>
            <Routes>
                <Route></Route>
            </Routes>
            </li>
            </ul>
        </div>
    </Router>
)