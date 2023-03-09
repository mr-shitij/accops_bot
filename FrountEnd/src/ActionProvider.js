class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    handleRequest = async(msg) => {
    
        let url = 'http://localhost:4668/getAnswer';
        let res = await fetch(url, {
            method: 'POST',
            crossorigin: true,    
            mode: 'cors',
            headers: {
                'Content-Type': 'text/plain',
                "Accept":"application/json"
            },
            body: msg
        });

        let result = await res.json();
        console.log(result['answer']);
        this.updateChatbotState(this.createChatBotMessage(result['answer']));
    };

    updateChatbotState(message) {
        // NOTICE: This function is set in the constructor, and is passed in from the top level Chatbot component. The setState function here actually manipulates the top level state of the Chatbot, so it's important that we make sure that we preserve the previous state.

        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;
