console.log("ready for Blast Off!")



//This is the Database
const articles = [

    {
    title: "Osmosis",
    ticker: "OSMO",
    description: "The Interchain Dex of The Cosmos Ecosystem",
    logo:"https://app.osmosis.zone/_next/image?url=%2Fosmosis-logo-main.svg&w=384&q=75",
    photo:"https://imgs.search.brave.com/KIchLk0I-pV2CTrUWc91XG6nD8dm5UT9CNHYfyaHiYg/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnl0/aW1nLmNvbS92aS92/M2xJbnhfMTVoOC9t/YXhyZXNkZWZhdWx0/LmpwZw",
    tags:["all","chain","dex","defi","osmosis"],
    stats: {mcap:"$570M",liquidity:"$104.65M",volume:"$18.10M",price:"$1.25"},
    governance: [["Prop #333: Signalling Proposal for OSMO/AXL incentivised pool", "Live"],["Prop #329: Signaling Proposal for ATOM/stATOM Incentivised Pool", "Passed"]],
    staking:[["Delagate 24.58% APR","https://wallet.keplr.app/chains/osmosis"],["SuperFluid APR Varies","https://app.osmosis.zone/pool/1"]],
    link:"https://app.osmosis.zone/",
    resources:[
        ["Website","https://osmosis.zone/"],
        ["Twitter","https://twitter.com/osmosiszone"],
        ["Medium","https://medium.com/osmosis"],
        ["Telegram","https://t.me/osmosis_chat"],
        ["Discord","https://discord.com/invite/osmosis"],
        ["Github","https://github.com/osmosis-labs/osmosis"],
        ["Documentation", "https://docs.osmosis.zone/"],
        ["Reddit", "https://www.reddit.com/r/OsmosisLab/"],],
    theme: `
    --backgroundColor:#170F34;
    --navbarcolor:#2d2755; 
    
    --boxcolor:#3c356c;
    --lighterbackfill: #3c356c;
    
    --fontcolor:rgb(255, 255, 255);
    --accentoutline: #756b95;
    
    `,

    },
    
    {
    title:"Juno",
    ticker:"JUNO",
    description:"A decentralized, public, permission-less network for cross-chain smartcontracts.",
    logo:"https://juno.disperze.network/_nuxt/img/logo.c1847d9.svg",
    photo:"https://user-images.githubusercontent.com/79812965/131373443-5ff0d9f6-2e2a-41bd-8347-22ac4983e625.jpg",
    tags:["all","chain","smartcontracts","juno"],
    stats: {mcap:"$275M",liquidity:"$4.98M",volume:"$1.17M",price:"$4.56"},
    governance: [["#40 Juno V10 Upgrade", "Live"],["#39 Komple Framework, KompleJS & Marketplace Builder Proposal", "Passed"]],
    staking:[["Delagate 82.21% APR","https://wallet.keplr.app/chains/juno"],["Liquid 86.31% APR","https://juno.stakeeasy.finance/"]],
    link:"https://www.junonetwork.io/",
    resources:[
    ["Website","https://www.junonetwork.io/"],
    ["Twitter","https://twitter.com/JunoNetwork"],
    ["Medium","https://medium.com/@JunoNetwork"],
    ["Telegram","https://t.me/JunoNetwork"],
    ["Discord","https://discord.com/invite/Juno"],
    ["Github","https://discord.com/invite/Juno"],
    ["Documentation", "https://docs.junonetwork.io/juno/readme"],
    ["Reddit", "https://www.reddit.com/r/JunoNetwork/"],
],

    theme:`
    --backgroundColor:#170F34;
    --navbarcolor:#2d2755; 
    
    --boxcolor:#3c356c;
    --lighterbackfill: #3c356c;
    
    --fontcolor:rgb(255, 255, 255);
    --accentoutline: #756b95;
    
    `,

    },
    
    {
    
    title:"Cresent",
    photo:"https://static-resources.crescent.network/OG-landing.jpeg",
    logo:"https://crescent.network/static/media/crescent_logo.c16ebd6e40d82c2ba862decaf3037a97.svg",
    description:"Innovating DeFi investment through advancements InterBlockchain Tech",
    tags:["all","chain","dex","defi","orderbook"],
    link:"https://app.crescent.network/orderbook",
    },
    
    {
    
    title:"Akash",
    photo:"https://imgs.search.brave.com/k4Op2fgz8QW7I9ppEM6FYu5VJYaFNY921WRFCxdqVek/rs:fit:750:440:1/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vZGFpbHlo/b2RsLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wMS9u/ZXctZmF2b3JpdGUt/Y29pbi0xLmpwZz9y/ZXNpemU9NzUwJTJD/NDQwJnNzbD0x",
    logo:"https://lever-client-logos.s3.us-west-2.amazonaws.com/6e5a1ca3-9e5e-46a6-8a1b-1d3922060ae8-1611089122452.png",
    description:"Decentralized Cloud Computing.",
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
    logo:"https://scrt.network/secretnetwork-logo-primary-white.png",
    description:"Secret Network is the first blockchain with customizable privacy. This protects users, and empowers developers to build a better Web3.",
    tags:["all","chain","smartcontracts","secretnetwork"],
    link:"https://scrt.network/",
    },
    
    {
    
    title:"Stargaze",
    photo:"https://chaindebrief.com/wp-content/uploads/2022/02/powering-interchain-nftS-on-web3.0-1024x576.png",
    logo:"https://stake.stargaze.zone/static/media/sg-text-logo.b31e026e.png",
    description:"A decentralized, community-owned NFT Layer 1 chain and marketplace with CosmWasm smart contracts. 100% carbon neutral. Zero gas.",
    tags:["all","chain","nfts","stargaze"],
    link:"https://www.stargaze.zone/",
    },
    {
    
    title:"Umee",
    photo:"https://pbs.twimg.com/media/FbF_fIRUEAQrDss?format=jpg&name=large",
    logo:"https://cdn-images-1.medium.com/max/1822/1*nIobo_RLY7c2I0oD7qp_2g@2x.png",
    description:"Simplest way to start your DeFi experience for staking, rates, and interoperable solutions across blockchains. Borrow and lend today",
    tags:["all","chain","defi","moneymarket","umee"],
    link:"https://umee.cc/",
    },

    {
        
    title:"Evmos",
    photo:"https://imgs.search.brave.com/3xBcYh1M8DjReAQdFH3vxbYF4hAvjsOf_CC41K1-fD0/rs:fit:800:419:1/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2Fzc2V0cy5jb2lu/Z2Vja28uY29tL2Fw/cC9wdWJsaWMvY2tl/ZGl0b3JfYXNzZXRz/L3BpY3R1cmVzLzQz/NjMvY29udGVudF9l/dm1vc19jcnlwdG9f/Y292ZXIucG5n",
    logo:"https://global-uploads.webflow.com/62691815e834438f848547e0/62691815e834430f668547f4_Evmos_PrimaryLogo_Sand_RGB.svg",
    description:"Evmos is bringing the world of Ethereum-based applications and assets to the interoperable networks of the Cosmos ecosystem",
    tags:["all","chain","evmos","smartcontracts"],
    link:"https://evmos.org/",
    },
    {
        title:"SecretSwap",
        photo:"https://secretswap.net/cover.png",
        logo:"https://secretswap.net/assets/secret-swap-light.png",
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
        logo:"https://frontier.osmosis.zone/_next/image?url=%2Fosmosis-logo-frontier.svg&w=384&q=75",
        description:"Its the wild west degen Dex where chaos reigns & UX takes a back-seat for full permissionless",
        tags:["all","chain","osmosis","defi","dapps","dex","osmosis frontier","dapps"],
        link:"https://frontier.osmosis.zone/",
    },


    ];
    
    
