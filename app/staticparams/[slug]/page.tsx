export default function Page({ params }: { params: { slug: string } }) {
  return <div>My user: {params.slug}</div>;
}

export async function generateStaticParams() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );

  return users.map((user: any) => ({
    slug: user.username.toString().toLowerCase(),
  }));
}

export const dynamicParams = false;
