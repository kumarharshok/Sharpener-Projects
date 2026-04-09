const user = require('../model/user');

const addReview = async (req, res) => {
    const { company_name, pros, cons, rating } = req.body;
    try {
        await user.create({company_name, pros, cons, rating});

        console.log("Review Submitted Successfully!");
        res.status(200).send("Review Submitted Successfully!");
    } catch (error) {
        console.log("Error submitting review: ", error);
        res.status(500).send("Error submitting review");
    }
}
const getReviewsByCompanyName = async (req, res) => {
    const companyName = req.params.company_name;
    try {
        const reviews = await user.findAll({where: {company_name: companyName}});

        console.log("Reviews fetched successfully!");
        res.status(200).send(reviews);
    } catch (error) {
        console.log("Error fetching reviews: ", error);
        res.status(500).send("Error fetching reviews");
    }

}
module.exports = {
    addReview,
    getReviewsByCompanyName
}