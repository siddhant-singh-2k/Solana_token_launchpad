import { useConnection,useWallet } from "@solana/wallet-adapter-react";
import { Connection, LAMPORTS_PER_SOL,PublicKey,SystemProgram,Transaction } from "@solana/web3.js";

export function SendToken(){
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendtokends() {
        const to = document.getElementById("to").value;
        const amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey : wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports : amount * LAMPORTS_PER_SOL,
        }));

        alert("sending money")
        await wallet.sendTransaction(transaction,connection)
        alert("Sent" + amount)            
    }

    return <div>
        <input id = 'to' type="text" placeholder="To"/>
        <input id = 'amount' type="text" placeholder="Amount"/>
        <button onClick={sendtokends}> Send</button>
        
    </div>
}