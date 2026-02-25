// DevIA Configuration File


declare global {
  interface Window {
    DEVIA_CONFIG: {
      GEMINI_API_KEY: string;
    };
  }
}

// Injeta a configuração na window global
window.DEVIA_CONFIG = {
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || ''
};

// Log de inicialização


export {};
