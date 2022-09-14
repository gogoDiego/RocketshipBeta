//This is the Database
const articles = [

    {
    title: "Osmosis",
    photo:"https://imgs.search.brave.com/KIchLk0I-pV2CTrUWc91XG6nD8dm5UT9CNHYfyaHiYg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS92/M2xJbnhfMTVoOC9t/YXhyZXNkZWZhdWx0/LmpwZw",
    logo:"https://imgs.search.brave.com/lrwoph-gkc9n5uSQ2uZSRnqafolTMvR-Bkhl1pFnirY/rs:fit:250:250:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuY29pbmNvc3Qu/bmV0L2xvZ28vY3J5/cHRvY3VycmVuY3kv/b3Ntb3Npcy5wbmc",
    description: "The Premiere Interchain Dex/AMM of The Cosmos Ecosystem, Swap, LP, Stake, & more.",
    tags:["all","chain","dex","defi","osmosis"],
    link:"https://app.osmosis.zone/",
    },
    
    {
    title:"Juno",
    photo:"https://user-images.githubusercontent.com/79812965/131373443-5ff0d9f6-2e2a-41bd-8347-22ac4983e625.jpg",
    logo:"https://2549163913-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZiFiIZH5IkEYsWMUO4%2Fuploads%2Fgit-blob-4ea6081652796a8c60be99667f61753ad9983ad2%2FJUNO%20Logo%20(Black).svg?alt=media",
    description:"Use & create interoperable applications on Juno. A decentralized, public, permission-less network for cross-chain smart contracts.",
    tags:["all","chain","smartcontracts","juno"],
    link:"https://www.junonetwork.io/",
    },
    
    {
    
    title:"Cresent",
    photo:"https://static-resources.crescent.network/OG-landing.jpeg",
    logo:"https://2299351957-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FmEYtCuIUIqObZPWrSUQb%2Ficon%2FCv26i0d4sHliNOg5DlLt%2FProfile%20Logo%20Image%20.png?alt=media&token=76b124da-6df3-46af-a55a-2fce8ad97e75",
    description:"Innovating DeFi investment through advancements inter-blockchain technology",
    tags:["all","chain","dex","defi","orderbook"],
    link:"https://app.crescent.network/orderbook",
    },
    
    {
    
    title:"Akash",
    photo:"https://imgs.search.brave.com/k4Op2fgz8QW7I9ppEM6FYu5VJYaFNY921WRFCxdqVek/rs:fit:750:440:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGFpbHlo/b2RsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS9u/ZXctZmF2b3JpdGUt/Y29pbi0xLmpwZz9y/ZXNpemU9NzUwJTJD/NDQwJnNzbD0x",
    logo:"https://imgs.search.brave.com/8pB38iFgwX9u8WHDH5J5R0vjrnboSUQmLE2QyKI60xw/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9jcnlw/dG9sb2dvcy5jYy9s/b2dvcy9ha2FzaC1u/ZXR3b3JrLWFrdC1s/b2dvLnBuZw",
    description:"Using Akash Network allows developers to launch applications such as DeFi apps, block explorers, and other blockchain network components on a decentralized cloud.",
    tags:["all","chain","tools","akash"],
    link:"https://akash.network/",
    },
    {
    
    title:"Junoswap",
    photo:"https://pbs.twimg.com/media/FJFkqoUWUAQqXUA.jpg:large",
    logo:"https://1347255254-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FkIBcvuSNFl67qnhKwSqU%2Fuploads%2FTNoZ3iET0TeAW0AnTq7V%2FJunoSwap%20Logo%20.svg?alt=media&token=a87f21d3-6aac-4221-97f1-dfb99e5d4fcc",
    description:"Inter-chain AMM. Trade, list and liquify Cosmos native or CW-20 assets. Built on JunoNetwork",
    tags:["all","dex","junoswap","defi","juno","dapps"],
    link:"https://junoswap.com/",
    },
    {
    
    title:"Secret Network",
    photo:"https://lh4.googleusercontent.com/h5bK8qfNE0zR7LpjcKVdMA2WhN2TkZd7m4kjZo8qygiLsBw-ZFg9nlG0b1o2YZHS7m11UKKjbCs-rjVcxP-Hp2EDK8Gwia8Q9x7t6fH3st-OnZC2tMe92KhCg0AY7HMllziBQxiG",
    logo:"https://ghost-zxtx.onrender.com/content/images/2022/05/Pictoral-Mark.png",
    description:"Secret Network is the first blockchain with customizable privacy. This protects users, and empowers developers to build a better Web3.",
    tags:["all","chain","smartcontracts","secretnetwork"],
    link:"https://scrt.network/",
    },
    
    {
    
    title:"Stargaze",
    photo:"https://hiddengemteam.com/wp-content/uploads/2022/02/stargaze.jpg",
    logo:"https://s2.coinmarketcap.com/static/img/coins/200x200/16842.png",
    description:"A decentralized, community-owned NFT Layer 1 chain and marketplace with CosmWasm smart contracts. 100% carbon neutral. Zero gas.",
    tags:["all","chain","nfts","stargaze"],
    link:"https://www.stargaze.zone/",
    },
    {
    
        title:"Umee",
        photo:"https://pbs.twimg.com/media/FbF_fIRUEAQrDss?format=jpg&name=large",
        logo:"https://imgs.search.brave.com/iIq6clqLDbvmunJrebOsKveFJNh3EBZFGaESan91v-o/rs:fit:250:218:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuY29pbmNvc3Qu/bmV0L2xvZ28vY3J5/cHRvY3VycmVuY3kv/dW1lZS5wbmc",
        description:"Simplest way to start your DeFi experience for staking, rates, and interoperable solutions across blockchains. Borrow and lend today",
        tags:["all","chain","defi","moneymarket","umee"],
        link:"https://umee.cc/",
        },

    {
        
    title:"Evmos",
    photo:"https://imgs.search.brave.com/3xBcYh1M8DjReAQdFH3vxbYF4hAvjsOf_CC41K1-fD0/rs:fit:800:419:1/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2Fzc2V0cy5jb2lu/Z2Vja28uY29tL2Fw/cC9wdWJsaWMvY2tl/ZGl0b3JfYXNzZXRz/L3BpY3R1cmVzLzQz/NjMvY29udGVudF9l/dm1vc19jcnlwdG9f/Y292ZXIucG5n",
    logo:"https://assets.coingecko.com/coins/images/24023/large/evmos.png?1653958927",
    description:"Evmos is bringing the world of Ethereum-based applications and assets to the interoperable networks of the Cosmos ecosystem",
    tags:["all","chain","evmos","smartcontracts"],
    link:"https://evmos.org/",
    },
    {
        title:"SecretSwap",
        photo:"https://secretswap.net/cover.png",
        logo:"https://icons.llama.fi/secretswap.png",
        description:"A Better Way To Trade, Welcome to the first front-running resistant, cross-chain and privacy-first AMM",
        tags:["all","secretnetwork","defi","dapps","dexes","secretswap"],
        link:"https://secretswap.net/",
    },

    {
        title:"Orbit Market",
        photo:"https://pbs.twimg.com/ext_tw_video_thumb/1518656882545770500/pu/img/_gt7AZZaKUSLK579?format=jpg&name=large",
        logo:"https://www.orbitmarket.io/static/media/Logo.08126f94.svg",
        description:"First NFT Marketplace on Evmos. Built by OrbitalApes",
        tags:["all","evmos","nfts","dapps","orbitmarket"],
        link:"https://www.orbitmarket.io/",
    },

    {
        title:"DAO DAO",
        photo:"https://pbs.twimg.com/card_img/1569112772918489088/Km8aWVfD?format=jpg&name=medium",
        logo:"https://pbs.twimg.com/card_img/1568032759875895296/p9c4O6j4?format=png&name=small",
        description:"Simple, capable, and free DAO tooling. Built with love, by DAO DAO on Juno.",
        tags:["all","dao dao","juno","dapps","tools"],
        link:"https://daodao.zone/",
    },
    {
        title:"Diffusion",
        photo:"https://chaindebrief.com/wp-content/uploads/2022/03/Picture1.png",
        logo:"https://pbs.twimg.com/profile_images/1484221525666508806/sZ0ATBDy_400x400.jpg",
        description:"Powering liquidity for the Cosmos EVM, The Evmos AMM",
        tags:["all","evmos","defi","dapps","dex","diffusion"],
        link:"https://app.diffusion.fi/#/swap",
    },
    {
        title:"Axelar",
        photo:"https://pbs.twimg.com/profile_banners/1321982248401457154/1659014088/1500x500",
        logo:"https://raw.githubusercontent.com/cosmostation/cosmostation_token_resource/master/chains/logo/axelar.png",
        description:"Secure cross-chain communication | dApp users interact w/ any asset or app on any chain, w/ 1 click",
        tags:["all","chain","axelar","tools","bridge"],
        link:"https://axelar.network/",
    },

    {
        title:"Nomic",
        photo:"https://images.hive.blog/p/BgxWBRxjvNho1d5owNvLc9kLkZETgqoQLu9zcBbNBbDDEp9W4DbuZJuZtcSypMqNW2LZ5vF8LKdPxGtrVbD4KkYxBrYivm1Aq6essC49YsuhvVNzdgxNmj7kza8sA55YtdFV29nyaCU2WCRucayDEkCmZqW1DujJxxkbq2P8yjZo7WE?format=match&mode=fit&width=640",
        logo:"https://pbs.twimg.com/profile_images/1486814387864281098/skzTtrsq_400x400.jpg",
        description:"Bitcoin on Cosmos. The superior way to use Bitcoin in Cosmos DeFi.",
        tags:["all","chain","nomic","tools","bridge"],
        link:"https://nomic.io/",
    },
    {
        title:"Comdex",
        photo:"https://miro.medium.com/max/1200/1*dI4ILM4R8mId-rIarb65Eg.jpeg",
        logo:"https://raw.githubusercontent.com/cosmos/chain-registry/master/comdex/images/cmdx.png",
        description:"Democratizing Finance, DeFi Infrastructure Layer for Cosmos",
        tags:["all","chain","comdex","defi","moneymarket","dex","synthetics"],
        link:"https://comdex.one/",
    },
    {
        title:"Shade Protocol",
        photo:"https://shadeprotocol.io/shade-preview.jpg",
        logo:"https://shadeprotocol.io/img/logos/shade.png",
        description:"An array of connected privacy-preserving dApps built on SecretNetwork.",
        tags:["all","secretnetwork","defi","dapps","liquidstaking","shadeprotocol"],
        link:"https://comdex.one/",
    },
    {
        title:"Osmosis Frontier",
        photo:"https://pbs.twimg.com/media/Fa2mYkiWIAAmdN3?format=jpg&name=large",
        logo:"https://imgs.search.brave.com/lrwoph-gkc9n5uSQ2uZSRnqafolTMvR-Bkhl1pFnirY/rs:fit:250:250:1/g:ce/aHR0cHM6Ly9zdGF0/aWMuY29pbmNvc3Qu/bmV0L2xvZ28vY3J5/cHRvY3VycmVuY3kv/b3Ntb3Npcy5wbmc",
        description:"Yeeeeehaaawww! Its the wild west degen playground where chaos reigns and UX takes a back-seat for full permissionless",
        tags:["all","chain","osmosis","defi","dapps","dex","osmosis frontier","dapps"],
        link:"https://frontier.osmosis.zone/",
    },


    ];
    
    
