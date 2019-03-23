# simple-web-app

Vue.js + Tailwind CSS + NGINX + Docker 

### 1- Enviroment Prerequisites 

* macOS 
```
$ brew update
$ brew doctor
$ brew upgrade node  # update or install 
$ node -v            # command to validate version of node
v11.11.0 
$ npm install -g npm # update npm
$ npm -v
6.9.0
$ npm install -g @vue/cli 
OR 
$ npm update -g @vue/cli # is installed
$ vue --version
3.5.1

```

### 2- Project Vue Create  

```
$ vue create simple-web-app # choose default values 
$ cd simple-web-app
$ npm run serve # validate vue page is running 
 
  App running at:
  - Local:   http://localhost:8080/ 
$ npm install vuex --save  
$ npm install tailwindcss --save-dev
$ npm install moment --save
$ npx tailwind init tailwind.js
```
* Note : add this lines in App.vue 

```css
<style>

@tailwind preflight;
@tailwind components;
@tailwind utilities;

```
### 3-  Building Project + Tailwind CSS 

```
$ git clone https://github.com/afuentes/simple-web-app.git
$ cd simple-web-app
$ npm install
$ npm run server # validate vue page is running 
```

### Reference

See [Configuration Reference](https://cli.vuejs.org/config/).

See [Tailwind CSS Site](https://tailwindcss.com/).
