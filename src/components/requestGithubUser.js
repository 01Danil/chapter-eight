/*
export async function requestGithubUser(githubLogin) {
  try {
    const response = await fetch(`https://api.github.com/users/${githubLogin}`);
    const userData = await response.json();
    console.log(userData);
  } catch (error) {
    console.log(error);
  }
}
*/

/*
fetch("/create/user", {
  method: "POST",
  body: JSON.stringify({ username, password, bio }),
});
*/

/*
// Загрузка файлов с помощью функции fetch
const formData = new FprmData();
formData.append("username", "moontahoe");
formData.append("fullname", "Alex Banks");
formData.append("avatar", imgFile);

fetch("/create/user", {
	method: "POST",
	body: formData
})
*/

/*
//Авторизованные запросы
fetch(`https://api.github.com/users/${login}`, {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
*/
