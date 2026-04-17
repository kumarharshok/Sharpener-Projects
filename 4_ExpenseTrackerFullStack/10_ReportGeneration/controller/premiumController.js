const user = require('../model/user')
const buyPremium = async (req, res) => {
    const userId = req.params.id;

    try {
      await user.update({isPrimeuser: true}, {where: {id: userId}});
      const updateUser = await user.findOne({where: {id: userId}});

    res.status(200).json({message: "You are now a prime user!", user: updateUser});  
    } catch(error) {
        res.status(400).json({message: "Somethig went wrong!"})
    }

}

module.exports = {
    buyPremium
}