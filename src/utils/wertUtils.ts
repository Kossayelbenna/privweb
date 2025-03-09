import { signSmartContractData } from "@wert-io/widget-sc-signer";

/**
 * Génère les données signées pour Wert BuyWithSmartContract.
 * @param userAddress L'adresse du wallet utilisateur
 * @param amount Le montant en USDC
 * @param contractAddress L'adresse du smart contract
 * @returns Une signature signée pour Wert
 */
export function generateWertSignature(userAddress: string, amount: string, contractAddress: string) {
  if (!contractAddress) {
    throw new Error("L'adresse du smart contract Wert est manquante");
  }

  const scInput = {
    address: userAddress,
    commodity: process.env.NEXT_PUBLIC_WERT_COMMODITY!,
    commodity_amount: amount, // Montant en USDC
    network: process.env.NEXT_PUBLIC_WERT_NETWORK!,
    sc_address: contractAddress,
    sc_id: `wert_${Date.now()}`, // Un identifiant unique pour la transaction
    sc_input_data: "0x", // Hex string si nécessaire
  };

  // Génère et retourne la signature Wert
  return signSmartContractData(scInput, process.env.WERT_PRIVATE_KEY!);
}