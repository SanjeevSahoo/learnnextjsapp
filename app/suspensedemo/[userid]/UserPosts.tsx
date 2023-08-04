type Props = {
  promise: Promise<{ posts: IPost[] }>;
};

async function UserPosts({ promise }: Props) {
  const { posts } = await promise;
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <p>{post.postDesc}</p>
      </article>
    );
  });

  return content;
}

export default UserPosts;
