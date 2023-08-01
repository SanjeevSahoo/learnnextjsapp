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

Top level layout is called Root Layout, they must contain html tag and body tag. if we donot create a root layout, nextjs
gives error if this file doesnot exists.

## LINKING

we can use the Link component or the useRouter hook to navigate to other routes

    import { useRouter } from 'next/navigation'

    <button type="button" onClick={() => router.push('/dashboard')}>
        Dashboard
    </button>

The above uses useRouter to programatically navigate to other routes at client side

## ALL COMPONENTS ARE SEVER COMPONENTS BY DEFAULT

All components are sever components by default unless specified with 'use client' at the top

## IN MEMORY CLIENT SIDE CACHE

Nextjs has an in memory client side cache which stores the previously fetched segments and any prefeched segments.

All routes with <Link> are prefeched when the link component comes into viewport.

For useRouter we can use the prefech method , this prefeches the

## ROUTE MAP

Certain folders can be mapped as route group using the (foldername) brackets. This can be used to group routes based on section, team without affecting the route path. route group are ignored in routes.

Each route group in the same route segment should not have same route path.

We can have different layout.js file for different route group in same segment

## DYNAMIC ROUTES

we can have dynamic routes by naming a found like [slug] withtin a route folder. That route can then be called like /blog/1 if we declare the route as /blog/[slug] inside the page.js we can access the slug part with params props inside the page.js.

    export default function Page({ params }: { params: { slug: string } }) {
        return <div>My Post: {params.slug}</div>
    }

The "generateStaticParams" function can be used in combination with dynamic route segments to statically generate routes at build time instead of on-demand at request time.

catch-all segments can be used to match any dynamic segement nested like /blog/[...slug], this will match /blog/clothes/jackets and/blog/clothes/jackets/small

    export const dynamicParams = true

this can be used to control what happens if user visits a segment that is not dynamically generated, if its true then its generates a dynamic segement at runtime else it gives a 404 page.

## STREAMING WITH SUSPENSE

we can wrap component inside <Suspense> that performs some asyncronous data fetching.

## ERROR HANDLING

error.js file can be used to create error boundaries, there can be nested error boundaries. error boundary becomes the child of layout component in same segment.

for layout errors create error.js in parent folder of layout.js.

for root layout global-error.js is used.

error.js should be a client component.

if an error occurs in the server components then the error is thrown to the nearest error.js
