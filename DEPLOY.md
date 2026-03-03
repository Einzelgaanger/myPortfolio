# Deploy to new GitHub repo + new Render site

Follow these steps so your portfolio runs on a **new** repo and a **new** Render Web Service (no cache or old deploy).

---

## Step 1: Create a new repo on GitHub

1. Go to **https://github.com/new**
2. **Repository name:** e.g. `alfred-portfolio` or `mralfred-website`
3. **Public**, leave "Add a README" **unchecked** (you already have code).
4. Click **Create repository**.
5. **Do not** run "git init" or "push an existing repository" in the browser yet — we'll do it from your machine.

---

## Step 2: Push this project to the new repo

In a terminal, from this project folder:

```powershell
cd "c:\Users\Admin\Downloads\AlfredPersonalWebsite"

# Add the new repo as a remote (replace YOUR_USERNAME and NEW_REPO_NAME with yours)
git remote add neworigin https://github.com/YOUR_USERNAME/NEW_REPO_NAME.git

# Push main to the new remote
git push -u neworigin main
```

Example if your new repo is `https://github.com/Einzelgaanger/alfred-portfolio`:

```powershell
git remote add neworigin https://github.com/Einzelgaanger/alfred-portfolio.git
git push -u neworigin main
```

---

## Step 3: Create a new Web Service on Render

1. Go to **https://dashboard.render.com**
2. Click **New +** → **Web Service**
3. **Connect a repository:** connect your **GitHub** account if needed, then select the **new repo** you just pushed (e.g. `alfred-portfolio`).
4. Use these settings:

   | Field | Value |
   |--------|--------|
   | **Name** | `alfred-portfolio` (or any name) |
   | **Region** | Choose closest to you |
   | **Branch** | `main` |
   | **Runtime** | `Node` |
   | **Build Command** | `npm install && npm run build` |
   | **Start Command** | `npm start` |
   | **Instance Type** | Free (or paid if you prefer) |

5. Click **Create Web Service**.
6. Wait for the first deploy to finish (Build → Start). When it’s **Live**, your site URL will be like `https://alfred-portfolio-xxxx.onrender.com`.

---

## Step 4: Check that the new site is live

1. Open the URL Render gives you (e.g. `https://alfred-portfolio-xxxx.onrender.com`).
2. Scroll to the bottom: you should see **Build: build-XXXXXXXXXX** (a new number each deploy).
3. If you see the new theme, CV content, and RSO / Bank of Ghana projects, the new repo and new Render service are working.

---

## Optional: Use your own subdomain

- In Render: **Settings** → **Custom Domain** → add `mralfred.onrender.com` or your own domain and follow the DNS instructions.

---

## If the build fails on Render

- Open the **Logs** tab for the service and check the error.
- Typical fixes:
  - **Build command:** must be exactly `npm install && npm run build`
  - **Start command:** must be exactly `npm start`
  - **Node version:** Render usually picks a recent Node 18+. If you need a specific version, add a `.node-version` file with e.g. `20` in the repo root.

After this, every push to `main` on the **new** repo will trigger a new deploy on this **new** Web Service, and the Build ID in the footer will update each time.
