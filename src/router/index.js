import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import Seller from '@/components/Seller'
import Profile from '@/components/Profile'
import Favourites from '@/components/Favourites'
import Categories from '@/components/Categories'
import Product from '@/components/Product'
import Products from '@/components/Products'
import Checkout from '@/components/Checkout'
import ImageUpload from '@/components/ImageUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: Product
    },
    {
      path: '/products/:cat',
      name: 'Products',
      component: Products
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/imageupload',
      name: 'ImageUpload',
      component: ImageUpload
    }

  ]
})
