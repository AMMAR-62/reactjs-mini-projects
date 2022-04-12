import React , {createContext, useState} from 'react'


export const PollContext = createContext();

const PollProvider = ({children}) => {
    const [question, setQuestion] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [answers, setAnswers] = useState([
        {option: '', votes: ''},
        {option: '', votes: ''},
        {option: '', votes: ''},
        {option: '', votes: ''},
        
    ])
    return (
        <PollContext.Provider value={{question, setQuestion, answers, setAnswers, isModalOpen, setIsModalOpen}}>
            {children}
        </PollContext.Provider>
    )
}

export default PollProvider;