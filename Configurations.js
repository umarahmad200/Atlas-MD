require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "923052362330";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://umarnewid1:Um_030300@cluster0.mrzz9sr.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Umar Bot`;
global.author = process.env.AUTHOR || "by: Umar Ahmad";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "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";
global.owner = gg.split(",");

module.exports = {
  mongodb: global.mongodb,
};
