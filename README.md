<h1 align="center">Telegram Application</h1>

## Table of contents
- [Description](#Description)
- [Project Structure](#Project)
- [Screenshoots](#Screenshoot)
- [Related Project](#Related-Project)
- [Contributing](#Contributing)
- [License](#License)


## Description
Telegram is a real-time chat application developed using several technologies including: PostgreSQL, Express.js, Web Sockets, and React.js. In this application, users can register and login to enter the Telegram chat page. First log in, then you will immediately enter the chat menu, where through this chat menu we can choose which user we will chat with. Through this feature, we can chat in real time with other people who both use this application. To do a CRUD profile, we can click the settings icon, then we will immediately go to the profile page. After that select the edit profile button to perform the CRUD profile process.

## Project Structure

```
|── Frontend
   |── public          # Assets default react
   |── src             # Project source code
       |── assets      # Assets image and styling in project
       |── Component   # Layouts
       |── pages       # pages
       |── redux       # Management state
       |── router      # Router application
   |── .env            # Setting env backend to connecting   
   |── .gitignore      # File name for not uploaded on github
   |── .README.md      # For Readme In github
```

## Screenshoots
<details>
  <summary>
    Before Start Chat
  </summary>
<img src="/Frontend/ss/chatBefore revisi.png" alt="before chat" />
</details>

<details>
  <summary>
    Page user chat 1
  </summary>
<img src="/Frontend/ss/lamanChat revisi.png" alt="Laman chat" />
</details>

<details>
  <summary>
    Page user chat 2
  </summary>
<img src="/Frontend/ss/lamanChat2 revisi.png" alt="Laman chat" />
</details>

<details>
  <summary>
    Profile page 1
  </summary>
<img src="/Frontend/ss/profile get revisi.png" alt="profile Page" />
</details>

<details>
  <summary>
    Profile page 2
  </summary>
<img src="/Frontend/ss/profile revisi.png" alt="profile Page" />
</details>

<details>
  <summary>
    Login Page
  </summary>
<img src="/Frontend/ss/login.png" alt="login" />
</details>

<details>
  <summary>
   Register
  </summary>
<img src="/Frontend/ss/register.png" alt="Register" />
</details>


## Related Project
RESTful API for this web application, clone this for development Telegram template.\
[backend-slicingtelegramtemplate](https://github.com/taufikrmdhan/backend_chatTelegram)
<br/>
[deployement-telegramApp](https://telegram-app-pi.vercel.app/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Run Project
Install package : npm i

Run Project : npm start
