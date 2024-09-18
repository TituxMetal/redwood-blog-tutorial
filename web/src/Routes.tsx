// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { PrivateSet, Route, Router, Set } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'
import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path='/login' page={LoginPage} name='login' />
      <Route path='/signup' page={SignupPage} name='signup' />
      <Route path='/forgot-password' page={ForgotPasswordPage} name='forgotPassword' />
      <Route path='/reset-password' page={ResetPasswordPage} name='resetPassword' />
      <PrivateSet unauthenticated='login' roles={['admin']}>
        <Set wrap={ScaffoldLayout} title='Posts' titleTo='posts' buttonLabel='New Post' buttonTo='newPost'>
          <Route path='/admin/posts/new' page={PostNewPostPage} name='newPost' />
          <Route path='/admin/posts/{id}/edit' page={PostEditPostPage} name='editPost' />
          <Route path='/admin/posts/{id}' page={PostPostPage} name='post' />
          <Route path='/admin/posts' page={PostPostsPage} name='posts' />
        </Set>
      </PrivateSet>
      <Set wrap={BlogLayout}>
        <Route path='/about' page={AboutPage} name='about' />
        <Route path='/contact' page={ContactPage} name='contact' />
        <Route path='/' page={HomePage} name='home' />
        <Route path='/article/{id:String}' page={ArticlePage} name='article' />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
