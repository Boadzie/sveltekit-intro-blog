/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?limit=10');
	const posts = res.json();
	return {
		posts
	};
}