/*
{
    title:"Name",
    photo:"",
    logo:"",
    description:"",
    tags:["all","chain","chainname","defi","smartcontracts","nfts","dapps","tools","lending","orderbook"],
    link:"",
},


tags

basics
"all","chain","chainname"
chain
"juno","osmosis","axelar","secretnetwork","evmos","stargaze","umee","comdex","nomic","akash",
catagory
"defi","smartcontracts","nfts","dapps","tools",
defi cat
"dex","synthetics",,"moneymarket","lending","orderbook","liquidstaking"
*/ 
    
const grid = document.getElementById("grid");
    
    
//makes articles
function makeArticle (index){

    let picker = (index);

    const article = document.createElement("div");
    article.className = "article";
    article.className += " " + articles[picker].title;
    grid.appendChild(article);
    article.id = "article" + [picker];

    const articlediv = document.getElementById( "article" + picker);

    const photo = document.createElement("img");
    photo.src = articles[picker].photo;
    photo.className = "photo";
    articlediv.appendChild(photo);

    const articleCenter = document.createElement("div");
    articleCenter.id = "articleCenter" + [picker];
    articlediv.appendChild(articleCenter);

    const articleCenterDiv = document.getElementById( "articleCenter" + picker);


    const articlehead = document.createElement("div");
    articlehead.className = "articlehead";
    articlehead.id = "articlehead" + [picker];
    articleCenterDiv.appendChild(articlehead);

    const articleheaddiv = document.getElementById( "articlehead" + picker);

    const title = document.createElement("h3");
    title.textContent = articles[picker].title;
    title.className = "title";
    articleheaddiv.appendChild(title);

    const logo = document.createElement("img");
    logo.src = articles[picker].logo;
    logo.className = "logo";
    articleheaddiv.appendChild(logo);

    const horizontalRule = document.createElement("hr");
    horizontalRule.className = "horirule";
    articleCenterDiv.appendChild(horizontalRule);

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = articles[picker].description;
    articleCenterDiv.appendChild(description);

    
}
    
    



    
    
