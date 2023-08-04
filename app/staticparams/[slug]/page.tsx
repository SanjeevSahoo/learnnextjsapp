export default function Page({ params }: { params: { slug: string } }) {
  return <div>My user: {params.slug}</div>;
}

export async function generateStaticParams() {
  const userData = await fetch("http://localhost:3000/api/users")
    .then((res) => res.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  return userData.users.map((user: any) => ({
    slug: user.username.toString().toLowerCase(),
  }));
}

export const dynamicParams = false;
