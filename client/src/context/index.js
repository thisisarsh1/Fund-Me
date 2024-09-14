import React,{useContext,createContext} from 'react'
import {useAddress,useContract,useMetamask,useContractWrite} from '@thirdweb-dev/react'
import {ethers} from 'ethers'


const StateContext = createContext();
export const StateContextProvider =({children})=>{
    const {contract}=useContract('0x7ed8F4645c3438a2b268d918fA1bD1e8C1F4C067')
}