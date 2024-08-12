const router = require('express').Router();
const Banner = require('../models/banner-schema');
const bannerSchemaValidate = require('../validation/bannerValidation');
const { query, body, param, matchedData, validationResult, checkSchema } = require('express-validator');

router.get('/', async (req, res) => {
    try {
        const banner = await Banner.find();
        if (!banner) {
            return res.status(404).json({ message: "banner not found" });
        }
        res.status(200).json(banner);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

router.post('/', checkSchema(bannerSchemaValidate), async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { description, timer, isVisible } = req.body;

    try {
        // First checking if there is any banner already exists or not
        let banner = await Banner.findOne();

        // If not, then creating a new banner
        if (!banner) {
            banner = new Banner({
                description,
                timer,
                isVisible
            });
        }
        // If banner already exists, then updating the banner
        else {
            banner.description = description;
            banner.timer = timer;
            banner.isVisible = isVisible;
        }
        await banner.save();
        res.json(banner);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
    }
});

module.exports = router;