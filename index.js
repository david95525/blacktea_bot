require("dotenv").config();
const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
const commands = require("./commands.js"); // 指令清單

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}!`);
});

// === 冷卻設定 ===
const cooldowns = new Map();
const COOLDOWN_TIME = 2000; // 毫秒

function checkCooldown(userId, command) {
  const key = `${userId}_${command}`;
  const now = Date.now();
  const last = cooldowns.get(key) || 0;

  if (now - last < COOLDOWN_TIME) {
    const remain = ((COOLDOWN_TIME - (now - last)) / 1000).toFixed(1);
    return remain;
  }
  cooldowns.set(key, now);
  return 0;
}

// === 處理訊息 ===
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const content = message.content.trim();

  // === !list 指令 ===
  if (content === "!list") {
    const embed = new EmbedBuilder()
      .setTitle("📜 可用指令")
      .setDescription(commands.map((c) => c.trigger).join("\n"))
      .setColor(0x00ae86);
    message.channel.send({ embeds: [embed] });
    return;
  }

  // === 其他指令 ===
  const cmd = commands.find((c) => c.trigger === content);
  if (!cmd) return;

  const remaining = checkCooldown(message.author.id, content);
  if (remaining > 0) {
    message.reply(`⏳ 冷卻中，請再等 ${remaining} 秒！`);
    return;
  }

  // 判斷 response 類型
  if (Array.isArray(cmd.response)) {
    // 隨機選一張
    const randomIndex = Math.floor(Math.random() * cmd.response.length);
    const randomResponse = cmd.response[randomIndex];
    message.channel.send(randomResponse);
  } else {
    // 單張圖片或文字
    message.channel.send(cmd.response);
  }
});
