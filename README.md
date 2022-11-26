<h1 align="center">Telegram Application</h1>

## Table of contents
- [Description](#Description)
- [Project Structure](#Project)
- [Screenshoots](#Screenshoot)
- [Related Project](#Related-Project)
- [Contributing](#Contributing)
- [License](#License)


## Description
Telegram adalah sebuah aplikasi chat realtime yang dikembangkan menggunakan beberapa teknologi diantaranya : PostgreSQL, Express.js, Web Socket, dan React.js. Pada aplikasi ini, user bisa register dan login untuk masuk ke halaman chat telegram. Pertama login , nanti akan langsung masuk ke menu chat, yang dimana melalui menu chat ini kita bisa memilih user mana yang akan kita chat. Melalui fitur ini, kita bisa chat secara realtime dengan orang lain yang sama-sama menggunakana app ini. Untuk melakukan CRUD profile, kita bisa klik icon setting, lalu nanti akan langsung masuk ke halaman profile. Setelah itu pilih button edit profile untuk melakukan proses CRUD profile.

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Run Project
Install package : npm i

Run Project : npm start