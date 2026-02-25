// DevIA Configuration File
// Este arquivo injeta a API Key do Gemini na window para uso pelo chat widget

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
if (window.DEVIA_CONFIG.GEMINI_API_KEY) {
  console.log('🔑 DevIA: Gemini API Key configurada');
} else {
  console.warn('⚠️ DevIA: Gemini API Key não encontrada. Usando modo fallback local.');
}

export {};
