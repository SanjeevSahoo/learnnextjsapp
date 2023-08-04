import { API_BASE_URL } from "../constants";

async function getAllUsers() {
  const res = await fetch(`${API_BASE_URL}users`);

  if (!res.ok) throw new Error("failed to fetch all user data");

  return res.json();
}

async function getUserById(userId: string) {
  const res = await fetch(`${API_BASE_URL}users/${userId}`);

  if (!res.ok) throw new Error("failed to fetch all user data");

  return res.json();
}

async function getPostsByUserId(userId: string) {
  const res = await fetch(`${API_BASE_URL}posts/${userId}`);

  if (!res.ok) throw new Error("failed to fetch user all post data");

  return res.json();
}

export { getAllUsers, getUserById, getPostsByUserId };
