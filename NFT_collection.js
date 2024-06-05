/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?

2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
// create a variable to hold your NFT's
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
let NFTs=[];
function mintNFT (Cricketer,Team,TotalMatches,Age) {
    let metadata={
        Cricketer:Cricketer,
        Team:Team,
        TotalMatches:TotalMatches,
        Age:Age
    };
    NFTs.push(metadata);
}
// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++){
        console.log("\n\******************* Cricketers Record *******************\n\n");
        console.log("Cricketer's Name :",NFTs[i].Cricketer)
        console.log("Cricketer Team :",NFTs[i].Team)
        console.log("TotalMatches :",NFTs[i].TotalMatches)
        console.log("Age:",NFTs[i].Age)
        console.log("\n\n**********************************\n\n");
    }
}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total number of NFTs minted: ",NFTs.length)
}
// call your functions below this line

mintNFT("Virat Kohli", "India", 492, 35);
mintNFT("Steve Smith", "Australia", 365, 35)
mintNFT("Kane Williamson", "New Zealand", 346, 33);
mintNFT("Joe Root", "England", 438, 33);
mintNFT("Ben Stokes", "England", 241, 32);


listNFTs();
getTotalSupply();