/*\

format

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

    // const title = document.createElement("h3");
    // title.textContent = articles[picker].title;
    // title.className = "title";
    // articleheaddiv.appendChild(title);

    const logo = document.createElement("img");
    logo.src = articles[picker].logo;
    logo.className = "logo";
    articleheaddiv.appendChild(logo);

    const description = document.createElement("p");
    description.className = "description";
    description.textContent = articles[picker].description;
    articleCenterDiv.appendChild(description);

    const explorediv = document.createElement("div");
    explorediv.className = "explorebtnsdiv";
    articleCenterDiv.appendChild(explorediv);

    const explorebtn = document.createElement("input");
    explorebtn.className = "explorebtns launch";
    explorebtn.value = "Launch";
    explorebtn.type = "button";
    explorediv.appendChild(explorebtn);

    const infobtn = document.createElement("input");
    infobtn.className = "explorebtns info";
    infobtn.value = "Info";
    infobtn.type = "button";
    explorediv.appendChild(infobtn);

    const addbtn = document.createElement("i");
    addbtn.className = "fa-solid fa-circle-plus add";
    explorediv.appendChild(addbtn);

}
    


const dashboard = document.getElementsByTagName("dashboard")[0];

function makeChainDash (chain) {

    let picker = chain;

    const dashdiv = document.createElement("div");
    dashdiv.className = "chainexplorer";
    dashboard.appendChild(dashdiv);

    //creates the Title of Dash
        const titlediv = document.createElement("div");
        titlediv.className = "chaintitle";
        dashdiv.appendChild(titlediv);

        const chainlogo = document.createElement("img");
        chainlogo.src = articles[picker].logo;
        titlediv.appendChild(chainlogo);

        const chainstats = document.createElement("h1");
        chainstats.innerHTML = "Chain Stats";
        titlediv.appendChild(chainstats);


    //creates the token Anaylitics


    const statsmaindiv = document.createElement("div");
    statsmaindiv.className = "chaininfo";
    dashdiv.appendChild(statsmaindiv);




    //token analitics
    const chaintokenstats = document.createElement("div");
    chaintokenstats.className = "chaintokenstats";
    statsmaindiv.appendChild(chaintokenstats);

        const tokenstats = document.createElement("div");
        tokenstats.className = "tokenstats";
        chaintokenstats.appendChild(tokenstats);

        const ticker = document.createElement("h2");
        ticker.innerHTML = "$" + articles[picker].ticker; 
        tokenstats.appendChild(ticker);

        const mcap = document.createElement("h4");
        mcap.innerHTML = "MarketCap";
        tokenstats.appendChild(mcap);

        const mcapvalue = document.createElement("p");
        mcapvalue.innerHTML = articles[picker].stats.mcap;
        tokenstats.appendChild(mcapvalue);

        const liquidity = document.createElement("h4");
        liquidity.innerHTML = "Liquidity";
        tokenstats.appendChild(liquidity);

        const liquidityvalue = document.createElement("p");
        liquidityvalue.innerHTML = articles[picker].stats.liquidity;
        tokenstats.appendChild(liquidityvalue);

        const volume = document.createElement("h4");
        volume.innerHTML = "Volume";
        tokenstats.appendChild(volume);

        const volumevalue = document.createElement("p");
        volumevalue.innerHTML = articles[picker].stats.volume;
        tokenstats.appendChild(volumevalue);

        const price = document.createElement("h4");
        price.innerHTML = "Price";
        tokenstats.appendChild(price);

        const pricevalue = document.createElement("p");
        pricevalue.innerHTML = articles[picker].stats.price;
        tokenstats.appendChild(pricevalue);
    
    const tempchartimage = document.createElement("img");
    tempchartimage.src = "Rocketship chart demo.png"; //INSERT CODE FOR chart
    tempchartimage.className = "tempchartimage";
    chaintokenstats.appendChild(tempchartimage);



    const govandstake = document.createElement("div");
    govandstake.className = "govandstake";
    statsmaindiv.appendChild(govandstake);


        const chainoptions = document.createElement("div");
        chainoptions.className = "chainoptions";
        govandstake.appendChild(chainoptions);

            const governance = document.createElement("h2");
            governance.innerHTML = "Governance";
            chainoptions.appendChild(governance);

            const governanceicon = document.createElement("i");
            governanceicon.className = "fa-solid fa-check-to-slot";
            chainoptions.appendChild(governanceicon);

        const govprop1 = document.createElement("div");
        govprop1.className = "govprop";
        govprop1.id = "govprop1";
        govandstake.appendChild(govprop1);

            const govpropdiv1 = document.createElement("div");
            govpropdiv1.id = "govpropdiv1"; //maybe insert code idk
            govprop1.appendChild(govpropdiv1);

                const govpropicon = document.createElement("i");
                govpropicon.className = "fa-solid fa-circle-exclamation";
                govpropdiv1.appendChild(govpropicon);

                const govproh3= document.createElement("h3");
                govproh3.innerHTML = articles[picker].governance[0][1];
                govpropdiv1.appendChild(govproh3);

            const propname = document.createElement("p");
            propname.innerHTML = articles[picker].governance[0][0].slice(0,65);
            govprop1.appendChild(propname);

            const govprop2 = document.createElement("div");
            govprop2.className = "govprop";
            govprop2.id = "govprop2";
            govandstake.appendChild(govprop2);

                const govpropdiv2 = document.createElement("div");
                govpropdiv2.id = "govpropdiv2"; //maybe insert code idk
                govprop2.appendChild(govpropdiv2);

                    const govpropicon2 = document.createElement("i");
                    govpropicon2.className = "fa-solid fa-circle-exclamation";
                    govpropdiv2.appendChild(govpropicon2);

                    const govproh32= document.createElement("h3");
                    govproh32.innerHTML = articles[picker].governance[1][1];
                    govpropdiv2.appendChild(govproh32);

                const propname2 = document.createElement("p");

                propname2.innerHTML = articles[picker].governance[1][0].slice(0,65);;
                govprop2.appendChild(propname2);



        const staking = document.createElement("div");
        staking.id = "staking"; 
        govandstake.appendChild(staking);

            const stakingdiv = document.createElement("div");
            stakingdiv.className = "chainoptions chainstaking"; 
            staking.appendChild(stakingdiv);

            const stakingh2 = document.createElement("h2");
            stakingh2.innerHTML = "Staking"; 
            stakingdiv.appendChild(stakingh2);

            const stakingicon = document.createElement("i");
            stakingicon.className = "fa-solid fa-lock";
            stakingdiv.appendChild(stakingicon);

            const chainstakingapr = document.createElement("div");
            chainstakingapr.className = "chainstakingapr";
            staking.appendChild(chainstakingapr);       

                const stakingbtn1 = document.createElement("button");
                stakingbtn1.id = "stakebtn1";
                chainstakingapr.appendChild(stakingbtn1);

                    const stakingp1 = document.createElement("p");
                    stakingp1.innerHTML = articles[picker].staking[0][0]
                    stakingbtn1.appendChild(stakingp1);

                const stakingbtn2 = document.createElement("button");
                stakingbtn2.id = "stakebtn2";
                chainstakingapr.appendChild(stakingbtn2);

 

                    const stakingp2 = document.createElement("p");
                    stakingp2.innerHTML = articles[picker].staking[1][0]
                    stakingbtn2.appendChild(stakingp2);

    const chainresources = document.createElement("div");
    chainresources.className = "chainresources";
    statsmaindiv.appendChild(chainresources);

        const resourcestitle = document.createElement("h2");
        resourcestitle.innerHTML = "Resources";
        chainresources.appendChild(resourcestitle);

        const resourceslist = document.createElement("ul");
        resourceslist.className = "resourceslist";
        chainresources.appendChild(resourceslist);

        function createResourceLi (item){

            const resourceslistitem = document.createElement("li");
            resourceslistitem.innerHTML = articles[picker].resources[item][0];

            //create logic to make it a clickable link
            // resourceslistitem.link = articles[picker].resources[item][1];
            resourceslist.appendChild(resourceslistitem);

        }

        let resourcearray = articles[picker].resources

        for (let i = 0; i <= resourcearray.length - 1 ; i++){


        createResourceLi(i)


        }





        const resourcesblockdiv = document.createElement("div");
        resourcesblockdiv.classList = "resourcesblockdiv";
        chainresources.appendChild(resourcesblockdiv);


            const exploreblocksresource = document.createElement("button");
            exploreblocksresource.innerHTML = "Explore Blocks";
            resourcesblockdiv.appendChild(exploreblocksresource);



}


// makeChainDash(1);








// function createSortButtons (){


//     const buttonstag = document.getElementById("buttons");

//     const btnDiv = document.createElement("div");
//     btnDiv.className = "dropdown general";
//     buttonstag.appendChild(btnDiv);

//     const span = document.createElement("span");
//     span.className = "dropbtn general all selected";
//     span.innerText = "All";
//     btnDiv.appendChild(span)

//     const ul = document.createElement("ul");
//     btnDiv.appendChild(ul)

//     const li = document.createElement("li");
//     li.className = "dropbtn general favorties hide";
//     li.innerHTML = "Favorties";
//     ul.appendChild(li);

//     const li1 = document.createElement("li");
//     li1.className = "dropbtn general custom1 hide";
//     li1.innerHTML = "Custom 1";
//     ul.appendChild(li1);

//     const li2 = document.createElement("li");
//     li2.className = "dropbtn general custom2 hide";
//     li2.innerHTML = "Diegos Defi";
//     ul.appendChild(li2);

//     const li3 = document.createElement("li");
//     li3.className = "dropbtn general custom2 hide";
//     li3.innerHTML = "Diegos Defi";
//     ul.appendChild(li3);

// }

// createSortButtons();









    
//makes all the articles in the database




function displayAllArticles(){

    var listOfElements = [];

    for (let i = 0; i < articles.length ; i++){
    
        makeArticle(i)
        listOfElements.push(articles[i].title)

    }


    listOfElements.sort((a, b) => a.localeCompare(b));

}



displayAllArticles();




//make the articles into clickable links
/*
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
    
*/








    









