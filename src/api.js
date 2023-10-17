import axios from "axios";

const baseUrl = "https://be-nc-games-jnf9.onrender.com";
const instance = axios.create({ baseURL: baseUrl });

export const getReviews = async () => {
	const reviewData = await instance.get('/api/reviews');
	return reviewData.data;
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

export const getReviewsByCategory = async (category) => {
	const categoryReviewsData = await instance.get('/api/reviews', {
		params: {
			category: category
		}
	});
	return categoryReviewsData.data;
}
