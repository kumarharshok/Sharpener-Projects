const SibApiV3Sdk = require('sib-api-v3-sdk');

const sendMail = async (toEmail, resetLink) => {
    try {
        const client = SibApiV3Sdk.ApiClient.instance;

        const apiKey = client.authentications['api-key'];
        apiKey.apiKey = process.env.BREVO_API_KEY;

        const tranEmailApi = new SibApiV3Sdk.TransactionalEmailsApi();

        const sender = {
            email: process.env.EMAIL
        };

        const receivers = [
            {
                email: toEmail
            }
        ];

        console.log("Inside sendMail function");

        await tranEmailApi.sendTransacEmail({
            sender,
            to: receivers,
            subject: "Reset Your Password",
            htmlContent: `
                <h2>Password Reset</h2>
                <p>Click below link to reset your password:</p>
                <a href="${resetLink}">${resetLink}</a>
            `
        });

        console.log("Email sent successfully 🚀");

    } catch (error) {
        console.log("Email error ❌", error);
    }
};

module.exports = sendMail;