import React, { useContext, createContext } from "react";
import {
  useAddress,
  useContract,
  useMetamask,
  useContractWrite,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

// Create the context
const StateContext = createContext();

// Define the provider
export const StateContextProvider = ({ children }) => {
  // Initialize the contract using the thirdweb hook
  const { contract } = useContract("0x7ed8F4645c3438a2b268d918fA1bD1e8C1F4C067");

  // Set up the write function to call the createCampaign method on the contract
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  // Get the user's wallet address
  const address = useAddress();

  // Connect the wallet using Metamask
  const connect = useMetamask();

  // Publish a new campaign
  const publishCampaign = async (form) => {
    try {
      // Validate that the contract is loaded
      if (!contract) throw new Error("Contract is not loaded.");

      // Convert target amount to wei (smallest unit of ether)
      const targetInWei = ethers.utils.parseEther(form.target.toString());

      // Create campaign using the contract function
      const data = await createCampaign({
        args: [
          address,                  // Campaign creator's address
          form.title,               // Campaign title
          form.description,         // Campaign description
          targetInWei,              // Target amount (in wei)
          new Date(form.deadline).getTime(),  // Deadline as a timestamp
          form.image,               // Campaign image URL
        ],
      });

      console.log("Campaign successfully created:", data);
    } catch (error) {
      console.error("Failed to create campaign:", error);
    }
  };

  return (
    <StateContext.Provider
      value={{ address, contract, connect, createCampaign: publishCampaign }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => useContext(StateContext);
