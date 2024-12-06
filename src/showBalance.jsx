import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { useEffect,useState } from "react";

export function ShowBalance() {
    const {connection} = useConnection();
    const wallet = useWallet();
    const [balance,setBalance] = useState(null);



    async function get_user_bal() {
        const lamports = await connection.getBalance(wallet.publicKey);
        setBalance(lamports)
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


