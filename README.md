# Juwenanlia Wrocław Razem

**The official website**

![Homepage](https://i.imgur.com/69i20kk.jpeg)

## 🇵🇱

#### Witamy w repozytorium oficjalnej strony internetowej Juwenaliów #wrocławrazem!

Aplikacja jest owocem współpracy członków Koła Naukowego Solvro oraz Samorządu Studenckiego Politechniki Wrocławskiej. Stanowi oficjalny kanał komunikacji pomiędzy organizatorami wydarzenia oraz jego uczestnikami. Jej celem jest szybkie i wygodne dostarczenie wszelkich niezbędnych informacji dla imprezowiczów - bez potrzeby przeszukiwania social mediów. Harmonogram, mapa, artyści - wszystko w jednym miejscu! Co więcej, dzięki integracji z profilem na Facebooku organizatora, aplikacja zapewnia, że wszyscy uczestnicy zawsze będą na bieżąco ze wszystkim, co dzieje się wokół Juwenaliów.

## 🇬🇧

#### Welcome to the repository of the Juwenalia #wrocławrazem official website!

The app is the result of collaboration between the members of Solvro Science Club and Student's Union of Wrocław University of Science and Technology. It serves as the official communication channel between the event organizers and its participants. Its main goal is to quickly and conveniently provide all the essential information for festival goers - without the need to search through social media. Event schedule, map, artists - all that in one place! What's more, thanks to integration with the organizer's Facebook account, we ensure that You will always stay up-to-date!

## Our team

- [@JanGolenski](https://github.com/JanGolenski) - Project Manager
- [@Octopus4344](https://github.com/Octopus4344) - Frontend Techlead
- [@Adriskk](https://github.com/Adriskk) - UI/UX Designer, Frontend Developer
- [@basia2137](https://github.com/basia2137) - UI/UX Designer
- [@kguzek](https://github.com/kguzek) - Frontend Developer
- [@jedryczkatymon](https://github.com/jedryczkatymon) - Frontend Developer
- [@GTR1701](https://github.com/GTR1701) - Frontend Developer
- [@zeolsem](https://github.com/zeolsem) - Frontend Developer
- [@Konzum59](https://github.com/Konzum59) - Frontend Developer

## Technologies used

- Next.js
- React.js
- TypeScript
- Tailwind CSS
- Coolify

## Links

[![docs.solvro.pl](https://i.imgur.com/fuV0gra.png)](https://docs.solvro.pl)

# Development

### 1. Clone the Repository

```bash
git clone https://github.com/Solvro/web-juwenalia.git
```

### 2. Install Dependencies

```bash
cd web-juwenalia
npm install
```

### 3. Configure Environment

Create an `.env` file with the following content:

```env
FACEBOOK_ACCESS_TOKEN=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
```

### 4. Run the Project

```bash
npm run dev
```

### 5. View the Application

Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Working with git

### Github Solvro Handbook

https://docs.solvro.pl/guides/github

### SSH

If you are a Windows, follow this [tutorial](https://www.youtube.com/watch?v=vExsOTgIOGw) to connect via SSH

### Building a new feature

1. Checkout and update main branch

```bash
   git checkout main
   git pull origin main
   git fetch
```

2. Create new feature branch

```bash
   git checkout -b WEB-x_my_feature_branch
```

> x - stands for issue number; it is going to checkout and create new branch name WEB-x_my_feature_branch

3. Commit your changes:

```bash
   git add .
   git commit -m "<description>"
```

4. Push to remote:

```bash
   git push origin WEB-x_my_feature_branch
```

5. Create a Pull Request on GitHub and wait for a review

### ⚠️ Important ⚠️

- Do not push directly to main branch!
- Please remember to commit before checking out to a different branch
- Clean up after a successful merge

  ```bash
  git branch -d WEB-x_my_feature_branch
  git push origin --delete WEB-x_my_feature_branch
  ```

## Contact

For questions or suggestions, please reach out to us:

- ✉️ Email: <kn.solvro@pwr.edu.pl>
- 🌐 Website: [solvro.pwr.edu.pl](https://solvro.pwr.edu.pl/)
- 📘 Facebook: [KN Solvro](https://www.facebook.com/knsolvro)

---

Thank you for reading! Stay tuned for more updates!