//makes all the articles in the database

function displayAllArticles(){

    for (let i = 0; i < articles.length ; i++){
    
        makeArticle(i)
    
    }

}

displayAllArticles();



//make the articles into clickable links
function links () {

    let clickDiv = document.querySelectorAll(".article");

    clickDiv.forEach( function (btns){
    
    
        //this shows the individual event listener
        btns.addEventListener("click", function (e) {
    
            //this makes the event into a simple variable to use
            epicEvent = e.currentTarget; //or e.currentTarget.classList
    
            
    
            let articleLinkIndex = epicEvent.id.slice(7);
    
        
            window.open(articles[articleLinkIndex].link, '_blank');
    
    });
    
    });
    
    }

links();
    
    

  
    
    



const dropbtn = document.querySelectorAll(".dropbtn")
let listtoggle = true;


dropbtn.forEach( function (btns){
    
    btns.addEventListener("click", function (e) {

        epicEvent = e.currentTarget;

        tagIndexLogic(epicEvent);

    })

});


const searchinput = document.getElementById("search")

searchinput.addEventListener("input", function(e){


    let input = e.currentTarget.value.toLowerCase().trim();

    searchinput.className = "searchbtn searchbar "
    searchinput.className += input;

    tagIndexLogic(e.currentTarget);

});












