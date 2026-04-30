const { response } = require("express");

module.exports = [
  // === 文字回覆 ===
  { trigger: "!去留", response: "(′・ω・‵) 該考慮去留了" },
  { trigger: "!下班", response: "(′・ω・‵) 走ㄌ走ㄌ" },
  { trigger: "!震怒", response: "(′・ω・‵) 嘎喔" },

  { trigger: "!欺騙", response: "(′・ω・‵) 大家都被欺騙感情丁欺騙感情" },
  { trigger: "!爽丁", response: "欺騙感情丁：今天撿到免費炒麵，潮爽DER" },
  { trigger: "!破防", response: "(′ Q ω Q ‵)" },
  { trigger: "!尻尻", response: "尻尻：雅狗欠我狗爸摳" },
  { trigger: "!中", response: "噫！好了！我中了！" },
  { trigger: "!仲裁", response: "紅茶：你們都有罪" },
  { trigger: "!大貓", response: "(^・ω・^=)" },
  {
    trigger: "!爽尻",
    response: [
      "(′・ω・‵) 這個尻尻 我們不要了",
      "(′・ω・‵) 尻尻又在欺騙泡麵感情",
    ],
  },
  // === 圖片或GIF回覆 ===
  {
    trigger: "!可惡",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1466786535193186304/MG2EED1.jpg?ex=697e02e9&is=697cb169&hm=6fc4a34eb279f315685ba15f014feff0ce8324f66b169109c985d2838bab4dd2&",
  },
  {
    trigger: "!沒事",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1466786806589558827/c4jt321.png?ex=697e032a&is=697cb1aa&hm=f5b2737389e8afb08655ca0f445f4decc4f0092b5889c42e04547b6253c53178&",
  },
  {
    trigger: "!色圖",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1466789368323772620/478699FEFB7A72043F450EEFF9FA936D.jpg?ex=697e058d&is=697cb40d&hm=02581d0efab91f7db0906070a647388cec2a0d9f0915bf4b76667295a5a58522&",
  },
  {
    trigger: "!逮捕",
    response:
      "https://cdn.discordapp.com/attachments/1277494264309223508/1426804580879958128/image.png?ex=68ec8ed0&is=68eb3d50&hm=4200995c1a486bee89c6f7f52fc75280fda074a6716567da2df049509cbe38e1&",
  },
  {
    trigger: "!択捉愛",
    response:
      "https://cdn.discordapp.com/attachments/1285105364936818718/1425743402540204132/image.png",
  },
  {
    trigger: "!ㄐㄐ",
    response:
      "https://cdn.discordapp.com/attachments/1285105364936818718/1407004381089632266/image.png",
  },
  {
    trigger: "!又我",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425754000124547112/image.png?ex=68e8bc62&is=68e76ae2&hm=51ed46dd1b139395a218e622a788d47516730f9a4406b210713b17dcc21aa95f&",
  },
  {
    trigger: "!打",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425753718711779401/image.png?ex=68e8bc1f&is=68e76a9f&hm=d1c8a8a3c2d0ee3d86d604a66330343d23c407698b60b98d1b9765091ab85143&",
  },
  {
    trigger: "!拉拉",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425755083039182889/584548878.png?ex=68e8bd65&is=68e76be5&hm=5dd05c53bde05d8e2279fe504fb31e707bac0be9cde1ef280d7423cec89dd5cd&",
  },
  {
    trigger: "!賽亞狗",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1496054958552911984/image.png?ex=69e87d41&is=69e72bc1&hm=57ab0a605b70977b052179a26d712ce7b8d6dcf91309739e7336a89edeefd5a1&",
  },

  {
    trigger: "!等",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425761139236798504/4587877.png?ex=68e8c308&is=68e77188&hm=c713ec279b1d6effa48723ce476b05c698421b4efbc3e6280123134f98b0d18f&",
  },
  {
    trigger: "!口尼西",
    response:
      "https://cdn.discordapp.com/attachments/1100943106880319570/1285489857048870975/remix-7e799287-7dc3-4001-91f7-9e6f039d81ac.png?ex=68e8a9b9&is=68e75839&hm=2c68c479f47f319a998b8b05a147cd8c7eade5e95a8a9759e06ada3dbfdcef01&",
  },
  {
    trigger: "!舔",
    response: "https://i.meee.com.tw/xytGmPj.png",
  },

  {
    trigger: "!貓",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1430144616799273030/received_169364943980914.jpg?ex=68f95e37&is=68f80cb7&hm=52b79ec43fdaa04e1d3f70e8be04d052a57b7e1e0469cee2b8674b2ee6e230d1&",
  },
  {
    trigger: "!海防",
    response:
      "||https://cdn.discordapp.com/attachments/1425749836321390632/1430165546237689927/image.png?ex=68f971b5&is=68f82035&hm=92a8f11cfc1aa00797d76e93fd795b880994bf02158fd12c7d9a4885f5e2c811&||",
  },
  {
    trigger: "!擠奶",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425753981153443880/image.png?ex=68e8bc5e&is=68e76ade&hm=d195529fa0ca16c88c04f6fe0ad529483ee22fb0bf2296306c1fbb24ecdc105d&",
  },
  {
    trigger: "!北市",
    response:
      "https://cdn.discordapp.com/attachments/1282970244603842560/1437297336547016714/580911271_17866678686480087_5278668970508359902_n.png?ex=69140c74&is=6912baf4&hm=833ddf3075e24946a193005e0ec4ca26a733f6fe1fe289c2008ccc7dfbbfea46&",
  },
  {
    trigger: "!大雄",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1438370130156326912/75d415c1ba3f13ac62e4b14ad2ceeea3.png?ex=6916a212&is=69155092&hm=6a517bc13f278e35f73d351686ee773583f00d28f8a803a973ed70246b15672a&",
  },
  {
    trigger: "!騙",
    response: "https://i.imgur.com/vuOhKXB.jpg",
  },
  {
    trigger: "!偷臭",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1439870927822258176/image.png?ex=691c17cc&is=691ac64c&hm=e7ad2bc2a1e65dc04e0a59d2c965c38a1c75df3293b28ac51030c569edcc8928&",
  },
  { trigger: "!你婆", response: "https://i.imgur.com/YDzW7ZT.jpg" },
  {
    trigger: "!計算機",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1442056241382690816/image.png?ex=69240b08&is=6922b988&hm=45a8b53a4659ec74ab372b49d8e34a6d79c4f74250c56e1746136bbe866de07c&",
  },
  {
    trigger: "!最新科技",
    response:
      "https://cdn.discordapp.com/attachments/1100943106880319570/1443239579028164698/3f3acb34ca7bf5a2.jpg?ex=694602d9&is=6944b159&hm=fb6e1aac10088f2ebb3ddb807a7c6680c256e5cf602fe623b26951830adfa171&",
  },
  {
    trigger: "!如果",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1451188111504703498/image-2.png?ex=6945ec7f&is=69449aff&hm=71384c5944ff6d651b54d714702a17178fc8425eede57f87f9ea360eec0cac10&",]
  },
  {
    trigger: "!神",
    response: [
      "https://cdn.discordapp.com/attachments/1098447020433346671/1467138814345744619/image.png?ex=697f4aff&is=697df97f&hm=7d86de5ad7854e2f4288fb6eef2db56f980c1787435c09f3bc9678e7b7bc690a&",]
  },
  {
    trigger: "!RTA",
    response:
      "https://cdn.discordapp.com/attachments/1270969882502234172/1270971335191040011/1723093556227.gif?ex=68e8944b&is=68e742cb&hm=3bf7a6ab78b6e37775908afc6e2110a192456a8984ff901805d1fc712cc66a11&",
  },
  {
    trigger: "!sex",
    response: "https://imgur.com/QVt1K7Z",
  },
  {
    trigger: "!噴",
    response:
      "https://cdn.discordapp.com/emojis/674385925827985416.webp?size=96&animated=true",
  },
  {
    trigger: "!習慣",
    response:
      "https://cdn.discordapp.com/attachments/1098447020433346671/1301599894443659294/12_1.gif?ex=68e89a9d&is=68e7491d&hm=cc38f546d790939f815a4825356bcf08c5bc7dc79b1dac9c2d13e18b0309a716&",
  },
  {
    trigger: "!誰防空",
    response:
      "https://media.discordapp.net/attachments/768295038920687647/1094857710983462932/gifntext-gif.gif?ex=68e89ab3&is=68e74933&hm=efbba58009c8f7ec6d70997349470eb0d0045056da0101eb98084584a8061863&",
  },
  {
    trigger: "!奶茶",
    response:
      "https://tenor.com/view/milk-tea-pour-milk-tea-pot-teacup-gif-12488426",
  },
  {
    trigger: "!生快",
    response:
      "https://tenor.com/view/happy-birthday-hbd-long-gundam-suletta-gif-27082431",
  },

  {
    trigger: "!托馬",
    response:
      "https://media.discordapp.net/attachments/483550384133111808/840855410683936788/gz1je-5sf55.gif?ex=68eea6e0&is=68ed5560&hm=99043b841c3ab0e6aeeb253310b1af4cdf818f71cac97d56743b8ae8e2321e24&",
  },
  {
    trigger: "!黨旗",
    response:
      "https://cdn.discordapp.com/attachments/1271056903350255646/1271734977842778153/ezgif-6-1c5871195afe_1.gif?ex=68eea73e&is=68ed55be&hm=fc47c947c6a61a69a09a743c3744e13fae0ae85ffb33a5438b877e43c4d59b73&",
  },
  { trigger: "!贖", response: "https://imgur.com/DumSMmE" },
  { trigger: "!二口", response: "https://imgur.com/TX8FRcJ" },
  {
    trigger: "!一發入魂",
    response:
      "https://tenor.com/view/blushing-anime-girl-mad-blush-gif-14364941",
  },
  {
    trigger: "!共產",
    response:
      "https://tenor.com/view/soviet-union-propaganda-stalinium-gif-16289670004460099406",
  },
  {
    trigger: "!蛋雕",
    response:
      "https://tenor.com/view/the-greed-of-man-adam-cheng-big-era-%E5%A4%A7%E6%99%82%E4%BB%A3-%E4%B8%81%E8%9F%B9-gif-12906768",
  },
  {
    trigger: "!硬",
    response:
      "https://media.discordapp.net/attachments/595388025463242800/1051463019353346108/kyaru-eternal-pp.gif?ex=68f0307f&is=68eedeff&hm=82d3b3d72c86930a42cb4d7eef2ac6cbe18749e081d6d3f21cd48b0818ad1838&",
  },
  {
    trigger: "!超渡",
    response:
      "https://cdn.discordapp.com/attachments/477755023787556866/1292031733063221308/4dc1a4c67b76236c.gif?ex=68effb91&is=68eeaa11&hm=a7748e4552dbff9d13af87fbd7368d57923a51391b0be2d6f0fdc548ddd22de2&",
  },

  {
    trigger: "!艦隊",
    response:
      "https://media.discordapp.net/attachments/546653467498905620/755974836035256330/12.gif?ex=68f24f2e&is=68f0fdae&hm=fdcd051a7bbb9dc53420812de0d16088cc927d95b26dc123f2a8b9ae382ace43&",
  },
  {
    trigger: "!搬磚",
    response:
      "https://cdn.discordapp.com/attachments/511037041447010323/1366990728001224754/952eedea095fcf702f4a8e435c70ac26.gif?ex=68f1c253&is=68f070d3&hm=27d541fe9efb36460010484b601c45d75209c0e8fdbcf438b8dca68eccfee66f&",
  },

  {
    trigger: "!沒錯",
    response:
      "https://tenor.com/view/mujica-%E6%98%AF%E9%80%99%E6%A8%A3%E6%B2%92%E9%8C%AF-%E4%BD%86%E4%B8%8D%E6%98%AF%E9%80%99%E6%A8%A3-gif-1935154853878510452",
  },
  {
    trigger: "!上好美盤",
    response:
      "https://tenor.com/view/%E7%9B%A4%E5%AD%90-%E4%B8%8A%E5%A5%BD%E7%BE%8E%E7%9B%A4-%E6%B4%BE%E5%A4%A7%E6%98%9F-gif-15314856103226048504",
  },
  {
    trigger: "!胖",
    response:
      "https://cdn.discordapp.com/emojis/1115533369925713922.webp?size=160&animated=true",
  },
  { trigger: "!YOHO", response: "https://imgur.com/QhOzdko" },
  {
    trigger: "!窮醒",
    response:
      "https://cdn.discordapp.com/attachments/630382967759568919/1243041779796807680/IMG_3360.gif?ex=6902da5e&is=690188de&hm=126cdee1ec9d6207eb2b004cbf9e62ff57b7d4a44cb8fdc95b70f2a554746ae1&",
  },
  {
    trigger: "!富醒",
    response:
      "https://cdn.discordapp.com/attachments/1253714367518605312/1295662546736386089/1728980387594.gif?ex=69031fc7&is=6901ce47&hm=59a1ccccc92d2c3c1dbfc21c2ba601c7692d46c4dd716051efec00942b286402&",
  },
  {
    trigger: "!尻",
    response:
      "https://cdn.discordapp.com/attachments/519562295483826178/1248895330787917856/062043_b003addbaee9605697403051aed95fa5.gif?ex=6908fcaa&is=6907ab2a&hm=3d9511216be0bae5e899f249cf50ee84bbfc9fb3ba66b95a680c4eeac9776c53&",
  },
  {
    trigger: "!丁",
    response:
      "https://cdn.discordapp.com/attachments/1432190114859188275/1435097110121939025/1762224172024.gif?ex=690ab9d5&is=69096855&hm=cea3c077caf2d70419fa3c409a1f09810342d7e1c45a91123708894504e41ef3&",
  },
  {
    trigger: "!99",
    response:
      "https://tenor.com/view/falling-urso-bear-gif-11985320562084635255",
  },
  {
    trigger: "!咬",
    response:
      "https://tenor.com/view/minami-nanami-bottom-tier-character-tomozaki-kun-gif-25550981",
  },
  {
    trigger: "!出擊",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1442062100980568144/b5b93044251e50eb.gif?ex=69260abd&is=6924b93d&hm=53b0c90d13f49a40530aa93379fea100e93c85dc7834cb6a60a3d3053839fc1e&",
  },
  {
    trigger: "!變",
    response: [
      "https://media.discordapp.net/attachments/826121054086627388/919876520988782632/NCRMZRFB6SODLC.gif?ex=68eeba05&is=68ed6885&hm=960e19db825d853ae13cf3557fc2d91a0055204f1a38bbbe68059100e2c70bb0&",
      "https://tenor.com/view/minami-ke-makoto-mako-chan-cute-boy-anime-gif-2374678476686310041",
    ],
  },

  {
    trigger: "!摩卡",
    response: [
      "https://cdn.discordapp.com/attachments/1282970244603842560/1423208950102229014/2.png?ex=69123bdf&is=6910ea5f&hm=c8df9a1488429ae216393f5127c56c13f88e4ebda350bea0d74e51374bdaef47&",
      "https://cdn.discordapp.com/attachments/1098447020433346671/1422481432516886540/2.png?ex=68eea0d1&is=68ed4f51&hm=5f1a9f6b0b38179a35dce62bd1d0a438d62d438a3d1f9ee77eac36b14110ded3&",
      "https://cdn.discordapp.com/attachments/1282970244603842560/1427539889221795861/qXPGz8W.jpg?ex=68ef3b9f&is=68edea1f&hm=ec9209ff72bd1304cc5d527b5ab9bb6cd7082a666d90da98b7d62fea2d6596e7&",
    ],
  },
  {
    trigger: "!yago",
    response: [
      "https://cdn.discordapp.com/attachments/826121054086627388/1422846991880163408/7YPB9PKQN0WMYR2AD.gif?ex=68e8b506&is=68e76386&hm=a394445192e25f8eb0fcb00b70ece6a658e07bb9e1ff3ba2a797239da56e4624&",
      "https://media.discordapp.net/attachments/626370132557561906/1031390438428528640/246dd6ce71ddc7e9.gif?ex=68ee5b72&is=68ed09f2&hm=e611580d117524c4c3949bc687713f13293dd203022ce018523751b11d9289e6&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1430144200283783219/596292a3100d4bc3b5ab4e6b476dd623.png?ex=68f95dd4&is=68f80c54&hm=861fc2675f943daef322a0e2b173fb2a2d903f636c4873a49edebbe9acfbf147&",
    ],
  },
  {
    trigger: "!拔刀",
    response: [
      "https://tenor.com/view/cat-cat-meme-cat-angry-gif-1976276352290102621",
      "https://tenor.com/view/sheathing-the-sword-puff-meow-chef-that-little-puff-slicing-an-apple-gif-14446880999248387316",
    ],
  },

  {
    trigger: "!伊泉",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1440962872321638562/image.png?ex=692010c0&is=691ebf40&hm=dde10011f0967e5e6a3c019d9d6e72e1115958ef99fedea4bf3241d4613eb462&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425753908923469855/image.png?ex=68e8bc4d&is=68e76acd&hm=62050bac2d984456e6bc34aa91b04af0fb56970ee82a0ce05f308f85b44cd83c&",
    ],
  },
  {
    trigger: "!紅茶",
    response: [
      "https://tenor.com/view/coffee-hyouka-cosmo-clip-tea-gif-14703529",
      "https://tenor.com/view/l-putting-sugar-sugar-cup-tea-gif-16229647993365934322",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425753512846819380/20230831_163039.JPG?ex=68e8bbee&is=68e76a6e&hm=d02e19a4a9274847e0ae36c7f24042dcc64fa3c1da1037d464ccee868f10c6f9&",
      "https://tenor.com/view/anime-coffee-sugar-gif-15463484",
      "https://tenor.com/view/pandb-blacktea-gif-20279745",
    ],
  },
  {
    trigger: "!處刑",
    response: [
      "https://cdn.discordapp.com/attachments/1098447020433346671/1344639588035199066/de.gif?ex=68e84bf3&is=68e6fa73&hm=58a782a11ab3f82f73b4d71c64d332ac04aad7ea55ef5bbd8b8155747919be2a&",
      "https://i.imgur.com/ZUVds0O.mp4",
    ],
  },
  {
    trigger: "!海鮮",
    response: [
      //禁止禁止
      "https://media.discordapp.net/attachments/1425749836321390632/1425761139962286140/1689237310961.png?ex=68e8c309&is=68e77189&hm=51df9e9ee99ff536d47ce93079b133445bdd715f6ec3c0098db4287ec8a9085f&=&format=webp&quality=lossless",
      //不知道
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425761140612272138/3G.png?ex=68e8c309&is=68e77189&hm=1ced779d6b5fc1f927dbbc3e54f1c8b24861fbbc8141c266b577d850ac0aff1c&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1433309802817392660/image.png?ex=6904e206&is=69039086&hm=5c0a091f865ca889316b1d335f0fd8ca91473b0b47219cca75eb2173959aa944&",
      //抽不到
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425761141237481524/1154878787.png?ex=68e8c309&is=68e77189&hm=8404c0a715a1b2e651734d4264f5d31d424948231b621b8c5a9c6c28ae691201&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1430423779959504946/Gn6_wdAb0AAgfez.jpg?ex=68f9b975&is=68f867f5&hm=66341c6e9d9f3c4f31fe60a4b0877c03a659109295b4f28dc69aef1483ac0385&",
    ],
  },
  {
    trigger: "!mry",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425761139622416414/54847777.png?ex=68e8c309&is=68e77189&hm=4cd3c8980ce430c71aa29920684e87e93e327a55091b4dc7615f71d1675025ee&",
      "https://cdn.discordapp.com/attachments/1098447020433346671/1302339360628150292/55667788_1.gif?ex=68e8a84b&is=68e756cb&hm=af1261f52b99aafb61050bbac6df8021a6098687cf2d8cf9ed1432bc2c402769&",
    ],
  },
  {
    trigger: "!土下座",
    response: [
      "https://cdn.discordapp.com/attachments/723087012319723521/982719452992917505/B19275F2-6F4F-4D7C-A0DC-EAF4D231CC6E-3618-00001EAC7669FB17.gif?ex=68efee4f&is=68ee9ccf&hm=aa230c7311e2a6c3c8d49feaafdd0098d11e1fbf927f86877e699ad4428786c5&",
      "https://tenor.com/view/break-dance-kneel-gif-25018583",
    ],
  },
  {
    trigger: "!moga",
    response: [
      "https://cdn.discordapp.com/attachments/1100943106880319570/1339615817398091927/87878787877.png?ex=68ec6eb3&is=68eb1d33&hm=109a4e690c2e2deef0481adc7a92c911e8c1accf956adf7c16edc2bce52c0a47&",
      "https://cdn.discordapp.com/attachments/1285105364936818718/1424662481808130100/5acb04d78445a0e7.jpg?ex=68eff894&is=68eea714&hm=e178418f2938198213b8064867a49320ba547768b67b752d87d7b87916b214ac&",
    ],
  },
  {
    trigger: "!修仙",
    response: [
      "(′・ω・‵) 等他上元嬰才能大殺四方 現在才剛結丹",
      "(′・ω・‵) 元嬰之下皆螻蟻 我只剩下築基",
    ],
  },
  {
    trigger: "!加爆",
    response: [
      "https://imgur.com/TJleTHe",
      "https://cdn.discordapp.com/attachments/996977347997728829/1169641903629803641/-4ada3Qk03-4deyXtZ7zT1kS5c-6o.gif?ex=68f25068&is=68f0fee8&hm=f342df20c8d9cfd8e9f5dd7bfae5501883748a60986ad63570d8f14e2e020b78&",
    ],
  },
  {
    trigger: "!狗",
    response: [
      "https://cdn.discordapp.com/attachments/1367676124066353162/1395395220748763188/IMG_6628.gif?ex=68ee4e91&is=68ecfd11&hm=abfd2df86fe5e53cb0a59915c7852f5cabb360b84e1a3e60809b68e28175f43e&",
      "https://cdn.discordapp.com/attachments/433810018014330918/1272588854016217118/nalilaidegou.gif?ex=68f26b3a&is=68f119ba&hm=67293426ba9e1fe3ce91dd8bd230197f5ec2ef6ef7f1be2b255fc1057d01047e&",
    ],
  },
  {
    trigger: "!歐洲",
    response: [
      "https://media.discordapp.net/attachments/541949615755362318/1092090492969287690/2a0df7373688762f.gif?ex=68f2f8c7&is=68f1a747&hm=5efce41ab7e6f8b3fa403a6d35f242f5f6823eda3bf1043d5b7ccf5e3f4d6f74&",
      "https://cdn.discordapp.com/attachments/1143066720668504158/1333320656091086888/71BF2559-F0D2-4CDE-ADBC-3813BB4A6114.gif?ex=68f288e0&is=68f13760&hm=75572a7955a3439c768bce55dd5dbb0ab37cf0d52fba638a9cc9528b1c54dc1d&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1443148489365393438/image.png?ex=69280444&is=6926b2c4&hm=176390a8a6f05939c053b37671d10524587a0d6c35c7693037bc71237350bf8c&",
    ],
  },
  {
    trigger: "!戰果",
    response: [
      "https://imgur.com/X94A2DK",
      "https://cdn.discordapp.com/attachments/768295038920687647/1411624860211351572/1756627976377.gif?ex=68f89219&is=68f74099&hm=fc88553f2fb43a442a97e1e3e995e6c0402a3275105bac13f438e70f04eb4e09&",
    ],
  },
  {
    trigger: "!瑪莉",
    response: [
      "https://tenor.com/view/blue-archive-mari-cat-gun-desert-eagle-gif-14073655309770333588",
      "https://cdn.discordapp.com/attachments/1247779126048456704/1270922702764642344/horuhara-1819564655796473872-ezgif.com-video-to-gif-converter.gif?ex=68f83900&is=68f6e780&hm=6b0a2c218501f5fb68fbca2f21c911ac59f83cd25cec4a9581c2c89059d7a84b&",
      //跳舞
      "https://imgur.com/NBoUxoZ",
    ],
  },
  {
    trigger: "!神風",
    response: [
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Kamikaze_WW2_USN.gif",
      "https://na.cx/i/fBv7A6b.gif",
      "https://tenor.com/view/plane-crash-gif-9073361",
      "https://i.makeagif.com/media/10-20-2022/ZssKyl.gif",
    ],
  },
  {
    trigger: "!審議",
    response: [
      "https://media.discordapp.net/attachments/1425749836321390632/1430432024744951889/87cde473.jpg?ex=68f9c122&is=68f86fa2&hm=2d6ee42805f68744c738773471ac885e827a512dc60d4be27ccc2ea378ffe45e&=&format=webp",
      "https://media.discordapp.net/attachments/1425749836321390632/1430432025055068230/e9f1a611.jpg?ex=68f9c122&is=68f86fa2&hm=d0a2f9302704fd8ac1d4ea6a3c3429171a228e33b8851cdb4987f91b7fb600ff&=&format=webp",
      "https://media.discordapp.net/attachments/1425749836321390632/1430432025587748974/c5f86122.jpg?ex=68f9c123&is=68f86fa3&hm=2ad7e752c21d0478843474e8b016cd1aa528b8292f56d767a27f56a25386b79f&=&format=webp",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1430433061060739133/540993925_24553688677606320_4173214684982277541.png?ex=68f9c219&is=68f87099&hm=ee864869460dba31988a0ba136b4866dc3db57e16689926216571d104a84eb74&",
    ],
  },
  {
    trigger: "!噁心",
    response: [
      "https://media.discordapp.net/attachments/1155759582178713711/1207217713080967209/IMG_0988.png?ex=6902625b&is=690110db&hm=f75aafccae1dc19c69d789728ac01a6ab46389cc2e157a6b7489020be4ac5750&",
      "https://media.discordapp.net/attachments/1155759582178713711/1208057920655335454/9dac78f8d72a60593c7d51236e34349b033bba3b.jpg?ex=6902251c&is=6900d39c&hm=e48047541bd24f7cfd6dab744f3ec421a448836ddaf6bfe1cdc0ca974315a86c&",
      "https://media.discordapp.net/attachments/1155766946567041065/1200625953479606272/112851830_p0.png?ex=6902224d&is=6900d0cd&hm=1cdab21e91991ef8062908fad07752e6a40dcac4aed9572cade169e15ed9160d&",
    ],
  },
  {
    trigger: "!媽",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1432971407347679273/image.png?ex=6902fe1e&is=6901ac9e&hm=4f1983362cf7e2d7edac91399ebbcc9dd72bfbcb407a1fb300c683df4b3d7ce5&",
      "https://cdn.discordapp.com/attachments/1287367567199174687/1295611099265110018/02.gif?ex=6902efdd&is=69019e5d&hm=6e519b7af30fccaf0b177dabc8ac62eace3f9feb6a2cfd901f6bc733620c1784&",
    ],
  },
  {
    trigger: "!邪教",
    response: [
      "https://cdn.discordapp.com/attachments/1277494264309223508/1430065267936858122/image.png?ex=68f86b91&is=68f71a11&hm=ba5db2486f9e6e04937601d9c9be36ca7f414c456d20afe9a1751565ea22f0cc&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1433619727615393873/image.png?ex=690559ea&is=6904086a&hm=bd9b5934f4a3cf82465a5e6c31eb7f3f9b636c0dca392b995bba920b321f8c4c&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1433620040158286055/image.png?ex=69055a34&is=690408b4&hm=42ec0a1de622abe977029585675707b46bf4898594d4826282a60e142df8bada&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1433636938941730920/image.png?ex=690569f1&is=69041871&hm=a86c0b886788459eeb27b5b0ac0f43ab10ff7d57a999046d53bcb0af9c29dd08&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1443880373321859174/0218633493c48cae.png?ex=692aade3&is=69295c63&hm=26271b1d3a26e09b15dda2579c002855a800952c06599d2b530b5419256d29a1&",
    ],
  },
  {
    trigger: "!娚",
    response: [
      "https://tenor.com/view/saika-totsuka-smile-pretty-cute-gif-16915760",
      "https://tenor.com/view/steins-gate-gif-21955651",
      "https://tenor.com/view/makoto-maid-gif-9820173484873624883",
      "https://tenor.com/view/akiyama-mizuki-project-sekai-%E4%B8%96%E7%95%8C%E8%A8%88%E7%95%AB%E7%B9%BD%E7%B4%9B%E8%88%9E%E5%8F%B0-%E6%9B%89%E5%B1%B1%E7%91%9E%E5%B8%8C-gif-26997684",
      "https://tenor.com/view/made-in-abyss-marulk-rolling-hit-the-wall-head-hurty-gif-27258378",
      "https://tenor.com/view/zombieland-saga-zombie-land-saga-zls-%E3%82%BE%E3%83%B3%E3%83%93%E3%83%A9%E3%83%B3%E3%83%89%E3%82%B5%E3%82%AC-lily-hoshikawa-gif-14080511087656013620",
      "https://tenor.com/view/felix-argyle-felix-anime-trap-cute-gif-18705618",
      "https://tenor.com/view/anime-girl-yofukashi-no-uta-smile-no-gif-4528623332498788300",
      "https://tenor.com/view/akira-kemono-jihen-kemono-jihen-gif-23037633",
      "https://tenor.com/view/hideri-kanzaki-blend-s-poss-anime-trap-gif-10374457",
      "https://tenor.com/view/astolfo-gif-23045570",
      "https://tenor.com/view/amane-himeno-amane-himeno-my-dress-up-darling-dress-up-darling-gif-5601713552061636913",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1442534456077582417/MEPxitb8bCKserIpogSU17b5bUJywzG8jgStSpi4IXY5HceSvgAzq.png?ex=6925c867&is=692476e7&hm=2e702ef7c91178e41fced96ac4d345d02ceb1db1413d825ea40cf2c93e0c7dc2&",
      "https://tenor.com/view/cosmic-princess-kaguya-cpk-anime-cat-girl-cat-boy-gif-15943226109360371688"
    ],
  },
  {
    trigger: "!相信",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1425761140922781707/1723450414495-1.webp?ex=68e8c309&is=68e77189&hm=3e1edb4d1772b423d42078412a47e78952d6ed34689103aff6688a0efc70d3c1&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1442102653722038323/image.png?ex=69263081&is=6924df01&hm=5d3d9e1113d513b77fd9a44d21cf075dacf985b624f9613c523dbb61004f66c1&",
    ],
  },
  {
    trigger: "!100分",
    response: [
      "https://cdn.discordapp.com/attachments/665917958458966039/1460611570689118289/kkn_blue221206_1.gif?ex=6972c0c7&is=69716f47&hm=d367d58e7bab2baeb02227f75a55b001d9b6d984fb8a3ece33473717b8995b29&",
      "https://cdn.discordapp.com/attachments/665917958458966039/1459811623488454791/ezgif-49659416c99d3abf.gif?ex=69727ac5&is=69712945&hm=e812894f2fc3f0b36d79cde04da5624068f1cab1b1572f817ebd5d3a8bb1103d&",
    ],
  },
  {
    trigger: "!不努力",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1471686792422887526/627899484_891183790322205_3570054276524793306_n.png?ex=69a8e321&is=69a791a1&hm=46a472cb88ca79df0ed6371826b98901c934e3c763e77ac979427b0b9569fe63&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1471685966434533446/FB_IMG_1723879197971.png?ex=69a8e25d&is=69a790dd&hm=4553180ba26583a74ad79c8f69554912184d76887a815b7312ef0d89d707c6c0&"
    ]
  },
  {
    trigger: "!買嗎",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1480456203409821846/images.png?ex=69b06688&is=69af1508&hm=7c9cff32258e6b8c3328475c28a6dc296bcd02f7963e930081de9f1ef41447c4&",
      "https://cdn.discordapp.com/attachments/1425749836321390632/1480456474265260082/1687081113029.png?ex=69b066c9&is=69af1549&hm=041cd33642bd1a104dd9b9af4473b59cd8dbaa164636780970eb49d0771eab15&",
      "https://cdn.discordapp.com/attachments/1282970244603842560/1488369072293806181/image.png?ex=69e04db7&is=69defc37&hm=87fb6191842e23e0fa9b2ac57654c15fef889304c272e99dd6a8c18a155e70c2&",
      "https://cdn.discordapp.com/attachments/740908504096833548/1299069343207915613/5f32e646b66ab576.gif?ex=69f3981a&is=69f2469a&hm=4e32288041b467aea28b7487dba592bd47f3290a716f40996c06a02b95043f3e&"
    ]
  },
  {
    trigger: "!老八",
    response:
      ["https://tenor.com/view/too-many-losing-heroines-anna-anna-yanami-make-heroine-makeinu-gif-16029912094377254568"

      ]
  },
  {
    trigger: "!露露卡",
    response: [
      "https://tenor.com/view/luluka-moria-luluka-luluka-dance-%E6%A3%AE%E4%BA%9C%E3%82%8B%E3%82%8B%E3%81%8B-%E3%82%8B%E3%82%8B%E3%81%8B-gif-8289150157306944836",
      "https://media.discordapp.net/attachments/1313294989752668230/1468773509802098688/prkr.gif?width=840&height=473&ex=69cf116d&is=69cdbfed&hm=2483dbb516d2ca8cbf0450b98a4be94629ab80ee610781362711e38c6c7a4991&",
      "https://imgur.com/IZ90z1n",
      "https://cdn.discordapp.com/attachments/1282970244603842560/1493821609394307082/GqkWiYxGG6JoLT00-ezgif.com-video-to-gif-converter.gif?ex=69e05d49&is=69df0bc9&hm=61c03b3eed5e44c8b87b43500a02abf4f546d6c0d5257ddb9eb3195cce254368&"
    ]
  },
  {
    trigger: "!洛西",
    response: [
      "https://cdn.discordapp.com/attachments/1021031004238008380/1477924101963382825/IMG_8581.gif?ex=69cebd54&is=69cd6bd4&hm=559f524638340f9763d9956f12e6b27a2e5a41d21c6a33c551258f3a86454490&"
    ]
  },
  {
    trigger: "!小雞",
    response: [
      "https://media.tenor.com/dJl050ZdO5sAAAAC/%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%96-hololive.gif",
      "https://cdn.discordapp.com/attachments/826121054086627388/1411909015645978665/1411829549972590705-ConvertToGIF0.gif?ex=69ce84fd&is=69cd337d&hm=f895524fce3418a1dc10975c418be1cb8a11b23958d50490fb68a51fc5cc7b83&",
      "https://media.discordapp.net/attachments/950412894548414537/1358397133404766299/GnzSZ7YacAAupq-.gif?width=525&height=525&ex=69cef62a&is=69cda4aa&hm=4246c291f4ed890c39ddfe86afba0b9c8979a04759a6dc9fcb8d8cf7eeb4d8c6&",
      "https://tenor.com/c0mjrPM4A9Q.gif",
      "https://imgur.com/z9WdpGz"
    ]
  },
  {
    trigger: "!又大和",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1494902408214614016/1776482731955.png?ex=69e44bdc&is=69e2fa5c&hm=fbc5063bfb8eec5d41ab44639ac991b1e184f29d90d9282880b682b9a9ee16a3&"
    ]
  },
  {
    trigger: "!發瘋",
    response: [
      "https://cdn.discordapp.com/attachments/1425749836321390632/1496689950169628672/1776908927702.png?ex=69eb7563&is=69ea23e3&hm=efcd09a083dee6632aba6a335d256a5286a6a3d45601f66f5beb9985e4995600&"
    ]
  },
  {
    trigger: "!貧窮",
    response: [
      "https://cdn.discordapp.com/attachments/1351725841951887370/1481981360305602710/gifntext-gif_3.gif?ex=69f3e972&is=69f297f2&hm=23d1f21eeec560258a2b5d0fab806fc734a67fedb84aeaa7744e5b16b18a257a&"
    ]
  },
  //影片
  {
    trigger: "!你說什麼",
    response:
      "https://cdn.discordapp.com/attachments/1425749836321390632/1428653111081439275/ScreenRecording_10-17-2025_15-53-56_1.mov?ex=68f7e5a4&is=68f69424&hm=40ec97d88a4353927015864268636f99c568905cea5c0837d05774d28faa4941&",
  },
  {
    trigger: "!找找",
    response:
      "https://cdn.discordapp.com/attachments/1143066720668504158/1426633363090833408/FDownloader.Net_AQM-RgwU7aoOekH1i3uuqQ6G6KPEbGo1j_X7JR5MsGX3xYQsa75spBBMZzKxTR5MYZ0kzZGJLP1gTUT4_bWG1nC726DBdQsq8x1yaY8VO1F6jg_720p_HD.mp4?ex=68f8759b&is=68f7241b&hm=0d3b8d73c85e2e71d37ccbd492c6867ab37b75022cd48725671def4b17986fe0&",
  },
];
