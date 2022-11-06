# Pastebin Clone 
This project is a simplified clone of pastebin.com, it allows you to save text, code online to share it with a unique url for free. Very useful to send code quickly without going through an email for example.

## Built Using T3-stack
* React ( Next JS )
* Typescript
* tRPC
* Tailwind 
* Prisma
* MySQL

## Demo

![Pasteclone Image](http://image.noelshack.com/fichiers/2022/44/7/1667756732-imgpasteclone.png)
![Pasteclone Image Note](http://image.noelshack.com/fichiers/2022/44/7/1667757114-pasteclonenote.png)

## Deployment

To deploy this project run

```bash
  npm install
```
then create your database MySQL, create .env for DATABASE_URL var, run

```bash
  npx prisma db push 
```
if everything working fine with prisma just run

```bash
  npm run dev 
```
