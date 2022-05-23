# home24

Setup -> 
In both client and server folder:
npm install
npm start

#### UI Changes:

![image](https://user-images.githubusercontent.com/24535674/169700545-63fb41d4-662a-4018-aef0-8a032f82b2d0.png)

1. I am using Intersection observer API so that we can **lazy load** the images on scroll. As you can see in below snapshot the Images are being rendered on the UI as users scroll.
![image](https://user-images.githubusercontent.com/24535674/169700951-530131f4-3179-4154-ae01-5ba3dfa3a04d.png)
 
2. Added Button Icons for** Add to Cart and Wishlist** in header.

4. Added Home24 logo for aesthetics.

5. For Product Lists added Card for Each product.

6. Added theming for project in emotion.d.ts.

7. Added Spinner while the data is being loaded.                                                                                                                  !
![image](https://user-images.githubusercontent.com/24535674/169704617-342f6e07-5f1b-4240-98cc-b40973418286.png)


7. Added active class for list to show which category is slected. 

![image](https://user-images.githubusercontent.com/24535674/169700664-3b9d7b47-968c-4410-92a6-800d44171a1f.png)

8. User have the Ability to Add to Cart, Remove from cart, add to Wishlist and Remove from Wishlist and the count is shown as a small badge in header Icons.

![image](https://user-images.githubusercontent.com/24535674/169701098-244cd7ed-5740-483c-bb60-1eb85750fec0.png)

9. Users have Ability to do Client side search. I am using debouncing for the search so that it does not lead to extra re-renders.

![image](https://user-images.githubusercontent.com/24535674/169701220-cf3f1bc1-8b40-4181-8617-ea58637fd0f3.png)

10. Also one small observation was that the article Name are not aligned properly in cards as you can see below Image

![image](https://user-images.githubusercontent.com/24535674/169706630-e64fa05f-04b1-482a-aca0-231ce956082c.png)

This has been fixed by adding flex:1 to the name element. The fix can be seen in below Image

![image](https://user-images.githubusercontent.com/24535674/169706674-d92a2029-fcfb-4f06-9a9f-b538f52d4412.png)



##### Code Changes and Directory Structure

1. In index.tsx we can see all the wrappers for the APP.
  #### Error Boundary
  Using React error boundary so that users don't see a white screen and can be given a propper feedback. Write now I have just added a very basic feedback and can be     improved. Example If I close the BE server and close the error overlay which is visiblile only in dev mode. We can see our error boundry being rendered correctly.

  ![image](https://user-images.githubusercontent.com/24535674/169702000-68b25870-c7f1-4a88-bc11-a8437b6c46c9.png)

  #### Using react Router v6.
  The configuration for router can be found in App.tsx. As you can see there for any routes that do not match list of routes user will be redirected to localhost:3000.   So, if in browser url, you write something like http://localhost:3000/abc.xyz - you will be redirected to ]http://localhost:3000. With the help of react router we     can easily identify the parts that will change on routing hence making development scalable easily.
  
  #### Application state.
  I am using React's Context for setting and getting the application state. As you can see in Context.tsx I am exporting the Context provider. This context provider is   using useReducer for managing the reducers and state. To make this App context more reusable I have created a hook (useAppContext.ts) which can be used to import       functions like dispach as well to import state in a particular component. 
  
  #### Component Folder Structure
  As you can see productList is added to Container now. So basically container is basically a page/route of an applicatio. Container is basically a wrapper for various   components. Our container component loads the data and passes it to the children component. As you can see in containers/index.tsx (which is our productlist.tsx),     the data is loaded by using our useAppContext hook and passed to sidebar and Article components. This way our container becomes a single source for managing state of   a particlar page rather than initalizing context state to each component.
  
  Also, our graphql API was not expecting any variables , so I changed the graphql query to accept variables. As, you can see in containers/index.tsx, loadArticles       function, I am passing Id to load sofa and couces. So if you click on any sidebar menu Links, you can see that different articles for sofas and couches is loaded for   you. Since I was not able to find Id's of other links, this I did just to show how we can pass variables to our graphql query.
  
  Other Components: All these files are inside components directory
  1. ArticleCard - This component basically represents each card containing and Image we see in our UI. The Image is lazy loaded on scroll. This component is also       responsible for Adding/Removing Items to Cart and Adding/Removig from wishlist.
  2. Articles - This component is basically a wrapper for ArticleCards. This component is responsible for rendering all the article cards.
  3. Button - This is the component used for laoding diffrent buttons that we have in our app. Example Add to card, cart and wishlist buttons (on top header).
  4. Fallback - This is the Error fallback component used by error boundary.
  5. Footer - Footer Component.
  6. Header Component - It contains Input and cart and wishlist buttons.
  7. Input Component - This component is used for rendering HTML input element.
  8. LazyImage - This component is used for lazily loading images and uses Intersection observer API.
  9. Sidebar - The sidebar component.
  10. Spinner - To show the loading state of a component.

  Reducers:
  Products.reducer.ts -> For storing the products Info
  User.reducer.ts -> For storing the user info like widhlist and cart.
  
  I am combining reducers in combinereducer function used in context.tsx.
  
  Action.constants.ts -> For handling the action types and interface and Storing action consants.
  
  context.utils.ts -> A function for combinig the reducers. We can store other functions there as well.
  
  hooks/useAppContext.ts -> This hook is basically used for storing context, handling async dispatch functions. It returns the functions and the appcontext state and     dispatch function.
  
  Queries/getArticleQuery.ts -> For storing queries. As you can see I have added code to include variables in queries.
  
  Shared/theme.ts -> Used for storing Emotion theme.
  
  utils/utils.const.ts -> For storing constants. It stores the constant variable for fetching initial data.
  
#### Test cases
 I have written testcases for sidebar.tsx and users.reducer.tsx
