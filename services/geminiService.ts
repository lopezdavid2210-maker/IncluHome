import { GoogleGenAI } from "@google/genai";

// Helper to safely get API key (simulate environment variable)
const getApiKey = (): string | undefined => {
  // In a real environment, this would be process.env.API_KEY
  // For this demo, we assume it's injected or handled by the environment
  return process.env.API_KEY;
};

export const generateInsight = async (dataContext: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("No API Key provided for Gemini.");
    return "La funcionalidad de IA requiere una clave de API configurada.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Actúa como un experto psicólogo organizacional y analista de datos de recursos humanos. 
      Analiza los siguientes datos resumidos de una empresa que monitorea el estado emocional de empleados con discapacidad:
      
      ${dataContext}
      
      Proporciona un resumen ejecutivo breve (máximo 50 palabras) sobre las tendencias observadas y una recomendación clave.`,
    });

    return response.text || "No se pudo generar el análisis.";
  } catch (error) {
    console.error("Error generating insight:", error);
    return "Error al conectar con el servicio de IA. Por favor intente más tarde.";
  }
};
