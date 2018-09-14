# VueJsPosterShop
>This project covers the basic features of Vue.js, templates syntax, directives, computed properties and components.

# Key Features Discussed so far
1. Single file components
2. Module bundler
3. Vue + Webpack
4. Framework comparisons
5. Imgur API
6. el property
7. Object data
8. Methods' object
9. Filters
10. v-for directive
11. v-on directive
12. v-model directive
13. v-bind directive
14. component

>As the project progresses, I will import a third party library called Vue-resource plugin to provide a service for making web requests >and usefull for making AJAX. However, this third party library is no longer part of the official recommendation since it is not really >necessary for Vue, unlike routing and state-management, ajax is not a problem domain that requires deep integration with Vue core. A >pure 3rd-party solution can solve the problem equally well in most cases. Therefore, Axios is much more preferred, which is the most >popular HTTP client library, that covers almost everything vue-resource provides with a very similar API.

>With Vue-resource, it can access the API by going this.$HTTP. While in Axios it can be set to Vue.prototype.$http = axios.

# Remaining items to complete the Vue.js Poster Store
	                                 
- [ ] AJAX call for products
- [ ] Building the Product list	   
- [ ] Enhancing the shopping cart
- [ ] Scroll loading products



Installation

1. Install this code on your local system

 - Fork this repository (click 'Fork' button in top right corner)

 - Clone the forked repository on your local file system

 - cd /path/to/install/location

 - git clone https://github.com/[your_username]/vuejs-poster-shop.git
> Change directory into the local clone of the repository

 - cd vuejs-poster-shop

Install dependencies

 - npm install

Start project

 - npm run start

>Your site will be available at localhost:[PORT] where PORT is whatever value is set in your .env file.

