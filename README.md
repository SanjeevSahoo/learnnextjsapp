## NEXTJS SPECIAL FILES

These special files have a special purpose in next js. they override any such similar files declared in parent segment. If we dont declare any such files in nested segment below this segment then this is used for all the segments below.

    page.js - each route segment should have this file only then that segment will work as the route.

    layout.js - this would be the common layout which doesnot rerender when sibling route are loaded

    loading.js - this is a custom loading ui that can be used when some component is being loaded

    not-found.js - we can customize the not found page, nextjs shows a default page

    error.js - creates an error boundary for that segment and shows a fallback UI

    template.js - rerendering layout similar to layout.js

We can create components that can colocate with these files but they wont be a route, only the folder with a page.js/page.tsx file is considered as route.

## LAYOUTS

Top level layout is called Root Layout, they must contain html tag. if we donot create a root layout, nextjs automatically creates a Root Layout during build time.
