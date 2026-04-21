# Git Sync CLI

A simple CLI tool to pull specific files from a commit or branch without switching branches.

---

## 🚀 Features

* Pull files from a commit
* Pull same files from another branch
* No branch switching required
* Useful for PR-based workflows
* Available as an **npm package** (Node.js) **or** a **standalone bash script**

---

## 📦 Install

You can install `git-sync` in two ways — pick whichever fits your environment.

### ✅ Method 1: Install via npm (Recommended)

Install globally from the source using npm:

```bash
git clone https://github.com/sachinchavda17/git-sync-cli.git
cd git-sync-cli
npm install -g .
```

This registers the `git-sync` command globally using the Node.js entry point defined in `package.json` (`bin/git-sync.js`).

Verify the install:

```bash
git-sync --help
```

> Requires Node.js (v14+ recommended).

---

### 🧰 Method 2: Install the bash script (Legacy / No Node.js)

Use this if you don't have Node.js or prefer a plain shell script.

#### Option A — User-local install (no sudo)

```bash
git clone https://github.com/sachinchavda17/git-sync-cli.git
cd git-sync-cli
chmod +x git-sync
mkdir -p ~/bin
mv git-sync ~/bin/
```

Add this to your shell config (`~/.bashrc` or `~/.zshrc`):

```bash
export PATH="$HOME/bin:$PATH"
```

Then reload:

```bash
source ~/.bashrc
```

#### Option B — Global install

```bash
git clone https://github.com/sachinchavda17/git-sync-cli.git
cd git-sync-cli
chmod +x git-sync
sudo mv git-sync /usr/local/bin/
```

---

## ⚙️ Usage

Both methods expose the same command and arguments:

```bash
git-sync <commit-id> [source-branch]
```

---

## ✅ Examples

### 1. Pull files from a commit

```bash
git-sync 9f6ac62
```

### 2. Pull same files from a branch

```bash
git-sync 9f6ac62 pre-production
```

---

## 🧠 How it works

* Reads file list from the given commit
* Pulls file content from:

  * the commit (default), or
  * the specified branch
* Applies changes to your current branch and stages them

---

## ⚠️ Notes

* This overwrites files in your working tree
* Does not create merge commits
* Make sure to commit your changes after running

---

## 🛠 Future Improvements

* Dry run mode
* Interactive file selection
* PR URL support

---

## 👨‍💻 Author

Sachin Chavda
