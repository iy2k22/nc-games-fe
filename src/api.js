import axios from "axios";

const baseUrl = "https://be-nc-games-jnf9.onrender.com";
const instance = axios.create({ baseURL: baseUrl });

export const getReviews = async (params) => {
	try {
		const reviewData = await instance.get('/api/reviews', { params: params });
		return reviewData.data;
	} catch (e) {
		console.log(e);
		return [];
	}
}

export const getReview = async (review_id) => {
	const reviewData = await instance.get(`/api/reviews/${review_id}`);
	return reviewData.data;
}

export const getComments = async (review_id) => {
	const commentsData = await instance.get(`/api/reviews/${review_id}/comments`);
	return commentsData.data;
}

export const getCategories = async () => {
	const categoryData = await instance.get('/api/categories');
	return categoryData.data;
}

export const patchReview = async (review_id, negative) => {
	try {
		await instance.patch(`/api/reviews/${review_id}`, {
			inc_votes: negative ? -1 : 1
		});
		return true;
	} catch (e) {
		return false;
	}
}

export const postComment = async (review_id, comment) => {
	try {
		await instance.post(`/api/reviews/${review_id}/comments`, comment);
		return true;
	} catch (e) {
		return false;
	}
}

export const deleteComment = async (comment_id) => {
	try {
		await instance.delete(`/api/comments/${comment_id}`);
		return true;
	} catch (e) {
		return false;
	}
}