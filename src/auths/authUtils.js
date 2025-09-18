export default function isAuth() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    return false;
  } else {
    return user;
  }
}

export function logout() {
  localStorage.removeItem("user");
}
