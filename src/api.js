// Envoi des formulaires via Web3Forms (gratuit). Clé à définir dans .env : VITE_WEB3FORMS_KEY
const KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export async function submitForm(subject, fields) {
  if (!KEY) throw new Error("Clé Web3Forms manquante");
  const r = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: KEY, subject, from_name: "Site NF FACILITIES", ...fields }),
  });
  const j = await r.json();
  if (!j.success) throw new Error(j.message || "Échec de l’envoi");
  return j;
}
