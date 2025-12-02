import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize only if API key exists to prevent immediate errors on load if missing
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const generatePartnershipResponse = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, I cannot connect to the AI service right now. Please contact us directly via email.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuery,
      config: {
        systemInstruction: `You are 'Nyantuy Bot', a friendly and professional business development assistant for 'Nyantuy Group'. 
        Nyantuy Group manages F&B brands: Pizza Nyantuy, Rujaklah, and Burgerta'.
        Your goal is to answer questions about franchising, partnership opportunities, and brand details.
        Tone: Youthful, professional, energetic, and helpful. 
        Keep answers concise (under 100 words).
        If asked about pricing, suggest they fill out the official partnership form.`,
      }
    });
    
    return response.text || "I apologize, I couldn't generate a response. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong while consulting our digital assistant. Please try again later.";
  }
};