# 🛡️ Guardrails — Odin Foundations → Project Mapping  

This file ensures that every feature in the **Research Output Repository** project directly applies concepts from **The Odin Project (Foundations)**.  

---

## 1. Introduction  
- Lesson: *How This Course Will Work*  
- Application: Define `PROJECT_RULES.md` and this `GUARDRAILS.md` to lock guardrails.  

---

## 2. Git Basics  
- Lesson: *Git Basics, GitHub, Working with Remotes*  
- Application:  
  - Use `git init`, `git add`, `git commit`, `git push` for all progress.  
  - Commit messages must be small and descriptive (e.g., `add upload form`).  

---

## 3. HTML Foundations  
- Lesson: *Elements and Structure, Lists, Links and Images, Forms*  
- Application:  
  - `index.html` → Homepage structure.  
  - `upload.html` → Form to upload research (title, author, PDF).  
  - `research.html` → Detail page for a single research entry.  
  - Use semantic tags: `<header>`, `<main>`, `<footer>`.  

---

## 4. CSS Foundations  
- Lesson: *Selectors, Box Model, Flexbox Basics*  
- Application:  
  - `css/style.css` → Styling for homepage, upload page, research page.  
  - Apply flexbox for layout (list of research outputs).  
  - Keep styles modular and simple.  

---

## 5. JavaScript Basics  
- Lesson: *Variables, Functions, Conditionals, Loops, DOM Manipulation*  
- Application:  
  - `js/main.js` →  
    - Handle dynamic list rendering (show uploaded research).  
    - Add simple interactivity (alerts, basic validation).  
  - Use DOM methods (`querySelector`, `appendChild`).  

---

## 6. Developer Tools  
- Lesson: *Inspecting HTML/CSS/JS with DevTools*  
- Application:  
  - Use Chrome/Firefox DevTools for debugging CSS layout and JS logic.  

---

## 7. Intermediate JavaScript  
- Lesson: *Objects, Arrays, ES6+ Syntax*  
- Application:  
  - Store uploaded research metadata in an array of objects (Phase 1 demo).  
  - Example:  
    ```js
    let research = [{ title: "AI in Education", author: "Rajeev", file: "ai.pdf" }];
    ```  

---

## 8. Ruby on Rails (Phase 2)  
- Lesson: *Intro to Rails (beyond Foundations but included in project goal)*  
- Application:  
  - Use Rails to manage research as a model (`Research`).  
  - Store metadata in DB (ActiveRecord).  
  - Store PDFs via Active Storage.  

---

## 9. Deployment (Final Phase)  
- Lesson: *Introduction to Deployment*  
- Application:  
  - Deploy MVP using Render / Railway / Heroku.  
  - Ensure repo is clean before deployment.  

---

## ✅ Bottom Line  
Every feature must trace back to an **Odin Foundations lesson**. If something isn’t covered in Odin, it should be marked as **Phase 2+** and only added after MVP is complete.  
