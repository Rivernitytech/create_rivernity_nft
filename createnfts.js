const fs            = require('fs');
const ipfsAPI       = require('ipfs-api');
const EOS           = require('vexaniumjs');


let filedir = "./";

const collection_name = "risingstars2";
const schema_name = "maya2";

const minter = "risingstars2";
const minterprikey  = "****************";


eosConfig1 = {
  chainId: "f9f432b1851b5c179d2091a96f593aaed50ec7466b74f89301f957a83e56ce1f",
  keyProvider: minterprikey,
  httpEndpoint: 'http://209.97.162.124:8080',
  mockTransactions: () => null,
  expireInSeconds: 60,
  broadcast: true,
  debug: false,
  sign: true,
  authorization: minter
};
global.eos1 = EOS(eosConfig1);

const ipfs = ipfsAPI({host: '45.32.104.253', port: '5001', protocol: 'http'});
let jsons = [];


let tmpacttions = [
    {
        "account": "rivernassets",
        "name": "mintasset",
        "authorization": [
            {
                "actor": minter,
                "permission": "active"
            }
        ],
        "data": {
            "authorized_minter": minter,
            "collection_name": collection_name,
            "schema_name": schema_name,
            "template_id": -1,
            "new_asset_owner": minter,
            "immutable_data": [
                {
                    "key": "name",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Maya #19953",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "img",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "QmQCV6SoPABXpyY9baR4sVypm7hrHVKJyjGbZXwpXAzscJ",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "base",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Smile with Makeup",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "outfit",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Black Party Dress",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "necklace",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Moon",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "glasses",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Sunglasses",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "hair",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Long Black",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "earrings",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "Silver",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                },
                {
                    "key": "headpiece",
                    "value": {
                        "i8Val": 0,
                        "i16Val": 0,
                        "i32Val": 0,
                        "i64Val": 0,
                        "u8Val": 0,
                        "u16Val": 0,
                        "u32Val": 0,
                        "u64Val": 0,
                        "fVal": 0,
                        "dVal": 0,
                        "sVal": "None",
                        "i8Vec": [],
                        "i16Vec": [],
                        "i32Vec": [],
                        "i64Vec": [],
                        "u8Vec": [],
                        "u16Vec": [],
                        "u32Vec": [],
                        "u64Vec": [],
                        "fVec": [],
                        "dVec": [],
                        "sVec": []
                    }
                }
            ],
            "mutable_data": [],
            "tokens_to_back": [],
            "market_name": "risingstarts"
        }
    }
];




let ipfsadd = (buffer) =>{
  return new Promise((resolve,reject)=>{
      try {
          ipfs.add(buffer, function (err, files) {
              if (err || typeof files == "undefined") {
                  reject(err);
              } else {
                  resolve(files[0].hash);
              }
          })
      }catch(ex) {
          reject(ex);
      }
  })
}

function readjson(file, hash){
    let filejson = file + ".json";

    var data = fs.readFileSync(filejson);
    var nftjson = data.toString();
    var attrs = JSON.parse(nftjson);

    let inattrs = [];
    inattrs.push(attrs.name);
    inattrs.push(hash);

    attrs.attributes.forEach((elem ,index)=> {
        //console.log('get attrs!! date: ' + elem.name + ' attr: ' + elem.part);

        inattrs.push(elem.name)
    });

    console.log(' read json file: ' + file + '.json get inattrs: ' + JSON.stringify(inattrs));

    let actions = tmpacttions;
    actions[0].data.immutable_data
    actions[0].data.immutable_data.forEach((elem ,index)=> {
        elem.value.sVal = inattrs.shift()
        // console.log(' set attr: ' + elem.value.sVal);
        // console.log('set attrs!! key: ' + elem.key + ' sval: ' + elem.value.sVal);
    });
    //console.log('+++++++ sucess readjson!  actions: ' + JSON.stringify(actions));
    mintnft(file, hash, actions)
  }



function mintnft(file, hash, acttions){
    console.log(' try mintasset! file: '  + file + ' hash: ' + hash);
    eos1.transaction({
      actions: acttions
    }).then(result => {
      console.log('+++++ sucess mintasset! file: '  + file + ' hash: ' + hash);

      upload(jsons)
    }).catch(error => {
      var strerr = JSON.stringify(error);
      console.log(' ------ mintasset error:' + strerr);

      setTimeout(mintnft, 1000, file, hash, acttions);
    });
  }


function readdir( ){
    let files = fs.readdirSync(filedir);

    if (files) {
    files.forEach(file => { 
            console.log(file); 
            if(file.split('.')[1] === 'json')
            {
                jsons.push(file.split('.')[0])
            }
        }) 
        return upload(jsons)
    }
    else
    {
        return console.log("readdir return null"); 
    }
}

function upload( jsons )
{
    if(!jsons.length)
    {
        console.log("upload jsons size 0 !")
        return;
    }
    
    let jsonname = jsons.shift();

    let nowfile = filedir +  jsonname;
    let picfile = filedir +  jsonname + ".png";

    if(!fs.existsSync(picfile))
    {
        //console.log("upload png not find !")
        if(fs.existsSync(filedir +  jsonname + ".jpeg"))
        {
            picfile = filedir +  jsonname + ".jpeg";
        }
        else
        {
            picfile = filedir +  jsonname + ".gif";
        }
    }

    console.log("upload png find !" + picfile)

    let buff = fs.readFileSync( picfile );
    ipfsadd(buff).then((hash)=>{
        let nowhash = hash;
        console.log("file :" + JSON.stringify(nowfile) + "\r\n" + "hash :" + nowhash)

        readjson(nowfile, nowhash)
        //mintnft(picfile, hash)

    }).catch((err)=>{
        console.error(err);
    
        jsons.unshift(jsonname)
        upload(jsons)    
    })
}


readdir()

// mintnft()

