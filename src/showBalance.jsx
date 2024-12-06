import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { useEffect,useState } from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function ShowBalance() {
    const {connection} = useConnection();
    const wallet = useWallet();
    const [balance,setBalance] = useState(null);



    async function get_user_bal() {
        const lamports = await connection.getBalance(wallet.publicKey);
        setBalance(lamports/LAMPORTS_PER_SOL)
        }

    useEffect(function(){
        get_user_bal();
    },[connection,wallet.publicKey]);


    return (
        <div>
            Balance: <span>{balance != null ? balance:"Loading Balance"}</span>
        </div>
    );
}


