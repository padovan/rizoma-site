/**
 * Site-wide configuration constants
 */

export const SITE_CONFIG = {
  // Contact Information
  WHATSAPP_PHONE: "5519996395866",
  EMAIL: "institutorizomasi@gmail.com",

  // URLs
  SITE_URL: "https://institutorizoma.com.br",
  WHATSAPP_BASE_URL: "https://wa.me/5519996395866",

  // Company Information
  COMPANY_NAME: "Instituto Rizoma de Saúde Integral",

  // Business Hours
  OPENING_HOURS: "Mo-Fr 08:00-18:00",

  // SEO
  DEFAULT_META: {
    title: "Instituto Rizoma de Saúde Integral",
    description: "Instituto Rizoma de Saúde Integral oferece cuidado em saúde mental com psicologia e grupos terapêuticos. Atendimento online, humanizado e personalizado.",
    keywords: "psicologia online, grupos terapeuticos online, saúde mental, terapia, atendimento psicológico, instituto rizoma"
  }
} as const;

/**
 * Helper functions for WhatsApp URLs
 */
export const whatsappHelpers = {
  /**
   * Generate WhatsApp URL with optional message
   */
  getWhatsappUrl: (message?: string, phone?: string) => {
    const phoneNumber = phone || SITE_CONFIG.WHATSAPP_PHONE;
    const baseUrl = `https://wa.me/${phoneNumber}`;

    if (message) {
      return `${baseUrl}?text=${encodeURIComponent(message)}`;
    }

    return baseUrl;
  },

  /**
   * Get default WhatsApp URL
   */
  getDefaultWhatsappUrl: () => SITE_CONFIG.WHATSAPP_BASE_URL
};