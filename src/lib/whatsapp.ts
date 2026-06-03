export const WHATSAPP_PHONE = "919152191121";

export function whatsappEnquiryUrl(productName: string) {
  const msg = `Hi Adhul Marketo, I'd like to enquire about ${productName}. Please share details and a quote.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
}
