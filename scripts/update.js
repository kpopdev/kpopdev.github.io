const fs = require("fs");

const dnsList = fs
  .readFileSync("dns.txt", "utf8")
  .split("\n")
  .map(ip => ip.trim())
  .filter(Boolean);

const uniqueDns = [...new Set(dnsList)];

const data = {
  last_updated: new Date().toLocaleDateString("fa-IR"),
  dns: uniqueDns
};

fs.writeFileSync(
  "dns-list.json",
  JSON.stringify(data, null, 2)
);

console.log("dns-list.json created!");
