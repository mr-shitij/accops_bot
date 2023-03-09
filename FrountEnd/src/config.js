import { createChatBotMessage } from 'react-chatbot-kit';

const config = {
    initialMessages: [
        createChatBotMessage(
            "Hi, I'm here to help. What do you want to 	learn?",
            {
                widget: 'learningOptions'
            }
        )
    ],
    botName: 'Accops Doc Bot',
    customStyles: {
        botMessageBox: {
            backgroundColor: '#376B7E'
        },
        chatButton: {
            backgroundColor: '#376B7E'
        }
    }
};

export default config;
