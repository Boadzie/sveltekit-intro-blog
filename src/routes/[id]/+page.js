export async function load({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}/`);
	const post = res.json();
	return {
		post
	};
}
