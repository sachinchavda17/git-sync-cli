# Git Sync CLI

A simple CLI tool to pull specific files from a commit or branch without switching branches.

---

## 🚀 Features

* Pull files from a commit
* Pull same files from another branch
* No branch switching required
* Useful for PR-based workflows

---

## 📦 Install

### Option 1 (Recommended - no sudo)

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

---

### Option 2 (Global install)

```bash
git clone https://github.com/sachinchavda17/git-sync-cli.git
cd git-sync-cli
chmod +x git-sync
sudo mv git-sync /usr/local/bin/
```

---

## ⚙️ Usage

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

  * commit (default)
  * or specified branch
* Applies changes to your current branch

---

## ⚠️ Notes

* This overwrites files
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
