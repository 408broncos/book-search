# book-search

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| React| [https://stackoverflow.com/questions/45367298/could-not-proxy-request-pusher-auth-from-localhost3000-to-http-localhost500](https://stackoverflow.com/questions/45367298/could-not-proxy-request-pusher-auth-from-localhost3000-to-http-localhost500) 
| React| [https://www.w3schools.com/react/react_getstarted.asp](https://www.w3schools.com/react/react_getstarted.asp) 


## Description 
In this project I was tasked with creating a functional book search engine where a user can make an account and look up books with the ability to add and delete them from their account. With the given starter code we already had a functioning app but with no real functionality other than searching up a book. That is where I needed to add the functionalities.

## Markdown




https://github.com/408broncos/book-search/assets/126821868/23ec413a-f4e0-496c-aa3a-972ceb6680ab





## Code Examples

Here I will be showing an example of a section I was stuck on but eventually discovered the solution to:


```js
Function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={<SearchBooks />} 
            />
            <Route 
              path="/saved" 
              element={<SavedBooks />} 
            />
            <Route 
              path="*" 
              element={<h1 className="display-2">Wrong page!</h1>} 
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>

```
In this code snippet I needed to route every action when a user signs up or logs in so that it is routed to the main page. What I had initially used to route my actions was ```switch``` and had called it with my react-router-dom extension. However, switch is not used in the updated version so that gave me enough information to then switch over to using ```Routes```.

## Usage 
For usages there was a lot of installs I had to make for this app to function properly which you can see in my rooted package.json file.As far as what I thought to be extremely helpful was asking a lot of questions to askbcs they have been so extremely helpful with everything and more so than chatgbt. I also found that looking up every error i ran into and putting it into google became very helpful as well.


## Learning Points
As far as learning points go I was extremely frustrated using heroku, I did not stop getting every error possible and even talking with an Askbcs tutor they were not even able to locate the issue as well. After running into those roadblocks overcoming that frustration and finding an alternative to showcase my work was something I learned through this assignment.


## Author Info

### Jordan Cardenas 
* [LinkedIn](https://www.linkedin.com/in/jordan-cardenas-87a58520b/)
* [Github](https://github.com/408broncos)

© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
