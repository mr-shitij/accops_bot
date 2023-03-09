class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    async parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        await this.actionProvider.handleRequest(lowerCaseMessage);
    }
}

export default MessageParser;
