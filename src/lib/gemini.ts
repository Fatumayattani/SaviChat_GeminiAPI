import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI('AIzaSyCoiQ3R1a9JOA_Vk_vFvj8C7NiIL9Er8QM');

export async function getChatResponse(prompt: string) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: 'You are a helpful medical AI assistant named Savi. Provide clear, accurate information and always encourage users to seek professional medical advice when appropriate. Never make definitive diagnoses. Never use asterisks or markdown in your responses.',
        },
        {
          role: 'model',
          parts: 'I understand my role as Savi, your medical AI assistant. I will provide helpful information while emphasizing the importance of consulting healthcare professionals. I will not make diagnoses but can discuss symptoms and general health information.',
        },
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.7,
      },
    });

    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    return response.text().replace(/\*/g, '');
  } catch (error) {
    console.error('Error getting chat response:', error);
    throw error;
  }
}