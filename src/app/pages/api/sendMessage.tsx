const baseURL = 'https://vkz134.ru/api/telegram/';

export const sendMessage = async (message: string): Promise<void> => {
    const url = `${baseURL}sendMessage`;
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '',
            text: message
        })
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.description || 'Что-то пошло не так');
    }
};