function showlist (epic) {
    
    let epicEvent = epic;
    let eventarray = epicEvent.parentNode.childNodes

    //go through them and remove
    
    for (let i = 1; i <= eventarray.length - 2; i += 2){
                
        let targetevent = epicEvent.parentNode.childNodes[i].classList;
        
            targetevent.remove("hide")

        }
    }
    
function hidelist (epic) {

    let epicEvent = epic;
    let eventarray = epicEvent.parentNode.childNodes

    //go through them and remove
    
    for (let i = 1; i <= eventarray.length - 2; i += 2){
        
        epicEvent.parentNode.childNodes[i].className += " hide"


        }



}
     
function displaySearch (epic) {

    let epicEvent = epic;

    for(let i = 0; i < articles.length ; i++){
    
        let articleTags = articles[i].tags.toString();
        let targeter = epicEvent.classList[2];

        let searchResults = articleTags.includes(targeter);
    

        if (searchResults == true){
            
            makeArticle(i)
    
        }
    
    }

    links();




}



function tagIndexLogic (epic){

    let epicEvent = epic;

    grid.innerHTML = " ";

 

    
    if (listtoggle == true){
    
        //open list
        listtoggle = !listtoggle;
    
        if (epicEvent.classList[1] != "searchbar"){

            showlist(epic);

        } else {
            displaySearch(epic);
        }
    
    
    
    } else if (listtoggle == false){
    
        //close list


        listtoggle = !listtoggle;
    
        
        if (epicEvent.classList[1] != "searchbar"){
            hidelist (epic)
        } 


        displaySearch(epic);
        
    
            epicEvent.classList.remove("hide");


    
    }
    


}



/*


const sortbtn = document.querySelectorAll(".sortbtn")

sortbtn.forEach( function (btns){
    
    btns.addEventListener("click", function (e) {

        epicEvent = e.currentTarget;

        sortIndexing(epicEvent);

    })

});



function sortIndexing (epic){

    
    grid.innerHTML = " ";
    let epicEvent = epic;


 
    if (listtoggle == true){
    
        //open list
        listtoggle = !listtoggle;
    

            showlist(epic);
            displaySearch(epic);

    
    
    
    } else if (listtoggle == false){
    
        //close list


        listtoggle = !listtoggle;
    
        

        hidelist (epic)
        displaySearch(epic);
        
        epicEvent.classList.remove("hide");


    
    }
    



}




*/










//To do list 

//Sort Button
    //make sorting algorithms like A-Z, Z-A, 
    //
//make a favorites feature
//make our theme, and juno, osmosis, etc chain themes
//make a Nav, name logo top left, right explore
