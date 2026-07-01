#!/usr/bin/env node

const { execSync } = require("child_process");

const args = process.argv.slice(2);
const COMMIT_ID = args[0];
const SOURCE_BRANCH = args[1];

function run(cmd) {
  try {
    return execSync(cmd, { stdio: "pipe" }).toString().trim();
  } catch (e) {
    return null;
  }
}

console.log("----------------------------------------");
console.log("        Git Sync CLI        ");
console.log("----------------------------------------");

if (!COMMIT_ID) {
  console.error("Error: Missing commit ID");
  console.error("Usage: git-sync <commit-id> [branch]");
  process.exit(1);
}

const currentBranch = run("git branch --show-current");
console.log(`Current branch: ${currentBranch}`);

// Validate commit
if (!run(`git cat-file -e ${COMMIT_ID}^{commit}`)) {
  console.log(`Invalid commit: ${COMMIT_ID}`);
  process.exit(1);
}

// Fetch latest
console.log("Fetching latest...");
run("git fetch origin");

// Validate branch if provided
if (SOURCE_BRANCH) {
  if (!run(`git rev-parse --verify origin/${SOURCE_BRANCH}`)) {
    console.log(`Branch not found: ${SOURCE_BRANCH}`);
    process.exit(1);
  }
  console.log(`Code source: branch → ${SOURCE_BRANCH}`);
} else {
  console.log(`Code source: commit → ${COMMIT_ID}`);
}

// Get files
const filesOutput = run(`git show --name-only --pretty="" ${COMMIT_ID}`);

if (!filesOutput) {
  console.warn("No files found");
  process.exit(0);
}

const files = filesOutput.split("\n").filter(Boolean);

console.log("----------------------------------------");
console.log("            Processing files            ");
console.log("----------------------------------------");

files.forEach((file, index) => {
  console.log(`${index + 1} - ${file}`);

  if (SOURCE_BRANCH) {
    run(`git checkout origin/${SOURCE_BRANCH} -- "${file}"`);
  } else {
    run(`git checkout ${COMMIT_ID} -- "${file}"`);
  }
});

// Stage
console.log("----------------------------------------");
console.log("           Staging changes            ");
run("git add .");

console.log("----------------------------------------");
console.log("                Done!                   ");
console.log("----------------------------------------");