const dropbtn = document.querySelectorAll(".dropbtn")
let listtoggle = true;



dropbtn.forEach( function (btns){

    console.log(btns)

    

   btns.addEventListener("click", function (e) {


        epicEvent = e.currentTarget;

        tagIndexLogic(epicEvent);

        
    })

});


const searchinput = document.getElementById("search");

searchinput.addEventListener("input", function(e){




    let input = e.currentTarget.value.toLowerCase().trim();

    searchinput.className = "searchbtn searchbar "
    searchinput.className += input;

    tagIndexLogic(e.currentTarget);

});












function showlist (epic) {
    
    let epicEvent = epic;
    let eventarray = epicEvent.parentNode.childNodes[3].childNodes

    //go through them and remove
    



    for (let i = 1; i <= eventarray.length - 2; i += 2){
                
        let targetevent = epicEvent.parentNode.childNodes[3].childNodes[i].classList;
    
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
    let articleIndexAndTitle = []

    for(let i = 0; i < articles.length ; i++){
    
        let articleTags = articles[i].tags.toString();
        let targeter = epicEvent.classList[2];
        let searchResults = articleTags.includes(targeter);

        if (searchResults == true){
            
            let articleIndex = i;
            let articleName = articles[i].title
            let articleIndexAndObject = {index:articleIndex,name:articleName}

            articleIndexAndTitle.push(articleIndexAndObject)


            

            // aToZ(articleIndexAndTitle)

            sortSwitch(articleIndexAndTitle)
            

        }
    


    }


    for(let i = 0; i < articleIndexAndTitle.length ; i++){

        makeArticle(articleIndexAndTitle[i].index)

    }

    // links();


}













function sortSwitch (articleIndexAndTitle){




    switch(sortToggle) {    
        case "default": 
        answer = aToZ (articleIndexAndTitle);
        break;
      case "atoz": 
        answer = aToZ (articleIndexAndTitle);
        break;
      case "ztoa": 
        answer = zToA (articleIndexAndTitle);
        break;
    }
    return answer;
}



function aToZ (articleIndexAndTitle){

   return articleIndexAndTitle.sort((a, b) => a.name.localeCompare(b.name));
}


function zToA (articleIndexAndTitle){

    return articleIndexAndTitle.sort((a, b) => a.name.localeCompare(b.name)).reverse()
 
}





let sortToggle = "default";


const sortbtn = document.querySelectorAll(".sortbtn")

sortbtn.forEach( function (btns){
    
    btns.addEventListener("click", function (e) {

        epicEvent = e.currentTarget;

        sortIndexing(epicEvent);

        sortToggle = epicEvent.classList[2]

    })

});

function sortIndexing (epic){

    
    // grid.innerHTML = " ";
    let epicEvent = epic;


 
    if (listtoggle == true){
    
        //open list
        listtoggle = !listtoggle;
        showlist(epic);

        //maybe insert function that organized list in open list toggle

    
    
    
    } else if (listtoggle == false){
    
        //close list


        listtoggle = !listtoggle;
        hidelist (epic)
        // epicEvent.classList.remove("hide");


        console.log(epicEvent.parentNode.childNodes[3])


        if (epicEvent.classList[3] == "selected"){


            epicEvent.classList.remove("hide")
            epicEvent.parentNode.childNodes[3].classList.remove("hide")



            let eventarray = epicEvent.parentNode.childNodes[3].childNodes

            for (let i = 1; i <= eventarray.length - 2; i += 2){
        
                epicEvent.parentNode.childNodes[3].childNodes[i].className += " hide";
        
                }


        } else {

            let textSwapper = epicEvent.textContent
            epicEvent.parentNode.parentNode.childNodes[1].innerHTML = textSwapper;

        }

        
    }

}







function tagIndexLogic (epic){

    let epicEvent = epic;
    
    if (listtoggle == true){
    
        //open list
        listtoggle = !listtoggle;





    
        if (epicEvent.classList[1] != "searchbar"){

            showlist(epic);

        }

            
    
    
    
    } else if (listtoggle == false){
    
        //close list


        listtoggle = !listtoggle;
    
        grid.innerHTML = " ";

        
        if (epicEvent.classList[1] != "searchbar" ){

            hidelist (epic)

        }


     

        if (epicEvent.classList[3] == "selected"){


            epicEvent.classList.remove("hide")
            epicEvent.parentNode.childNodes[3].classList.remove("hide")



            let eventarray = epicEvent.parentNode.childNodes[3].childNodes

            for (let i = 1; i <= eventarray.length - 2; i += 2){
        
                epicEvent.parentNode.childNodes[3].childNodes[i].className += " hide";
        
                }


        } else {

            let textSwapper = epicEvent.textContent
            epicEvent.parentNode.parentNode.childNodes[1].innerHTML = textSwapper;

        }











        displaySearch(epic);
    }
    


 
}








//sort tag functions below





let osmosisChainTheme = `
--backgroundColor:#170F34;
--navbarcolor:#2d2755; 

--boxcolor:#3c356c;
--lighterbackfill: #3c356c;

--fontcolor:rgb(255, 255, 255);
--accentoutline: #756b95;

`;

let rocketshipTheme = `
--backgroundColor: #141010;
--navbarcolor:  #f70776; 

--boxcolor: #c3195d; 
--lighterbackfill: #c35983; 

--fontcolor:rgb(255, 255, 255);
--accentoutline:  #680747; 


`;



const headTag = document.getElementsByTagName('head')[0];
const styleTag = document.createElement("style");


// function themeSwap (theme){

//     styleTag.innerHTML = ` :root{ ${theme} }`;
//     headTag.appendChild(styleTag);

// }

// function themeSwitch (themename){

//     //if you choose chain & name then change theme

//     switch(themename) {    
//         case "default": 
//         answer = themeSwap(rocketshipTheme);;
//         break;
//       case "osmosis": 
//         answer = themeSwap(rocketshipTheme);;
//         break;
//       case "juno": 
//         answer = zToA (articleIndexAndTitle);
//         break;
//     }
//     return answer;
// }


















//To do list 

//make a favorites star feature
//when clicking any filter buttons reset the others


//flip the cards to learn about more,
    //chains has token, mcap, volume, chart, rank
    //smartcontracts has home, token, 
    //nfts has amount floor etc

    //make explore blocks clickable

//make a homepage dashboard
    //chain dashboard has price chart, volume, ticker, etc

//make a trending tag
//make our theme, and juno, osmosis, etc chain themes

//Chain Dashboard
    //make token chart
    //make governance clickable
    //make staking buttons clickable
    //make resources clickable



//bugs
    //fix search bug, when searching "all" btn dissapears
