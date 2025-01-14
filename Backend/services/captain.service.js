const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({ firstname, lastname, email, password, color, plate, capacity, vehicleType }) => {
    // Validate required fields
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        const error = new Error('All fields are required');
        error.statusCode = 400;
        throw error;
    }

    // Create the captain
    const captain = await captainModel.create({
        fullname: { firstname, lastname },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        },
    });

    return captain;
};
