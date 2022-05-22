# home24

Technologies used:
React, Emotion.js with Syled, Apollo Client,  Jest and React testing Library for writing test cases.

#### UI Changes:

![image](https://user-images.githubusercontent.com/24535674/169700545-63fb41d4-662a-4018-aef0-8a032f82b2d0.png)

1. I am using Intersection observer API so that we can **lazy load** the images on scroll. As you can see in below snapshot the Images are being rendered on the UI as users scroll.
![image](https://user-images.githubusercontent.com/24535674/169700951-530131f4-3179-4154-ae01-5ba3dfa3a04d.png)
 
2. Added Button Icons for** Add to Cart and Wishlist** in header.

4. Added Home24 logo for aesthetics.

5. For Product Lists added Card for Each product.

6. Added theming for project in emotion.d.ts.

7. Added Spinner while the data is being loaded.                                                                                                                  !

[image](https://user-images.githubusercontent.com/24535674/169700623-90040480-d4f3-434c-9521-6df778877ff3.png)

7. Added active class for list to show which category is slected. 

![image](https://user-images.githubusercontent.com/24535674/169700664-3b9d7b47-968c-4410-92a6-800d44171a1f.png)

8. User have the Ability to Add to Cart, Remove from cart, add to Wishlist and Remove from Wishlist and the count is shown as a small badge in header Icons.

![image](https://user-images.githubusercontent.com/24535674/169701098-244cd7ed-5740-483c-bb60-1eb85750fec0.png)

9. Users have Ability to do Client side search. I am using debouncing for the search so that it does not lead to extra re-renders.

![image](https://user-images.githubusercontent.com/24535674/169701220-cf3f1bc1-8b40-4181-8617-ea58637fd0f3.png)


##### Code Changes and Directory Structure

1. In index.tsx we can see all the wrappers for the APP.
  #### Error Boundary
  Using React error boundary so that users don't see a white screen and can be given a propper feedback. Write now I have just added a very basic feedback and can be     improved. Example If I close the BE server and close the error overlay which is visiblile only in dev mode. We can see our error boundry being rendered correctly.

  ![image](https://user-images.githubusercontent.com/24535674/169702000-68b25870-c7f1-4a88-bc11-a8437b6c46c9.png)

  #### Using react Router v6.
  The configuration for router can be found in App.tsx. As you can see there for any routes that do not match list of routes user will be redirected to localhost:3000.   So, if in browser url, you write something like http://localhost:3000/abc.xyz - you will be redirected to ]http://localhost:3000

